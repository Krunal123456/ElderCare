"use client";
import Image from "next/image";
import PageShell from "../components/PageShell";

import { signInWithGoogleAuto, initFirebase } from "../../lib/firebaseClient";
import { useEffect, useState } from "react";
import type { User } from "firebase/auth";

export default function GetStarted() {
  // Family Member multi-step form
  function FamilyForm({ googleUser }: { googleUser: User | null }) {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({
      firstName: googleUser?.displayName?.split(" ")[0] || "",
      lastName: googleUser?.displayName?.split(" ")[1] || "",
      email: googleUser?.email || "",
      photoURL: googleUser?.photoURL || "",
      phone: "",
      city: "",
      dob: "",
      gender: "",
      address: "",
      relationship: "",
      emergencyContact: "",
      password: "",
      confirmPassword: "",
    });
    const [loading, setLoading] = useState(false);
    const cities = ["Mumbai", "Delhi NCR", "Bangalore", "Pune", "Other"];
    const genders = ["Male", "Female", "Other"];
    const relationships = ["Son", "Daughter", "Spouse", "Sibling", "Other"];

    function handleNext() {
      setStep((s) => s + 1);
    }
    function handleBack() {
      setStep((s) => s - 1);
    }
    function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      setLoading(true);
      // TODO: Add validation and Firestore save logic
      setTimeout(() => {
        alert("Family member account created!");
        setLoading(false);
      }, 1000);
    }

    return (
      <form
        className="space-y-6 w-full max-w-3xl mx-auto"
        onSubmit={handleSubmit}
      >
        {/* Stepper */}
        <div className="flex justify-center gap-2 mb-6">
          {["Basic", "Contact", "Details", "Password"].map((label, i) => (
            <div
              key={label}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                step === i
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {i + 1}. {label}
            </div>
          ))}
        </div>
        {/* Step 0: Basic */}
        {step === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name *
              </label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className="border border-gray-200 rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name *
              </label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="border border-gray-200 rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border border-gray-200 rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Gender *</label>
              <select
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
                className="border border-gray-200 rounded px-3 py-2 w-full"
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
                Date of Birth *
              </label>
              <input
                type="date"
                value={form.dob}
                onChange={(e) => setForm({ ...form, dob: e.target.value })}
                className="border border-gray-200 rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Relationship *
              </label>
              <select
                value={form.relationship}
                onChange={(e) =>
                  setForm({ ...form, relationship: e.target.value })
                }
                className="border border-gray-200 rounded px-3 py-2 w-full"
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
          </div>
        )}
        {/* Step 1: Contact */}
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Phone *</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="border border-gray-200 rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City *</label>
              <select
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="border border-gray-200 rounded px-3 py-2 w-full"
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
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="border border-gray-200 rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Emergency Contact *
              </label>
              <input
                type="text"
                value={form.emergencyContact}
                onChange={(e) =>
                  setForm({ ...form, emergencyContact: e.target.value })
                }
                className="border border-gray-200 rounded px-3 py-2 w-full"
                required
              />
            </div>
          </div>
        )}
        {/* Step 2: Details (photo preview) */}
        {step === 2 && (
          <div className="flex flex-col items-center gap-4">
            {form.photoURL && (
              <div className="w-24 h-24 relative">
                <Image
                  src={form.photoURL}
                  alt="Profile"
                  fill
                  className="rounded-full object-cover border"
                  sizes="96px"
                />
              </div>
            )}
            <div className="text-gray-600 text-sm">
              Your Google profile photo will be used for your account.
            </div>
          </div>
        )}
        {/* Step 3: Password */}
        {step === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Password *
              </label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="border border-gray-200 rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm Password *
              </label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                className="border border-gray-200 rounded px-3 py-2 w-full"
                required
              />
            </div>
          </div>
        )}
        {/* Step navigation */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className="btn-ghost px-4 py-2"
          >
            Back
          </button>
          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn-primary px-4 py-2"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="btn-primary px-4 py-2"
            >
              {loading ? "Creating account…" : "Create Family Account"}
            </button>
          )}
        </div>
      </form>
    );
  }
  const [role, setRole] = useState<string>("");
  const [googleUser, setGoogleUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

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
  setGoogleUser(user);
    } catch (error) {
      console.error("Google sign-in error:", error);
      let msg = "Google sign-in failed";
      if (error && typeof error === "object" && "message" in error)
        msg += ": " + (error as Error).message;
      else if (typeof error === "string") msg += ": " + error;
      alert(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageShell title="Get Started">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col items-center mb-6">
            <span className="bg-blue-100 text-blue-600 rounded-full p-3 mb-2">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4" />
                <circle cx="12" cy="16" r="1" />
              </svg>
            </span>
            <h1 className="text-2xl font-bold mb-1 text-center">
              Join ElderCare
            </h1>
            <p className="text-gray-500 text-center text-sm">
              Create your account to get started with professional elderly care
            </p>
          </div>
          {/* Google Auth Button - always first step */}
          {!googleUser ? (
            <button
              type="button"
              className="w-full border border-gray-200 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-50 mb-6"
              onClick={handleGoogleAuth}
              disabled={loading}
            >
              <svg width="20" height="20" viewBox="0 0 48 48">
                <g>
                  <circle fill="#fff" cx="24" cy="24" r="20" />
                  <path
                    fill="#4285F4"
                    d="M34.6 24.2c0-.7-.1-1.4-.2-2H24v4.1h6c-.3 1.5-1.3 2.7-2.7 3.5v2.9h4.4c2.6-2.4 4.1-5.9 4.1-10.5z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 36c3.2 0 5.8-1.1 7.7-2.9l-4.4-2.9c-1.2.8-2.7 1.3-4.3 1.3-3.3 0-6-2.2-7-5.2h-4.5v3.2C13.9 33.7 18.6 36 24 36z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M17 26.3c-.3-.8-.5-1.6-.5-2.3s.2-1.6.5-2.3v-3.2h-4.5C11.6 20.9 11 22.4 11 24s.6 3.1 1.5 4.5l4.5-3.2z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 17.9c1.7 0 3.2.6 4.3 1.7l3.2-3.2C29.8 14.1 27.2 13 24 13c-5.4 0-10.1 2.3-12.5 6.1l4.5 3.2c1-3 3.7-5.2 7-5.2z"
                  />
                </g>
              </svg>
              {loading ? "Signing in..." : "Sign in with Google"}
            </button>
          ) : (
            <>
              <div className="mb-6">
                <label className="block font-medium mb-2">
                  I am signing up as:
                </label>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button
                    type="button"
                    className={`border rounded-lg px-4 py-3 flex flex-col items-start ${
                      role === "family"
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 bg-white"
                    }`}
                    onClick={() => setRole("family")}
                  >
                    <span className="font-semibold text-blue-700 flex items-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4" />
                        <circle cx="12" cy="16" r="1" />
                      </svg>
                      Family Member
                    </span>
                    <span className="text-xs text-gray-500">
                      Looking for caregivers for your loved ones
                    </span>
                  </button>
                  <button
                    type="button"
                    className={`border rounded-lg px-4 py-3 flex flex-col items-start ${
                      role === "caregiver"
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 bg-white"
                    }`}
                    onClick={() => setRole("caregiver")}
                  >
                    <span className="font-semibold text-blue-700 flex items-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4" />
                        <circle cx="12" cy="16" r="1" />
                      </svg>
                      Professional Caregiver
                    </span>
                    <span className="text-xs text-gray-500">
                      Providing care services to families
                    </span>
                  </button>
                </div>
              </div>
              {/* Conditional rendering for forms */}
              {role === "caregiver" && (
                <div className="w-full">

                </div>
              )}
              {role === "family" && <FamilyForm googleUser={googleUser} />}
            </>
          )}
        </div>
      </div>
    </PageShell>
  );
}
