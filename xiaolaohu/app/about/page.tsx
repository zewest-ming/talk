"use client";

import { useLang } from "@/components/LangProvider";
import Link from "next/link";

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/" className="text-orange-600 hover:text-orange-700 text-sm mb-8 inline-block">
        ← {lang === "zh" ? "返回首页" : "Back to Home"}
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {lang === "zh" ? "关于鸣鸣大老虎" : "About MingMing Tiger"}
      </h1>

      {lang === "zh" ? (
        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            欢迎来到<strong>鸣鸣大老虎</strong>！这里是一个记录小老虎（鸣鸣）成长故事的地方。
          </p>
          <p>
            我是鸣鸣妈妈，一个普通的新手妈妈，在陪伴孩子成长的路上，记录下那些珍贵的瞬间、踩过的坑和积累的经验。
          </p>
          <p>
            这个公众号和网站的内容涵盖：
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>育儿经验分享：那些真实有用的育儿心得</li>
            <li>成长记录：小老虎每个阶段的精彩瞬间</li>
            <li>亲子活动：适合宝宝的有趣游戏与互动</li>
            <li>健康知识：宝宝常见问题的科学解答</li>
            <li>辅食营养：简单好做的宝宝美食推荐</li>
          </ul>
          <p>
            微信搜索「鸣鸣大老虎」关注我们的公众号，获取最新内容！
          </p>
        </div>
      ) : (
        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            Welcome to <strong>MingMing Tiger</strong>! This is a place to document the growth story of our little tiger, MingMing.
          </p>
          <p>
            I'm MingMing's mom — an ordinary first-time parent recording precious moments, lessons learned, and experiences gathered along the journey of raising a child.
          </p>
          <p>
            Our content covers:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Parenting Tips: Real, practical advice from experience</li>
            <li>Growth Journal: Milestones and memories at every stage</li>
            <li>Family Activities: Fun games and activities for little ones</li>
            <li>Baby Health: Science-based answers to common questions</li>
            <li>Nutrition: Easy and healthy baby food recommendations</li>
          </ul>
          <p>
            Follow our WeChat public account: 鸣鸣大老虎
          </p>
        </div>
      )}
    </div>
  );
}
