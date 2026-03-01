"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, Zap } from "lucide-react";
import { ThemeToggle } from "~/components/theme-toggle";
import { WEBSITE_NAME } from "~/constants/website-name";

export function Navbar() {
  const pathname = usePathname();

  const navigationControls =
    pathname === "/" ? (
      <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 select-none">
        <Zap className="h-4 w-4" />
        <span>{WEBSITE_NAME}</span>
      </div>
    ) : (
      <Link href="/">
        <div className="hidden cursor-pointer grid-cols-[max-content_max-content] place-items-center gap-1 text-blue-500 duration-300 ease-in-out hover:text-blue-700 md:grid">
          <ChevronLeft className="h-4 w-4" />
          <span>Home</span>
        </div>
        <div className="grid cursor-pointer place-items-center text-blue-500 duration-300 ease-in-out hover:text-blue-700 md:hidden">
          <ChevronLeft className="h-4 w-4" />
        </div>
      </Link>
    );

  const currentPage =
    pathname === "/" ? null : (
      <div className="grid grid-cols-[repeat(3,max-content)] place-items-center font-semibold">
        <span className="text-sky-500">~</span>
        <span className="text-orange-500">/</span>
        <p className="max-w-40 truncate overflow-hidden text-orange-500 md:max-w-none">
          {pathname.slice(1)}
        </p>
      </div>
    );

  return (
    <nav className="fixed top-0 z-[3] w-full bg-neutral-200 ease-in-out dark:bg-neutral-900">
      <div className="grid w-full grid-cols-[1fr_auto_1fr] p-2">
        <div className="w-max">{navigationControls}</div>
        {currentPage ?? <div />}
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
      {pathname !== "/" && (
        <div className="bg-border mx-auto h-px w-full transition-all duration-500" />
      )}
    </nav>
  );
}
