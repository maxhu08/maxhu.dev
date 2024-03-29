import { FC } from "react";

export const HyprlandDotsText: FC = () => {
  return (
    <div className="grid place-items-center">
      {/* prettier-ignore */}
      <pre className="hidden md:block whitespace-pre text-teal-700 leading-4">
░█░░░░█░░█░▄▀▀▄░█▀▀▄░█░░█▀▀▄░█▀▀▄░█▀▄░░░░█▀▄░▄▀▀▄░▀█▀░█▀▀<br/>
░█▀▀█░█▄▄█░█▄▄█░█▄▄▀░█░░█▄▄█░█░▒█░█░█░▀▀░█░█░█░░█░░█░░▀▀▄<br/>
░▀░░▀░▄▄▄▀░█░░░░▀░▀▀░▀▀░▀░░▀░▀░░▀░▀▀░░░░░▀▀░░░▀▀░░░▀░░▀▀▀
      </pre>
      <br />
      <div className="block md:hidden">
        <br />
        <p className="text-teal-700">~/dotfiles/alpha</p>
        <br />
      </div>
    </div>
  );
};
