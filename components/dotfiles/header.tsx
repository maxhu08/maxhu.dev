import { FC } from "react";
import { Separator } from "~/components/separator";

interface HeaderProps {
  name: string;
}

export const Header: FC<HeaderProps> = ({ name }) => {
  return (
    <>
      <a href={`#${name}`} id={name}>
        <span className="font-semibold text-lg"># {name}</span>
      </a>
      <Separator orientation="horizontal" className="mb-2" />
    </>
  );
};
