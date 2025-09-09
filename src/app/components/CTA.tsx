import Link from "next/link";

export default function CTA({
  label = "Get Started",
  href = "/getstarted",
}: {
  label?: string;
  href?: string;
}) {
  return (
    <Link href={href} className="btn-primary inline-block">
      {label}
    </Link>
  );
}
