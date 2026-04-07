"use client";

import Link from "next/link";
import type { Article } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { getCategoryBySlug } from "@/lib/data";

type Props = {
  article: Article;
  lang: Lang;
};

export default function ArticleCard({ article, lang }: Props) {
  const category = getCategoryBySlug(article.category);

  return (
    <Link
      href={`/article/${article.slug}`}
      className="block bg-white rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200 overflow-hidden group"
    >
      <div className="p-5">
        {category && (
          <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border mb-3 ${category.color}`}>
            {category.icon} {lang === "zh" ? category.nameZh : category.nameEn}
          </span>
        )}
        <h2 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
          {lang === "zh" ? article.titleZh : article.titleEn}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
          {lang === "zh" ? article.excerptZh : article.excerptEn}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{article.author.split(" / ")[lang === "zh" ? 0 : 1] ?? article.author}</span>
          <span>{lang === "zh" ? article.readTimeZh : article.readTimeEn}</span>
        </div>
      </div>
    </Link>
  );
}
