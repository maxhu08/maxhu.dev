import type { HTMLAttributes } from "react";
import { cn } from "~/utils/cn";

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn("bg-muted animate-pulse rounded-md", className)} {...props} />;
}
