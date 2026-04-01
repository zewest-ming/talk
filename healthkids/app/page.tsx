import Link from "next/link";
import { categories, getFeaturedArticles } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";
import AdBanner from "@/components/AdBanner";

export default function Home() {
  const featured = getFeaturedArticles(6);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🌿</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Trusted Health & Parenting Advice
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
            Evidence-based guidance from pediatricians, dietitians, and child development experts — helping you raise healthy, happy kids.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors backdrop-blur-sm"
              >
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Top Ad */}
        <AdBanner size="leaderboard" className="mb-10" />

        {/* Categories Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Topic</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className={`flex flex-col items-center text-center p-4 rounded-xl border ${cat.color} hover:shadow-md transition-shadow`}
              >
                <span className="text-3xl mb-2">{cat.icon}</span>
                <span className="text-xs font-semibold leading-tight">{cat.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((article, i) => (
              <ArticleCard key={article.slug} article={article} featured={i === 0} />
            ))}
          </div>
        </section>

        {/* Mid Ad */}
        <AdBanner size="rectangle" className="mb-12" />

        {/* Trust Signals */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">Why Parents Trust HealthyKids</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">🩺</div>
              <h3 className="font-semibold text-gray-900 mb-1">Doctor-Reviewed</h3>
              <p className="text-sm text-gray-500">All content reviewed by licensed pediatricians and medical professionals.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-semibold text-gray-900 mb-1">Evidence-Based</h3>
              <p className="text-sm text-gray-500">We cite the latest research and follow guidelines from AAP, WHO, and CDC.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💚</div>
              <h3 className="font-semibold text-gray-900 mb-1">Parent-Friendly</h3>
              <p className="text-sm text-gray-500">Written in plain language — no medical jargon, just clear practical advice.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
