"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Booking = {
  id: string;
  service: string;
  title: string;
  name: string;
  email?: string;
  phone: string;
  address: string;
  startDate?: string;
  endDate?: string;
  plan: string;
  hours?: number;
  notes?: string;
  days?: number;
  totalHours?: number;
  amount: number;
  paidAt?: string;
  payment?: { method: string; last4?: string };
};

export default function ServiceConfirmation({
  params,
}: {
  params: { service: string };
}) {
  const search = useSearchParams();
  const key = search?.get("key") || null;
  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    if (!key) return;
    try {
      const raw = sessionStorage.getItem(key);
      if (raw) setBooking(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, [key]);

  const title = params.service.replace(/-/g, " ");

  function printInvoice() {
    window.print();
  }

  return (
    <div className="min-h-screen flex items-start justify-center py-12 bg-gray-50">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-2">
          Booking {booking ? "Confirmed" : "Received"}
        </h1>
        <p className="text-gray-700 mb-4">
          {booking ? (
            <>
              Thank you, <strong>{booking.name}</strong>. Your booking for{" "}
              <strong>{booking.title}</strong> is confirmed.
            </>
          ) : (
            <>
              We have received your booking for <strong>{title}</strong>. This
              is a dummy invoice for demo purposes.
            </>
          )}
        </p>

        <div className="border rounded p-4 mb-4">
          <div className="flex justify-between mb-2">
            <div>Service</div>
            <div className="font-semibold">{booking?.title ?? title}</div>
          </div>
          <div className="flex justify-between mb-2">
            <div>Start</div>
            <div>
              {booking?.startDate
                ? new Date(booking.startDate).toLocaleString()
                : "—"}
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <div>End</div>
            <div>
              {booking?.endDate
                ? new Date(booking.endDate).toLocaleString()
                : "—"}
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <div>Plan</div>
            <div>{booking?.plan ?? "—"}</div>
          </div>
          <div className="flex justify-between mb-2">
            <div>Days</div>
            <div>{booking?.days ?? "—"}</div>
          </div>
          <div className="flex justify-between mb-2">
            <div>Total hours</div>
            <div>{booking?.totalHours ?? "—"}</div>
          </div>
          <div className="flex justify-between">
            <div>Total</div>
            <div className="font-semibold">
              {booking ? `₹${booking.amount}` : "₹999"}
            </div>
          </div>
        </div>

        {booking && (
          <div className="mb-4 text-sm text-gray-700">
            {booking.email && (
              <div>
                <strong>Email:</strong> {booking.email}
              </div>
            )}
            <div>
              <strong>Booked by:</strong> {booking.name}
            </div>
            <div>
              <strong>Phone:</strong> {booking.phone}
            </div>
            <div>
              <strong>Address:</strong> {booking.address}
            </div>
            {booking.notes && (
              <div>
                <strong>Notes:</strong> {booking.notes}
              </div>
            )}
            <div className="mt-3">
              <strong>Plan benefits</strong>
              <ul className="list-disc ml-5 mt-1 text-sm text-gray-700">
                {booking.plan === "basic" && (
                  <>
                    <li>Personal care assistance</li>
                    <li>Medication reminders</li>
                    <li>Light housekeeping</li>
                  </>
                )}
                {booking.plan === "premium" && (
                  <>
                    <li>All Basic benefits</li>
                    <li>Meal preparation</li>
                    <li>Physical exercise support</li>
                  </>
                )}
                {booking.plan === "premium_plus" && (
                  <>
                    <li>All Premium benefits</li>
                    <li>Specialized care</li>
                    <li>Priority scheduling</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button onClick={printInvoice} className="btn-primary inline-block">
            Print / Download
          </button>
          <Link href="/" className="btn-ghost inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
