"use client";
import { useLang } from "@/components/LangProvider";
import Link from "next/link";
export default function DisclaimerContent() {
  const { lang } = useLang();
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/" className="text-orange-600 hover:text-orange-700 text-sm mb-8 inline-block">
        ← {lang === "zh" ? "返回首页" : "Back to Home"}
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {lang === "zh" ? "免责声明" : "Disclaimer"}
      </h1>
      {lang === "zh" ? (
        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>本网站及公众号「鸣鸣大老虎」提供的所有内容仅供参考，不构成专业医疗、法律或其他专业建议。</p>
          <p>育儿文章中涉及的健康知识均来源于公开资料，每个宝宝情况不同，请在实际操作前咨询专业儿科医生。</p>
          <p>本站对文章内容的准确性和完整性不作任何明示或暗示的保证。</p>
        </div>
      ) : (
        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>All content on this website is for informational purposes only and does not constitute professional medical, legal, or other professional advice.</p>
          <p>Every child is different — please consult a qualified pediatrician before acting on any advice.</p>
          <p>We make no warranties about the accuracy or completeness of the content.</p>
        </div>
      )}
    </div>
  );
}
