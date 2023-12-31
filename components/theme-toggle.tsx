"use client";

import { Moon, Settings, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { FC } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";

export const ThemeToggle: FC = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <div className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white duration-200 ease-in-out cursor-pointer">
            <SunMoon className="w-6 h-6" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
            <div className="flex place-items-center w-full gap-2">
              <span>Light</span>
              <Sun className="w-4 h-4 ml-auto" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
            <div className="flex place-items-center w-full gap-2">
              <span>Dark</span>
              <Moon className="w-4 h-4 ml-auto" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
            <div className="flex place-items-center w-full gap-2">
              <span>System</span>
              <Settings className="w-4 h-4 ml-auto" />
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
