import React from "react";
import Image from "next/image";
import Link from "next/link";

const caregivers = [
  {
    name: "Nurse Priya Sharma",
    location: "Mumbai, Maharashtra",
    experience: 8,
    specialties: ["medical", "daily", "specialized"],
    languages: ["Hindi", "English", "Marathi"],
    price: 250,
    dayPrice: 2000,
    rating: 4.9,
    reviews: 127,
    bookings: 340,
    status: "Available",
    image: "/services.png",
    tags: ["8 years exp.", "medical", "daily", "specialized"],
  },
  {
    name: "Caregiver Rajesh Kumar",
    location: "Delhi NCR",
    experience: 5,
    specialties: ["companionship", "daily"],
    languages: ["English", "Punjabi"],
    price: 180,
    dayPrice: 1440,
    rating: 4.8,
    reviews: 88,
    bookings: 215,
    status: "Available",
    image: "/services.png",
    tags: ["5 years exp.", "companionship", "daily"],
  },
  // ...add more caregivers as needed for demo
];

export default function Caregivers() {
  return (
    <div className="bg-[#f9fafc] min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-green-50 pt-25 pb-10 px-2 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Find Trusted Caregivers
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8 text-lg">
          Connect with verified, professional caregivers in your area. All our
          caregivers are background-checked, certified, and committed to
          providing exceptional care for your loved ones.
        </p>
      </section>

      {/* Search & Filters */}
      <section className="max-w-6xl mx-auto px-2 flex flex-col md:flex-row gap-4 pt-15 items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search caregivers by name or specialty..."
          className="w-full md:w-1/2 px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <select className="px-4 py-3 rounded-lg border border-gray-200 shadow-sm">
          <option>All Specialties</option>
        </select>
        <select className="px-4 py-3 rounded-lg border border-gray-200 shadow-sm">
          <option>All Locations</option>
        </select>
        <select className="px-4 py-3 rounded-lg border border-gray-200 shadow-sm">
          <option>All Prices</option>
        </select>
      </section>

      {/* Caregivers List */}
      <section className="max-w-6xl mx-auto px-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">12 Caregivers Available</h2>
          <span className="text-sm text-gray-500">Sort by: Ratings</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caregivers.map((c, idx) => (
            <div key={idx} className="card p-5 flex flex-col">
              <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover"
                />
                <span
                  className={`absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    c.status === "Available"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {c.status}
                </span>
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {c.rating} ★
                </span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-700 font-semibold text-sm">
                  {c.tags[0]}
                </span>
              </div>
              <h3 className="font-bold text-base mb-1">{c.name}</h3>
              <div className="text-gray-600 text-sm mb-1">{c.location}</div>
              <div className="flex flex-wrap gap-2 mb-2">
                {c.specialties.map((s, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {c.languages.map((l, i) => (
                  <span
                    key={i}
                    className="bg-gray-50 text-gray-500 px-2 py-1 rounded-full text-xs"
                  >
                    {l}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-semibold text-green-700">
                  ₹{c.price}/hour
                </span>
                <span className="font-semibold text-blue-700">
                  ₹{c.dayPrice}/day
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>{c.bookings} bookings</span>
                <span>
                  {c.rating} ({c.reviews} reviews)
                </span>
              </div>
                  <Link href="#" className="btn-primary mt-auto">
                    View Profile
                  </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-2 py-12">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Can&apos;t Find the Right Caregiver?
          </h2>
          <p className="text-gray-700 mb-6">
            Let our care specialists help you find the perfect match based on
            your specific needs and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow"
            >
              Get Personal Assistance
            </Link>
            <Link
              href="#"
              className="border-2 border-blue-600 text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-50"
            >
              Join as Caregiver
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
