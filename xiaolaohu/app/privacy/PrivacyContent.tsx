"use client";
import { useLang } from "@/components/LangProvider";
import Link from "next/link";
export default function PrivacyContent() {
  const { lang } = useLang();
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/" className="text-orange-600 hover:text-orange-700 text-sm mb-8 inline-block">
        ← {lang === "zh" ? "返回首页" : "Back to Home"}
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {lang === "zh" ? "隐私政策" : "Privacy Policy"}
      </h1>
      {lang === "zh" ? (
        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">信息收集</h2>
          <p>本网站使用 Google AdSense 展示广告。Google 可能根据您的浏览行为投放个性化广告。</p>
          <h2 className="text-xl font-semibold text-gray-800">Cookie</h2>
          <p>本站使用 localStorage 存储您的语言偏好。广告服务商可能设置 Cookie 用于广告个性化。</p>
          <h2 className="text-xl font-semibold text-gray-800">联系我们</h2>
          <p>如有疑问，请通过微信公众号「鸣鸣大老虎」联系我们。</p>
        </div>
      ) : (
        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Information Collection</h2>
          <p>This website uses Google AdSense to display advertisements. Google may serve personalized ads based on your browsing behavior.</p>
          <h2 className="text-xl font-semibold text-gray-800">Cookies</h2>
          <p>We use localStorage to remember your language preference. Ad providers may set cookies for ad personalization.</p>
          <h2 className="text-xl font-semibold text-gray-800">Contact</h2>
          <p>For questions, contact us via WeChat public account: 鸣鸣大老虎.</p>
        </div>
      )}
    </div>
  );
}
