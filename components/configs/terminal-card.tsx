"use client";

import { Check, Copy } from "lucide-react";
import { FC, useState } from "react";

interface TerminalCardProps {
  text: string;
}

export const TerminalCard: FC<TerminalCardProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="bg-neutral-300 dark:bg-neutral-800 rounded-md overflow-hidden">
      <div className="bg-black/10 dark:bg-neutral-700 p-2 flex justify-end">
        <button
          onClick={handleCopy}
          className="text-zinc-400 dark:text-zinc-500 hover:text-white duration-300 ease-in-out cursor-pointer"
        >
          <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "copied!" : "copy"}
          </div>
        </button>
      </div>
      <div className="p-2">
        <span className="text-emerald-500 select-none">$ </span>
        {text}
      </div>
    </div>
  );
};
