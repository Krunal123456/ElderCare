"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { initFirebase, db } from "@/lib/firebaseClient";
import { doc, getDoc } from "firebase/firestore";

export default function CaregiverDashboard() {
  type CaregiverUser = {
    name?: string;
    email?: string;
    photoURL?: string;
    city?: string;
    status?: string;
    tier?: string;
    certificateUrl?: string;
    policeDoc?: string;
    earnings?: number;
  };
  type Job = {
    clientName?: string;
    service?: string;
    status?: string;
  };
  const [user, setUser] = useState<CaregiverUser | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchUser() {
      initFirebase();
      // Assume user is already authenticated
      const { getAuth } = await import("firebase/auth");
      const a = getAuth();
      const currentUser = a.currentUser;
      if (!currentUser) return;
      const userDoc = await getDoc(doc(db(), "caregivers", currentUser.uid));
      setUser(userDoc.exists() ? userDoc.data() : null);
      // Fetch jobs for this caregiver
      // TODO: Replace with actual query for caregiver's jobs
      setJobs([]);
    }
    fetchUser();
  }, []);

  // (No code outside the function)

  if (!user) return <div className="p-8">Loading dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {user.name || user.email}
      </h1>
      <div className="mb-6 flex gap-6 items-center">
        {user.photoURL && (
          <Image
            src={user.photoURL}
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full border"
            style={{ objectFit: "cover" }}
            priority
          />
        )}
        <div>
          <div className="font-semibold">Email: {user.email}</div>
          <div>City: {user.city || "-"}</div>
          <div>Status: {user.status || "pending"}</div>
          <div>Tier: {user.tier || "-"}</div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Assigned Jobs</h2>
        {jobs.length === 0 ? (
          <div className="text-gray-500">No jobs assigned yet.</div>
        ) : (
          <ul className="space-y-2">
            {jobs.map((j, i) => (
              <li key={i} className="bg-white rounded shadow p-4">
                <div>Client: {j.clientName}</div>
                <div>Service: {j.service}</div>
                <div>Status: {j.status}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Earnings</h2>
        <div className="text-lg font-bold">₹{user.earnings || 0}</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Verification</h2>
        <div>Status: {user.status || "pending"}</div>
        {user.certificateUrl && (
          <a
            href={user.certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            View Certificate
          </a>
        )}
        {user.policeDoc && (
          <a
            href={user.policeDoc}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline ml-4"
          >
            View Police Verification
          </a>
        )}
      </div>
    </div>
  );
}
// ...existing code...
