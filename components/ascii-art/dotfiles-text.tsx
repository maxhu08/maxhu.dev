import { FC } from "react";

export const DotfilesText: FC = () => {
  return (
    <div className="grid place-items-center">
      {/* prettier-ignore */}
      <pre className="hidden md:block whitespace-pre text-[#6A9955]">
██████╗  ██████╗ ████████╗███████╗██╗██╗     ███████╗███████╗<br/>
██╔══██╗██╔═══██╗╚══██╔══╝██╔════╝██║██║     ██╔════╝██╔════╝<br/>
██║  ██║██║   ██║   ██║   █████╗  ██║██║     █████╗  ███████╗<br/>
██║  ██║██║   ██║   ██║   ██╔══╝  ██║██║     ██╔══╝  ╚════██║<br/>
██████╔╝╚██████╔╝   ██║   ██║     ██║███████╗███████╗███████║<br/>
╚═════╝  ╚═════╝    ╚═╝   ╚═╝     ╚═╝╚══════╝╚══════╝╚══════╝
      </pre>
      <div className="block md:hidden">
        <br />
        <p className="text-[#6A9955] font-semibold">~/dotfiles</p>
        <br />
      </div>
    </div>
  );
};
