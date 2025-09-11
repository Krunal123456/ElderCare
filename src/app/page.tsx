import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section (uses hero image as background) */}
      <section className="w-full -mt-8">
        <div className="relative w-full h-[480px] md:h-[640px] overflow-hidden">
          {/* background image */}
          <Image
            src="/in-home-care_hero.png"
            alt="Caregiver and senior"
            fill
            className="object-cover object-center w-full h-full"
            priority
          />
          {/* darker overlay + subtle vignette to focus center */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/30" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.35)_60%)]" />

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="max-w-3xl w-full text-center z-20">
              <div className="inline-block bg-black/1 rounded-xl py-6 px-8">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
                  Trusted Elderly Care by Sathilo — For a Safer Tomorrow
                </h1>
                <p className="text-sm md:text-base text-white/90 mb-6 max-w-2xl mx-auto">
                  One of India&apos;s most trusted Elder Care providers in your
                  town. Better care, better living.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center w-full mt-4">
                  <Link
                    href="/caregivers"
                    className="w-full sm:w-auto btn-primary text-sm sm:text-base shadow-lg py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold"
                    style={{ minWidth: "140px" }}
                  >
                    Find a Caregiver
                  </Link>
                  <Link
                    href="/getstarted"
                    className="w-full sm:w-auto btn-ghost text-sm sm:text-base shadow py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold"
                    style={{ minWidth: "140px" }}
                  >
                    Sign Up as Family
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Sathilo?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.24 3 12.91 4.01 13.5 5.09C14.09 4.01 15.76 3 17.5 3C20.5 3 23 5.5 23 8.5C23 13.5 15 21 15 21H12Z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Trusted & Verified Caregivers
            </h3>
            <p className="text-gray-600">
              All our caregivers undergo background checks, certification
              verification, and skill assessments.
            </p>
          </div>
          <div className="card p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9" />
                <rect x="3" y="3" width="18" height="7" rx="2" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Easy Booking</h3>
            <p className="text-gray-600">
              Book caregivers instantly through our platform with flexible
              scheduling and real-time availability.
            </p>
          </div>
          <div className="card p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 3v4M8 3v4M2 11h20" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
            <p className="text-gray-600">
              Fast and transparent payment processing with multiple options and
              automatic billing.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">
                1
              </div>
              <span className="font-semibold mb-1">Sign Up</span>
              <p className="text-gray-600 text-center text-sm">
                Create your family account and tell us your loved one&apos;s
                needs and preferences.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">
                2
              </div>
              <span className="font-semibold mb-1">Find a Caregiver</span>
              <p className="text-gray-600 text-center text-sm">
                Browse verified caregivers, check reviews, and find the perfect
                match for your loved one.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">
                3
              </div>
              <span className="font-semibold mb-1">Book & Pay Securely</span>
              <p className="text-gray-600 text-center text-sm">
                Schedule care sessions and pay securely through our platform
                with flexible payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Care Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Care Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden">
              <Image
                src="/1.jpg"
                alt="Medical Support"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">Medical Support</h3>
            <p className="text-gray-600 mb-2">
              Professional nursing care, medication management, and health
              monitoring by certified professionals.
            </p>
            <div className="font-bold text-blue-600 text-lg mb-2">
              ₹1299<span className="text-sm font-normal">/month</span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden">
              <Image
                src="/2.jpg"
                alt="Daily Assistance"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">Daily Assistance</h3>
            <p className="text-gray-600 mb-2">
              Comprehensive support for personal daily activities, including
              grooming, meals, and household needs.
            </p>
            <div className="font-bold text-blue-600 text-lg mb-2">
              ₹9999<span className="text-sm font-normal">/month</span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden">
              <Image
                src="/3.jpg"
                alt="Companionship"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">Companionship</h3>
            <p className="text-gray-600 mb-2">
              Social interaction and emotional support to combat loneliness and
              improve mental well-being.
            </p>
            <div className="font-bold text-blue-600 text-lg mb-2">
              ₹799<span className="text-sm font-normal">/month</span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden">
              <Image
                src="/4.jpg"
                alt="Specialized Care"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">Specialized Care</h3>
            <p className="text-gray-600 mb-2">
              Expert care for specific conditions including dementia,
              Alzheimer’s, and post-operative recovery.
            </p>
            <div className="font-bold text-blue-600 text-lg mb-2">
              ₹1799<span className="text-sm font-normal">/month</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/services"
            className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-6 py-3 rounded-lg font-semibold text-lg border border-blue-200"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            What Our Families Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4">
                “Sathilo helped us find the perfect caregiver quickly. The
                platform is so easy to use and the caregivers are truly
                professional and caring.”
              </p>
              <div className="font-semibold text-gray-900">Arjun Mehta</div>
              <div className="text-gray-500 text-sm">Son of care recipient</div>
            </div>
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4">
                “The 24/7 support and family collaboration features give us
                peace of mind even when we’re at work.”
              </p>
              <div className="font-semibold text-gray-900">Priya Nair</div>
              <div className="text-gray-500 text-sm">
                Daughter caring for father
              </div>
            </div>
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4">
                “As a registered nurse, Sathilo provides me with a steady stream
                of clients matched with my expertise. The platform handles
                everything seamlessly!”
              </p>
              <div className="font-semibold text-gray-900">
                Dr. Rajesh Gupta
              </div>
              <div className="text-gray-500 text-sm">Caregiver on platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">
          Affordable Care Plans
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Professional Sathilo care starting from just 9999/month. Choose from
          flexible plans designed to meet your family’s specific needs and
          budget.
        </p>
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-blue-600">₹9999</span>
          <span className="text-lg text-gray-700 font-medium">
            /month onwards
          </span>
        </div>
        <div className="flex justify-center">
          <Link
            href="/pricing"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow"
          >
            View Pricing Plans
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-500 to-green-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Care for Your Loved Ones?
          </h2>
          <p className="text-white/90 mb-8">
            Join thousands of families who trust Sathilo for professional,
            compassionate care. Get started today and give your loved ones the
            care they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/getstarted"
              className="bg-white text-blue-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-lg shadow hover:bg-blue-50"
            >
              Get Started Now
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 border border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-lg shadow hover:bg-white/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      {/* Footer is rendered globally by `src/app/layout.tsx` - keep layout Footer only */}
    </div>
  );
}
