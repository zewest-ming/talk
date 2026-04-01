import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { articles, getArticle, getCategoryBySlug, getArticlesByCategory } from "@/lib/data";
import AdBanner from "@/components/AdBanner";
import ArticleCard from "@/components/ArticleCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: article.author }],
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.category);
  const related = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-emerald-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/category/${article.category}`} className="hover:text-emerald-700">
          {category?.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 line-clamp-1">{article.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Article Content */}
        <article className="flex-1 min-w-0">
          <div className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border mb-4 ${category?.color}`}>
            {category?.icon} {category?.name}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 border-l-4 border-emerald-400 pl-4">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
            <span className="font-medium text-gray-700">{article.author}</span>
            <span>·</span>
            <span>
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          {/* In-article Ad */}
          <AdBanner size="rectangle" className="mb-8" />

          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-ul:my-3 prose-ol:my-3 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Always consult your pediatrician or a qualified healthcare professional with any questions about your child&apos;s health.
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-72 space-y-6 flex-shrink-0">
          <AdBanner size="sidebar" />

          {related.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                {related.map((rel) => (
                  <ArticleCard key={rel.slug} article={rel} />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
