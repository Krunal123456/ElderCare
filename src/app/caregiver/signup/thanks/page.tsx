import React from "react";
import Link from "next/link";

export default function Thanks() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md text-center p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-semibold mb-4">
          Thanks — application received
        </h1>
        <p className="text-gray-600 mb-6">
          We will review your details and reach out if you are shortlisted.
        </p>
        <Link href="/" className="btn-ghost">
          Return home
        </Link>
      </div>
    </div>
  );
}
