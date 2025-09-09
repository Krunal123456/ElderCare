import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-[#f9fafc] min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-green-50 pt-25 pb-14 px-2 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Care Services
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8 text-lg">
          Comprehensive elder care solutions designed to meet every need. From
          medical support to daily assistance, we provide professional,
          compassionate care that gives families peace of mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link href="#" className="btn-primary">
            Find a Caregiver
          </Link>
          <Link href="#" className="btn-ghost">
            Consult Expert
          </Link>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="w-full flex flex-wrap gap-3 justify-center py-6 bg-white border-b">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow">
          All Services
        </button>
        <button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-medium flex items-center gap-2">
          <span>🩺</span> Medical Support
        </button>
        <button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-medium flex items-center gap-2">
          <span>🧑‍🦳</span> Daily Assistance
        </button>
        <button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-medium flex items-center gap-2">
          <span>💬</span> Companionship
        </button>
        <button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-medium flex items-center gap-2">
          <span>⚕️</span> Specialized Care
        </button>
      </section>

      {/* Service Cards */}
      <section className="max-w-6xl mx-auto py-10 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Medical Support */}
  <div className="card p-6 flex flex-col">
          <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
            <Image
              src="/services.png"
              alt="Medical Support"
              fill
              className="object-cover"
            />
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              Available 24/7
            </span>
          </div>
          <h2 className="font-bold text-lg mb-1">Medical Support</h2>
          <p className="text-gray-700 text-sm mb-2">
            Professional nursing care, medication management, and health
            monitoring by certified medical professionals.
          </p>
          <div className="mb-2">
            <div className="font-semibold text-gray-800 text-sm mb-1">
              What&apos;s Included:
            </div>
            <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Medication reminders and administration</li>
              <li>Vital signs monitoring</li>
              <li>Wound care and dressing</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1 mt-auto">
            <div className="flex justify-between text-sm">
              <span>Basic Plan</span>
              <span className="font-bold text-green-700">₹1299</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Premium Plan</span>
              <span className="font-bold text-blue-700">₹1899</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Premium+ Plan</span>
              <span className="font-bold text-purple-700">—</span>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
            Book Now
          </button>
        </div>

        {/* Daily Assistance */}
  <div className="card p-6 flex flex-col">
          <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
            <Image
              src="/services.png"
              alt="Daily Assistance"
              fill
              className="object-cover"
            />
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              Available 24/7
            </span>
          </div>
          <h2 className="font-bold text-lg mb-1">Daily Assistance</h2>
          <p className="text-gray-700 text-sm mb-2">
            Comprehensive support for daily living activities including personal
            care, meals, and household tasks.
          </p>
          <div className="mb-2">
            <div className="font-semibold text-gray-800 text-sm mb-1">
              What&apos;s Included:
            </div>
            <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Personal hygiene assistance</li>
              <li>Meal preparation and feeding</li>
              <li>Light housekeeping</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1 mt-auto">
            <div className="flex justify-between text-sm">
              <span>Basic Plan</span>
              <span className="font-bold text-green-700">₹999</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Premium Plan</span>
              <span className="font-bold text-blue-700">₹1499</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Premium+ Plan</span>
              <span className="font-bold text-purple-700">—</span>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
            Book Now
          </button>
        </div>

        {/* Companionship */}
  <div className="card p-6 flex flex-col">
          <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
            <Image
              src="/services.png"
              alt="Companionship"
              fill
              className="object-cover"
            />
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              Available 24/7
            </span>
          </div>
          <h2 className="font-bold text-lg mb-1">Companionship</h2>
          <p className="text-gray-700 text-sm mb-2">
            Social interaction and emotional support to combat loneliness and
            promote mental well-being.
          </p>
          <div className="mb-2">
            <div className="font-semibold text-gray-800 text-sm mb-1">
              What&apos;s Included:
            </div>
            <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Conversation and social interaction</li>
              <li>Reading and storytelling</li>
              <li>Light exercises and walks</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1 mt-auto">
            <div className="flex justify-between text-sm">
              <span>Basic Plan</span>
              <span className="font-bold text-green-700">₹799</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Premium Plan</span>
              <span className="font-bold text-blue-700">₹1199</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Premium+ Plan</span>
              <span className="font-bold text-purple-700">—</span>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
            Book Now
          </button>
        </div>

        {/* Specialized Care */}
  <div className="card p-6 flex flex-col">
          <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
            <Image
              src="/services.png"
              alt="Specialized Care"
              fill
              className="object-cover"
            />
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              Available 24/7
            </span>
          </div>
          <h2 className="font-bold text-lg mb-1">Specialized Care</h2>
          <p className="text-gray-700 text-sm mb-2">
            Expert care for specific conditions including dementia,
            Alzheimer&apos;s, and post-operative recovery.
          </p>
          <div className="mb-2">
            <div className="font-semibold text-gray-800 text-sm mb-1">
              What&apos;s Included:
            </div>
            <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Dementia and Alzheimer&apos;s care</li>
              <li>Post-operative recovery</li>
              <li>Palliative care support</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1 mt-auto">
            <div className="flex justify-between text-sm">
              <span>Basic Plan</span>
              <span className="font-bold text-green-700">₹1799</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Premium Plan</span>
              <span className="font-bold text-blue-700">₹2499</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Premium+ Plan</span>
              <span className="font-bold text-purple-700">—</span>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
            Book Now
          </button>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-6xl mx-auto py-16 px-2">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why Choose Our Services?
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Professional care with the highest standards of quality, safety, and
          compassion.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-3">
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.24 3 12.91 4.01 13.5 5.09C14.09 4.01 15.76 3 17.5 3C20.5 3 23 5.5 23 8.5C23 13.5 15 21 15 21H12Z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Verified Caregivers</h3>
            <p className="text-gray-600 text-sm">
              Background checked and certified professionals
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-3">
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8v8" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Medical Expertise</h3>
            <p className="text-gray-600 text-sm">
              Licensed nurses and healthcare professionals
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-3">
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Round-the-clock assistance and emergency response
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-3">
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Transparent Pricing</h3>
            <p className="text-gray-600 text-sm">
              Clear, upfront pricing with no hidden fees
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-500 to-green-400">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-8">
            Connect with our care specialists to discuss your specific needs and
            find the perfect care solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold text-lg shadow hover:bg-blue-50"
            >
              Consult Now
            </Link>
            <Link
              href="#"
              className="bg-white/20 border border-white text-white px-6 py-3 rounded-lg font-semibold text-lg shadow hover:bg-white/30"
            >
              Browse Caregivers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
