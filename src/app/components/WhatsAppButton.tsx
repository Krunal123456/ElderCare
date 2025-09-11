"use client";
import React from "react";

export default function WhatsAppButton() {
  const phone = "919665229370"; // international format without +
  const message = "i need help from sathilo"; // as requested
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className="fixed bottom-5 right-5 z-[2000] flex items-center gap-3 pointer-events-auto"
      aria-hidden={false}
    >
      {/* Top pill message (visible on md+) */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3"
        aria-label="Contact Sathilo on WhatsApp"
      >
        {/* Pill message always visible (small screens too) */}
        <div className="items-center px-3 py-2 bg-[#25D366]/95 text-white rounded-full shadow-lg hover:bg-[#25D366]/100 transition hidden sm:flex">
          <span className="text-sm font-medium">Need help? Connect here</span>
        </div>

        {/* Floating round WhatsApp button (green background, white icon) */}
        <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition ring-2 ring-white/10">
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M20.52 3.48A11.95 11.95 0 0012 0C5.373 0 0 5.373 0 12c0 2.116.553 4.085 1.606 5.84L0 24l6.43-1.61A11.941 11.941 0 0012 24c6.627 0 12-5.373 12-12 0-3.197-1.247-6.197-3.48-8.52z"
              fill="#25D366"
            />
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.768.967-.942 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.52-.074-.149-.672-1.62-.921-2.22-.242-.583-.487-.504-.672-.513l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 2.981 1.288 2.981.86 3.517.808.536-.051 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"
              fill="#fff"
            />
          </svg>
        </div>
      </a>
    </div>
  );
}
