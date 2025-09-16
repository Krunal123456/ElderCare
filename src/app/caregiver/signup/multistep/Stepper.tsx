"use client";
import React from "react";

export default function Stepper({ step }: { step: number }) {
  const labels = [
    "Basic",
    "Qualifications",
    "Verification",
    "Tier",
    "Availability",
    "Review",
  ];
  return (
    <div className="flex items-center gap-2 mb-4">
      {labels.map((l, i) => (
        <div key={l} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              i <= step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            {i + 1}
          </div>
          <div
            className={`hidden sm:block text-xs ${
              i <= step ? "text-gray-800" : "text-gray-400"
            }`}
          >
            {l}
          </div>
        </div>
      ))}
    </div>
  );
}
