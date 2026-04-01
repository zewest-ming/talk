import Link from "next/link";
import { Article, categories } from "@/lib/data";

type Props = {
  article: Article;
  featured?: boolean;
};

export default function ArticleCard({ article, featured = false }: Props) {
  const category = categories.find((c) => c.slug === article.category);

  return (
    <Link
      href={`/article/${article.slug}`}
      className={`block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group ${featured ? "md:col-span-2" : ""}`}
    >
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${category?.color}`}>
            {category?.icon} {category?.name}
          </span>
          <span className="text-xs text-gray-400">{article.readTime}</span>
        </div>
        <h3 className={`font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2 ${featured ? "text-xl" : "text-base"}`}>
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{article.author}</span>
          <span className="text-xs text-gray-400">
            {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
        </div>
      </div>
    </Link>
  );
}
