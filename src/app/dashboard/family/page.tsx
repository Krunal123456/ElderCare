"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { initFirebase, db } from "@/lib/firebaseClient";
import { doc, getDoc } from "firebase/firestore";

export default function FamilyDashboard() {
  type User = {
    name?: string;
    email?: string;
    photoURL?: string;
    city?: string;
    relationship?: string;
  };
  type Booking = {
    service?: string;
    status?: string;
  };
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    async function fetchUser() {
      initFirebase();
      // Assume user is already authenticated
      const { getAuth } = await import("firebase/auth");
      const a = getAuth();
      const currentUser = a.currentUser;
      if (!currentUser) return;
      const userDoc = await getDoc(doc(db(), "users", currentUser.uid));
      setUser(userDoc.exists() ? userDoc.data() : null);
      // Fetch bookings for this user
      // TODO: Replace with actual query for user's bookings
      setBookings([]);
    }
    fetchUser();
  }, []);

  if (!user) return <div className="p-8">Loading dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {user.name || user.email}
      </h1>
      <div className="mb-6 flex gap-6 items-center">
        {user.photoURL && (
          <div className="w-20 h-20 relative">
            <Image
              src={user.photoURL}
              alt="Profile"
              fill
              className="rounded-full border object-cover"
              sizes="80px"
            />
          </div>
        )}
        <div>
          <div className="font-semibold">Email: {user.email}</div>
          <div>City: {user.city || "-"}</div>
          <div>Relationship: {user.relationship || "-"}</div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Your Care Requests</h2>
        {bookings.length === 0 ? (
          <div className="text-gray-500">No care requests yet.</div>
        ) : (
          <ul className="space-y-2">
            {bookings.map((b, i) => (
              <li key={i} className="bg-white rounded shadow p-4">
                {/* Render booking details */}
                <div>Service: {b.service}</div>
                <div>Status: {b.status}</div>
              </li>
            ))}
          </ul>
        )}
        <button className="btn-primary mt-4">Book New Care Service</button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Support & Help</h2>
        <a href="/help-center" className="text-blue-600 underline">
          Visit Help Center
        </a>
      </div>
    </div>
  );
}
