"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import { ui } from "@/lib/i18n";
import { getArticleBySlug, getArticlesByCategory, getCategoryBySlug } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";
import AdBanner from "@/components/AdBanner";

export default function ArticlePageClient({ slug }: { slug: string }) {
  const { lang } = useLang();
  const t = ui[lang];

  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.category);
  const related = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-orange-600 transition-colors">{t.nav.home}</Link>
        <span>/</span>
        {category && (
          <>
            <Link
              href={`/category/${encodeURIComponent(article.category)}`}
              className="hover:text-orange-600 transition-colors"
            >
              {lang === "zh" ? category.nameZh : category.nameEn}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-gray-700 truncate max-w-xs">
          {lang === "zh" ? article.titleZh : article.titleEn}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <article className="lg:col-span-2">
          {category && (
            <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border mb-4 ${category.color}`}>
              {category.icon} {lang === "zh" ? category.nameZh : category.nameEn}
            </span>
          )}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {lang === "zh" ? article.titleZh : article.titleEn}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100">
            <span>{t.article.by} {article.author.split(" / ")[lang === "zh" ? 0 : 1] ?? article.author}</span>
            <span>{t.article.publishedOn} {article.date}</span>
            <span>{lang === "zh" ? article.readTimeZh : article.readTimeEn}</span>
          </div>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: lang === "zh" ? article.contentZh : article.contentEn,
            }}
          />

          {article.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-100">
              <span className="text-sm text-gray-500 mr-2">{t.article.tags}:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-orange-50 text-orange-700 text-xs px-2.5 py-1 rounded-full mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <AdBanner size="sidebar" />
          {related.length > 0 && (
            <div>
              <h3 className="font-bold text-gray-900 mb-4">{t.article.relatedArticles}</h3>
              <div className="space-y-4">
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} lang={lang} />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
