import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const authHeader = req.headers.authorization || "";
  const token = authHeader.replace("Bearer ", "");
  if (!token) {
    res.status(401).json({ ok: false, message: "Missing auth token" });
    return;
  }

  const svc = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!svc) {
    res.status(500).json({ ok: false, message: "Server not configured" });
    return;
  }

  try {
    const admin = await import("firebase-admin");
    if (!admin.apps.length) {
      let credObj: Record<string, unknown> | null = null;
      if (svc.trim().startsWith("{")) {
        credObj = JSON.parse(svc);
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const mod = await import(svc);
        credObj = (mod && (mod.default || mod)) as Record<string, unknown>;
      }
      admin.initializeApp({
        credential: admin.credential.cert(credObj as Record<string, unknown>),
      });
    }

    const idToken = token;
    const decoded = await admin.auth().verifyIdToken(idToken);
    if (!decoded || !decoded.email) {
      res.status(401).json({ ok: false, message: "Invalid token" });
      return;
    }
    const adminEmail = decoded.email as string;
    if (adminEmail !== "krunalkishortote@gmail.com") {
      res.status(403).json({ ok: false, message: "Not authorized" });
      return;
    }

    const { id, status } = req.body;
    if (!id || !status) {
      res.status(400).json({ ok: false, message: "Missing id or status" });
      return;
    }

    const db = admin.firestore();
    await db
      .collection("caregivers")
      .doc(String(id))
      .set({ status }, { merge: true });
    res.status(200).json({ ok: true });
    return;
  } catch (e: unknown) {
    console.error(e);
    res.status(500).json({ ok: false, message: "Server error" });
    return;
  }
}
