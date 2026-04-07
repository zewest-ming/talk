"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import { ui } from "@/lib/i18n";
import { getFeaturedArticles, categories } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";
import AdBanner from "@/components/AdBanner";

export default function HomePage() {
  const { lang } = useLang();
  const t = ui[lang];
  const featured = getFeaturedArticles(6);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <div className="text-6xl mb-4">🐯</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t.home.heroTitle}
          </h1>
          <p className="text-gray-500 text-lg">{t.home.heroSubtitle}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Ad banner */}
        <AdBanner size="leaderboard" className="mb-10" />

        {/* Featured articles */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t.home.latestArticles}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} lang={lang} />
            ))}
          </div>
        </section>

        {/* Ad banner */}
        <AdBanner size="rectangle" className="mb-12" />

        {/* Categories */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t.home.browseCategories}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${encodeURIComponent(cat.slug)}`}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-center hover:shadow-md transition-all ${cat.color}`}
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-sm font-medium">
                  {lang === "zh" ? cat.nameZh : cat.nameEn}
                </span>
                <span className="text-xs opacity-70 line-clamp-2">
                  {lang === "zh" ? cat.descriptionZh : cat.descriptionEn}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
