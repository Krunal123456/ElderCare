import PageShell from "../components/PageShell";

export default function EmergencySupport() {
  return (
    <PageShell
      title="Emergency Support"
      description="Our emergency hotline is available 24/7 for urgent care needs."
    >
      <div className="text-center">
        <div className="text-xl font-semibold mb-4">+91-911-971-SATH</div>
        <div className="text-sm text-gray-700">
          Available 24/7 — immediate assistance
        </div>
      </div>
    </PageShell>
  );
}
