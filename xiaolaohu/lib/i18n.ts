export type Lang = "zh" | "en";

export const ui = {
  zh: {
    siteName: "鸣鸣大老虎",
    siteTagline: "小老虎的成长日记",
    siteDescription: "记录小老虎的育儿心得、亲子趣事与成长点滴，分享有趣有用的育儿经验。",
    nav: {
      home: "首页",
      categories: "分类",
      about: "关于",
    },
    home: {
      heroTitle: "小老虎的世界",
      heroSubtitle: "育儿心得 · 亲子故事 · 成长记录",
      featuredArticles: "精选文章",
      latestArticles: "最新文章",
      viewAll: "查看全部",
      readMore: "阅读全文",
      browseCategories: "文章分类",
    },
    article: {
      by: "作者",
      publishedOn: "发布于",
      readTime: "阅读时间",
      tags: "标签",
      relatedArticles: "相关文章",
      backToHome: "返回首页",
    },
    category: {
      allArticles: "全部文章",
      articlesIn: "分类文章",
    },
    footer: {
      followUs: "关注公众号",
      wechatHint: "微信搜索「鸣鸣大老虎」",
      copyright: "© 2025 鸣鸣大老虎 · 保留所有权利",
      disclaimer: "免责声明",
      privacy: "隐私政策",
    },
    switchLang: "English",
    minutes: "分钟",
    advertisement: "广告",
  },
  en: {
    siteName: "MingMing Tiger",
    siteTagline: "Little Tiger's Growth Diary",
    siteDescription: "A parenting blog sharing the joys, challenges, and milestones of raising a little one — through stories, tips, and heartfelt moments.",
    nav: {
      home: "Home",
      categories: "Categories",
      about: "About",
    },
    home: {
      heroTitle: "Little Tiger's World",
      heroSubtitle: "Parenting Tips · Family Stories · Growing Up",
      featuredArticles: "Featured Articles",
      latestArticles: "Latest Articles",
      viewAll: "View All",
      readMore: "Read More",
      browseCategories: "Browse Categories",
    },
    article: {
      by: "By",
      publishedOn: "Published on",
      readTime: "Read time",
      tags: "Tags",
      relatedArticles: "Related Articles",
      backToHome: "Back to Home",
    },
    category: {
      allArticles: "All Articles",
      articlesIn: "Articles in",
    },
    footer: {
      followUs: "Follow Us",
      wechatHint: "WeChat: 鸣鸣大老虎",
      copyright: "© 2025 MingMing Tiger · All rights reserved",
      disclaimer: "Disclaimer",
      privacy: "Privacy Policy",
    },
    switchLang: "中文",
    minutes: "min read",
    advertisement: "Advertisement",
  },
} as const;

export function t(lang: Lang, key: string): string {
  const keys = key.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let val: any = ui[lang];
  for (const k of keys) {
    val = val?.[k];
  }
  return typeof val === "string" ? val : key;
}
