import PageShell from "../components/PageShell";
import Link from "next/link";

export default function HelpCenter() {
  const faqs = [
    {
      q: "How do I book a caregiver?",
      a: "Use the Find Caregivers page to search and book.",
    },
    {
      q: "What are your service hours?",
      a: "Care is available 24/7 for urgent needs; scheduled services follow caregiver availability.",
    },
  ];

  return (
    <PageShell
      title="Help Center"
      description="Answers to common questions and support resources."
    >
      <div className="space-y-4 mb-8">
        {faqs.map((f) => (
          <div key={f.q} className="p-4 border rounded">
            <div className="font-semibold">{f.q}</div>
            <div className="text-sm text-gray-600">{f.a}</div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/contact" className="btn-primary inline-block">
          Contact Support
        </Link>
      </div>
    </PageShell>
  );
}
