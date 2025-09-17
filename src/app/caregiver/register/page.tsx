"use client";
import { useState } from "react";
import { db } from "../../../lib/firebaseClient";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function CaregiverRegistrationPage() {
  // UI colors
  // UI colors (removed unused color variables)

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    experience: "",
    skills: "",
    certifications: "",
    languages: "",
    availability: "",
    expectedSalary: "",
    idProof: null as File | null,
    profilePhoto: null as File | null,
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    // Narrow target to HTMLInputElement for properties like checked/files/value
    const target = e.target as HTMLInputElement;
    const { name, type } = target;
    if (type === "checkbox") {
      const checked = target.checked;
      setForm((f) => ({ ...f, [name]: checked }));
    } else if (type === "file") {
      const file = target.files && target.files[0] ? target.files[0] : null;
      setForm((f) => ({ ...f, [name]: file }));
    } else {
      const value = target.value;
      setForm((f) => ({ ...f, [name]: value }));
    }
  }

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!form.fullName) newErrors.fullName = "Full name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!form.gender) newErrors.gender = "Gender is required";
    if (!form.dob) newErrors.dob = "Date of birth is required";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.state) newErrors.state = "State is required";
    if (!form.pincode) newErrors.pincode = "Pincode is required";
    if (!form.experience) newErrors.experience = "Experience is required";
    if (!form.skills) newErrors.skills = "Skills are required";
    if (!form.languages) newErrors.languages = "Languages are required";
    if (!form.availability) newErrors.availability = "Availability is required";
    if (!form.expectedSalary)
      newErrors.expectedSalary = "Expected salary is required";
    if (!form.idProof) newErrors.idProof = "ID proof is required";
    if (!form.profilePhoto)
      newErrors.profilePhoto = "Profile photo is required";
    if (!form.password) newErrors.password = "Password is required";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!form.agree) newErrors.agree = "You must agree to the terms";
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setSubmitting(true);
    try {
      // TODO: Upload files to storage and get URLs
      // For now, skip file upload and just save text fields
      const dataToSave = {
        ...form,
        idProof: undefined, // TODO: handle file upload
        profilePhoto: undefined, // TODO: handle file upload
        status: "pending",
        createdAt: serverTimestamp(),
      };
      await addDoc(collection(db(), "caregivers"), dataToSave);
      setSubmitted(true);
    } catch (err) {
      alert(
        "Failed to submit: " +
          (err instanceof Error ? err.message : String(err))
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-green-50">
        <div className="max-w-lg w-full p-8 bg-white rounded-2xl shadow-2xl border border-green-100 text-center animate-fade-in">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-2 text-green-700">
            Registration Submitted!
          </h2>
          <p className="text-gray-600 mb-4">
            Your details have been sent for admin approval.
            <br />
            You will be notified once approved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-green-50 py-8 px-2">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-green-100 p-0 md:p-0 overflow-hidden animate-fade-in">
        <div className="bg-gradient-to-r from-green-400/10 to-green-100/60 px-8 py-6 border-b border-green-200 flex flex-col items-center">
          <span className="text-5xl mb-2">🧑‍⚕️</span>
          <h1 className="text-3xl font-extrabold text-green-800 mb-1 tracking-tight">
            Caregiver Registration
          </h1>
          <p className="text-green-700 text-base mb-0">
            Join our trusted network of professional caregivers
          </p>
        </div>
        <form className="space-y-8 px-8 py-8" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-lg font-semibold text-green-700 mb-4">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <span className="text-red-500 text-xs">
                    {errors.fullName}
                  </span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">{errors.email}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">{errors.phone}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-1">Gender</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <span className="text-red-500 text-xs">{errors.gender}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                />
                {errors.dob && (
                  <span className="text-red-500 text-xs">{errors.dob}</span>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block font-medium mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                  placeholder="Enter your address"
                />
                {errors.address && (
                  <span className="text-red-500 text-xs">{errors.address}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                  placeholder="Enter your city"
                />
                {errors.city && (
                  <span className="text-red-500 text-xs">{errors.city}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                  placeholder="Enter your state"
                />
                {errors.state && (
                  <span className="text-red-500 text-xs">{errors.state}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-1">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                  placeholder="Enter your pincode"
                />
                {errors.pincode && (
                  <span className="text-red-500 text-xs">{errors.pincode}</span>
                )}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-green-700 mb-4 mt-8">
              Professional Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">
                  Experience (years)
                </label>
                <input
                  type="number"
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                  placeholder="e.g. 3"
                  min="0"
                />
                {errors.experience && (
                  <span className="text-red-500 text-xs">
                    {errors.experience}
                  </span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-1">Skills</label>
                <input
                  type="text"
                  name="skills"
                  value={form.skills}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                  placeholder="e.g. Elderly care, Nursing"
                />
                {errors.skills && (
                  <span className="text-red-500 text-xs">{errors.skills}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-1">Certifications</label>
                <input
                  type="text"
                  name="certifications"
                  value={form.certifications}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                  placeholder="e.g. BSc Nursing"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">
                  Languages Known
                </label>
                <input
                  type="text"
                  name="languages"
                  value={form.languages}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                  placeholder="e.g. English, Hindi"
                />
                {errors.languages && (
                  <span className="text-red-500 text-xs">
                    {errors.languages}
                  </span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-1">Availability</label>
                <select
                  name="availability"
                  value={form.availability}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                >
                  <option value="">Select</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="live-in">Live-in</option>
                  <option value="shift">Shift</option>
                </select>
                {errors.availability && (
                  <span className="text-red-500 text-xs">
                    {errors.availability}
                  </span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-1">
                  Expected Salary (per month)
                </label>
                <input
                  type="number"
                  name="expectedSalary"
                  value={form.expectedSalary}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                  placeholder="e.g. 20000"
                  min="0"
                />
                {errors.expectedSalary && (
                  <span className="text-red-500 text-xs">
                    {errors.expectedSalary}
                  </span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-1">
                  ID Proof (Aadhaar, PAN, etc.)
                </label>
                <input
                  type="file"
                  name="idProof"
                  accept="image/*,.pdf"
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                />
                {errors.idProof && (
                  <span className="text-red-500 text-xs">{errors.idProof}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-1">Profile Photo</label>
                <input
                  type="file"
                  name="profilePhoto"
                  accept="image/*"
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                />
                {errors.profilePhoto && (
                  <span className="text-red-500 text-xs">
                    {errors.profilePhoto}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-green-700 mb-4 mt-8">
              Account Security
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                  placeholder="Create a password"
                />
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    {errors.password}
                  </span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-green-300 focus:border-green-400 transition"
                  placeholder="Confirm password"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2 accent-green-600"
            />
            <span className="text-sm">
              I agree to the{" "}
              <a href="/terms-of-service" className="underline text-green-600">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="underline text-green-600">
                Privacy Policy
              </a>
            </span>
            {errors.agree && (
              <span className="text-red-500 text-xs ml-2">{errors.agree}</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-xl bg-green-600 text-white font-bold text-lg shadow-md hover:bg-green-700 transition-all duration-200 disabled:opacity-60"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Register as Caregiver"}
          </button>
        </form>
      </div>
    </div>
  );
}
