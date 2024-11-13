import { FC } from "react";

interface FancyListProps {
  name?: string;
  items: string[];
}

export const FancyList: FC<FancyListProps> = ({ name, items }) => {
  return (
    <div>
      {name && <p className="font-semibold text-cyan-500">{name}</p>}
      {items.map((item, index) => (
        <p key={`fancy-list-item-${index}`}>
          <span className="font-semibold text-orange-500">- </span>
          <span>{item}</span>
        </p>
      ))}
    </div>
  );
};
