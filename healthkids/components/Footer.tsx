import Link from "next/link";
import { categories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌿</span>
              <span className="font-bold text-xl text-white">HealthyKids</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Evidence-based parenting advice and children&apos;s health guidance written by medical professionals and child development experts.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Topics</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {cat.icon} {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Important</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-gray-400 hover:text-white transition-colors">Medical Disclaimer</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} HealthyKids. The information on this site is for educational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
