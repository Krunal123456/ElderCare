import CTA from "../../components/CTA";
import PageShell from "../../components/PageShell";

export default function DailyAssistance() {
  return (
    <PageShell
      title="Daily Assistance"
      description="Personal care and daily living support to maintain comfort and dignity."
    >
      <div className="text-center">
        <p className="text-gray-700 mb-6">
          Help with bathing, grooming, mobility, meal preparation and light
          housekeeping to keep daily life comfortable and safe.
        </p>
        <CTA href="/getstarted" label="Request Daily Assistance" />
      </div>
    </PageShell>
  );
}
