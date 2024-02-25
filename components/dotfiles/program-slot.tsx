import { ExternalLink } from "lucide-react";
import { FC } from "react";

interface ProgramSlotProps {
  purpose: string;
  name: string;
  url: string;
}

export const ProgramSlot: FC<ProgramSlotProps> = ({ purpose, name, url }) => {
  return (
    <div>
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-2 w-full">
        <span className="text-pink-500">{purpose}</span>
        <span className="text-lime-500">{`==>`}</span>
        <a
          href={url}
          target="_blank"
          className="text-blue-500 hover:text-blue-600 ease-in-out duration-300"
        >
          <div className="grid grid-cols-[max-content_max-content] place-items-center gap-2">
            <ExternalLink className="w-4 h-4" /> <span>{name}</span>
          </div>
        </a>
      </div>
      <div className="grid md:hidden grid-flow-row gap-2 w-full">
        <span className="text-pink-500">{purpose}</span>
        <div className="grid grid-cols-[max-content_max-content] gap-2">
          <span className="text-lime-500">{`==>`}</span>
          <a
            href={url}
            target="_blank"
            className="text-blue-500 hover:text-blue-600 ease-in-out duration-300"
          >
            <div className="grid grid-cols-[max-content_max-content] place-items-center gap-2">
              <ExternalLink className="w-4 h-4" /> <span>{name}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
