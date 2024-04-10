import { FC } from "react";

export const NeovimZenText: FC = () => {
  return (
    <div className="grid place-items-center">
      <div className="hidden md:block">
        {/* prettier-ignore */}
        <pre className="ascii-art text-orange-500">
█▀▀▄░█▀▀░▄▀▀▄░▄░░░▄░░▀░░█▀▄▀█░░░░▀▀█░█▀▀░█▀▀▄<br />
█░▒█░█▀▀░█░░█░░█▄█░░░█▀░█░▀░█░▀▀░▄▀▒░█▀▀░█░▒█<br />
▀░░▀░▀▀▀░░▀▀░░░░▀░░░▀▀▀░▀░░▒▀░░░░▀▀▀░▀▀▀░▀░░▀
        </pre>
        <br />
      </div>
      <div className="block md:hidden">
        <br />
        <p className="text-orange-500 font-semibold">~/neovim-zen</p>
        <br />
      </div>
    </div>
  );
};
