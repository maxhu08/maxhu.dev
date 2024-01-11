"use client";

import { File } from "lucide-react";
import { useState, useEffect, FC } from "react";
import { Separator } from "~/components/separator";

interface CodeCardProps {
  fileIcon: any;
  fileName: string;
  codePath: string;
}

export const CodeCard: FC<CodeCardProps> = ({ fileIcon, fileName, codePath }) => {
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
    <div className="bg-neutral-300 dark:bg-neutral-800 rounded-md p-2">
      <div className="grid grid-flow-row gap-2">
        <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 text-zinc-400 dark:text-zinc-500">
          {fileIcon}
          <span>{fileName}</span>
        </div>
        <Separator orientation="horizontal" className="bg-zinc-400 dark:bg-zinc-500" />
        <pre className="overflow-scroll">{fileContent}</pre>
      </div>
    </div>
  );
};
