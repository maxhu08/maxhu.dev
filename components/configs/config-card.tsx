import { FC } from "react";
import { Separator } from "~/components/separator";

interface ConfigCardProps {
  title: string;
  children: React.ReactNode;
}

export const ConfigCard: FC<ConfigCardProps> = ({ title, children }) => {
  return (
    <div className="p-2 grid grid-flow-row gap-1">
      <p className="font-semibold">{title}</p>
      <Separator orientation="horizontal" />
      <div className="box-border">{children}</div>
    </div>
  );
};
