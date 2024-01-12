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
      <div className="bg-black/10 dark:bg-neutral-700 p-2 grid grid-flow-col">
        <div className="grid grid-cols-3 gap-2 place-items-center w-max">
          <div className="w-3 h-3 rounded-[50%] bg-red-500"></div>
          <div className="w-3 h-3 rounded-[50%] bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-[50%] bg-emerald-500"></div>
        </div>
        <button
          onClick={handleCopy}
          className="ml-auto text-zinc-400 dark:text-zinc-500 hover:text-white duration-300 ease-in-out cursor-pointer"
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
