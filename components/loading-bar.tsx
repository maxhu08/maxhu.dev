"use client";

import { Next13NProgress } from "nextjs13-progress";
import { FC } from "react";

export const LoadingBar: FC = () => {
  return (
    <Next13NProgress
      color="#14b8a6"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow
      options={{ showSpinner: false }}
    />
  );
};
