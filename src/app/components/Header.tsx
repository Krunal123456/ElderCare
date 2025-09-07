"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/55 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center justify-between">
          {/* left: logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                EC
              </div>
              <span className="font-semibold text-lg tracking-tight text-gray-900">
                ElderCare
              </span>
            </Link>
          </div>

          {/* center nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-700">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <Link href="/services" className="hover:text-gray-900">
              Services
            </Link>
            <Link href="/caregivers" className="hover:text-gray-900">
              Caregivers
            </Link>
            <Link href="/about" className="hover:text-gray-900">
              About
            </Link>
            <Link href="/pricing" className="hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </nav>

          {/* right controls */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center">
              <button
                aria-label="Language"
                className="text-xs px-2 py-1 rounded border border-gray-200 bg-white/70 text-gray-600"
              >
                EN
              </button>
            </div>

            <Link
              href="/signin"
              className="hidden sm:inline text-sm text-gray-700 hover:underline"
            >
              Sign In
            </Link>

            <Link
              href="/getstarted"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full shadow-sm"
            >
              Get Started
            </Link>

            {/* mobile menu button */}
            <button
              className="ml-2 inline-flex items-center justify-center lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden absolute top-14 left-0 w-full bg-white border-b border-gray-200 shadow z-40 animate-fade-in">
            <div className="flex flex-col gap-2 py-4 px-6 text-gray-800 text-base">
              <Link
                href="/"
                className="py-2"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="py-2"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/caregivers"
                className="py-2"
                onClick={() => setMobileOpen(false)}
              >
                Caregivers
              </Link>
              <Link
                href="/about"
                className="py-2"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                href="/pricing"
                className="py-2"
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="py-2"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <div className="flex gap-2 mt-2">
                <Link
                  href="/signin"
                  className="flex-1 text-center text-gray-700 py-2 border rounded hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/getstarted"
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
