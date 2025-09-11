import PageShell from "../components/PageShell";
import CTA from "../components/CTA";

export default function FindCaregivers() {
  return (
    <PageShell
      title="Find Caregivers"
      description="Search and connect with professional, background-checked caregivers near you."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 border rounded-lg">
          <div className="font-semibold mb-2">Verified Profiles</div>
          <div className="text-sm text-gray-600">
            ID, background checks and references.
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="font-semibold mb-2">Flexible Scheduling</div>
          <div className="text-sm text-gray-600">
            Book hourly, daily or on subscription.
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="font-semibold mb-2">Secure Payments</div>
          <div className="text-sm text-gray-600">
            Cashless payments and invoices.
          </div>
        </div>
      </div>

      <div className="text-center">
        <CTA href="/getstarted" label="Find Caregivers" />
      </div>
    </PageShell>
  );
}
