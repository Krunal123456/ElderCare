"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CAREGIVERS, { Caregiver } from "../../../../public/caregivers";

export default function BookPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const caregiver: Caregiver | undefined = CAREGIVERS.find(
    (c) => c.id === params.id
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  if (!caregiver) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Caregiver not found</h2>
        </div>
      </div>
    );
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // For now just navigate to confirmation (pretend booking created)
    if (caregiver) {
      router.push(`/book/${caregiver.id}/confirmation`);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold mb-2">Book {caregiver.name}</h1>
        <p className="text-gray-600 mb-6">
          Location: {caregiver.location} • {caregiver.rating} ★
        </p>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Preferred Date & Time
            </label>
            <input
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">Rate</div>
              <div className="font-semibold">₹{caregiver.price}/hour</div>
            </div>
            <button type="submit" className="btn-primary">
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
