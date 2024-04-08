import { FC } from "react";

export const TmuxZenText: FC = () => {
  return (
    <div className="grid place-items-center">
      <div className="hidden md:block">
        {/* prettier-ignore */}
        <pre className="whitespace-pre text-indigo-500 leading-4">
▀█▀░█▀▄▀█░█░▒█░█░█░░░░▀▀█░█▀▀░█▀▀▄<br />
░█░░█░▀░█░█░▒█░▄▀▄░▀▀░▄▀▒░█▀▀░█░▒█<br />
░▀░░▀░░▒▀░░▀▀▀░▀░▀░░░░▀▀▀░▀▀▀░▀░░▀
        </pre>
        <br />
      </div>
      <div className="block md:hidden">
        <br />
        <p className="text-indigo-500 font-semibold">~/tmux-zen</p>
        <br />
      </div>
    </div>
  );
};