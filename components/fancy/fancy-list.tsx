import { FC } from "react";

interface FancyListProps {
  name?: string;
  items: string[];
}

export const FancyList: FC<FancyListProps> = ({ name, items }) => {
  return (
    <div>
      {name && <p className="text-cyan-500 font-semibold">{name}</p>}
      {items.map((item, index) => (
        <p key={index}>
          <span className="text-orange-500 font-semibold">- </span>
          <span>{item}</span>
        </p>
      ))}
    </div>
  );
};
