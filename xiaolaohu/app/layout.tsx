import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "@/components/LangProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "鸣鸣大老虎 — 小老虎的成长日记",
    template: "%s | 鸣鸣大老虎",
  },
  description:
    "记录小老虎的育儿心得、亲子趣事与成长点滴，分享有趣有用的育儿经验。A parenting blog sharing the joys and milestones of raising a little one.",
  keywords: ["育儿", "亲子", "宝宝成长", "小老虎", "鸣鸣大老虎", "parenting", "baby"],
  openGraph: {
    siteName: "鸣鸣大老虎",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <LangProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LangProvider>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7825982048677451"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
