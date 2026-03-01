"use client";

import NextTopLoader from "nextjs-toploader";

export function LoadingBar() {
  return (
    <NextTopLoader
      color="#14b8a6"
      crawl
      showSpinner={false}
      height={3}
      initialPosition={0.3}
      crawlSpeed={200}
      speed={200}
      easing="ease"
      shadow="0 0 10px #14b8a6,0 0 5px #14b8a6"
    />
  );
}
