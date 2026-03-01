"use client";

import { Zap } from "lucide-react";
import { ThemeToggle } from "~/components/theme-toggle";
import { WEBSITE_NAME } from "~/constants/website-name";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-[3] w-full bg-neutral-200 ease-in-out dark:bg-neutral-900">
      <div className="grid w-full grid-cols-[1fr_auto_1fr] px-2 py-2 md:px-4">
        <div className="w-max">
          <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 select-none">
            <Zap className="h-4 w-4" />
            <span>{WEBSITE_NAME}</span>
          </div>
        </div>
        <div />
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
