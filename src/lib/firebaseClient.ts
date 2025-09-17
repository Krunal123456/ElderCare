import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import type { DocumentData } from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// Using provided project config (elder-care-90320)
const firebaseConfig = {
  apiKey: "AIzaSyBNQI1mYq7yGbGPiM_HdKi-bKLV2biTFzU",
  authDomain: "elder-care-90320.firebaseapp.com",
  projectId: "elder-care-90320",
  storageBucket: "elder-care-90320.firebasestorage.app",
  messagingSenderId: "324968830002",
  appId: "1:324968830002:web:2b6f50bea98909cb20582b",
};

export function initFirebase() {
  try {
    if (!getApps().length) {
      initializeApp(firebaseConfig);
    } else {
      getApp();
    }
  } catch {
    // ignore
  }
}

export const auth = () => getAuth();
export const provider = new GoogleAuthProvider();
export const db = () => getFirestore();
export const storage = () => getStorage();

/**
 * Upload a File or Blob to Firebase Storage and return the download URL.
 * onProgress receives integer percent updates.
 */
export async function uploadFile(
  file: File | Blob,
  path?: string,
  onProgress?: (percent: number) => void
) {
  try {
    initFirebase();
    // ensure we use the initialized app instance
    const app = getApp();
    const s = getStorage(app);
    const name =
      file instanceof File && file.name ? file.name : `file_${Date.now()}`;
    const filePath = path || `uploads/${Date.now()}_${name}`;
    const r = storageRef(s, filePath);
    const metadata = {
      contentType:
        file instanceof File && file.type
          ? file.type
          : "application/octet-stream",
    };
    const task = uploadBytesResumable(r, file as Blob, metadata);
    return await new Promise<string>((resolve, reject) => {
      task.on(
        "state_changed",
        (snapshot) => {
          try {
            const pct = snapshot.totalBytes
              ? Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
              : 0;
            onProgress?.(pct);
          } catch {
            // ignore progress calc errors
          }
        },
        (err) => {
          console.error("upload task error", err);
          reject(err);
        },
        async () => {
          const url = await getDownloadURL(r);
          resolve(url);
        }
      );
    });
  } catch (err) {
    console.error("Failed to upload (outer)", err);
    // normalize errors with message
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error(String(err));
  }
}

export async function signInWithGoogle() {
  const a = auth();
  return signInWithPopup(a, provider);
}

// For mobile browsers, redirect is more reliable than popup. This helper
// automatically picks redirect on mobile user agents and popup on desktop.
export async function signInWithGoogleAuto() {
  // guard for server
  if (typeof window !== "undefined") {
    const ua = navigator.userAgent || "";
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
    const a = auth();
    if (isMobile) {
      // triggers a full-page redirect to Google's OAuth consent
      return signInWithRedirect(a, provider);
    }
    return signInWithPopup(a, provider);
  }
  // fallback to popup if somehow called on server
  return signInWithGoogle();
}

// After a redirect sign-in, call this on page load to retrieve the result.
export async function getRedirectSignInResult() {
  try {
    const a = auth();
    const res = await getRedirectResult(a);
    return res?.user ?? null;
  } catch {
    // no result or an error — return null
    return null;
  }
}

export async function registerWithEmail(email: string, password: string) {
  const a = auth();
  return createUserWithEmailAndPassword(a, email, password);
}

// Ensure a user is signed in. Some environments may not have currentUser populated
// immediately after registration; this helper will sign-in with email/password
// if needed and return the signed-in user.
export async function ensureSignedIn(email: string, password: string) {
  const a = auth();
  if (a.currentUser) return a.currentUser;
  // Fallback: attempt sign-in with credentials
  const cred = await signInWithEmailAndPassword(a, email, password);
  return cred.user;
}

export async function saveBooking(
  bookingId: string,
  data: Record<string, unknown>
) {
  try {
    initFirebase();
    const database = db();
    await setDoc(doc(database, "bookings", bookingId), data as DocumentData, {
      merge: true,
    });
    return { ok: true };
  } catch (err) {
    console.error("Failed to save booking", err);
    return { ok: false, error: err };
  }
}
