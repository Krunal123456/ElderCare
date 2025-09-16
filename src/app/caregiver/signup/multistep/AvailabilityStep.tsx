import React from "react";

import { CaregiverFormData } from "./page";
type AvailabilityStepProps = {
  data: CaregiverFormData;
  setData: (data: CaregiverFormData) => void;
  errors?: string;
};

export default function AvailabilityStep({
  data,
  setData,
  errors,
}: AvailabilityStepProps) {
  // Placeholder for availability step
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm">Availability</label>
        <div className="text-xs text-gray-600">
          Add your available slots in the previous step.
        </div>
        {errors && <div className="text-xs text-red-600 mt-1">{errors}</div>}
      </div>
    </div>
  );
}
