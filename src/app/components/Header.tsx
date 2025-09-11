"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // Multilingual support removed
  return (
    <header className="w-full fixed top-0 left-0 z-50 site-header">
      <div className="container">
        <div className="h-16 flex items-center justify-between">
          {/* left: logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                S
              </div>
              <span className="font-semibold text-xl tracking-tight text-gray-900">
                Sathilo
              </span>
            </Link>
          </div>

          {/* center nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/caregivers" className="nav-link">
              Caregivers
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/pricing" className="nav-link">
              Pricing
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* right controls */}
          <div className="flex items-center gap-3">
            <Link
              href="/signin"
              className="hidden md:inline-flex btn-ghost items-center"
            >
              Sign In
            </Link>
            <Link
              href="/getstarted"
              className="hidden md:inline-flex btn-primary nav-cta items-center"
            >
              Get Started
            </Link>

            {/* mobile menu button (single) */}
            <button
              className="ml-2 inline-flex items-center justify-center lg:hidden p-1 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <svg
                  width="18"
                  height="18"
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
                  width="18"
                  height="18"
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
              {/* Sign In / Get Started intentionally omitted from mobile menu to avoid header overflow; CTAs are desktop-only */}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
