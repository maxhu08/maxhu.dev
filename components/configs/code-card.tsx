"use client";

import { Check, Copy, File } from "lucide-react";
import { useState, useEffect, FC } from "react";

// syntax highlighthing
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeCardProps {
  fileIcon?: any;
  fileName: string;
  codePath: string;
  language: string;
}

export const CodeCard: FC<CodeCardProps> = ({ fileIcon, fileName, codePath, language }) => {
  const [fileContent, setFileContent] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch(codePath);
        const content = await response.text();
        setFileContent(content);
      } catch (err) {
        console.log("[CODE_CARD]", err);
      }
    };

    fetchFileContent();
  }, [codePath]);

  const handleCopy = () => {
    navigator.clipboard.writeText(fileContent);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    // text-base fix
    <div className="bg-neutral-300 dark:bg-neutral-800 rounded-md overflow-hidden text-base">
      <div className="grid grid-flow-row gap-1">
        <div className="bg-black/10 dark:bg-neutral-700 grid grid-flow-col p-2">
          <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1">
            {fileIcon ? fileIcon : <File className="w-4 h-4" />}
            <span>{fileName}</span>
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
        <div className="overflow-y-scroll">
          <SyntaxHighlighter
            language={language}
            style={atomOneDark}
            customStyle={{ background: "#00000000" }}
          >
            {fileContent}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};
