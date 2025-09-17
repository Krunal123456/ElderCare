"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  initFirebase,
  signInWithGoogleAuto,
  getRedirectSignInResult,
} from "../../lib/firebaseClient";
import { signInWithEmail } from "../../lib/signInWithEmail";

export default function SignIn() {
  // State for form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    initFirebase();
    // handle redirect result (mobile SSO flow)
    (async function () {
      const user = await getRedirectSignInResult();
      if (user) {
        try {
          // Fetch user profile from Firestore to determine role
          const { db } = await import("@/lib/firebaseClient");
          const { doc, getDoc } = await import("firebase/firestore");
          let role = "family";
          // Try caregivers collection first
          const cgDoc = await getDoc(doc(db(), "caregivers", user.uid));
          if (cgDoc.exists()) {
            role = "caregiver";
          } else {
            // Fallback to users collection
            const famDoc = await getDoc(doc(db(), "users", user.uid));
            if (famDoc.exists()) {
              role = "family";
            }
          }
          // Route to appropriate dashboard
          if (role === "caregiver") {
            window.location.href = "/dashboard/caregiver";
          } else {
            window.location.href = "/dashboard/family";
          }
        } catch {
          setError("Failed to route after sign-in");
        }
      }
    })();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc]">
      {/* Header Spacer */}
      <div className="h-20" />
      {/* Centered Card */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-md card border border-gray-100 px-8 py-10 flex flex-col items-center">
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
          <h1 className="text-2xl font-bold mb-1 text-center">Welcome Back</h1>
          <div className="text-gray-500 text-sm mb-7 text-center">
            Sign in to access your Sathilo account
          </div>
          <form
            className="w-full space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setError(null);
              setLoading(true);
              try {
                const userCredential = await signInWithEmail(email, password);
                const user = userCredential.user;
                // Check if user exists in Firestore (users or caregivers)
                const { db } = await import("@/lib/firebaseClient");
                const { doc, getDoc } = await import("firebase/firestore");
                let found = false;
                let role = "family";
                let userData = null;
                // Check caregivers collection
                const cgDoc = await getDoc(doc(db(), "caregivers", user.uid));
                if (cgDoc.exists()) {
                  found = true;
                  role = "caregiver";
                  userData = cgDoc.data();
                } else {
                  // Check users collection
                  const famDoc = await getDoc(doc(db(), "users", user.uid));
                  if (famDoc.exists()) {
                    found = true;
                    role = "family";
                    userData = famDoc.data();
                  }
                }
                if (found) {
                  // Store user data in localStorage for dashboard
                  if (userData) {
                    localStorage.setItem(
                      "userDashboardData",
                      JSON.stringify(userData)
                    );
                  }
                  // Redirect to dashboard based on role
                  if (role === "caregiver") {
                    window.location.href = "/dashboard/caregiver";
                  } else {
                    window.location.href = "/dashboard/user";
                  }
                } else {
                  // Redirect to signup form
                  window.location.href = "/getstarted";
                }
              } catch (err) {
                if (err instanceof Error) {
                  setError(err.message);
                } else {
                  setError("Sign in failed");
                }
              } finally {
                setLoading(false);
              }
            }}
          >
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="border border-gray-200 rounded px-3 py-2 w-full"
                placeholder="your.email@example.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="border border-gray-200 rounded px-3 py-2 w-full pr-10"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" />
                <span>Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-blue-600 hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2 text-base disabled:opacity-60"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin mr-2"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" />
                  <path className="opacity-75" d="M4 12a8 8 0 018-8" />
                </svg>
              ) : (
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
              )}
              Sign In
            </button>
            {error && (
              <div className="text-red-600 text-sm text-center mt-2">
                {error}
              </div>
            )}
          </form>
          <div className="flex items-center my-5 w-full">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="mx-3 text-gray-400 text-xs">or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="flex gap-3 w-full">
            <button
              onClick={async () => {
                try {
                  // auto chooses redirect on mobile, popup on desktop
                  await signInWithGoogleAuto();
                } catch {
                  // Silently ignore
                }
              }}
              className="w-full border border-gray-200 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-50"
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
              Google
            </button>
          </div>
          <div className="text-sm text-gray-500 mt-6 w-full text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/getstarted"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up here
            </Link>
          </div>
          <div className="text-xs text-gray-400 mt-2 w-full text-center">
            Are you a caregiver?{" "}
            <Link
              href="/caregiver/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign in as Caregiver
            </Link>
          </div>
        </div>
        {/* Security Notice */}
        <div className="mt-6 w-full max-w-md mx-auto">
          <div className="card-soft border border-blue-100 px-4 py-3 flex items-center gap-2 text-blue-700 text-sm">
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
            <span>Your data is secure</span>
            <span className="text-xs text-blue-400 ml-1">
              We use industry-standard encryption to protect your information
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
