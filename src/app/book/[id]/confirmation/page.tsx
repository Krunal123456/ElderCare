import CAREGIVERS from "../../../../../public/caregivers";

export default function Confirmation({ params }: { params: { id: string } }) {
  const caregiver = CAREGIVERS.find((c) => c.id === params.id);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl text-center px-4 py-20">
        <h1 className="text-2xl font-bold mb-2">Booking Confirmed</h1>
        <p className="text-gray-700 mb-4">
          Your booking request has been received.
        </p>
        {caregiver && (
          <div className="mb-4">
            <div className="font-semibold">Caregiver: {caregiver.name}</div>
            <div className="text-sm text-gray-600">
              Location: {caregiver.location}
            </div>
          </div>
        )}
        <div className="text-sm text-gray-500">
          We will contact you to confirm details and payment.
        </div>
      </div>
    </div>
  );
}
