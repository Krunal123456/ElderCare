"use client";
import React, { useState, useEffect } from "react";
import { initFirebase } from "../../../lib/firebaseClient";

export default function CaregiverSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
  });
  useEffect(() => {
    initFirebase();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      // in a real app you'd validate more and possibly create auth credentials
      const uid = form.email;
      const payload = {
        ...form,
        uid,
        role: "caregiver",
        createdAt: new Date().toISOString(),
      };
      await fetch("/api/saveUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      window.location.href = "/caregiver/signup/thanks";
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold mb-4">Caregiver Signup</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border px-3 py-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border px-3 py-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="border px-3 py-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Skills / Bio</label>
          <textarea
            value={form.skills}
            onChange={(e) => setForm({ ...form, skills: e.target.value })}
            className="border px-3 py-2 w-full rounded"
          />
        </div>
        <div>
          <button type="submit" className="btn-primary px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
