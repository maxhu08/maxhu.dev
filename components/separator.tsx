import { cn } from "~/utils/cn";
import { FC } from "react";

interface SeparatorProps {
  orientation: "horizontal" | "vertical";
  className?: string;
}

export const Separator: FC<SeparatorProps> = ({ orientation, className }) => {
  return (
    <div
      className={cn(
        "bg-zinc-400 dark:bg-border rounded-xl",
        orientation === "horizontal" ? "w-full h-[1px]" : "h-full w-[1px]",
        className
      )}
    ></div>
  );
};
