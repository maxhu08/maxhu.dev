import { FC } from "react";

export const HyprlandDotsText: FC = () => {
  return (
    <div className="grid place-items-center">
      <div className="hidden md:block">
        {/* prettier-ignore */}
        <pre className="whitespace-pre text-teal-700 leading-4">
░█░░░░█░░█░▄▀▀▄░█▀▀▄░█░░█▀▀▄░█▀▀▄░█▀▄░░░░█▀▄░▄▀▀▄░▀█▀░█▀▀<br/>
░█▀▀█░█▄▄█░█▄▄█░█▄▄▀░█░░█▄▄█░█░▒█░█░█░▀▀░█░█░█░░█░░█░░▀▀▄<br/>
░▀░░▀░▄▄▄▀░█░░░░▀░▀▀░▀▀░▀░░▀░▀░░▀░▀▀░░░░░▀▀░░░▀▀░░░▀░░▀▀▀
        </pre>
        <br />
      </div>
      <div className="block md:hidden">
        <br />
        <p className="text-teal-700 font-semibold">~/dotfiles/hyprland-dots</p>
        <br />
      </div>
    </div>
  );
};
