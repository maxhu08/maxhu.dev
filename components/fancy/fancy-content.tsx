import { FC } from "react";

interface FancyContentProps {
  children?: React.ReactNode;
}

export const FancyContent: FC<FancyContentProps> = ({ children }) => {
  return <p>{children}</p>;
};
