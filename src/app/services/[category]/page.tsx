import React from "react";
import PageShell from "../../components/PageShell";
import Link from "next/link";

const CATEGORIES: Record<string, { title: string; description: string }> = {
  "medical-support": {
    title: "Medical Support",
    description:
      "Professional nursing care, medication management, and health monitoring.",
  },
  "daily-assistance": {
    title: "Daily Assistance",
    description:
      "Comprehensive support for personal daily activities, meals, and household needs.",
  },
  companionship: {
    title: "Companionship",
    description:
      "Social interaction and emotional support to improve wellbeing.",
  },
  "specialized-care": {
    title: "Specialized Care",
    description:
      "Expert care for conditions like dementia, post-op recovery and more.",
  },
};

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const meta = CATEGORIES[params.category] || {
    title: params.category.replace(/-/g, " "),
    description: "",
  };

  return (
    <PageShell title={meta.title} description={meta.description}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="card p-6">
              <h2 className="text-2xl font-bold mb-2">{meta.title}</h2>
              <p className="text-gray-700 mb-4">{meta.description}</p>

              <div className="mb-4">
                <div className="font-semibold text-gray-800 text-sm mb-1">
                  What&apos;s Included:
                </div>
                <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
                  <li>Personalized care plan</li>
                  <li>Verified professionals</li>
                  <li>Flexible scheduling</li>
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Starting</div>
                  <div className="font-semibold">₹999 / month</div>
                </div>
                <Link
                  href={`/book/service/${params.category}`}
                  className="btn-primary"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-4 border rounded-lg bg-gray-50">
              <div className="font-semibold mb-2">Quick Actions</div>
              <Link
                href="/find-caregivers"
                className="block text-blue-600 hover:underline"
              >
                Find Caregivers
              </Link>
              <Link
                href="/pricing"
                className="block text-blue-600 hover:underline"
              >
                View Pricing
              </Link>
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <div className="font-semibold mb-2">Need Help?</div>
              <div className="text-sm text-gray-600 mb-3">
                Call our 24/7 support for urgent assistance.
              </div>
              <a href="tel:+919119113737" className="inline-block btn-primary">
                Call Emergency
              </a>
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
