"use client";
import CTA from "../components/CTA";
import Link from "next/link";
import { useState } from "react";
import PageShell from "../components/PageShell";

const plans = [
  {
    name: "Basic Care",
    price: { monthly: 999, yearly: 9990 },
    oldPrice: { monthly: 1299, yearly: 12990 },
    features: [
      "Up to 2 caregiver bookings per month",
      "Basic background verification",
      "Phone support during business hours",
      "Standard care services",
      "Basic family dashboard",
      "Mobile app access",
      "Care reports",
      "Emergency contact setup",
      "Limited to 40 hours of care per month",
      "No priority booking",
      "Standard response time",
    ],
    cta: "Start Basic Plan",
    highlight: false,
  },
  {
    name: "Premium Care",
    price: { monthly: 1999, yearly: 19990 },
    oldPrice: { monthly: 2499, yearly: 24990 },
    features: [
      "Unlimited caregiver bookings",
      "Enhanced background verification",
      "24/7 phone & chat support",
      "All care services included",
      "Advanced family dashboard",
      "Priority caregiver matching",
      "Detailed care reports",
      "Emergency SOS button",
      "Family app access",
      "Care plan customization",
      "Medication reminders",
      "Health monitoring",
    ],
    cta: "Start Premium Plan",
    highlight: true,
    tag: "Most Popular",
  },
  {
    name: "Family Care+",
    price: { monthly: 3499, yearly: 34990 },
    oldPrice: { monthly: 4299, yearly: 42990 },
    features: [
      "Everything in Premium Care",
      "Dedicated care manager",
      "Priority 24/7 emergency response",
      "Specialized care services",
      "Advanced health monitoring",
      "Mobile location support",
      "Insurance claim assistance",
      "Concierge coordination with doctors",
      "Monthly care consultations",
      "Custom care protocols",
      "Family training sessions",
      "Respite care planning",
      "End-of-life care support",
      "Legal document assistance",
    ],
    cta: "Start Family Care+",
    highlight: false,
  },
];

const serviceRates = [
  {
    name: "Companion Care",
    price: 150,
    day: 1000,
    features: [
      "Conversation & companionship",
      "Light meal preparation",
      "Medication reminders",
      "Appointment accompaniment",
    ],
  },
  {
    name: "Personal Care",
    price: 200,
    day: 1400,
    features: [
      "Bathing & grooming assistance",
      "Mobility support",
      "Meal preparation",
      "Light housekeeping",
    ],
  },
  {
    name: "Medical Care",
    price: 300,
    day: 2200,
    features: [
      "Medication management",
      "Vital signs monitoring",
      "Wound care",
      "Medical appointment coordination",
    ],
  },
  {
    name: "Specialized Care",
    price: 400,
    day: 3000,
    features: [
      "Specialized training",
      "Cognitive support",
      "Behavioral management",
      "Family education",
    ],
  },
];

const faqs = [
  {
    q: "How does the subscription work?",
    a: "Our subscription plans give you access to our platform and caregiver network. You pay separately for actual care hours based on the caregiver rates.",
  },
  {
    q: "Can I change my plan anytime?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect from your next billing cycle.",
  },
  {
    q: "What if I need emergency care?",
    a: "Premium and Family Care+ plans include 24/7 emergency support. Basic plan members can access emergency care at standard rates.",
  },
  {
    q: "Are there any setup fees?",
    a: "No setup fees! We believe in transparent pricing with no hidden costs.",
  },
  {
    q: "How do I pay for care hours?",
    a: "Care hours are billed separately based on actual usage. We accept all major payment methods and provide detailed invoices.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, you can cancel anytime. Your access continues until the end of your current billing period.",
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  return (
    <PageShell
      title="Pricing"
      description="Flexible plans for hourly, daily, and subscription-based care."
    >
      <div className="bg-gradient-to-b from-blue-50 to-white pb-12">
        <div className="max-w-5xl mx-auto px-4 pt-10 pb-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              className={`font-medium px-2 transition-colors ${
                billing === "monthly" ? "text-blue-700" : "text-gray-500"
              }`}
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
            >
              Monthly
            </button>
            <button
              className="inline-block w-10 h-6 bg-gray-200 rounded-full relative focus:outline-none"
              onClick={() =>
                setBilling(billing === "monthly" ? "yearly" : "monthly")
              }
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-all duration-200 ${
                  billing === "monthly"
                    ? "bg-blue-600 translate-x-0"
                    : "bg-green-500 translate-x-4"
                }`}
              ></span>
            </button>
            <button
              className={`px-2 transition-colors ${
                billing === "yearly" ? "text-blue-700" : "text-gray-400"
              }`}
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
            >
              Yearly
            </button>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Subscription Plans</h2>
          <p className="text-gray-500 mb-8 text-sm">
            Platform access and support features. Care hours billed separately.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card relative p-6 flex flex-col items-center transition-all duration-200 hover:scale-[1.03] hover:border-blue-400 cursor-pointer ${
                  plan.highlight ? "ring-2 ring-blue-500" : ""
                }`}
              >
                {plan.tag && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                    {plan.tag}
                  </span>
                )}
                <div className="font-bold text-lg mb-1">{plan.name}</div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-3xl font-extrabold">
                    ₹{plan.price[billing]}
                  </span>
                  <span className="text-gray-400 line-through text-base">
                    ₹{plan.oldPrice[billing]}
                  </span>
                  <span className="text-gray-500 text-xs">/{billing}</span>
                </div>
                <ul className="text-left text-sm text-gray-700 mb-6 space-y-2">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <CTA label={plan.cta} />
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-2">
            Caregiver Service Rates
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Transparent hourly and daily rates for different types of care
            services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {serviceRates.map((rate) => (
              <div
                key={rate.name}
                className="border border-gray-200 rounded-xl bg-white shadow-sm p-6 flex flex-col items-center transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:border-blue-400 cursor-pointer"
              >
                <div className="font-bold text-lg mb-1">{rate.name}</div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-xl font-extrabold">₹{rate.price}</span>
                  <span className="text-gray-500 text-xs">/hour</span>
                </div>
                <div className="text-gray-400 text-xs mb-2">
                  ₹{rate.day}/day (8 hrs)
                </div>
                <ul className="text-left text-sm text-gray-700 mb-4 space-y-2">
                  {rate.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <div className="font-semibold text-lg mb-2">Need Custom Care?</div>
            <div className="text-gray-600 mb-4">
              We offer customized care packages for unique needs. Get a
              personalized quote from our care specialists.
            </div>
            <CTA label="Get Custom Quote" href="/getstarted" />
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-16">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-blue-400 cursor-pointer"
              >
                <div className="font-semibold mb-1">{faq.q}</div>
                <div className="text-gray-600 text-sm">{faq.a}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-green-400 rounded-xl py-10 px-6 text-white text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
            <p className="mb-4">
              Join thousands of families who trust ElderCare for professional,
              compassionate care. Start with our Basic plan and upgrade anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTA label="Start Free Trial" />
              <Link
                href="/contact"
                className="inline-block border border-white px-5 py-3 rounded-md hover:bg-white hover:text-blue-600 transition font-medium"
              >
                Talk to Expert
              </Link>
            </div>
            <div className="text-xs mt-4 opacity-80">
              14-day free trial • No setup fees • Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
