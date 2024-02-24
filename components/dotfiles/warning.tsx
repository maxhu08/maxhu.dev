import { MessageCircleWarning } from "lucide-react";
import { FC } from "react";

interface WarningProps {
  children: React.ReactNode;
}

export const Warning: FC<WarningProps> = ({ children }) => {
  return (
    <div className="bg-rose-500/20 rounded-md overflow-hidden ">
      <div className="grid grid-cols-[max-content_auto] gap-2">
        <div className="bg-rose-500 h-full w-1"></div>
        <p className="p-2">{children}</p>
      </div>
    </div>
  );
};
