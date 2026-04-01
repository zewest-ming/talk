import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "HealthyKids privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: March 30, 2026</p>
      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
        <h2>Information We Collect</h2>
        <p>
          HealthyKids collects minimal data. When you visit our site, we may collect standard web analytics data (such as page views and browser type) through third-party analytics services. We do not collect personally identifiable information unless you voluntarily provide it.
        </p>
        <h2>Cookies</h2>
        <p>
          We use cookies for analytics and to serve relevant advertising through Google AdSense. You can disable cookies in your browser settings. Note that disabling cookies may affect some site functionality.
        </p>
        <h2>Google AdSense</h2>
        <p>
          We use Google AdSense to display advertisements. Google may use cookies to show ads based on your prior visits to our site and other sites on the internet. You can opt out of personalized advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" className="text-emerald-700 hover:underline" rel="noopener noreferrer">
            Google Ad Settings
          </a>.
        </p>
        <h2>Third-Party Links</h2>
        <p>
          Our site may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies.
        </p>
        <h2>Children&apos;s Privacy</h2>
        <p>
          HealthyKids does not knowingly collect personal information from children under 13. Our service is directed at parents and caregivers, not children.
        </p>
        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us at privacy@healthykids.com.
        </p>
      </div>
    </div>
  );
}
