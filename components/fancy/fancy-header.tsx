import { FC } from "react";
import { Separator } from "~/components/separator";

interface FancyHeaderProps {
  title: string;
}

export const FancyHeader: FC<FancyHeaderProps> = ({ title }) => {
  return (
    <>
      <a href={`#${title}`} id={title}>
        <span className="text-lg font-semibold"># {title}</span>
      </a>
      <Separator orientation="horizontal" className="mb-2" />
    </>
  );
};
