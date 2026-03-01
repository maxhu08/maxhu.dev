"use client";

import { useEffect } from "react";
import NextTopLoader from "nextjs-toploader";
import { useTopLoader } from "nextjs-toploader";

export const RELOAD_LOADING_BAR_ID = "reload-loading-bar";
export const RELOAD_LOADING_BAR_STYLE_ID = "reload-loading-bar-style";
export const RELOAD_PENDING_KEY = "reload-loading-bar-pending";

export function LoadingBar() {
  const loader = useTopLoader();

  useEffect(() => {
    const markReloadPending = () => {
      try {
        window.sessionStorage.setItem(RELOAD_PENDING_KEY, "1");
      } catch {}
    };

    window.addEventListener("beforeunload", markReloadPending);

    try {
      if (window.sessionStorage.getItem(RELOAD_PENDING_KEY) !== "1") {
        return () => {
          window.removeEventListener("beforeunload", markReloadPending);
        };
      }

      window.sessionStorage.removeItem(RELOAD_PENDING_KEY);

      const bootstrapBar = document.getElementById(RELOAD_LOADING_BAR_ID);
      const bootstrapStyle = document.getElementById(RELOAD_LOADING_BAR_STYLE_ID);

      loader.start();

      const finish = () => {
        bootstrapBar?.remove();
        bootstrapStyle?.remove();
        loader.done(true);
      };

      if (document.readyState === "complete") {
        window.requestAnimationFrame(() => {
          window.setTimeout(finish, 90);
        });
      } else {
        window.addEventListener("load", finish, { once: true });
      }

      return () => {
        window.removeEventListener("beforeunload", markReloadPending);
        window.removeEventListener("load", finish);
      };
    } catch {
      return () => {
        window.removeEventListener("beforeunload", markReloadPending);
      };
    }
  }, [loader]);

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
