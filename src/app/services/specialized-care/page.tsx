import CTA from "../../components/CTA";
import PageShell from "../../components/PageShell";

export default function SpecializedCare() {
  return (
    <PageShell
      title="Specialized Care"
      description="Condition-specific care for dementia, palliative support, and recovery."
    >
      <div className="text-center">
        <p className="text-gray-700 mb-6">
          Specialized care for dementia, post-operative needs, palliative care
          and other complex health conditions with trained, certified staff.
        </p>
        <CTA href="/getstarted" label="Request Specialized Care" />
      </div>
    </PageShell>
  );
}
