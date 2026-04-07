"use client";

type AdBannerProps = {
  slot?: string;
  size?: "leaderboard" | "rectangle" | "square" | "sidebar";
  className?: string;
};

export default function AdBanner({ size = "rectangle", className = "" }: AdBannerProps) {
  const dimensions: Record<string, string> = {
    leaderboard: "h-24 w-full",
    rectangle:   "h-64 w-full",
    square:      "h-48 w-full",
    sidebar:     "h-96 w-full",
  };

  return (
    <div className={`flex items-center justify-center bg-gray-50 border border-dashed border-gray-200 rounded-lg ${dimensions[size]} ${className}`}>
      <div className="text-center text-gray-400 text-xs px-4">
        <div className="font-medium mb-1">广告 · Advertisement</div>
        <div className="opacity-60">Google AdSense — {size}</div>
        {/*
          Replace this div with your AdSense <ins> tag after approval:
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-7825982048677451"
            data-ad-slot="YOUR_AD_SLOT_ID"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        */}
      </div>
    </div>
  );
}
