"use client";

import { Check, Copy } from "lucide-react";
import { FC, useState } from "react";
import { cn } from "~/utils/cn";

interface CommandProps {
  command: string;
  comment?: string;
}

export const Command: FC<CommandProps> = ({ command, comment }) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {comment && (
        <div className="text-neutral-500">
          <span className="select-none"># </span>
          <span>{comment}</span>
        </div>
      )}
      <div className="grid grid-cols-[auto_max-content]">
        <div>
          <span className="text-emerald-500 select-none">$ </span>
          <span>{command}</span>
        </div>
        <button
          onClick={handleCopy}
          className={cn(
            !isHovered && "opacity-0",
            "ml-auto border p-1 rounded-md border-neutral-500 text-neutral-500 duration-100 ease-in-out cursor-pointer",
            "hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white"
          )}
        >
          <div>{copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}</div>
        </button>
      </div>
    </div>
  );
};
