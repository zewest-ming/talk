"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { useLang } from "@/components/LangProvider";
import { ui } from "@/lib/i18n";
import { getCategoryBySlug, getArticlesByCategory } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const decodedSlug = decodeURIComponent(slug);
  const { lang } = useLang();
  const t = ui[lang];

  const category = getCategoryBySlug(decodedSlug);
  if (!category) notFound();

  const articles = getArticlesByCategory(decodedSlug);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600 transition-colors">{t.nav.home}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{lang === "zh" ? category.nameZh : category.nameEn}</span>
      </nav>

      {/* Category header */}
      <div className={`rounded-2xl border p-8 mb-10 ${category.color}`}>
        <div className="text-5xl mb-3">{category.icon}</div>
        <h1 className="text-2xl font-bold mb-2">
          {lang === "zh" ? category.nameZh : category.nameEn}
        </h1>
        <p className="opacity-80">
          {lang === "zh" ? category.descriptionZh : category.descriptionEn}
        </p>
      </div>

      <AdBanner size="leaderboard" className="mb-10" />

      {articles.length === 0 ? (
        <p className="text-gray-500 text-center py-16">
          {lang === "zh" ? "暂无文章，敬请期待。" : "No articles yet — check back soon!"}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
}
