"use client";

import { useEffect, useRef } from "react";

type AdBannerProps = {
  slot: string;
  format?: string;
  className?: string;
};

export default function AdBanner({ slot, format = "auto", className = "" }: AdBannerProps) {
  const ref = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ins
      ref={ref}
      className={`adsbygoogle ${className}`}
      style={{ display: "block" }}
      data-ad-client="ca-pub-7825982048677451"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
