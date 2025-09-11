import React from "react";
import CTA from "./CTA";

export default function PageShell({
  title,
  description,
  children,
}: Readonly<{
  title: string;
  description?: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white w-full">
      <header className="bg-gradient-to-r from-blue-600 to-green-400 text-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold">{title}</h1>
          {description && (
            <p className="mt-2 text-white/90 max-w-3xl">{description}</p>
          )}
          <div className="mt-6">
            <CTA href="/getstarted" label="Get Started" />
          </div>
        </div>
      </header>

      {/* Make the main area truly full-width for all content */}
      <main className="w-full px-0 py-0">
        <div className="w-full">
          <div className="prose max-w-none w-full text-gray-700">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
