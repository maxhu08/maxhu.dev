import { FC } from "react";

export const NeovimZenText: FC = () => {
  return (
    <div className="grid place-items-center">
      {/* prettier-ignore */}
      <pre className="hidden md:block whitespace-pre text-orange-500 leading-4">
░█▀▀▄░█▀▀░▄▀▀▄░▄░░░▄░░▀░░█▀▄▀█░░░░▀▀█░█▀▀░█▀▀▄<br />
░█░▒█░█▀▀░█░░█░░█▄█░░░█▀░█░▀░█░▀▀░▄▀▒░█▀▀░█░▒█<br />
░▀░░▀░▀▀▀░░▀▀░░░░▀░░░▀▀▀░▀░░▒▀░░░░▀▀▀░▀▀▀░▀░░▀
      </pre>
      <br />
      <div className="block md:hidden">
        <br />
        <p className="text-teal-700">~/neovim-zen</p>
        <br />
      </div>
    </div>
  );
};
