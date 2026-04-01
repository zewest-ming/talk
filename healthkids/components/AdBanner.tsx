"use client";

type AdBannerProps = {
  slot?: string;
  size?: "leaderboard" | "rectangle" | "square" | "sidebar";
  className?: string;
};

// Placeholder component — replace the inner div with your Google AdSense <ins> tag
// after your site is approved: https://www.google.com/adsense
export default function AdBanner({ size = "rectangle", className = "" }: AdBannerProps) {
  const dimensions: Record<string, string> = {
    leaderboard: "h-24 w-full",   // 728x90
    rectangle:   "h-64 w-full",   // 336x280
    square:      "h-48 w-full",   // 300x250
    sidebar:     "h-96 w-full",   // 300x600
  };

  return (
    <div className={`flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 rounded-lg ${dimensions[size]} ${className}`}>
      <div className="text-center text-gray-400 text-xs px-4">
        <div className="font-medium mb-1">Advertisement</div>
        <div className="opacity-60">Google AdSense — {size}</div>
        {/*
          Replace this div with your AdSense code:
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        */}
      </div>
    </div>
  );
}
