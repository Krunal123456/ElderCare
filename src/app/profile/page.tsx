"use client";
import { useEffect, useState } from "react";
import { initFirebase, db } from "@/lib/firebaseClient";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, User } from "firebase/auth";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    initFirebase();
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(async (u) => {
      if (u) {
        setUser(u);
        try {
          // Try to get user details from 'users' collection
          const userDoc = await getDoc(doc(db(), "users", u.uid));
          if (userDoc.exists()) {
            setProfile(userDoc.data());
          } else {
            // Try caregivers collection
            const cgDoc = await getDoc(doc(db(), "caregivers", u.uid));
            if (cgDoc.exists()) {
              setProfile(cgDoc.data());
            } else {
              setError("No user details found.");
            }
          }
        } catch {
          setError("Failed to fetch user details.");
        }
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
  if (!user) return <div className="p-8 text-center">Not signed in.</div>;

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="mb-4">
        <strong>Email:</strong> {user.email}
      </div>
      {profile ? (
        <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
          {JSON.stringify(profile, null, 2)}
        </pre>
      ) : (
        <div>No additional profile data found.</div>
      )}
    </div>
  );
}
