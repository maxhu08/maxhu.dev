"use client";

import { Check, Copy } from "lucide-react";
import { FC, useState } from "react";
import { cn } from "~/utils/cn";

interface FancyCommandProps {
  children: string;
}

export const FancyCommand: FC<FancyCommandProps> = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const command = children;

  const handleCopy = () => {
    navigator.clipboard.writeText(command);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const words = command.split(" ");

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative grid grid-cols-[auto_max-content]">
        <pre>
          <span className="select-none font-semibold text-emerald-500">$ </span>
          <span>
            <span className="text-cyan-600 dark:text-cyan-500">{words[0]}</span>{" "}
            <span className="text-indigo-600 dark:text-indigo-400">{words.slice(1).join(" ")}</span>
          </span>
        </pre>
        <button
          onClick={handleCopy}
          className={cn(
            !isHovered && "opacity-0",
            "absolute right-0 top-0 bg-neutral-300 dark:bg-neutral-800",
            "ml-auto cursor-pointer rounded-sm border border-neutral-500 p-1 text-neutral-500 duration-200 ease-in-out",
            "hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white"
          )}
        >
          <div>{copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}</div>
        </button>
      </div>
    </div>
  );
};
