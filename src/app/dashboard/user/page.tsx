"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type UserProfile = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

export default function UserDashboard() {
  const [user, setUser] = useState<UserProfile | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("userDashboardData");
      if (data) setUser(JSON.parse(data));
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col">
      {/* Header */}
      {/* <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/favicon.svg" alt="ElderCare Logo" className="h-8 w-8" />
          <span className="font-bold text-xl text-blue-900">ElderCare</span>
        </div>
        <nav className="flex gap-6 text-gray-700 text-sm">
          <a href="#" className="hover:text-blue-700">Home</a>
          <a href="#" className="hover:text-blue-700">Services</a>
          <a href="#" className="hover:text-blue-700">Caregivers</a>
          <a href="#" className="hover:text-blue-700">About</a>
          <a href="#" className="hover:text-blue-700">Pricing</a>
          <a href="#" className="hover:text-blue-700">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-gray-600">EN</button>
          <a href="#" className="text-blue-700 font-semibold">Sign In</a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">Get Started</a>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        <h1 className="text-2xl font-bold mb-1">
          {user && (user.firstName || user.lastName) ? (
            <>
              Welcome back, {user.firstName} {user.lastName}{" "}
              <span className="inline-block">👋</span>
            </>
          ) : user && user.email ? (
            <>
              Welcome back, {user.email}{" "}
              <span className="inline-block">👋</span>
            </>
          ) : (
            <>
              Welcome back! <span className="inline-block">👋</span>
            </>
          )}
        </h1>
        <div className="text-gray-500 mb-6">
          {user && user.email ? user.email : ""}
        </div>
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 min-w-[180px] bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-blue-600 font-bold text-2xl">3</span>
            <span className="text-gray-500 text-sm mt-1">Active Bookings</span>
          </div>
          <div className="flex-1 min-w-[180px] bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-green-600 font-bold text-2xl">18</span>
            <span className="text-gray-500 text-sm mt-1">Completed</span>
          </div>
          <div className="flex-1 min-w-[180px] bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-purple-600 font-bold text-2xl">3</span>
            <span className="text-gray-500 text-sm mt-1">Services Used</span>
          </div>
          <div className="flex-1 min-w-[180px] bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-yellow-500 font-bold text-2xl">4.7</span>
            <span className="text-gray-500 text-sm mt-1">Avg Rating Given</span>
          </div>
          <div className="flex-1 min-w-[180px] bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-blue-700 font-bold text-2xl">₹23400</span>
            <span className="text-gray-500 text-sm mt-1">Total Spent</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b mb-6">
          <Link href="/dashboard/user" legacyBehavior>
            <a className="border-b-2 border-blue-600 text-blue-700 font-semibold px-2 pb-2">
              Overview
            </a>
          </Link>
          <Link href="/dashboard/user/patient-info" legacyBehavior>
            <a className="text-gray-500 px-2 pb-2">Patient Info</a>
          </Link>
          <Link href="/dashboard/user/bookings" legacyBehavior>
            <a className="text-gray-500 px-2 pb-2">Bookings</a>
          </Link>
          <Link href="/dashboard/user/services-used" legacyBehavior>
            <a className="text-gray-500 px-2 pb-2">Services Used</a>
          </Link>
          <Link href="/dashboard/user/my-ratings" legacyBehavior>
            <a className="text-gray-500 px-2 pb-2">My Ratings</a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Next Appointment */}
          <div className="col-span-1 bg-white rounded-lg shadow p-6 flex flex-col">
            <div className="font-semibold text-gray-700 mb-2">
              Next Appointment
            </div>
            <div className="text-xs text-gray-500 mb-1">
              Upcoming care session
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-50 p-2 rounded-full">
                <svg
                  width="24"
                  height="24"
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
              <span className="font-semibold text-blue-700">
                Dr. Rajesh Gupta
              </span>
              <span className="text-yellow-500 text-xs">★ 4.8</span>
            </div>
            <div className="text-sm mb-1">
              <b>Date:</b> 2024-01-20
            </div>
            <div className="text-sm mb-1">
              <b>Time:</b> 09:00 AM - 12:00 PM
            </div>
            <div className="text-sm mb-1">
              <b>Service:</b> Medication Management & Health Monitoring
            </div>
            <div className="text-sm mb-1">
              <b>Location:</b> Home Visit
            </div>
            <div className="text-sm mb-2">
              <b>Fee:</b> ₹1200
            </div>
            <div className="flex gap-2 mt-2">
              <button className="bg-blue-50 text-blue-700 px-3 py-1 rounded">
                Chat
              </button>
              <button className="bg-blue-50 text-blue-700 px-3 py-1 rounded">
                Call
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="col-span-1 bg-white rounded-lg shadow p-6 flex flex-col gap-3">
            <div className="font-semibold text-gray-700 mb-2">
              Quick Actions
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-blue-600 text-white py-2 rounded font-semibold">
                Request Care
              </button>
              <button className="bg-white border border-gray-200 py-2 rounded font-semibold">
                Rate Today
              </button>
              <button className="bg-white border border-gray-200 py-2 rounded font-semibold">
                Chat Caregiver
              </button>
              <button className="bg-white border border-gray-200 py-2 rounded font-semibold">
                Emergency
              </button>
            </div>
          </div>

          {/* Patient Overview */}
          <div className="col-span-1 bg-white rounded-lg shadow p-6 flex flex-col">
            <div className="font-semibold text-gray-700 mb-2">
              Patient Overview
            </div>
            <div className="mb-2">
              <div className="text-xs text-gray-500 mb-1">
                Basic Information
              </div>
              <div>
                <b>Name:</b> Mrs. Sunita Mehta
              </div>
              <div>
                <b>Age:</b> 78 years
              </div>
              <div>
                <b>Emergency:</b> +91 98765 43210
              </div>
            </div>
            <div className="mb-2">
              <div className="text-xs text-gray-500 mb-1">
                Health Conditions
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                  Diabetes Type 2
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                  Hypertension
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                  Arthritis
                </span>
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Allergies</div>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                  Penicillin
                </span>
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                  Shellfish
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-white border-t py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="ElderCare Logo" className="h-6 w-6" />
            <span className="font-bold text-blue-900">ElderCare</span>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-gray-600">
            <span>HIPAA Compliant</span>
            <span>Secure Payments</span>
            <span>24/7 Support</span>
            <span>© 2025 ElderCare. All rights reserved.</span>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-4">
          <div className="bg-red-50 border border-red-200 text-red-700 rounded p-3 text-center text-sm">
            <b>Emergency Support:</b> +91-911-ELDERCARE &nbsp;|&nbsp; Available
            24/7 for urgent care situations
          </div>
        </div>
      </footer> */}
    </div>
  );
}
