import { FC } from "react";
import { Separator } from "~/components/separator";

interface FancyContentProps {
  children: React.ReactNode;
}

export const FancyContent: FC<FancyContentProps> = ({ children }) => {
  return <p>{children}</p>;
};
