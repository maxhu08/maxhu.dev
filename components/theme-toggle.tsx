"use client";

import { Moon, Settings, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "~/components/ui/dropdown-menu";

export const ThemeToggle: FC = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer text-zinc-500 duration-200 ease-in-out hover:text-black dark:text-zinc-400 dark:hover:text-white">
            <SunMoon className="h-6 w-6" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
            <div className="flex w-full place-items-center gap-2">
              <span>Light</span>
              <Sun className="ml-auto h-4 w-4" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
            <div className="flex w-full place-items-center gap-2">
              <span>Dark</span>
              <Moon className="ml-auto h-4 w-4" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
            <div className="flex w-full place-items-center gap-2">
              <span>System</span>
              <Settings className="ml-auto h-4 w-4" />
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
