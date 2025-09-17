import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterSW from "./components/RegisterSW";
import InstallPrompt from "./components/InstallPrompt";
import { LanguageProvider } from "./i18n/LanguageProvider";
// Chakra UI was temporarily removed due to runtime/type issues. Re-add after resolving version/type mismatches.
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sathilo.com"),
  title: "Sathilo — Professional in-home elder care services",
  description:
    "Sathilo connects families with trusted caregivers for in-home and specialized elder care. Book services, manage care, and get support.",
  openGraph: {
    title: "Sathilo — Professional in-home elder care services",
    description:
      "Sathilo connects families with trusted caregivers for in-home and specialized elder care.",
    url: "https://www.sathilo.com/",
    siteName: "Sathilo",
    images: [
      {
        url: "/in-home-care_hero.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathilo — Professional in-home elder care services",
    description:
      "Sathilo connects families with trusted caregivers for in-home and specialized elder care.",
    images: ["/in-home-care_hero.png"],
  },
  alternates: {
    canonical: "https://www.sathilo.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.svg" />
          {/* JSON-LD structured data for SEO (replace placeholders like telephone/address) */}
          <script
            key="ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": "https://www.sathilo.com/#org",
                    name: "Sathilo",
                    url: "https://www.sathilo.com/",
                    logo: "https://www.sathilo.com/favicon.svg",
                    sameAs: [],
                  },
                  {
                    "@type": "LocalBusiness",
                    "@id": "https://www.sathilo.com/#local",
                    name: "Sathilo",
                    image: ["https://www.sathilo.com/in-home-care_hero.png"],
                    telephone: "+91-XXXXXXXXXX",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "Replace with street address",
                      addressLocality: "City",
                      addressRegion: "State",
                      postalCode: "PIN",
                      addressCountry: "IN",
                    },
                    url: "https://www.sathilo.com/",
                    priceRange: "Varies",
                    serviceArea: {
                      "@type": "Place",
                      name: "India",
                    },
                    contactPoint: [
                      {
                        "@type": "ContactPoint",
                        telephone: "+91-XXXXXXXXXX",
                        contactType: "customer service",
                        areaServed: "IN",
                        availableLanguage: ["English", "Hindi"],
                      },
                    ],
                    makesOffer: [
                      { "@type": "Service", name: "Daily Assistance" },
                      { "@type": "Service", name: "Companionship" },
                      { "@type": "Service", name: "Medical Support" },
                      { "@type": "Service", name: "Specialized Care" },
                    ],
                  },
                ],
              }),
            }}
          />
          <meta name="theme-color" content="#2563eb" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <link rel="apple-touch-icon" href="/in-home-care_hero.png" />
          <RegisterSW />
          <InstallPrompt />
          <Header />
          {/* Add top padding to account for the fixed header so pages aren't hidden underneath it */}
          <main className="min-h-[calc(100vh-140px)] pt-20 md:pt-20 lg:pt-24">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          {/* ChakraProvider removed */}
        </LanguageProvider>
      </body>
    </html>
  );
}
