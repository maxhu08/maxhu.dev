import { FC } from "react";
import { FancyExternalLink } from "./fancy-external-link";

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
    <div className="grid grid-flow-row w-max">
      {items.map((item, index) => (
        <div key={`fancy-map-item-${index}`}>
          {/* large-screen */}
          <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] place-items-center">
            <span className="text-pink-500 font-semibold mr-auto">
              {item.left}
            </span>
            <span className="text-lime-500 font-semibold whitespace-pre">
              {" ==> "}
            </span>
            <div className="mr-auto">
              <FancyExternalLink
                alias={item.right.name}
                href={item.right.url}
              />
            </div>
          </div>
          {/* small-screen */}
          <div className="grid sm:hidden grid-rows-2">
            <span className="text-pink-500 font-semibold mr-auto">
              {item.left}
            </span>
            <div className="grid grid-cols-[max-content_auto]">
              <span className="text-lime-500 font-semibold whitespace-pre">
                {"└── "}
              </span>
              <div className="mr-auto">
                <FancyExternalLink
                  alias={item.right.name}
                  href={item.right.url}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
