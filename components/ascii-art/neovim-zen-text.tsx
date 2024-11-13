import { FC } from "react";
import { cn } from "~/utils/cn";

export const NeovimZenText: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="grid place-items-center">
      <div className="hidden md:block">
        {/* prettier-ignore */}
        <pre className={cn("ascii-art text-orange-500", className)}>
█▀▀▄░█▀▀░▄▀▀▄░▄░░░▄░░▀░░█▀▄▀█░░░░▀▀█░█▀▀░█▀▀▄<br />
█░▒█░█▀▀░█░░█░░█▄█░░░█▀░█░▀░█░▀▀░▄▀▒░█▀▀░█░▒█<br />
▀░░▀░▀▀▀░░▀▀░░░░▀░░░▀▀▀░▀░░▒▀░░░░▀▀▀░▀▀▀░▀░░▀
        </pre>
        <br />
      </div>
      <div className="block md:hidden">
        <br />
        <p className="font-semibold text-orange-500">~/neovim-zen</p>
        <br />
      </div>
    </div>
  );
};
