"use client";

import axios from "axios";
import { FC, useEffect, useState } from "react";
import { FancySyntaxHighlighter } from "./fancy-syntax-highlight";
import { Separator } from "../separator";

interface FancyFileDisplayProps {
  language: string;
  url: string;
  alias: string;
  isJSON?: boolean;
}

export const FancyFileDisplay: FC<FancyFileDisplayProps> = ({
  language,
  alias,
  url,
  isJSON,
}) => {
  const [rawData, setRawData] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const fetchRawData = async () => {
      try {
        const startTime = performance.now();
        const res = await axios.get(url);

        console.log(res);

        if (isJSON) {
          setRawData(JSON.stringify(res.data, null, 2));
        } else {
          setRawData(res.data);
        }

        const endTime = performance.now();
        const elapsedTime = endTime - startTime;
        setElapsedTime(elapsedTime);
      } catch (err) {
        console.error("[FANCY_FILE_DISPLAY]", err);
      }
    };

    fetchRawData();
  }, [url, isJSON]);

  return (
    <div>
      <pre className="text-pink-500 font-semibold">
        {"=>"} fetched from{" "}
        <a href={alias} target="_blank">
          <span className="text-sky-500">{alias}</span>
        </a>
      </pre>
      <pre className="text-pink-500 font-semibold">
        in <span className="text-sky-500">{elapsedTime.toFixed(3)}ms</span>{" "}
        <button
          className="outline-none"
          onClick={() => setShown((prev) => !prev)}
        >
          <span className="text-neutral-500">hide/show</span>
        </button>
      </pre>
      {shown && (
        <>
          <Separator
            orientation="horizontal"
            className="!bg-zinc-400 !dark:bg-neutral-500 my-2"
          />
          <FancySyntaxHighlighter language={language}>
            {rawData}
          </FancySyntaxHighlighter>
        </>
      )}
    </div>
  );
};
