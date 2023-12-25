"use client";

import { ChevronLeft, Webhook, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import { ThemeToggle } from "~/components/theme-toggle";

export const Navbar: FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navigationControls = () => {
    if (pathname === "/") {
      return (
        <div className="grid grid-cols-[max-content_max-content] gap-1 text-blue-500 place-items-center select-none">
          <Zap className="w-4 h-4" />
          <span>maxhu.dev</span>
        </div>
      );
    } else if (pathname === "/projects") {
      return (
        // <button onClick={() => router.back()} className="cursor-pointer">
        //   <div className="grid grid-cols-[max-content_max-content] gap-1 text-blue-500 hover:text-blue-700 duration-300 ease-in-out place-items-center cursor-pointer">
        //     <ChevronLeft className="w-4 h-4" />
        //     <span>Back</span>
        //   </div>
        // </button>
        <Link href="/">
          <div className="grid grid-cols-[max-content_max-content] gap-1 text-blue-500 hover:text-blue-700 duration-300 ease-in-out place-items-center cursor-pointer">
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </div>
        </Link>
      );
    } else {
      return (
        <Link href="/">
          <div className="grid grid-cols-[max-content_max-content] gap-1 text-blue-500 hover:text-blue-700 duration-300 ease-in-out place-items-center cursor-pointer">
            <ChevronLeft className="w-4 h-4" />
            <span>Home</span>
          </div>
        </Link>
      );
    }
  };

  const currentPage = () => {
    if (pathname === "/") {
      return <div></div>;
    } else if (pathname === "/projects") {
      return (
        <div className="grid grid-cols-[max-content_max-content] gap-1 place-items-center">
          <Webhook className="w-4 h-4" />
          <span>projects</span>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <nav className="fixed z-20 w-full top-0 ease-in-out backdrop-blur-lg">
      <div className="py-2 px-2 md:px-4 grid grid-cols-[1fr_auto_1fr] w-full">
        <div className="w-max">{navigationControls()}</div>
        {currentPage()}
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
