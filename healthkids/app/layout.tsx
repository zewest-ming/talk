import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "HealthyKids — Trusted Parenting & Children's Health Advice",
    template: "%s | HealthyKids",
  },
  description:
    "Evidence-based parenting advice and children's health guidance written by doctors and child development experts. Covering baby health, nutrition, development, and more.",
  keywords: ["parenting", "baby health", "child development", "nutrition", "pediatrics"],
  openGraph: {
    siteName: "HealthyKids",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7825982048677451"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
