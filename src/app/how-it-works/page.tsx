import PageShell from "../components/PageShell";
import CTA from "../components/CTA";

export default function HowItWorks() {
  return (
    <PageShell
      title="How It Works"
      description="Three simple steps to find and book the right caregiver."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 border rounded">
          <div className="font-semibold">1. Search</div>
          <div className="text-sm text-gray-600">
            Tell us what you need and browse caregivers.
          </div>
        </div>
        <div className="p-4 border rounded">
          <div className="font-semibold">2. Match</div>
          <div className="text-sm text-gray-600">
            We match verified caregivers based on skills and availability.
          </div>
        </div>
        <div className="p-4 border rounded">
          <div className="font-semibold">3. Confirm</div>
          <div className="text-sm text-gray-600">
            Schedule a session and pay securely through the platform.
          </div>
        </div>
      </div>

      <div className="text-center">
        <CTA href="/getstarted" label="Get Started" />
      </div>
    </PageShell>
  );
}
