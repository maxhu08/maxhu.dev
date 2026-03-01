import type { ReactNode } from "react";

interface FancyContentProps {
  children?: ReactNode;
}

export function FancyContent({ children }: FancyContentProps) {
  return <p>{children}</p>;
}
