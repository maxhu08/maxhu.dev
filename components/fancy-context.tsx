"use client";

import { FC } from "react";
import Twemoji from "react-twemoji";

interface FancyContentProps {
  children: React.ReactNode;
}

export const FancyContent: FC<FancyContentProps> = ({ children }) => {
  return (
    <div>
      <Twemoji noWrapper options={{ className: "twemoji" }}>
        {children}
      </Twemoji>
    </div>
  );
};
