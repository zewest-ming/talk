"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import { ui } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <footer className="bg-orange-50 border-t border-orange-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🐯</span>
              <span className="font-bold text-orange-600 text-lg">{t.siteName}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{t.siteDescription}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">{t.footer.followUs}</h3>
            <p className="text-gray-600 text-sm">{t.footer.wechatHint}</p>
            <div className="mt-3 w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-2xl">
              📱
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">{lang === "zh" ? "链接" : "Links"}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-orange-600 transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/disclaimer" className="hover:text-orange-600 transition-colors">{t.footer.disclaimer}</Link></li>
              <li><Link href="/privacy" className="hover:text-orange-600 transition-colors">{t.footer.privacy}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-100 mt-8 pt-6 text-center text-sm text-gray-500">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
