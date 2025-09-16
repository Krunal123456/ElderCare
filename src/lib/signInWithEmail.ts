import { auth } from "./firebaseClient";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function signInWithEmail(email: string, password: string) {
  const a = auth();
  return signInWithEmailAndPassword(a, email, password);
}
