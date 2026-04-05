import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | HealthyKids",
  description: "Privacy Policy for zewest.cn — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 5, 2026</p>
      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 space-y-6">

        <p>
          This Privacy Policy describes how zewest.cn (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares information when you visit our website. By using this site, you agree to the terms of this policy.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect information in the following ways:
        </p>
        <ul>
          <li><strong>Log data:</strong> When you visit our site, our servers automatically record information such as your IP address, browser type, pages visited, time spent on pages, and referring URLs.</li>
          <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to analyze traffic and serve personalized advertising. See the Cookies section below for details.</li>
          <li><strong>Voluntarily provided information:</strong> If you contact us via email or a contact form, we collect the information you provide (such as your name and email address).</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Operate, maintain, and improve our website</li>
          <li>Analyze usage trends and user behavior to enhance content</li>
          <li>Display relevant advertisements through Google AdSense</li>
          <li>Respond to your inquiries and requests</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Cookies</h2>
        <p>
          Cookies are small data files stored on your device. We use the following types of cookies:
        </p>
        <ul>
          <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics).</li>
          <li><strong>Advertising cookies:</strong> Used by Google AdSense to serve ads relevant to your interests based on your browsing history across sites.</li>
        </ul>
        <p>
          You can control cookies through your browser settings. You can also opt out of personalized advertising at{" "}
          <a href="https://www.google.com/settings/ads" className="text-emerald-700 hover:underline" rel="noopener noreferrer" target="_blank">
            Google Ad Settings
          </a>{" "}
          or the{" "}
          <a href="https://optout.networkadvertising.org/" className="text-emerald-700 hover:underline" rel="noopener noreferrer" target="_blank">
            Network Advertising Initiative opt-out page
          </a>.
        </p>

        <h2>4. Google AdSense</h2>
        <p>
          We use Google AdSense, an advertising service provided by Google LLC, to display ads on our site. Google AdSense uses cookies and web beacons to serve ads based on your prior visits to this and other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and other sites on the Internet.
        </p>
        <p>
          For more information on how Google uses data from sites that use its services, please visit:{" "}
          <a href="https://policies.google.com/technologies/partner-sites" className="text-emerald-700 hover:underline" rel="noopener noreferrer" target="_blank">
            How Google uses data when you use our partners&apos; sites or apps
          </a>.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          Our website may use third-party services including analytics and advertising providers. These third parties have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party websites linked from our site.
        </p>

        <h2>6. Children&apos;s Privacy</h2>
        <p>
          Our website is intended for parents, guardians, and caregivers — not for children. We do not knowingly collect personal information from children under the age of 13. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We retain log data and analytics information for a period of up to 26 months. Information you voluntarily provide (such as contact form submissions) is retained only as long as necessary to respond to your request.
        </p>

        <h2>8. Your Rights</h2>
        <p>
          Depending on your location, you may have the right to access, correct, or delete personal information we hold about you. You may also have the right to object to or restrict certain processing. To exercise these rights, please contact us at the email below.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Your continued use of the site after changes are posted constitutes your acceptance of the revised policy.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:{" "}
          <a href="mailto:privacy@zewest.cn" className="text-emerald-700 hover:underline">
            privacy@zewest.cn
          </a>
        </p>

      </div>
    </div>
  );
}
