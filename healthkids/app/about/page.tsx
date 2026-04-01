import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about HealthyKids and our mission to provide trusted parenting and children's health advice.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About HealthyKids</h1>
      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
        <p>
          HealthyKids was founded with a simple mission: to give parents access to reliable, evidence-based health and parenting information — without the confusion, fear-mongering, or conflicting advice that often fills the internet.
        </p>
        <h2>Our Approach</h2>
        <p>
          Every article on HealthyKids is written or reviewed by licensed medical professionals, including board-certified pediatricians, registered dietitians, child psychologists, and other specialists. We follow guidelines from the American Academy of Pediatrics (AAP), the World Health Organization (WHO), and the Centers for Disease Control and Prevention (CDC).
        </p>
        <h2>Our Team</h2>
        <p>
          Our editorial team includes medical writers with backgrounds in healthcare, alongside specialists who review content for accuracy and clarity. We are committed to keeping our information up to date as medical guidance evolves.
        </p>
        <h2>Our Commitment</h2>
        <ul>
          <li>All content is reviewed by qualified health professionals</li>
          <li>We cite reputable sources and update content regularly</li>
          <li>We are transparent about advertising and sponsorships</li>
          <li>We never recommend products without editorial independence</li>
        </ul>
        <p>
          HealthyKids does not provide personalized medical advice. Always consult your child&apos;s pediatrician or a qualified healthcare provider for guidance specific to your child&apos;s health.
        </p>
      </div>
    </div>
  );
}
