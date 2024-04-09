"use client";

import axios from "axios";
import { FC, useEffect, useState } from "react";
import { FancySyntaxHighlighter } from "./fancy-syntax-highlight";
import { Separator } from "../separator";

interface FancyFileDisplayProps {
  language: string;
  url: string;
  alias: string;
}

export const FancyFileDisplay: FC<FancyFileDisplayProps> = ({
  language,
  alias,
  url,
}) => {
  const [rawData, setRawData] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const fetchRawData = async () => {
      try {
        const startTime = performance.now();
        const res = await axios.get(url);

        setRawData(res.data);

        const endTime = performance.now();
        const elapsedTime = endTime - startTime;
        setElapsedTime(elapsedTime);
      } catch (err) {
        console.error("[FANCY_FILE_DISPLAY]", err);
      }
    };

    fetchRawData();
  }, [url]);

  return (
    <div>
      <pre className="text-pink-500 font-semibold">
        {"=>"} fetched from <span className="text-sky-500">{alias} </span>
      </pre>
      <pre className="text-pink-500 font-semibold">
        in <span className="text-sky-500">{elapsedTime.toFixed(3)}ms</span>
      </pre>
      <Separator
        orientation="horizontal"
        className="!bg-zinc-400 !dark:bg-neutral-500 my-2"
      />
      <FancySyntaxHighlighter language={language}>
        {rawData}
      </FancySyntaxHighlighter>
    </div>
  );
};
