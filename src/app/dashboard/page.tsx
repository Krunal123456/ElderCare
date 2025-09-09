import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="w-full min-h-[320px] flex flex-col justify-center items-center text-left bg-gradient-to-r from-blue-500 to-green-400 ">
        <div className="max-w-4xl w-full px-6 pt-24 pb-12 text-center mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-4">
            Trusted Elderly Care for a Safer Tomorrow
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            One of India&apos;s most trusted eldercare provider in your town.
            Better care, Better Living
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/caregivers" className="btn-primary text-lg">
              Find a Caregiver
            </Link>
            <Link href="/getstarted" className="btn-ghost text-lg">
              Sign Up as Family
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose ElderCare?
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
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Family Collaboration</h3>
            <p className="text-gray-600">
              Keep all family members informed with shared dashboards and
              real-time updates.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M18 8a6 6 0 1 0-12 0c0 7 6 13 6 13s6-6 6-13z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">
              24/7 Emergency Support
            </h3>
            <p className="text-gray-600">
              Round-the-clock emergency assistance and immediate response for
              urgent needs.
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
            <Image
              src="/services.png"
              alt="Medical Support"
              width={80}
              height={80}
              className="mb-4 rounded-lg object-cover"
            />
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
            <Image
              src="/services.png"
              alt="Daily Assistance"
              width={80}
              height={80}
              className="mb-4 rounded-lg object-cover"
            />
            <h3 className="font-semibold text-lg mb-2">Daily Assistance</h3>
            <p className="text-gray-600 mb-2">
              Comprehensive support for personal daily activities, including
              grooming, meals, and household needs.
            </p>
            <div className="font-bold text-blue-600 text-lg mb-2">
              ₹999<span className="text-sm font-normal">/month</span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Image
              src="/services.png"
              alt="Companionship"
              width={80}
              height={80}
              className="mb-4 rounded-lg object-cover"
            />
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
            <Image
              src="/services.png"
              alt="Specialized Care"
              width={80}
              height={80}
              className="mb-4 rounded-lg object-cover"
            />
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
                “ElderCare helped us find the perfect caregiver quickly. The
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
                “As a registered nurse, ElderCare provides me with a steady
                stream of clients matched with my expertise. The platform
                handles everything seamlessly!”
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
          Professional elder care starting from just ₹999/month. Choose from
          flexible plans designed to meet your family’s specific needs and
          budget.
        </p>
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-blue-600">₹999</span>
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
            Join thousands of families who trust ElderCare for professional,
            compassionate care. Get started today and give your loved ones the
            care they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/getstarted"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold text-lg shadow hover:bg-blue-50"
            >
              Get Started Now
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 border border-white text-white px-6 py-3 rounded-lg font-semibold text-lg shadow hover:bg-white/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-200 py-10 mt-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                EC
              </div>
              <span className="font-semibold text-lg tracking-tight text-gray-900">
                ElderCare
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Providing trusted, compassionate care for your loved ones with
              verified caregivers and 24/7 support.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-600"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-600"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.67 1.64.9c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 0 1 .96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3a9.06 9.06 0 0 1-5.6 1.93c-.36 0-.71-.02-1.06-.06A12.8 12.8 0 0 0 7.29 21c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-blue-600"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="3.2" />
                  <path d="M16.8 2H7.2A5.2 5.2 0 0 0 2 7.2v9.6A5.2 5.2 0 0 0 7.2 22h9.6A5.2 5.2 0 0 0 22 16.8V7.2A5.2 5.2 0 0 0 16.8 2zm3.2 14.8a3.2 3.2 0 0 1-3.2 3.2H7.2a3.2 3.2 0 0 1-3.2-3.2V7.2A3.2 3.2 0 0 1 7.2 4h9.6a3.2 3.2 0 0 1 3.2 3.2v9.6z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>
                <Link href="/services">Medical Support</Link>
              </li>
              <li>
                <Link href="/services">Daily Assistance</Link>
              </li>
              <li>
                <Link href="/services">Companionship</Link>
              </li>
              <li>
                <Link href="/services">Specialized Care</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">For Families</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>
                <Link href="#">Find Caregivers</Link>
              </li>
              <li>
                <Link href="#">How It Works</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Emergency Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs gap-2">
          <div className="flex gap-4 items-center">
            <span>HIPAA Compliant</span>
            <span>•</span>
            <span>Secure Payments</span>
            <span>•</span>
            <span>24/7 Support</span>
          </div>
          <div className="flex gap-4 items-center">
            <span>© 2025 ElderCare. All rights reserved.</span>
          </div>
        </div>
        <div className="w-full bg-red-50 text-red-700 text-center py-2 mt-4 text-xs font-semibold">
          Emergency Support:{" "}
          <a href="tel:091-971-ELDERCARE" className="underline">
            091-971-ELDERCARE
          </a>
        </div>
      </footer>
    </div>
  );
}
