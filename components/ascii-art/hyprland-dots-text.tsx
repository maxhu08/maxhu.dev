import { FC } from "react";

export const HyprlandDotsText: FC = () => {
  return (
    <div className="grid place-items-center">
      <div className="hidden md:block">
        {/* prettier-ignore */}
        <pre className="ascii-art text-teal-700">
░█░░░░█░░█░▄▀▀▄░█▀▀▄░█░░█▀▀▄░█▀▀▄░█▀▄░░░░█▀▄░▄▀▀▄░▀█▀░█▀▀<br/>
░█▀▀█░█▄▄█░█▄▄█░█▄▄▀░█░░█▄▄█░█░▒█░█░█░▀▀░█░█░█░░█░░█░░▀▀▄<br/>
░▀░░▀░▄▄▄▀░█░░░░▀░▀▀░▀▀░▀░░▀░▀░░▀░▀▀░░░░░▀▀░░░▀▀░░░▀░░▀▀▀
        </pre>
        <br />
      </div>
      <div className="block md:hidden">
        <br />
        <p className="font-semibold text-teal-700">~/dotfiles/hyprland-dots</p>
        <br />
      </div>
    </div>
  );
};
