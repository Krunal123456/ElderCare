import Link from "next/link";

export default function CTA({
  label = "Get Started",
  href = "/getstarted",
}: {
  label?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md shadow hover:bg-blue-700"
    >
      {label}
    </Link>
  );
}
