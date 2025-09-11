import type { NextApiRequest, NextApiResponse } from "next";
// Server-side save using firebase-admin when configured

// Correct path to client lib (not used here but kept for parity)
// import { initFirebase } from '../../lib/firebaseClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const user = req.body;

  // Expect a service account JSON in env (stringified) or path to service account
  const svc = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!svc) {
    console.warn(
      "FIREBASE_SERVICE_ACCOUNT not configured. Cannot save user server-side."
    );
    res
      .status(500)
      .json({
        ok: false,
        message: "Server not configured. Set FIREBASE_SERVICE_ACCOUNT.",
      });
    return;
  }

  try {
    // Lazy-load admin to keep dev builds faster
    const admin = await import("firebase-admin");

    if (!admin.apps.length) {
      let credObj: Record<string, unknown> | null = null;
      try {
        // svc may be JSON string or a path to a JSON file
        if (svc.trim().startsWith("{")) {
          credObj = JSON.parse(svc);
        } else {
          // attempt to import the JSON file dynamically
          // dynamic import returns a namespace, prefer default if present
          // this avoids using require()
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const mod = await import(svc);
          credObj = (mod && (mod.default || mod)) as Record<string, unknown>;
        }
      } catch (e) {
        console.error("Failed to parse service account:", e);
        res
          .status(500)
          .json({ ok: false, message: "Invalid FIREBASE_SERVICE_ACCOUNT" });
        return;
      }

      // cert expects a ServiceAccount type; cast from unknown safely here
      admin.initializeApp({
        credential: admin.credential.cert(
          credObj as unknown as Record<string, unknown>
        ),
      });
    }

    const db = admin.firestore();
    const uid = (user && (user.uid || user.id || user.email)) || null;
    if (!uid) {
      res.status(400).json({ ok: false, message: "User id/email missing" });
      return;
    }

    if (user?.role === "caregiver") {
      // Save caregiver profile
      await db
        .collection("caregivers")
        .doc(String(uid))
        .set(user, { merge: true });
    } else {
      // Default: save to users
      await db.collection("users").doc(String(uid)).set(user, { merge: true });
    }

    res.status(200).json({ ok: true });
    return;
  } catch (err) {
    console.error("Failed saving user", err);
    res.status(500).json({ ok: false, message: "Failed to save user" });
    return;
  }
}
