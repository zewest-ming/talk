import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description: "HealthyKids medical disclaimer and terms of use.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Medical Disclaimer</h1>
      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
        <p>
          The content published on HealthyKids is intended for general informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.
        </p>
        <h2>Not Medical Advice</h2>
        <p>
          Nothing on this website should be construed as medical advice. Always seek the advice of your physician, pediatrician, or other qualified health provider with any questions you may have regarding your child&apos;s health or a medical condition.
        </p>
        <h2>No Doctor-Patient Relationship</h2>
        <p>
          Using this website does not create a doctor-patient relationship between you and HealthyKids or any of its contributors. HealthyKids is not responsible for any health decisions you make based on information from this site.
        </p>
        <h2>Emergency Situations</h2>
        <p>
          If you believe your child is experiencing a medical emergency, call 911 (or your local emergency number) immediately. Do not rely on this website for emergency guidance.
        </p>
        <h2>Accuracy of Information</h2>
        <p>
          While we make every effort to provide accurate, up-to-date information, medical knowledge evolves rapidly. We cannot guarantee that all information on this site reflects the most current medical research or guidelines.
        </p>
      </div>
    </div>
  );
}
