"use client";
// Image import removed (unused)
import PageShell from "../components/PageShell";

import {
  signInWithGoogleAuto,
  initFirebase,
  ensureSignedIn,
} from "../../lib/firebaseClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { User } from "firebase/auth";

export default function GetStarted() {
  // Family Member multi-step form
  function FamilyForm({ googleUser }: { googleUser: User | null }) {
    const router = useRouter();
    const [successMsg, setSuccessMsg] = useState<string | null>(null);
    // Navigation handlers removed (unused in this component)
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({
      firstName: googleUser?.displayName?.split(" ")[0] || "",
      lastName: googleUser?.displayName?.split(" ")[1] || "",
      email: googleUser?.email || "",
      photoURL: googleUser?.photoURL || "",
      phone: "",
      city: "",
      gender: "",
      address: "",
      emergencyContact: "",
      password: "",
      confirmPassword: "",
      patientName: "",
      patientAge: "",
      patientGender: "",
      relationshipWithPatient: "",
      reports: [] as File[],
    });
    const [reportFiles, setReportFiles] = useState<File[]>([]);
    // Prefill from Firestore draft if available
    useEffect(() => {
      async function fetchDraft() {
        if (!form.email) return;
        const { db } = await import("../../lib/firebaseClient");
        const { collection, query, where, getDocs } = await import(
          "firebase/firestore"
        );
        // Find draft by email (for users who haven't completed registration)
        const q = query(
          collection(db(), "users"),
          where("email", "==", form.email),
          where("draft", "==", true)
        );
        const snap = await getDocs(q);
        if (!snap.empty) {
          const data = snap.docs[0].data();
          setForm((prev) => ({ ...prev, ...data }));
          if (typeof data.step === "number") setStep(data.step);
        }
      }
      fetchDraft();
    }, [form.email]);

    // Autosave on form or step change
    useEffect(() => {
      async function saveDraft() {
        if (!form.email) return;
        const { db } = await import("../../lib/firebaseClient");
        const { collection, query, where, getDocs, setDoc, doc } = await import(
          "firebase/firestore"
        );
        // Find draft by email
          const q = query(
            collection(db(), "users"),
            where("email", "==", form.email),
            where("draft", "==", true)
          );
          const snap = await getDocs(q);
          const userDocId = snap.empty ? undefined : snap.docs[0].id;
          const userRef =
            userDocId !== undefined ? doc(db(), "users", userDocId) : doc(collection(db(), "users"));
        await setDoc(userRef, { ...form, step, draft: true }, { merge: true });
      }
      saveDraft();
    }, [form, step]);
    const [loading, setLoading] = useState(false);
    const cities = ["Mumbai", "Delhi NCR", "Bangalore", "Pune", "Other"];
    const genders = ["Male", "Female", "Other"];
    const relationships = [
      "Self",
      "Spouse",
      "Son",
      "Daughter",
      "Brother",
      "Sister",
      "Grandson",
      "Granddaughter",
      "Other",
    ];
    async function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      setLoading(true);
      try {
        // TODO: Add validation
        // Register user in Firebase Auth
        const { registerWithEmail } = await import("../../lib/firebaseClient");
        const userCred = await registerWithEmail(form.email, form.password);
        const user = userCred.user;
        // Save user data in Firestore (finalize, remove draft flag)
        const { db } = await import("../../lib/firebaseClient");
        const { setDoc, doc, query, collection, where, getDocs } = await import(
          "firebase/firestore"
        );
        // Remove any draft
        const q = query(
          collection(db(), "users"),
          where("email", "==", form.email),
          where("draft", "==", true)
        );
        const snap = await getDocs(q);
        if (!snap.empty) {
          await setDoc(
            doc(db(), "users", snap.docs[0].id),
            { draft: false },
            { merge: true }
          );
        }
        await setDoc(doc(db(), "users", user.uid), {
          uid: user.uid,
          email: user.email,
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          city: form.city,
          address: form.address,
          relationshipWithPatient: form.relationshipWithPatient,
          photoURL: user.photoURL || "",
          createdAt: new Date().toISOString(),
          role: "family",
          draft: false,
        });
        // Ensure a session exists, then show success and redirect
        try {
          await ensureSignedIn(form.email, form.password).catch(() => {});
        } catch {}
        setSuccessMsg("Account created — redirecting to your dashboard…");
        setTimeout(() => router.push("/dashboard/user"), 1000);
      } catch (err) {
        setToast({
          type: "error",
          message: err instanceof Error ? err.message : String(err),
        });
      } finally {
        setLoading(false);
      }
    }

    return (
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-100 p-0 overflow-hidden"
      >
        <div className="bg-blue-600 py-6 px-6 text-white rounded-t-2xl border-b border-blue-100">
          <h2 className="text-2xl font-bold mb-1">
            Family Member Registration
          </h2>
          <p className="text-blue-100 text-sm">
            Please fill out the details below to create your account
          </p>
        </div>
        <div className="p-4 md:p-8 space-y-8">
          <section>
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={form.firstName}
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={form.lastName}
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">City *</label>
                <select
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  required
                >
                  <option value="">Select your city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Address *
                </label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Gender *
                </label>
                <select
                  value={form.gender}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  required
                >
                  <option value="">Select gender</option>
                  {genders.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Emergency Contact *
                </label>
                <input
                  type="text"
                  placeholder="Enter emergency contact"
                  value={form.emergencyContact}
                  onChange={(e) =>
                    setForm({ ...form, emergencyContact: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  required
                />
              </div>
            </div>
          </section>
          <section>
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              Patient Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Patient Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter patient name"
                  value={form.patientName}
                  onChange={(e) =>
                    setForm({ ...form, patientName: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Patient Age *
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="Enter patient age"
                  value={form.patientAge}
                  onChange={(e) =>
                    setForm({ ...form, patientAge: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Patient Gender *
                </label>
                <select
                  value={form.patientGender}
                  onChange={(e) =>
                    setForm({ ...form, patientGender: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  required
                >
                  <option value="">Select gender</option>
                  {genders.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Relationship with Patient *
                </label>
                <select
                  value={form.relationshipWithPatient}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      relationshipWithPatient: e.target.value,
                    })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  required
                >
                  <option value="">Select relationship</option>
                  {relationships.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Upload Patient Reports (PDF, Images)
                </label>
                <input
                  type="file"
                  accept=".pdf,image/*"
                  multiple
                  onChange={(e) => {
                    if (e.target.files) {
                      const files = Array.from(e.target.files);
                      setReportFiles(files);
                      setForm((prev) => ({ ...prev, reports: files }));
                    }
                  }}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                />
                {reportFiles.length > 0 && (
                  <ul className="mt-2 text-xs text-gray-600">
                    {reportFiles.map((file, idx) => (
                      <li key={idx}>{file.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
          <section>
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              Account Security
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Password *
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={(e) =>
                    setForm({ ...form, confirmPassword: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  required
                />
              </div>
            </div>
          </section>
          <div className="flex flex-col gap-2 mt-4">
            <label className="inline-flex items-center">
              <input type="checkbox" required className="form-checkbox mr-2" />
              <span>
                I agree to the{" "}
                <a href="/terms-of-service" className="underline text-blue-600">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="underline text-blue-600">
                  Privacy Policy
                </a>
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox mr-2"
                defaultChecked
              />
              <span>I want to receive updates and care tips via email</span>
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full text-lg transition-all shadow-md"
          >
            <span className="inline-flex items-center justify-center gap-2">
              {(loading || successMsg) && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              )}
              {successMsg
                ? "Redirecting…"
                : loading
                ? "Creating account…"
                : "Create Family Account"}
            </span>
          </button>
          {successMsg && (
            <div className="mt-3 rounded-md bg-green-50 border border-green-200 p-3 text-green-800 text-sm">
              {successMsg}
            </div>
          )}
        </div>
      </form>
    );
  }
  const [role, setRole] = useState<string>("family");
  const [googleUser, setGoogleUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // Caregiver form (inline on same page)
  function CaregiverForm({ googleUser }: { googleUser: User | null }) {
    const router = useRouter();
    const [successMsg, setSuccessMsg] = useState<string | null>(null);
    const [form, setForm] = useState({
      firstName: googleUser?.displayName?.split(" ")[0] || "",
      lastName: googleUser?.displayName?.split(" ")[1] || "",
      email: googleUser?.email || "",
      phone: googleUser?.phoneNumber || "",
      city: "",
      address: "",
      experienceYears: "",
      skills: "",
      hourlyRate: "",
      availability: "",
      certifications: [] as File[],
      password: "",
      confirmPassword: "",
    });
    const [certFiles, setCertFiles] = useState<File[]>([]);
    const [saving, setSaving] = useState(false);
    const cities = ["Mumbai", "Delhi NCR", "Bangalore", "Pune", "Other"];

    async function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      setSaving(true);
      try {
        // Minimal validation
        if (!form.email || !form.password)
          throw new Error("Email and password required");
        const { registerWithEmail } = await import("../../lib/firebaseClient");
        const userCred = await registerWithEmail(form.email, form.password);
        const user = userCred.user;
        const { db } = await import("../../lib/firebaseClient");
        const { setDoc, doc } = await import("firebase/firestore");
        await setDoc(doc(db(), "users", user.uid), {
          uid: user.uid,
          email: user.email,
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          city: form.city,
          address: form.address,
          experienceYears: form.experienceYears,
          skills: form.skills,
          hourlyRate: form.hourlyRate,
          availability: form.availability,
          photoURL: user.photoURL || "",
          createdAt: new Date().toISOString(),
          role: "caregiver",
        });
        try {
          await ensureSignedIn(form.email, form.password).catch(() => {});
        } catch {}
        setSuccessMsg("Account created — redirecting to your dashboard…");
        setTimeout(() => router.push("/dashboard/caregiver"), 1000);
      } catch (err) {
        setToast({
          type: "error",
          message: err instanceof Error ? err.message : String(err),
        });
      } finally {
        setSaving(false);
      }
    }

    return (
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-100 p-0 overflow-hidden"
      >
        <div className="bg-green-600 py-6 px-6 text-white rounded-t-2xl border-b border-green-100">
          <h2 className="text-2xl font-bold mb-1">Caregiver Registration</h2>
          <p className="text-green-100 text-sm">
            Create your caregiver account to offer services.
          </p>
        </div>
        <div className="p-4 md:p-8 space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-4 text-green-700">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={form.firstName}
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={form.lastName}
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">City *</label>
                <select
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
                  required
                >
                  <option value="">Select your city</option>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Address *
                </label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
                  required
                />
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-4 text-green-700">
              Professional Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Years of Experience
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="e.g. 3"
                  value={form.experienceYears}
                  onChange={(e) =>
                    setForm({ ...form, experienceYears: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Hourly Rate (optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 300/hr"
                  value={form.hourlyRate}
                  onChange={(e) =>
                    setForm({ ...form, hourlyRate: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Skills / Specialities
                </label>
                <textarea
                  placeholder="Nursing, Physiotherapy, Dementia care..."
                  value={form.skills}
                  onChange={(e) => setForm({ ...form, skills: e.target.value })}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full h-24 focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Upload Certifications
                </label>
                <input
                  type="file"
                  accept=".pdf,image/*"
                  multiple
                  onChange={(e) => {
                    if (e.target.files) {
                      const files = Array.from(e.target.files);
                      setCertFiles(files);
                      setForm((prev) => ({ ...prev, certifications: files }));
                    }
                  }}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
                />
                {certFiles.length > 0 && (
                  <ul className="mt-2 text-xs text-gray-600">
                    {certFiles.map((f, i) => (
                      <li key={i}>{f.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-4 text-green-700">
              Account Security
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Password *
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={(e) =>
                    setForm({ ...form, confirmPassword: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
                  required
                />
              </div>
            </div>
          </section>

          <div className="flex flex-col gap-2 mt-2">
            <label className="inline-flex items-center">
              <input type="checkbox" required className="form-checkbox mr-2" />
              <span>
                I agree to the{" "}
                <a
                  href="/terms-of-service"
                  className="underline text-green-700"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="underline text-green-700">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
          <button
            type="submit"
            disabled={saving}
            className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full text-lg transition-all shadow-md"
          >
            <span className="inline-flex items-center justify-center gap-2">
              {(saving || successMsg) && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              )}
              {successMsg
                ? "Redirecting…"
                : saving
                ? "Creating account…"
                : "Create Caregiver Account"}
            </span>
          </button>
          {successMsg && (
            <div className="mt-3 rounded-md bg-green-50 border border-green-200 p-3 text-green-800 text-sm">
              {successMsg}
            </div>
          )}
        </div>
      </form>
    );
  }

  // Small toast implementation (stateful, minimal)
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  // On mount, check if user is already signed in
  useEffect(() => {
    async function checkUser() {
      initFirebase();
      const { getAuth } = await import("firebase/auth");
      const a = getAuth();
      setGoogleUser(a.currentUser);
    }
    checkUser();
  }, []);

  // Google Auth handler
  async function handleGoogleAuth() {
    setLoading(true);
    try {
      initFirebase();
      const userCred = await signInWithGoogleAuto();
      // signInWithPopup returns a userCredential object
      const user = userCred?.user || userCred;
      if (!user) throw new Error("No user returned from Google sign-in");
      // Save user data in Firestore if not already present
      const { db } = await import("../../lib/firebaseClient");
      const { getDoc, setDoc, doc } = await import("firebase/firestore");
      const userRef = doc(db(), "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          firstName: user.displayName?.split(" ")[0] || "",
          lastName: user.displayName?.split(" ")[1] || "",
          phone: user.phoneNumber || "",
          photoURL: user.photoURL || "",
          createdAt: new Date().toISOString(),
          role: "family",
        });
      }
      setGoogleUser(user);
    } catch (error) {
      console.error("Google sign-in error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageShell
      title="Get Started"
      description="Register as a family member or caregiver to access elder care services."
    >
      {/* Toast container */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 max-w-sm w-full`}>
          <div
            className={`rounded-md p-3 shadow-md ${
              toast.type === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}
      <div className="w-full max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          Get Started with Your Account
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Register as a family member or caregiver to access elder care
          services.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column: role cards and info */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-semibold mb-4">
              Who are you registering as?
            </h2>
            <div className="flex gap-6 flex-wrap">
              <button
                type="button"
                onClick={() => setRole("family")}
                aria-pressed={role === "family"}
                className={`transition-all duration-200 border-2 rounded-2xl px-6 py-6 flex flex-col items-center shadow-md w-64 cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  role === "family"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <span className="text-4xl mb-2">👨‍👩‍👧‍👦</span>
                <span className="font-bold text-lg mb-1 text-blue-700">
                  Family Member
                </span>
                <span className="text-gray-600 text-sm text-center">
                  I want to find and book care services for my family
                </span>
              </button>
              <button
                type="button"
                onClick={() => setRole("caregiver")}
                aria-pressed={role === "caregiver"}
                className={`transition-all duration-200 border-2 rounded-2xl px-6 py-6 flex flex-col items-center shadow-md w-64 cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                  role === "caregiver"
                    ? "border-green-600 bg-green-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <span className="text-4xl mb-2">🧑‍⚕️</span>
                <span className="font-bold text-lg mb-1 text-green-700">
                  Caregiver
                </span>
                <span className="text-gray-600 text-sm text-center">
                  I want to offer my services as a professional caregiver
                </span>
              </button>
            </div>

            <div className="mt-8">
              <div className="bg-white border rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg mb-2">Why register?</h3>
                <p className="text-sm text-gray-600">
                  Registering helps us match caregivers and families, keep your
                  bookings, and provide support.
                </p>
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={handleGoogleAuth}
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-4 py-2 border rounded-md hover:shadow focus:outline-none"
                  >
                    <span className="text-xl">🔵</span>
                    <span className="text-sm">Sign in with Google</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: form */}
          <div className="lg:col-span-6">
            <div className="sticky top-24">
              {role === "family" && <FamilyForm googleUser={googleUser} />}
              {role === "caregiver" && (
                <CaregiverForm googleUser={googleUser} />
              )}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
