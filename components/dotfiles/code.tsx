"use client";

import { Check, Copy } from "lucide-react";
import { FC, useState } from "react";
import { cn } from "~/utils/cn";

interface CodeProps {
  text: string;
}

export const Code: FC<CodeProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <pre>{text}</pre>
      <button
        onClick={handleCopy}
        className={cn(
          !isHovered && "opacity-0",
          "absolute top-0 right-0 border p-1 rounded-md border-neutral-500 text-neutral-500 duration-100 ease-in-out cursor-pointer",
          "hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white"
        )}
      >
        <div>{copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}</div>
      </button>
    </div>
  );
};
