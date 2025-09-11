import CTA from "../../components/CTA";
import PageShell from "../../components/PageShell";

export default function MedicalSupport() {
  return (
    <PageShell
      title="Medical Support"
      description="Nursing and clinical assistance for safe medical care at home."
    >
      <div className="text-center">
        <p className="text-gray-700 mb-6">
          Trained caregivers provide medication management, vital signs
          monitoring, wound care support and coordination with healthcare
          professionals.
        </p>
        <CTA href="/getstarted" label="Book Medical Support" />
      </div>
    </PageShell>
  );
}
