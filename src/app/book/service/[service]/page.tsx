"use client";
import React, { useState, useRef } from "react";
import { saveBooking } from "../../../../lib/firebaseClient";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

type FormErrors = Partial<Record<string, string>>;

export default function BookServicePage({
  params,
}: {
  params: { service: string };
}) {
  const router = useRouter();
  const serviceSlug = params.service;
  const serviceTitle = serviceSlug.replace(/-/g, " ");

  // Refs for each field (must be inside the component)
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const timeOfDayRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const hoursPerDayRef = useRef<HTMLInputElement>(null);

  const refsMap: Record<string, React.RefObject<HTMLInputElement | null>> = {
    name: nameRef,
    email: emailRef,
    phone: phoneRef,
    address: addressRef,
    startDate: startDateRef,
    timeOfDay: timeOfDayRef,
    endDate: endDateRef,
    hoursPerDay: hoursPerDayRef,
  };

  // Step: 1 = details, 2 = payment
  const [step, setStep] = useState<number>(1);

  // Booking data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [timeOfDay, setTimeOfDay] = useState<string>("09:00");
  const [hoursPerDay, setHoursPerDay] = useState<number>(2);
  const [plan, setPlan] = useState<"basic" | "premium" | "premium_plus">(
    "basic"
  );
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  // Only show errors if field is touched or form is submitted
  function showError(field: string) {
    return (touched[field] || submitted) && errors[field];
  }

  const planBenefits: Record<string, string[]> = {
    basic: [
      "Personal care assistance",
      "Medication reminders",
      "Light housekeeping",
    ],
    premium: [
      "All Basic benefits",
      "Meal preparation",
      "Physical exercise support",
    ],
    premium_plus: [
      "All Premium benefits",
      "Specialized care",
      "Priority scheduling",
    ],
  };

  // Payment fields (dummy)
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [payLoading, setPayLoading] = useState(false);

  function computeDetailErrors() {
    const e: FormErrors = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email";
    if (!phone.trim()) e.phone = "Phone is required";
    else if (!/^\+?[0-9\-\s]{7,15}$/.test(phone))
      e.phone = "Enter a valid phone";
    if (!address.trim()) e.address = "Address is required";
    if (serviceSlug === "daily-assistance") {
      if (!startDate) e.startDate = "Start date is required";
      if (!endDate) e.endDate = "End date is required";
      if (startDate && endDate) {
        const s = new Date(startDate).getTime();
        const t = new Date(endDate).getTime();
        if (isNaN(s) || isNaN(t) || t < s)
          e.endDate = "End must be same or after start";
      }
      if (!hoursPerDay || hoursPerDay <= 0)
        e.hoursPerDay = "Enter hours per day";
      if (!timeOfDay) e.timeOfDay = "Select time of day";
    } else {
      if (!startDate) e.startDate = "Preferred date/time is required";
    }
    return e;
  }

  function validateDetails() {
    const e = computeDetailErrors();
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // shared amount calculation used by UI and payment
  function computeDaysAndHours() {
    const rates: Record<string, number> = {
      basic: 100,
      premium: 150,
      premium_plus: 200,
    };
    if (serviceSlug === "daily-assistance") {
      if (!startDate || !endDate) return { days: 0, totalHours: 0, amount: 0 };
      const s = new Date(startDate.split("T")[0]).setHours(0, 0, 0, 0);
      const t = new Date(endDate.split("T")[0]).setHours(0, 0, 0, 0);
      if (!isFinite(s) || !isFinite(t) || t < s)
        return { days: 0, totalHours: 0, amount: 0 };
      // Inclusive of both start and end date
      const days = Math.floor((t - s) / (1000 * 60 * 60 * 24)) + 1;
      const hrsPerDay = Number(hoursPerDay) || 0;
      const totalHours = days * hrsPerDay;
      const amount = rates[plan] * totalHours;
      return { days, totalHours, amount };
    }
    const fixed = plan === "basic" ? 999 : plan === "premium" ? 1499 : 1899;
    return { days: undefined, totalHours: undefined, amount: fixed } as const;
  }

  function startPayment(e?: React.FormEvent) {
    e?.preventDefault();
    setSubmitted(true);
    const valid = validateDetails();
    if (!valid) {
      // Find first error field and scroll to it
      const errorFields = [
        "name",
        "email",
        "phone",
        "address",
        "startDate",
        "timeOfDay",
        "endDate",
        "hoursPerDay",
      ];
      for (const field of errorFields) {
        if (errors[field]) {
          refsMap[field]?.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          refsMap[field]?.current?.focus();
          break;
        }
      }
      return;
    }
    setStep(2);
  }

  function validatePayment() {
    const e: FormErrors = {};
    if (!cardName.trim()) e.cardName = "Name on card required";
    if (
      !cardNumber.trim() ||
      !/^\d{12,19}$/.test(cardNumber.replace(/\s+/g, ""))
    )
      e.cardNumber = "Enter a valid card number";
    if (!expiry.trim()) e.expiry = "Expiry required";
    if (!cvv.trim() || !/^\d{3,4}$/.test(cvv)) e.cvv = "Enter CVV";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function payNow(e?: React.FormEvent) {
    e?.preventDefault();
    if (!validatePayment()) return;
    setPayLoading(true);

    // simulate payment delay
    setTimeout(async () => {
      const timestamp = Date.now();
      const bookingKey = `sathilo_booking_${serviceSlug}_${timestamp}`;
      const { days, totalHours, amount } = computeDaysAndHours();

      type Booking = {
        id: string;
        service: string;
        title: string;
        name: string;
        email: string;
        phone: string;
        address: string;
        startDate: string | undefined;
        timeOfDay: string | undefined;
        endDate: string | undefined;
        days?: number;
        hoursPerDay?: number;
        totalHours?: number;
        plan: string;
        notes: string;
        amount: number;
        paidAt: string;
        payment: { method: string; last4: string };
        user?: { uid: string; email: string | null };
      };

      const booking: Booking = {
        id: bookingKey,
        service: serviceSlug,
        title: serviceTitle,
        name,
        email,
        phone,
        address,
        startDate,
        timeOfDay,
        endDate,
        days,
        hoursPerDay:
          serviceSlug === "daily-assistance" ? hoursPerDay : undefined,
        totalHours,
        plan,
        notes,
        amount,
        paidAt: new Date().toISOString(),
        payment: {
          method: "card",
          last4: cardNumber.slice(-4),
        },
      };

      try {
        sessionStorage.setItem(bookingKey, JSON.stringify(booking));
      } catch {
        // ignore storage errors
      }

      // attach current user if available
      try {
        const auth = getAuth();
        const u = auth.currentUser;
        if (u) {
          booking.user = { uid: u.uid, email: u.email || null };
        }
      } catch {
        // ignore auth read errors in case firebase not initialized
      }

      // try saving to Firestore via client helper (best-effort)
      try {
        await saveBooking(bookingKey, booking);
      } catch (saveErr) {
        // non-fatal — booking still stored in sessionStorage
        console.warn("Booking save failed", saveErr);
      }

      setPayLoading(false);
      // navigate to confirmation with key
      router.push(
        `/book/service/${serviceSlug}/confirmation?key=${encodeURIComponent(
          bookingKey
        )}`
      );
    }, 900);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      <div className="w-full px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full border border-blue-100">
          <h1 className="text-3xl font-extrabold mb-2 text-blue-700 flex items-center gap-2">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#38bdf8" />
              <path
                d="M8 12l2 2 4-4"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Book {serviceTitle}
          </h1>
          <p className="text-base text-gray-700 mb-6">
            Fill in the details below to request this service. You&apos;ll be
            taken to a dummy payment page next, and then an invoice will be
            generated.
          </p>

          {step === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <form onSubmit={startPayment} className="space-y-4 lg:col-span-3">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full name
                  </label>
                  <input
                    ref={nameRef}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (touched.name || submitted) validateDetails();
                    }}
                    onBlur={() => {
                      setTouched((t) => ({ ...t, name: true }));
                      validateDetails();
                    }}
                    className={`w-full border px-3 py-2 rounded ${
                      showError("name") ? "border-red-500" : ""
                    }`}
                    placeholder="e.g. Sangeeta Sharma"
                    required
                  />
                  {showError("name") && (
                    <div className="text-red-600 text-sm mt-1">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    ref={emailRef}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (touched.email || submitted) validateDetails();
                    }}
                    onBlur={() => {
                      setTouched((t) => ({ ...t, email: true }));
                      validateDetails();
                    }}
                    className={`w-full border px-3 py-2 rounded ${
                      showError("email") ? "border-red-500" : ""
                    }`}
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                  {showError("email") && (
                    <div className="text-red-600 text-sm mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    ref={phoneRef}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (touched.phone || submitted) validateDetails();
                    }}
                    onBlur={() => {
                      setTouched((t) => ({ ...t, phone: true }));
                      validateDetails();
                    }}
                    className={`w-full border px-3 py-2 rounded ${
                      showError("phone") ? "border-red-500" : ""
                    }`}
                    placeholder="+91 98765 43210"
                    required
                    type="tel"
                  />
                  {showError("phone") && (
                    <div className="text-red-600 text-sm mt-1">
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <input
                    ref={addressRef}
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      if (touched.address || submitted) validateDetails();
                    }}
                    onBlur={() => {
                      setTouched((t) => ({ ...t, address: true }));
                      validateDetails();
                    }}
                    className={`w-full border px-3 py-2 rounded ${
                      showError("address") ? "border-red-500" : ""
                    }`}
                    placeholder="House, Street, City, State"
                    required
                  />
                  {showError("address") && (
                    <div className="text-red-600 text-sm mt-1">
                      {errors.address}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Start date
                  </label>
                  <input
                    ref={startDateRef}
                    type="date"
                    value={startDate ? startDate.split("T")[0] : ""}
                    onChange={(e) => {
                      const d = e.target.value
                        ? `${e.target.value}T${timeOfDay}`
                        : "";
                      setStartDate(d);
                      if (touched.startDate || submitted) validateDetails();
                    }}
                    onBlur={() => {
                      setTouched((t) => ({ ...t, startDate: true }));
                      validateDetails();
                    }}
                    className={`w-full border px-3 py-2 rounded ${
                      showError("startDate") ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {showError("startDate") && (
                    <div className="text-red-600 text-sm mt-1">
                      {errors.startDate}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Time of day
                  </label>
                  <input
                    ref={timeOfDayRef}
                    type="time"
                    value={timeOfDay}
                    onChange={(e) => {
                      setTimeOfDay(e.target.value);
                      if (startDate)
                        setStartDate((prev) =>
                          prev
                            ? `${prev.split("T")[0]}T${e.target.value}`
                            : prev
                        );
                      if (endDate)
                        setEndDate((prev) =>
                          prev
                            ? `${prev.split("T")[0]}T${e.target.value}`
                            : prev
                        );
                      if (touched.timeOfDay || submitted) validateDetails();
                    }}
                    onBlur={() => {
                      setTouched((t) => ({ ...t, timeOfDay: true }));
                      validateDetails();
                    }}
                    className={`w-full border px-3 py-2 rounded ${
                      showError("timeOfDay") ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {showError("timeOfDay") && (
                    <div className="text-red-600 text-sm mt-1">
                      {errors.timeOfDay}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    End date
                  </label>
                  <input
                    ref={endDateRef}
                    type="date"
                    value={endDate ? endDate.split("T")[0] : ""}
                    onChange={(e) => {
                      const d = e.target.value
                        ? `${e.target.value}T${timeOfDay}`
                        : "";
                      setEndDate(d);
                      if (touched.endDate || submitted) validateDetails();
                    }}
                    onBlur={() => {
                      setTouched((t) => ({ ...t, endDate: true }));
                      validateDetails();
                    }}
                    className={`w-full border px-3 py-2 rounded ${
                      showError("endDate") ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {showError("endDate") && (
                    <div className="text-red-600 text-sm mt-1">
                      {errors.endDate}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Plan
                    </label>
                    <select
                      value={plan}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setPlan(
                          e.target.value as "basic" | "premium" | "premium_plus"
                        )
                      }
                      className="w-full border px-3 py-2 rounded"
                    >
                      <option value="basic">Basic — ₹100/hr</option>
                      <option value="premium">Premium — ₹150/hr</option>
                      <option value="premium_plus">Premium+ — ₹200/hr</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Hours per day
                    </label>
                    <input
                      ref={hoursPerDayRef}
                      type="number"
                      min={1}
                      value={hoursPerDay}
                      onChange={(e) => {
                        setHoursPerDay(Number(e.target.value));
                        if (touched.hoursPerDay || submitted) validateDetails();
                      }}
                      onBlur={() => {
                        setTouched((t) => ({ ...t, hoursPerDay: true }));
                        validateDetails();
                      }}
                      className={`w-full border px-3 py-2 rounded ${
                        showError("hoursPerDay") ? "border-red-500" : ""
                      }`}
                      required
                    />
                    {showError("hoursPerDay") && (
                      <div className="text-red-600 text-sm mt-1">
                        {errors.hoursPerDay}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Additional notes
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    rows={3}
                    placeholder="Any special instructions or medical notes"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-sm text-gray-500">Estimated</div>
                    <div className="font-semibold">
                      {(() => {
                        const days = (() => {
                          if (!startDate || !endDate) return 0;
                          const s = new Date(startDate).getTime();
                          const t = new Date(endDate).getTime();
                          if (!isFinite(s) || !isFinite(t) || t < s) return 0;
                          return Math.max(
                            1,
                            Math.floor((t - s) / (1000 * 60 * 60 * 24)) + 1
                          );
                        })();
                        const totalHours =
                          days > 0
                            ? days * Math.max(1, Math.ceil(hoursPerDay))
                            : 0;
                        const { amount } = computeDaysAndHours();
                        return days > 0
                          ? `₹${amount} (${totalHours}h · ${days}d)`
                          : plan === "basic"
                          ? "₹999"
                          : plan === "premium"
                          ? "₹1499"
                          : "₹1899";
                      })()}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => router.back()}
                      className="btn-ghost"
                    >
                      Cancel
                    </button>
                    {(() => {
                      const detailsValid =
                        Object.keys(computeDetailErrors()).length === 0;
                      return (
                        <button
                          type="submit"
                          disabled={!detailsValid}
                          className="btn-primary"
                        >
                          Proceed to Payment
                        </button>
                      );
                    })()}
                  </div>
                </div>
              </form>

              {/* Sidebar summary */}
              <aside className="bg-gradient-to-br from-blue-100 via-green-50 to-blue-50 p-6 rounded-2xl border border-blue-200 shadow-lg lg:sticky lg:top-24">
                <h4 className="font-bold text-lg mb-3 text-blue-700 flex items-center gap-2">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="6" fill="#38bdf8" />
                    <path
                      d="M8 12l2 2 4-4"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Booking Summary
                </h4>
                <div className="text-base text-gray-800 mb-4 space-y-1">
                  <div>
                    <span className="font-semibold text-blue-700">
                      Service:
                    </span>{" "}
                    {serviceTitle}
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">Plan:</span>{" "}
                    <span className="capitalize">
                      {plan.replace("_", " + ")}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">Start:</span>{" "}
                    {startDate ? new Date(startDate).toLocaleString() : "—"}
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">End:</span>{" "}
                    {endDate ? new Date(endDate).toLocaleString() : "—"}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm font-semibold mb-2 text-green-700 flex items-center gap-1">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" fill="#22c55e" />
                      <path
                        d="M8 12l2 2 4-4"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    What&apos;s included
                  </div>
                  <ul className="space-y-1">
                    {planBenefits[plan]?.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" fill="#38bdf8" />
                          <path
                            d="M8 12l2 2 4-4"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2 border-t border-blue-200">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">
                      {startDate &&
                      endDate &&
                      new Date(endDate).getTime() >
                        new Date(startDate).getTime()
                        ? `${Math.max(
                            1,
                            Math.ceil(
                              (new Date(endDate).getTime() -
                                new Date(startDate).getTime()) /
                                (1000 * 60 * 60)
                            )
                          )} h`
                        : "—"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Rate</span>
                    <span className="font-medium">
                      {serviceSlug === "daily-assistance"
                        ? plan === "basic"
                          ? "₹100/hr"
                          : plan === "premium"
                          ? "₹150/hr"
                          : "₹200/hr"
                        : plan === "basic"
                        ? "₹999"
                        : plan === "premium"
                        ? "₹1499"
                        : "₹1899"}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-xl mt-3">
                    <span className="text-blue-700">Total</span>
                    <span className="text-blue-700">
                      {(() => {
                        const { amount } = computeDaysAndHours();
                        return `₹${amount}`;
                      })()}
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={payNow} className="space-y-4">
              <h3 className="text-lg font-semibold">Payment (dummy)</h3>
              <p className="text-sm text-gray-600">
                This is a simulated payment form. No real transactions occur.
              </p>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Name on card
                </label>
                <input
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.cardName && (
                  <div className="text-red-600 text-sm mt-1">
                    {errors.cardName}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Card number
                </label>
                <input
                  value={cardNumber}
                  onChange={(e) =>
                    setCardNumber(e.target.value.replace(/\s+/g, ""))
                  }
                  maxLength={19}
                  inputMode="numeric"
                  className="w-full border px-3 py-2 rounded"
                  placeholder="4242424242424242"
                />
                {errors.cardNumber && (
                  <div className="text-red-600 text-sm mt-1">
                    {errors.cardNumber}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Expiry (MM/YY)
                  </label>
                  <input
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    maxLength={5}
                    placeholder="09/26"
                    className="w-full border px-3 py-2 rounded"
                  />
                  {errors.expiry && (
                    <div className="text-red-600 text-sm mt-1">
                      {errors.expiry}
                    </div>
                  )}
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">CVV</label>
                  <input
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength={4}
                    inputMode="numeric"
                    className="w-full border px-3 py-2 rounded"
                    placeholder="123"
                  />
                  {errors.cvv && (
                    <div className="text-red-600 text-sm mt-1">
                      {errors.cvv}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="text-sm">
                  <div className="text-gray-500">Total</div>
                  <div className="font-semibold">
                    {(() => {
                      const { amount } = computeDaysAndHours();
                      return `₹${amount}`;
                    })()}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-ghost"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={payLoading}
                    className="btn-primary"
                  >
                    {payLoading ? "Processing…" : "Pay (Dummy)"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
