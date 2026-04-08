import type { MetadataRoute } from "next";
import { categories, articles } from "@/lib/data";

const BASE_URL = "https://www.mingmingtiger.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryRoutes = categories.map((cat) => ({
    url: `${BASE_URL}/category/${encodeURIComponent(cat.slug)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${BASE_URL}/article/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...categoryRoutes,
    ...articleRoutes,
  ];
}
