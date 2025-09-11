import Link from "next/link";
import CTA from "./CTA";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t mt-8">
      <div className="container py-10 text-sm text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                S
              </div>
              <div>
                <div className="font-bold">Sathilo</div>
                <div className="text-xs text-gray-500 mt-1">
                  Professional elder care services
                </div>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-500">
              Providing trusted, compassionate care for your loved ones 24/7.
            </div>
          </div>

          <div>
            <div className="font-semibold">Services</div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>
                <Link
                  href="/services/medical-support"
                  className="hover:underline"
                >
                  Medical Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/daily-assistance"
                  className="hover:underline"
                >
                  Daily Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/companionship"
                  className="hover:underline"
                >
                  Companionship
                </Link>
              </li>
              <li>
                <Link
                  href="/services/specialized-care"
                  className="hover:underline"
                >
                  Specialized Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">For Families</div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>
                <Link href="/find-caregivers" className="hover:underline">
                  Find Caregivers
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/emergency-support" className="hover:underline">
                  Emergency Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Support</div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>
                <Link href="/help-center" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} Sathilo. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="px-2 py-1 bg-green-50 text-green-700 rounded">
              HIPAA Compliant
            </div>
            <div className="px-2 py-1 bg-blue-50 text-blue-700 rounded">
              Secure Payments
            </div>
            <div className="px-2 py-1 bg-gray-100 text-gray-700 rounded">
              24/7 Support
            </div>
            <div>
              <CTA href="/getstarted" label="Get Started" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white/90 border-t mt-4">
        <div className="container py-3 text-sm text-red-600 flex items-center justify-center">
          Emergency Support: +91-911-971-SATH — Available 24/7 for urgent care
          situations
        </div>
      </div>
    </footer>
  );
}
