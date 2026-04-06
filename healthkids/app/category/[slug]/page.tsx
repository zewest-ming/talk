import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getCategoryBySlug, getArticlesByCategory } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const articles = getArticlesByCategory(slug);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-emerald-700">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{category.name}</span>
      </nav>

      {/* Category Header */}
      <div className={`rounded-2xl border p-8 mb-8 ${category.color}`}>
        <div className="text-5xl mb-3">{category.icon}</div>
        <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
        <p className="text-lg opacity-80">{category.description}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Articles */}
        <div className="flex-1">
          {articles.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <div className="text-4xl mb-3">📝</div>
              <p>More articles coming soon!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-5">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:w-72 space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-semibold text-gray-900 mb-4">Other Topics</h3>
            <ul className="space-y-2">
              {categories
                .filter((c) => c.slug !== slug)
                .map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/category/${c.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-700 transition-colors"
                    >
                      <span>{c.icon}</span>
                      <span>{c.name}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
