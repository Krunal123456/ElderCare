import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import type { DocumentData } from "firebase/firestore";

// Using provided project config (boardme-2ceb2)
const firebaseConfig = {
  apiKey: "AIzaSyCdrc9oeyBYQo4i7LQLFt9vLkS0rfNYA5o",
  authDomain: "boardme-2ceb2.firebaseapp.com",
  projectId: "boardme-2ceb2",
  storageBucket: "boardme-2ceb2.appspot.com",
  messagingSenderId: "880977423986",
  appId: "1:880977423986:web:b75c615e44361b88c21ceb",
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
