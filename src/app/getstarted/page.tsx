"use client";
import Link from "next/link";
import { useState } from "react";

export default function GetStarted() {
  const [role, setRole] = useState("family");
  const cities = ["Mumbai", "Delhi NCR", "Bangalore", "Pune", "Other"];

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc]">
      <div className="h-20" />
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-md border border-gray-100 px-8 py-10 flex flex-col items-center">
          <div className="bg-blue-50 rounded-full p-3 mb-5">
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4" />
              <circle cx="12" cy="16" r="1" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-1 text-center">
            Join ElderCare
          </h1>
          <div className="text-gray-500 text-sm mb-7 text-center">
            Create your account to get started with professional elderly care
          </div>
          <div className="w-full mb-6">
            <div className="font-semibold mb-2 text-left">
              I am signing up as:
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("family")}
                className={`flex flex-col items-start border rounded-lg p-4 gap-1 text-left transition-all ${
                  role === "family"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="7" r="4" />
                      <path d="M5.5 21h13a2 2 0 0 0 2-2v-2a7 7 0 0 0-14 0v2a2 2 0 0 0 2 2z" />
                    </svg>
                  </span>
                  <span className="font-semibold">Family Member</span>
                </div>
                <span className="text-xs text-gray-500">
                  Looking for caregivers for your loved ones
                </span>
              </button>
              <button
                type="button"
                onClick={() => setRole("caregiver")}
                className={`flex flex-col items-start border rounded-lg p-4 gap-1 text-left transition-all ${
                  role === "caregiver"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="7" r="4" />
                      <path d="M5.5 21h13a2 2 0 0 0 2-2v-2a7 7 0 0 0-14 0v2a2 2 0 0 0 2 2z" />
                    </svg>
                  </span>
                  <span className="font-semibold">Professional Caregiver</span>
                </div>
                <span className="text-xs text-gray-500">
                  Providing care services to families
                </span>
              </button>
            </div>
          </div>
          <form className="w-full space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name *
                </label>
                <input
                  className="border border-gray-200 rounded px-3 py-2 w-full"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name *
                </label>
                <input
                  className="border border-gray-200 rounded px-3 py-2 w-full"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  className="border border-gray-200 rounded px-3 py-2 w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number *
                </label>
                <input
                  className="border border-gray-200 rounded px-3 py-2 w-full"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City *</label>
              <select className="border border-gray-200 rounded px-3 py-2 w-full">
                <option>Select your city</option>
                {cities.map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="border border-gray-200 rounded px-3 py-2 w-full pr-10"
                    placeholder="Create a strong password"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm Password *
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="border border-gray-200 rounded px-3 py-2 w-full pr-10"
                    placeholder="Confirm your password"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-blue-600" />I agree to
                the{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="accent-blue-600"
                  defaultChecked
                />
                I want to receive updates and care tips via email
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 text-base mt-2"
            >
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4" />
                <circle cx="12" cy="16" r="1" />
              </svg>
              {role === "family"
                ? "Create Family Account"
                : "Create Caregiver Account"}
            </button>
          </form>
          <div className="flex items-center my-5 w-full">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="mx-3 text-gray-400 text-xs">or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="flex gap-3 w-full">
            <button className="flex-1 border border-gray-200 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
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
              Google
            </button>
            <button className="flex-1 border border-gray-200 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
              <svg width="20" height="20" viewBox="0 0 48 48">
                <g>
                  <circle fill="#1877F2" cx="24" cy="24" r="20" />
                  <path
                    fill="#fff"
                    d="M26.7 34v-8.2h2.7l.4-3.2h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.5v-3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2h-2.6v3.2h2.6V34h3.1z"
                  />
                </g>
              </svg>
              Facebook
            </button>
          </div>
          <div className="text-sm text-gray-500 mt-6 w-full text-center">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign in here
            </Link>
          </div>
        </div>
        {/* Info Boxes */}
        <div className="mt-8 w-full max-w-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 flex flex-col items-center text-blue-700 text-sm">
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4" />
              <circle cx="12" cy="16" r="1" />
            </svg>
            <span className="font-semibold mt-1">Secure & Encrypted</span>
            <span className="text-xs text-blue-400 mt-1">
              Your data is protected
            </span>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-lg px-4 py-3 flex flex-col items-center text-green-700 text-sm">
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span className="font-semibold mt-1">Verified Caregivers</span>
            <span className="text-xs text-green-400 mt-1">
              Background checked
            </span>
          </div>
          <div className="bg-purple-50 border border-purple-100 rounded-lg px-4 py-3 flex flex-col items-center text-purple-700 text-sm">
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="#a21caf"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4" />
              <circle cx="12" cy="16" r="1" />
            </svg>
            <span className="font-semibold mt-1">24/7 Support</span>
            <span className="text-xs text-purple-400 mt-1">
              Always here to help
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
