import PageShell from "../components/PageShell";

export default function PrivacyPolicy() {
  return (
    <PageShell
      title="Privacy Policy"
      description="How we collect, use, and protect your personal information."
    >
      <section className="mb-6">
        <h2 className="font-semibold mb-2">Information We Collect</h2>
        <p className="text-sm text-gray-600">
          We collect contact details, care preferences, health-related
          information when voluntarily provided, and usage data to operate and
          improve our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">How We Use Information</h2>
        <p className="text-sm text-gray-600">
          We use information to match caregivers, provide care coordination,
          process payments, and communicate with families. We may also use data
          for research and service improvements after removing personal
          identifiers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">Security</h2>
        <p className="text-sm text-gray-600">
          We implement administrative, technical, and physical safeguards to
          protect personal information. Access is restricted to authorized
          personnel and our systems use encryption where appropriate.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">HIPAA & Sensitive Data</h2>
        <p className="text-sm text-gray-600">
          For healthcare data that is subject to HIPAA or similar regulations,
          we follow applicable legal requirements and only share such
          information with authorized providers and partners as needed for care
          delivery.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">Contact Us</h2>
        <p className="text-sm text-gray-600">
          For privacy questions, email: privacy@eldercare.in
        </p>
      </section>
    </PageShell>
  );
}
