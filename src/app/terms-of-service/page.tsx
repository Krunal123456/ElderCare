import PageShell from "../components/PageShell";

export default function TermsOfService() {
  return (
    <PageShell
      title="Terms of Service"
      description="The rules and legal terms governing use of Sathilo."
    >
      <section className="mb-6">
        <h2 className="font-semibold mb-2">Use of Service</h2>
        <p className="text-sm text-gray-600">
          You agree to use the service for lawful purposes and follow all
          applicable laws and regulations when booking or providing care.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">Payment & Cancellation</h2>
        <p className="text-sm text-gray-600">
          Payments for care services are processed through our payment partners.
          Cancellation policies vary by service and will be presented at
          booking.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">Liability</h2>
        <p className="text-sm text-gray-600">
          Sathilo acts as a facilitator matching families with caregivers.
          Except where prohibited by law, our liability is limited as described
          in these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">Changes to Terms</h2>
        <p className="text-sm text-gray-600">
          We may modify these Terms at any time. Continued use after changes
          indicates acceptance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">Contact</h2>
        <p className="text-sm text-gray-600">
          For questions about these Terms, email: legal@sathilo.com
        </p>
      </section>
    </PageShell>
  );
}
