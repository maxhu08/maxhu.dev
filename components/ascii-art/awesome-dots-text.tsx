import { FC } from "react";

export const AwesomeDotsText: FC = () => {
  return (
    <div className="grid place-items-center">
      <div className="hidden md:block">
        {/* prettier-ignore */}
        <pre className="ascii-art text-sky-500">
░█▀▀▄░█░░░█░█▀▀░█▀▀░▄▀▀▄░█▀▄▀█░█▀▀░░░░█▀▄░▄▀▀▄░▀█▀░█▀▀<br/>
░█▄▄█░▀▄█▄▀░█▀▀░▀▀▄░█░░█░█░▀░█░█▀▀░▀▀░█░█░█░░█░░█░░▀▀▄<br/>
░▀░░▀░░▀░▀░░▀▀▀░▀▀▀░░▀▀░░▀░░▒▀░▀▀▀░░░░▀▀░░░▀▀░░░▀░░▀▀▀
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
