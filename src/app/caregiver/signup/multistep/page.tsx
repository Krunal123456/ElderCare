"use client";
import React from "react";

export default function CaregiverMultiStepPlaceholder() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-xl w-full bg-white border rounded-lg shadow p-8">
        <h1 className="text-2xl font-semibold">
          Caregiver signup (placeholder)
        </h1>
        <p className="mt-3 text-gray-600">
          Placeholder page — the multi-step signup has been temporarily removed
          to fix parsing errors. Reintroduce steps in small modules.
        </p>
      </div>
    </div>
  );
}
