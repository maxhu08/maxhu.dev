import { FC } from "react";

export const TmuxZenText: FC = () => {
  return (
    <div className="grid place-items-center">
      <div className="hidden md:block">
        {/* prettier-ignore */}
        <pre className="ascii-art text-indigo-500">
▀█▀░█▀▄▀█░█░▒█░█░█░░░░▀▀█░█▀▀░█▀▀▄<br />
░█░░█░▀░█░█░▒█░▄▀▄░▀▀░▄▀▒░█▀▀░█░▒█<br />
░▀░░▀░░▒▀░░▀▀▀░▀░▀░░░░▀▀▀░▀▀▀░▀░░▀
        </pre>
        <br />
      </div>
      <div className="block md:hidden">
        <br />
        <p className="font-semibold text-indigo-500">~/tmux-zen</p>
        <br />
      </div>
    </div>
  );
};
