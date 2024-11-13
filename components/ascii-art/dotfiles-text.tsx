import { FC } from "react";

export const DotfilesText: FC = () => {
  return (
    <div className="grid place-items-center">
      <div className="hidden md:block">
        {/* prettier-ignore */}
        <pre className="ascii-art text-[#6A9955]">
██████╗  ██████╗ ████████╗███████╗██╗██╗     ███████╗███████╗<br/>
██╔══██╗██╔═══██╗╚══██╔══╝██╔════╝██║██║     ██╔════╝██╔════╝<br/>
██║  ██║██║   ██║   ██║   █████╗  ██║██║     █████╗  ███████╗<br/>
██║  ██║██║   ██║   ██║   ██╔══╝  ██║██║     ██╔══╝  ╚════██║<br/>
██████╔╝╚██████╔╝   ██║   ██║     ██║███████╗███████╗███████║<br/>
╚═════╝  ╚═════╝    ╚═╝   ╚═╝     ╚═╝╚══════╝╚══════╝╚══════╝
        </pre>
        <br />
      </div>
      <div className="block md:hidden">
        <br />
        <p className="font-semibold text-[#6A9955]">~/dotfiles</p>
        <br />
      </div>
    </div>
  );
};
