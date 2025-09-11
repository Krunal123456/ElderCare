import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterSW from "./components/RegisterSW";
import { LanguageProvider } from "./i18n/LanguageProvider";
import "./globals.css";

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
  title: "ElderCare",
  description: "Professional elder care services",
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
          <meta name="theme-color" content="#2563eb" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <link rel="apple-touch-icon" href="/in-home-care_hero.png" />
          <RegisterSW />
          <Header />
          {/* Add top padding to account for the fixed header so pages aren't hidden underneath it */}
          <main className="min-h-[calc(100vh-140px)] pt-20 md:pt-20 lg:pt-24">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
