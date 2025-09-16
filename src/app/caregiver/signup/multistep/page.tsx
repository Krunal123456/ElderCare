"use client";
import React, { useState, useEffect } from "react";

interface CaregiverFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  qualifications: string;
  certificateUrl: string;
  aadhar: string;
  policeDoc: string;
  tier: string;
  availability: string;
}

const initialFormData: CaregiverFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  qualifications: "",
  certificateUrl: "",
  aadhar: "",
  policeDoc: "",
  tier: "",
  availability: "",
};

const steps = [
  "Basic Info",
  "Qualifications",
  "Documents",
  "Availability",
  "Review",
];

export default function CaregiverMultiStepSignup() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<CaregiverFormData>(initialFormData);

  useEffect(() => {
    const saved = localStorage.getItem("caregiverSignup");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("caregiverSignup", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Submitted! (implement backend call)");
  };

  function renderStep() {
    switch (step) {
      case 0:
        return (
          <div>
            <h2>Basic Info</h2>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
            <input name="city" value={formData.city} onChange={handleChange} placeholder="City" />
          </div>
        );
      case 1:
        return (
          <div>
            <h2>Qualifications</h2>
            <input name="qualifications" value={formData.qualifications} onChange={handleChange} placeholder="Qualifications" />
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Documents</h2>
            <input name="certificateUrl" value={formData.certificateUrl} onChange={handleChange} placeholder="Certificate URL" />
            <input name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Aadhar" />
            <input name="policeDoc" value={formData.policeDoc} onChange={handleChange} placeholder="Police Doc" />
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Availability</h2>
            <input name="availability" value={formData.availability} onChange={handleChange} placeholder="Availability" />
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Review</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          {steps.map((label, idx) => (
            <div key={label} className={`flex-1 text-center ${idx === step ? "font-bold" : "text-gray-400"}`}>{label}</div>
          ))}
        </div>
      </div>
      {renderStep()}
      <div className="mt-4 flex justify-between">
        <button type="button" onClick={prevStep} disabled={step === 0} className="btn">Back</button>
        {step < steps.length - 1 ? (
          <button type="button" onClick={nextStep} className="btn">Next</button>
        ) : (
          <button type="submit" className="btn">Submit</button>
        )}
      </div>
    </form>
  );
}
"use client";
import React, { useState, useEffect } from "react";

// Example: import your step components here
// import BasicInfoStep from "./BasicInfoStep";
// import AvailabilityStep from "./AvailabilityStep";

// Define the form data type
interface CaregiverFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  qualifications: string;
  certificateUrl: string;
  aadhar: string;
  policeDoc: string;
  tier: string;
  availability: string;
}

interface ErrorMap {
  [key: string]: string;
}

const initialFormData: CaregiverFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  qualifications: "",
  certificateUrl: "",
  aadhar: "",
  policeDoc: "",
  tier: "",
  availability: "",
};

const steps = [
  "Basic Info",
  "Qualifications",
  "Documents",
  "Availability",
  "Review",
];

"use client";
import React, { useState, useEffect } from "react";

interface CaregiverFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  qualifications: string;
  certificateUrl: string;
  aadhar: string;
  policeDoc: string;
  tier: string;
  availability: string;
}

const initialFormData: CaregiverFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  qualifications: "",
  certificateUrl: "",
  aadhar: "",
  policeDoc: "",
  tier: "",
  availability: "",
};

const steps = [
  "Basic Info",
  "Qualifications",
  "Documents",
  "Availability",
  "Review",
];

export default function CaregiverMultiStepSignup() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<CaregiverFormData>(initialFormData);

  useEffect(() => {
    const saved = localStorage.getItem("caregiverSignup");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("caregiverSignup", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Submitted! (implement backend call)");
  };

  function renderStep() {
    switch (step) {
      case 0:
        return (
          <div>
            <h2>Basic Info</h2>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
            <input name="city" value={formData.city} onChange={handleChange} placeholder="City" />
          </div>
        );
      case 1:
        return (
        </div>
      </div>
      {renderStep()}
      <div className="mt-4 flex justify-between">
        <button type="button" onClick={prevStep} disabled={step === 0} className="btn">Back</button>
        {step < steps.length - 1 ? (
          <button type="button" onClick={nextStep} className="btn">Next</button>
        ) : (
          <button type="submit" className="btn">Submit</button>
        )}
      </div>
    </form>
  );
}

        <label className="block text-sm">City</label>          value={data.city}

        <input          onChange={(e) => setData({ ...data, city: e.target.value })}

          placeholder="City, e.g. Mumbai"          className="border px-3 py-2 w-full rounded"

          value={data.city}        />

          onChange={(e) => setData({ ...data, city: e.target.value })}      </div>

          className="border px-3 py-2 w-full rounded"    </div>

        />  );

      </div>}

    </div>

  );export default function CaregiverMultiStep({ googleUser }: { googleUser?: any }) {

}  const [step, setStep] = useState(0);

  const [data, setData] = useState<CaregiverFormData>({

export default function CaregiverMultiStep({ googleUser }: { googleUser?: any }) {    name: googleUser?.displayName || "",

  const [step, setStep] = useState(0);    email: googleUser?.email || "",

  const [data, setData] = useState<CaregiverFormData>({    photoURL: googleUser?.photoURL || "",

  // All code after this line removed...
}

    email: googleUser?.email || "",    dob: "",

    photoURL: googleUser?.photoURL || "",    city: "",

    phone: googleUser?.phoneNumber || "",    qualifications: "",

    dob: "",    certificateUrl: "",

    city: "",    aadhar: "",

    qualifications: "",    policeDoc: "",

    certificateUrl: "",    tier: "gold",

    aadhar: "",    availability: { slots: [] },

    policeDoc: "",    status: "pending",

    tier: "gold",  });

    availability: { slots: [] },  const [errors, setErrors] = useState<ErrorMap>({});

    status: "pending",

  });  return (

  const [errors, setErrors] = useState<ErrorMap>({});    <div className="w-full min-h-screen bg-white">

      <div className="w-full px-4 md:px-8 py-12">

  return (        <h1 className="text-2xl font-semibold mb-4">Caregiver Signup (Multi-step)</h1>

    <div className="w-full min-h-screen bg-white">        <Stepper step={step} />

      <div className="w-full px-4 md:px-8 py-12">        <div className="w-full bg-white border rounded p-6">

        <h1 className="text-2xl font-semibold mb-4">Caregiver Signup (Multi-step)</h1>          {step === 0 && <BasicStep data={data} setData={setData} errors={errors} />}

        <Stepper step={step} />          {/* Add other steps here */}

        <div className="w-full bg-white border rounded p-6">        </div>

          {step === 0 && <BasicStep data={data} setData={setData} errors={errors} />}      </div>

          {/* Add other steps here */}    </div>

        </div>  );

      </div>}

    </div>"use client";

  );import React, { useState } from "react";

}import Stepper from "./Stepper";

import AvailabilityStep from "./AvailabilityStep";

type ErrorMap = Record<string, string>;
type Slot = { date: string; from: string; to: string };
export type CaregiverFormData = {
  name: string;
  email: string;
  photoURL: string;
  phone: string;
  dob: string;
  city: string;
  qualifications: string;
  certificateUrl: string;
  aadhar: string;
  policeDoc: string;
  tier: string;
  availability: {
    slots: Slot[];
    [key: string]: unknown;
  };
  status: string;
};

type BasicStepProps = {
  data: CaregiverFormData;
  setData: (data: CaregiverFormData) => void;
  errors: ErrorMap;
};
function BasicStep({ data, setData, errors }: BasicStepProps) {
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm">Full name</label>
        <input
          placeholder="e.g. Priya Kumar"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className={`px-3 py-2 w-full rounded ${errors?.name ? "border-red-600 border" : "border"}`}
        />
        {errors?.name && <div className="text-xs text-red-600 mt-1">{errors.name}</div>}
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input
          placeholder="you@example.com"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className={`px-3 py-2 w-full rounded ${errors?.email ? "border-red-600 border" : "border"}`}
        />
        {errors?.email && <div className="text-xs text-red-600 mt-1">{errors.email}</div>}
      </div>
      <div>
        <label className="block text-sm">Phone</label>
        <input
          placeholder="Mobile number with country code"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          className={`px-3 py-2 w-full rounded ${errors?.phone ? "border-red-600 border" : "border"}`}
        />
        {errors?.phone && <div className="text-xs text-red-600 mt-1">{errors.phone}</div>}
      </div>
      <div>
        <label className="block text-sm">DOB</label>
        <input
          type="date"
          value={data.dob}
          onChange={(e) => setData({ ...data, dob: e.target.value })}
          className="border px-3 py-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block text-sm">City</label>
        <input
          placeholder="City, e.g. Mumbai"
          value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
          className="border px-3 py-2 w-full rounded"
        />
      </div>
    </div>
  );
}
"use client";
import React, { useState } from "react";
import Stepper from "./Stepper";
import AvailabilityStep from "./AvailabilityStep";

type ErrorMap = Record<string, string>;
type Slot = { date: string; from: string; to: string };
export type CaregiverFormData = {
  name: string;
  email: string;
  photoURL: string;
  phone: string;
  dob: string;
  city: string;
  qualifications: string;
  certificateUrl: string;
  aadhar: string;
  policeDoc: string;
  tier: string;
  availability: {
    slots: Slot[];
    [key: string]: unknown;
  };
  status: string;
};

type BasicStepProps = {
  data: CaregiverFormData;
  setData: (data: CaregiverFormData) => void;
  errors: ErrorMap;
};
function BasicStep({ data, setData, errors }: BasicStepProps) {
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm">Full name</label>
        <input
          placeholder="e.g. Priya Kumar"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className={`px-3 py-2 w-full rounded ${errors?.name ? "border-red-600 border" : "border"}`}
        />
        {errors?.name && <div className="text-xs text-red-600 mt-1">{errors.name}</div>}
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input
          placeholder="you@example.com"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className={`px-3 py-2 w-full rounded ${errors?.email ? "border-red-600 border" : "border"}`}
        />
        {errors?.email && <div className="text-xs text-red-600 mt-1">{errors.email}</div>}
      </div>
      <div>
        <label className="block text-sm">Phone</label>
        <input
          placeholder="Mobile number with country code"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          className={`px-3 py-2 w-full rounded ${errors?.phone ? "border-red-600 border" : "border"}`}
        />
        {errors?.phone && <div className="text-xs text-red-600 mt-1">{errors.phone}</div>}
      </div>
      <div>
        <label className="block text-sm">DOB</label>
        <input
          type="date"
          value={data.dob}
          onChange={(e) => setData({ ...data, dob: e.target.value })}
          className="border px-3 py-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block text-sm">City</label>
        <input
          placeholder="City, e.g. Mumbai"
          value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
          className="border px-3 py-2 w-full rounded"
        />
      </div>
    </div>
  );
}

export default function CaregiverMultiStep({ googleUser }: { googleUser?: any }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<CaregiverFormData>({
    name: googleUser?.displayName || "",
    email: googleUser?.email || "",
    photoURL: googleUser?.photoURL || "",
    phone: googleUser?.phoneNumber || "",
    dob: "",
    city: "",
    qualifications: "",
    certificateUrl: "",
    aadhar: "",
    policeDoc: "",
    tier: "gold",
    availability: { slots: [] },
    status: "pending",
  });
  const [errors, setErrors] = useState<ErrorMap>({});

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full px-4 md:px-8 py-12">
        <h1 className="text-2xl font-semibold mb-4">Caregiver Signup (Multi-step)</h1>
        <Stepper step={step} />
        <div className="w-full bg-white border rounded p-6">
          {step === 0 && <BasicStep data={data} setData={setData} errors={errors} />}
          {/* Add other steps here */}
        </div>
      </div>
    </div>
  );
}
"use client";
import React, { useState, useEffect } from "react";
import Stepper from "./Stepper";
import AvailabilityStep from "./AvailabilityStep";

const isEmail = (s: string) => /\S+@\S+\.\S+/.test(s || "");
type ErrorMap = Record<string, string>;
type Slot = { date: string; from: string; to: string };
export type CaregiverFormData = {
  name: string;
  email: string;
  photoURL: string;
  phone: string;
  dob: string;
  city: string;
  qualifications: string;
  certificateUrl: string;
  aadhar: string;
  policeDoc: string;
  tier: string;
  availability: {
    slots: Slot[];
    rangeApply?: boolean;
    rangeFrom?: string;
    rangeTo?: string;
    rangeFromTime?: string;
    rangeToTime?: string;
    [key: string]: unknown;
  };
  status: string;
  _certUploading?: boolean;
  _certProgress?: number;
  _policeUploading?: boolean;
  _policeProgress?: number;
  _slotDate?: string;
  _slotFrom?: string;
  _slotTo?: string;
  [key: string]: unknown;
};

// Example step component
type BasicStepProps = {
  data: CaregiverFormData;
  setData: (data: CaregiverFormData) => void;
  errors: ErrorMap;
};
function BasicStep({ data, setData, errors }: BasicStepProps) {
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm">Full name</label>
        <input
          placeholder="e.g. Priya Kumar"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className={`px-3 py-2 w-full rounded ${errors?.name ? "border-red-600 border" : "border"}`}
        />
        {errors?.name && <div className="text-xs text-red-600 mt-1">{errors.name}</div>}
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input
          placeholder="you@example.com"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className={`px-3 py-2 w-full rounded ${errors?.email ? "border-red-600 border" : "border"}`}
        />
        {errors?.email && <div className="text-xs text-red-600 mt-1">{errors.email}</div>}
      </div>
      <div>
        <label className="block text-sm">Phone</label>
        <input
          placeholder="Mobile number with country code"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          className={`px-3 py-2 w-full rounded ${errors?.phone ? "border-red-600 border" : "border"}`}
        />
        {errors?.phone && <div className="text-xs text-red-600 mt-1">{errors.phone}</div>}
      </div>
      <div>
        <label className="block text-sm">DOB</label>
        <input
          type="date"
          value={data.dob}
          onChange={(e) => setData({ ...data, dob: e.target.value })}
          className="border px-3 py-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block text-sm">City</label>
        <input
          placeholder="City, e.g. Mumbai"
          value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
          className="border px-3 py-2 w-full rounded"
        />
      </div>
    </div>
  );
}

// Other step components (QualificationsStep, VerificationStep, TierStep, ReviewStep) should be similarly defined

// Main multi-step form component
export default function CaregiverMultiStep({ googleUser }: { googleUser?: any }) {
  // Example state and logic
  const [step, setStep] = useState(0);
  const [data, setData] = useState<CaregiverFormData>({
    name: googleUser?.displayName || "",
    email: googleUser?.email || "",
    photoURL: googleUser?.photoURL || "",
    phone: googleUser?.phoneNumber || "",
    dob: "",
    city: "",
    qualifications: "",
    certificateUrl: "",
    aadhar: "",
    policeDoc: "",
    tier: "gold",
    availability: { slots: [] },
    status: "pending",
  });
  const [errors, setErrors] = useState<ErrorMap>({});

  // Example render
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full px-4 md:px-8 py-12">
        <h1 className="text-2xl font-semibold mb-4">Caregiver Signup (Multi-step)</h1>
        <Stepper step={step} />
        <div className="w-full bg-white border rounded p-6">
          {step === 0 && <BasicStep data={data} setData={setData} errors={errors} />}
          {/* Add other steps here */}
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from "react";
import Stepper from "./Stepper";
import AvailabilityStep from "./AvailabilityStep";
const isEmail = (s: string) => /\S+@\S+\.\S+/.test(s || "");
type ErrorMap = Record<string, string>;
type Slot = { date: string; from: string; to: string };
export type CaregiverFormData = {
  name: string;
  email: string;
  photoURL: string;
  phone: string;
  dob: string;
  city: string;
  qualifications: string;
  certificateUrl: string;
  aadhar: string;
  policeDoc: string;
  tier: string;
  availability: {
    slots: Slot[];
    rangeApply?: boolean;
    rangeFrom?: string;
    rangeTo?: string;
    rangeFromTime?: string;
    rangeToTime?: string;
    [key: string]: unknown;
  };
  status: string;
  _certUploading?: boolean;
  _certProgress?: number;
  _policeUploading?: boolean;
  _policeProgress?: number;
  _slotDate?: string;
  _slotFrom?: string;
  _slotTo?: string;
  [key: string]: unknown;
};

// Step components (BasicStep, QualificationsStep, VerificationStep, TierStep, ReviewStep) go here
// ...existing code...

// Main multi-step form component
export default function CaregiverMultiStep({ googleUser }: { googleUser?: any }) {
  // ...existing code...
}
import React, { useState, useEffect } from "react";
import Stepper from "./Stepper";
import AvailabilityStep from "./AvailabilityStep";

const isEmail = (s: string) => /\S+@\S+\.\S+/.test(s || "");
type ErrorMap = Record<string, string>;
type Slot = { date: string; from: string; to: string };
export type CaregiverFormData = {
  name: string;
              const result = reader.result as string;
              setData({
                ...data,
                policeDoc: result,
                _policeUploading: false,
                _policeProgress: 100,
              });
            };
            reader.onerror = () => {
              setData({ ...data, _policeUploading: false });
              alert("Failed to read police document file");
            };
            reader.readAsDataURL(f);
          }}
          className="w-full"
        />
        {data._policeUploading && (
          <div className="text-xs text-gray-600">
            Uploading: {data._policeProgress || 0}%
          </div>
        )}
        {data.policeDoc && (
          <div className="text-xs text-blue-600">
            Uploaded: {" "}
            <a href={data.policeDoc} target="_blank" rel="noreferrer">
              View
            </a>
          </div>
        )}
      </div>
    </div>
  );
          <div className="text-xs text-red-600 mt-1">{errors.email}</div>
        )}
      </div>
      <div>
        <label className="block text-sm">Phone</label>
        <input
          placeholder="Mobile number with country code"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          className={`px-3 py-2 w-full rounded ${
            errors?.phone ? "border-red-600 border" : "border"
          }`}
        />
        {errors?.phone && (
          <div className="text-xs text-red-600 mt-1">{errors.phone}</div>
        )}
      </div>
      <div>
        <label className="block text-sm">DOB</label>
        <input
          type="date"
          value={data.dob}
          onChange={(e) => setData({ ...data, dob: e.target.value })}
          className="border px-3 py-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block text-sm">City</label>
        <input
          placeholder="City, e.g. Mumbai"
          value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
          className="border px-3 py-2 w-full rounded"
        />
      </div>
    </div>
  );
}

type QualificationsStepProps = {
  data: CaregiverFormData;
  setData: (data: CaregiverFormData) => void;
  errors: ErrorMap;
};
function QualificationsStep({ data, setData, errors }: QualificationsStepProps) {
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm">Qualifications</label>
        <textarea
          placeholder="List your certifications, training and experience"
          value={data.qualifications}
          onChange={(e) => setData({ ...data, qualifications: e.target.value })}
          className={`px-3 py-2 w-full rounded ${
            errors?.qualifications ? "border-red-600 border" : "border"
          }`}
        />
        {errors?.qualifications && (
          <div className="text-xs text-red-600 mt-1">
            {errors.qualifications}
          </div>
        )}
      </div>
      <div>
        <label className="block text-sm">Upload certificate</label>
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => {
            const f = e.target.files && e.target.files[0];
            if (!f) return;
            setData({
              ...data,
              _certUploading: true,
              certificateUrl: "",
            });
            const reader = new FileReader();
            reader.onload = () => {
              const result = reader.result as string;
              setData({
                ...data,
                certificateUrl: result,
                _certUploading: false,
                _certProgress: 100,
              });
            };
            reader.onerror = () => {
              setData({ ...data, _certUploading: false });
              alert("Failed to read certificate file");
            };
            reader.readAsDataURL(f);
          }}
          className="w-full"
        />
        {typeof data._certUploading === "boolean" && data._certUploading && (
          <div className="text-xs text-gray-600">
            Uploading: {typeof data._certProgress === "number" ? data._certProgress : 0}%
          </div>
        )}
        {data.certificateUrl && (
          <div className="text-xs text-blue-600">
            Uploaded:{" "}
            <a href={data.certificateUrl} target="_blank" rel="noreferrer">
              View
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

type VerificationStepProps = {
  data: CaregiverFormData;
  setData: (data: CaregiverFormData) => void;
  errors?: ErrorMap;
};
function VerificationStep({ data, setData, errors }: VerificationStepProps) {
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm">Aadhar / National ID</label>
        <input
          value={data.aadhar}
          onChange={(e) => setData({ ...data, aadhar: e.target.value })}
          className="border px-3 py-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block text-sm">Police verification document</label>
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => {
            const f = e.target.files && e.target.files[0];
            if (!f) return;
            setData({
              ...data,
              _policeUploading: true,
              policeDoc: "",
            });
            const reader = new FileReader();
            reader.onload = () => {
              const result = reader.result as string;
              setData({
                ...data,
                policeDoc: result,
                _policeUploading: false,
                _policeProgress: 100,
              });
            };
            reader.onerror = () => {
              setData({ ...data, _policeUploading: false });
              alert("Failed to read police document file");
            };
            reader.readAsDataURL(f);
          }}
          className="w-full"
        />
        {typeof data._policeUploading === "boolean" && data._policeUploading && (
          <div className="text-xs text-gray-600">
            Uploading: {typeof data._policeProgress === "number" ? data._policeProgress : 0}%
          </div>
        )}
        {data.policeDoc && (
          <div className="text-xs text-blue-600">
            Uploaded:{" "}
            <a href={data.policeDoc} target="_blank" rel="noreferrer">
              View
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

type TierStepProps = {
  data: CaregiverFormData;
  setData: (data: CaregiverFormData) => void;
  errors?: ErrorMap;
};
function TierStep({ data, setData, errors }: TierStepProps) {
  const tiers = [
    { id: "gold", name: "Gold", services: ["Basic care", "Weekly check-ins"] },
    // ...other tiers if needed
  ];
  const availability = data.availability || {};
  function addSlot() {
    if (!data._slotDate || !data._slotFrom || !data._slotTo) return;
    const newSlot: Slot = {
      date: data._slotDate || "",
      from: data._slotFrom || "",
      to: data._slotTo || "",
    };
    setData({
      ...data,
      availability: {
        ...availability,
        slots: [...(availability.slots || []), newSlot],
      },
      _slotDate: "",
      _slotFrom: "",
      _slotTo: "",
    });
  }
  function removeSlot(idx: number) {
    setData({
      ...data,
      availability: {
        ...availability,
        slots: (availability.slots || []).filter((_, i: number) => i !== idx),
      },
    });
  }
  function toggleRange() {
    setData({
      ...data,
      availability: {
        ...availability,
        rangeApply: !availability.rangeApply,
      },
    });
  }
  return (
    <div className="space-y-4">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Caregiver Tier *</label>
        <select
          value={data.tier}
          onChange={e => setData({ ...data, tier: e.target.value })}
          className="border px-3 py-2 rounded w-full"
          required
        >
          {tiers.map(t => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
  {errors?.qualifications && <div className="text-xs text-red-600 mt-1">{errors.qualifications}</div>}
      </div>
      {/* Availability slot UI as before */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
        <div>
          <label className="block text-sm">Date</label>
          <input
            type="date"
            value={typeof data._slotDate === "string" ? data._slotDate : ""}
            onChange={e => setData({ ...data, _slotDate: e.target.value })}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm">From</label>
          <input
            type="time"
            value={typeof data._slotFrom === "string" ? data._slotFrom : ""}
            onChange={e => setData({ ...data, _slotFrom: e.target.value })}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm">To</label>
          <input
            type="time"
            value={typeof data._slotTo === "string" ? data._slotTo : ""}
            onChange={e => setData({ ...data, _slotTo: e.target.value })}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
      </div>
      <div className="flex gap-3 mt-2">
        <button type="button" onClick={addSlot} className="btn-primary px-3 py-2">Add slot</button>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={typeof availability.rangeApply === "boolean" ? availability.rangeApply : false} onChange={toggleRange} /> Apply this time to a date range
        </label>
      </div>
      {availability.rangeApply && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-2">
          <div>
            <label className="block text-sm">Range from</label>
            <input type="date" value={typeof availability.rangeFrom === "string" ? availability.rangeFrom : ""} onChange={e => setData({ ...data, availability: { ...availability, rangeFrom: e.target.value } })} className="border px-3 py-2 rounded w-full" />
          </div>
          <div>
            <label className="block text-sm">Range to</label>
            <input type="date" value={typeof availability.rangeTo === "string" ? availability.rangeTo : ""} onChange={e => setData({ ...data, availability: { ...availability, rangeTo: e.target.value } })} className="border px-3 py-2 rounded w-full" />
          </div>
          <div>
            <label className="block text-sm">From time</label>
            <input type="time" value={typeof availability.rangeFromTime === "string" ? availability.rangeFromTime : (typeof data._slotFrom === "string" ? data._slotFrom : "")} onChange={e => setData({ ...data, availability: { ...availability, rangeFromTime: e.target.value } })} className="border px-3 py-2 rounded w-full" />
          </div>
          <div>
            <label className="block text-sm">To time</label>
            <input type="time" value={typeof availability.rangeToTime === "string" ? availability.rangeToTime : (typeof data._slotTo === "string" ? data._slotTo : "")} onChange={e => setData({ ...data, availability: { ...availability, rangeToTime: e.target.value } })} className="border px-3 py-2 rounded w-full" />
          </div>
        </div>
      )}
      <div className="mt-4">
        <label className="block text-sm font-medium">Added slots</label>
        <ul className="mt-2 space-y-2">
          {(availability.slots || []).map((s: Slot, i: number) => (
            <li key={i} className="flex items-center justify-between border rounded p-2">
              <div className="text-sm">{new Date(s.date).toLocaleDateString()} • {s.from} - {s.to}</div>
              <button className="text-sm text-red-600" onClick={() => removeSlot(i)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
  {errors && typeof errors === "string" && <div className="text-sm text-red-600">{errors}</div>}
    </div>
  );
}

type ReviewStepProps = {
  data: CaregiverFormData;
  errors?: ErrorMap;
};
function ReviewStep({ data, errors }: ReviewStepProps) {
  const a = data.availability || { slots: [] };
  return (
    <div className="space-y-4">
      <section className="border rounded p-3">
        <h3 className="font-semibold">Basic details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-sm">
          <div>
            Name: <span className="font-medium">{data.name || <em className="text-red-600">(missing)</em>}</span>
          </div>
          <div>
            Email: <span className="font-medium">{data.email || <em className="text-red-600">(missing)</em>}</span>
          </div>
          <div>
            Phone: <span className="font-medium">{data.phone || <em className="text-red-600">(missing)</em>}</span>
          </div>
          <div>
            City: <span className="font-medium">{data.city || "-"}</span>
          </div>
        </div>
      </section>
      <section className="border rounded p-3">
        <h3 className="font-semibold">Qualifications & Verification</h3>
        <div className="mt-2 text-sm">
          <div>
            Qualifications: <span className="font-medium">{data.qualifications || (<em className="text-red-600">(missing)</em>)}</span>
          </div>
          <div className="mt-1">
            Certificate: {data.certificateUrl ? (
              <a className="text-blue-600" href={data.certificateUrl} target="_blank" rel="noreferrer">View</a>
            ) : (<em className="text-red-600">(missing)</em>)}
          </div>
          <div className="mt-1">
            Aadhar: <span className="font-medium">{data.aadhar || "-"}</span>
          </div>
          <div className="mt-1">
            Police doc: {data.policeDoc ? (
              <a className="text-blue-600" href={data.policeDoc} target="_blank" rel="noreferrer">View</a>
            ) : ("-")}
          </div>
        </div>
      </section>
      <section className="border rounded p-3">
        <h3 className="font-semibold">Tier & Availability</h3>
        <div className="mt-2 text-sm">
          <div>
            Tier: <span className="font-medium">{data.tier}</span>
          </div>
          <div className="mt-2">
            Availability:
            {(a.slots || []).length === 0 ? (
              <em className="text-red-600"> No slots added</em>
            ) : (
              <ul className="mt-2 space-y-1 text-sm">
                {(a.slots || []).map((s: Slot, i: number) => (
                  <li key={i}>{new Date(s.date).toLocaleDateString()} • {s.from} - {s.to}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
      {errors && Object.keys(errors).length > 0 && (
        <div className="text-sm text-red-600">Please fix the highlighted fields before submitting.</div>
      )}
    </div>
  );
}

type GoogleUser = {
  displayName?: string;
  email?: string;
  photoURL?: string;
  phoneNumber?: string;
};
export default function CaregiverMultiStep({ googleUser }: { googleUser?: GoogleUser }) {
  // State hooks must be at the top
  const [step, setStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<ErrorMap>({});
  const [data, setData] = useState<CaregiverFormData>(() => {
    if (googleUser) {
      return {
        name: googleUser.displayName || "",
        email: googleUser.email || "",
        photoURL: googleUser.photoURL || "",
        phone: googleUser.phoneNumber || "",
        dob: "",
        city: "",
        qualifications: "",
        certificateUrl: "",
        aadhar: "",
        policeDoc: "",
        tier: "gold",
        availability: { slots: [] },
        status: "pending",
      };
    }
    return {
      name: "",
      email: "",
      photoURL: "",
      phone: "",
      dob: "",
      city: "",
      qualifications: "",
      certificateUrl: "",
      aadhar: "",
      policeDoc: "",
      tier: "gold",
      availability: { slots: [] },
      status: "pending",
    };
  });

  // Key for localStorage, unique per user
  const storageKey = googleUser?.email ? `caregiverForm_${googleUser.email}` : "caregiverForm_guest";

  // Restore form data from localStorage if available
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
      setData((prev: CaregiverFormData) => ({ ...prev, ...parsed }));
      } catch {}
    }
  }, [googleUser?.email]);

  // Persist form data to localStorage on change
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(storageKey, JSON.stringify(data));
  }, [data, storageKey]);

  async function submit() {
    setSaving(true);
    try {
      // Remove transient upload progress fields before sending
      const caregiverId = data.email || `cg_${Date.now()}`;
      const caregiverPayload = {
        ...data,
        uid: caregiverId,
        role: "caregiver",
        createdAt: new Date().toISOString(),
      };
  delete (caregiverPayload as CaregiverFormData)._certUploading;
  delete (caregiverPayload as CaregiverFormData)._certProgress;
  delete (caregiverPayload as CaregiverFormData)._policeUploading;
  delete (caregiverPayload as CaregiverFormData)._policeProgress;

      // Save directly to Firestore using client SDK
      // Use the shared firebaseClient.ts utilities
      const { initFirebase, db } = await import("@/lib/firebaseClient");
      initFirebase();
      const database = db();
      await (await import("firebase/firestore")).setDoc(
        (await import("firebase/firestore")).doc(database, "caregivers", String(caregiverId)),
        caregiverPayload,
        { merge: true }
      );
      // TODO: show success/failure to user
    } catch {
      // TODO: handle error
    } finally {
      setSaving(false);
    }
  }

  function validateStep(step: number) {
    // Basic validation for each step
  const newErrors: ErrorMap = {};
    if (step === 0) {
      if (!data.name) newErrors.name = "Name is required";
      if (!data.email || !isEmail(data.email)) newErrors.email = "Valid email required";
      if (!data.phone) newErrors.phone = "Phone is required";
    }
    if (step === 1) {
      if (!data.qualifications) newErrors.qualifications = "Qualifications required";
    }
    if (step === 2) {
      if (!data.aadhar) newErrors.aadhar = "Aadhar/ID required";
    }
    if (step === 3) {
      if (!data.tier) newErrors.tier = "Tier required";
    }
    if (step === 4) {
      if (!data.availability || !(data.availability.slots && data.availability.slots.length > 0)) newErrors.availability = "Add at least one slot";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full px-4 md:px-8 py-12">
        <h1 className="text-2xl font-semibold mb-4">Caregiver Signup (Multi-step)</h1>
        <Stepper step={step} />
        <div className="w-full bg-white border rounded p-6">
          {step === 0 && <BasicStep data={data} setData={setData} errors={errors} />}
          {step === 1 && <QualificationsStep data={data} setData={setData} errors={errors} />}
          {step === 2 && <VerificationStep data={data} setData={setData} errors={errors} />}
          {step === 3 && <TierStep data={data} setData={setData} errors={typeof errors.tier === "string" ? { tier: errors.tier } : undefined} />}
          {step === 4 && <AvailabilityStep data={data} setData={setData} errors={typeof errors.availability === "string" ? errors.availability : undefined} />}
          {step === 5 && <ReviewStep data={data} errors={errors} />}
          <div className="flex justify-between mt-6">
            <button disabled={step === 0} onClick={() => setStep((s) => s - 1)} className="btn-ghost px-4 py-2">Back</button>
            {step < 5 && (
              <button onClick={() => { const ok = validateStep(step); if (ok) setStep((s) => s + 1); }} className="btn-primary px-4 py-2">Next</button>
            )}
            {step === 5 && (
              <button onClick={submit} className="btn-primary px-4 py-2" disabled={saving}>{saving ? "Submitting..." : "Submit for Review"}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
