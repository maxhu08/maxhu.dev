"use client";

import axios from "axios";
import { FC, useEffect, useState } from "react";
import { FancySyntaxHighlighter } from "./fancy-syntax-highlight";

interface FancyFileDisplayProps {
  language: string;
  url: string;
}

export const FancyFileDisplay: FC<FancyFileDisplayProps> = ({
  language,
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
        {"=>"} fetched from <span className="text-sky-500">{url} </span>
      </pre>
      <pre className="text-pink-500 font-semibold">
        in <span className="text-sky-500">{elapsedTime.toFixed(3)}ms</span>
      </pre>
      <FancySyntaxHighlighter language={language}>
        {rawData}
      </FancySyntaxHighlighter>
    </div>
  );
};
