"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import { categories } from "@/lib/data";
import { ui } from "@/lib/i18n";

export default function Header() {
  const { lang, setLang } = useLang();
  const t = ui[lang];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🐯</span>
            <div>
              <span className="font-bold text-xl text-orange-600">{t.siteName}</span>
              <span className="hidden sm:block text-xs text-gray-500 leading-none">{t.siteTagline}</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${encodeURIComponent(cat.slug)}`}
                className="text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-md transition-colors"
              >
                {cat.icon} {lang === "zh" ? cat.nameZh : cat.nameEn}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="text-sm font-medium text-orange-600 border border-orange-200 hover:bg-orange-50 px-3 py-1.5 rounded-full transition-colors"
          >
            {t.switchLang}
          </button>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${encodeURIComponent(cat.slug)}`}
                className="text-xs text-gray-600 hover:text-orange-600 bg-gray-100 hover:bg-orange-50 px-3 py-1.5 rounded-full whitespace-nowrap transition-colors"
              >
                {cat.icon} {lang === "zh" ? cat.nameZh : cat.nameEn}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
