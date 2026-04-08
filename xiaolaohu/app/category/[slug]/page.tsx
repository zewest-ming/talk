import { categories } from "@/lib/data";
import CategoryPageClient from "./CategoryPageClient";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: encodeURIComponent(c.slug) }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug);
  return <CategoryPageClient slug={decodedSlug} />;
}
