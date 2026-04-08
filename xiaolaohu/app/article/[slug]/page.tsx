import { articles } from "@/lib/data";
import ArticlePageClient from "./ArticlePageClient";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return <ArticlePageClient slug={params.slug} />;
}
