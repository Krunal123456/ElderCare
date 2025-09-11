import CTA from "../../components/CTA";
import PageShell from "../../components/PageShell";

export default function Companionship() {
  return (
    <PageShell
      title="Companionship"
      description="Social interaction and emotional support to improve wellbeing."
    >
      <div className="text-center">
        <p className="text-gray-700 mb-6">
          Companionship services include conversation, activity support,
          accompanying to appointments, and emotional support for seniors.
        </p>
        <CTA href="/getstarted" label="Book a Companion" />
      </div>
    </PageShell>
  );
}
