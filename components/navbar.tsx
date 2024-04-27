"use client";

import { ChevronLeft, Sliders, Webhook, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { Separator } from "~/components/separator";
import { ThemeToggle } from "~/components/theme-toggle";
import { cn } from "~/utils/cn";

export const Navbar: FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathname.startsWith("/text-hidden")) return null;

  const navigationControls = () => {
    if (pathname === "/") {
      return (
        <div className="grid grid-cols-[max-content_max-content] gap-1 text-blue-500 place-items-center select-none">
          <Zap className="w-4 h-4" />
          <span>maxhu.dev</span>
        </div>
      );
    } else {
      let route = "/";
      let text = "Home";

      if (
        pathname === "/dotfiles" ||
        pathname === "/neovim-zen" ||
        pathname === "/tmux-zen"
      ) {
        route = "/other";
        text = "Other";
      } else if (pathname.startsWith("/projects") && pathname === "/projects") {
        route = "/projects";
        text = "Projects";
      } else if (pathname.startsWith("/dotfiles") && pathname === "/dotfiles") {
        route = "/dotfiles";
        text = "Dotfiles";
      }

      return (
        <Link href={route}>
          <div className="hidden md:grid grid-cols-[max-content_max-content] gap-1 text-blue-500 hover:text-blue-700 duration-300 ease-in-out place-items-center cursor-pointer">
            <ChevronLeft className="w-4 h-4" />
            <span>{text}</span>
          </div>
          <div className="grid md:hidden text-blue-500 hover:text-blue-700 duration-300 ease-in-out place-items-center cursor-pointer">
            <ChevronLeft className="w-4 h-4" />
          </div>
        </Link>
      );
    }
  };

  const currentPage = () => {
    if (pathname === "/") {
      return <div></div>;
    } else {
      return (
        <div className="grid grid-cols-[repeat(3,max-content)] place-items-center font-semibold">
          <span className="text-sky-500">~</span>
          <span className="text-orange-500">/</span>
          <p className="text-orange-500 max-w-40 md:max-w-none truncate overflow-hidden">
            {pathname.slice(1)}
          </p>
        </div>
      );
    }
  };

  return (
    // <nav className="fixed z-[3] w-full top-0 ease-in-out backdrop-blur-2xl">
    <nav className="fixed z-[3] w-full top-0 ease-in-out bg-neutral-200 dark:bg-neutral-900">
      <div className="py-2 px-2 md:px-4 grid grid-cols-[1fr_auto_1fr] w-full">
        <div className="w-max">{navigationControls()}</div>
        {currentPage()}
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
      {/* 
        <Separator
        orientation="horizontal"
        className={cn(
          "transition-all duration-500 mx-auto",
          scrolled ? "w-full visible" : "w-0 invisible",
        )}
        />
      */}
      {pathname !== "/" && (
        <Separator
          orientation="horizontal"
          className={cn("transition-all duration-500 mx-auto")}
        />
      )}
    </nav>
  );
};
