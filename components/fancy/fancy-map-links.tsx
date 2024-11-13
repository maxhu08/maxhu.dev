import { FC } from "react";
import { FancyInternalLink } from "./fancy-internal-link";

interface FancyMapLinksProps {
  items: {
    left: string;
    right: {
      name: string;
      url: string;
    };
  }[];
}

export const FancyMapLinks: FC<FancyMapLinksProps> = ({ items }) => {
  return (
    <div className="grid w-max grid-flow-row">
      {items.map((item, index) => (
        <div key={`fancy-map-item-${index}`}>
          {/* large-screen */}
          <div className="hidden grid-cols-[1fr_auto_1fr] place-items-center sm:grid">
            <span className="mr-auto font-semibold text-pink-500">{item.left}</span>
            <span className="whitespace-pre font-semibold text-lime-500">{" ==> "}</span>
            <div className="mr-auto">
              <FancyInternalLink alias={item.right.name} href={item.right.url} />
            </div>
          </div>
          {/* small-screen */}
          <div className="grid grid-rows-2 sm:hidden">
            <span className="mr-auto font-semibold text-pink-500">{item.left}</span>
            <div className="grid grid-cols-[max-content_auto]">
              <span className="whitespace-pre font-semibold text-lime-500">{"└── "}</span>
              <div className="mr-auto">
                <FancyInternalLink alias={item.right.name} href={item.right.url} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
