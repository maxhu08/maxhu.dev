"use client";

import { FC, useEffect, useState } from "react";
import { websiteName } from "~/constants/website-name";

export const Rice: FC = () => {
  const [stateIndex, setStateIndex] = useState(0);

  useEffect(() => {
    console.log("\x1b[34m 🌴 welcome to my website");
  }, []);

  useEffect(() => {
    const states = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

    const interval = setInterval(() => {
      if (stateIndex === states.length - 1) setStateIndex(0);
      else setStateIndex((prev) => prev + 1);

      document.title = `${websiteName} ${states[stateIndex]}`;
    }, 200);

    return () => clearInterval(interval);
  }, [stateIndex]);

  return null;
};
