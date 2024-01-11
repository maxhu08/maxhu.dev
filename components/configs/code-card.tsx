"use client";

import { File } from "lucide-react";
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

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch(codePath);
        const content = await response.text();
        setFileContent(content);
      } catch (error) {
        console.error("Error fetching file content:", error);
      }
    };

    fetchFileContent();
  }, [codePath]);

  return (
    <div className="bg-neutral-300 dark:bg-neutral-800 rounded-md overflow-hidden">
      <div className="grid grid-flow-row gap-1">
        <div className="bg-neutral-400 dark:bg-neutral-700 grid grid-cols-[max-content_max-content] place-items-center gap-1 text-zinc-400 dark:text-zinc-500 p-2">
          {fileIcon ? fileIcon : <File className="w-4 h-4" />}
          <span>{fileName}</span>
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
