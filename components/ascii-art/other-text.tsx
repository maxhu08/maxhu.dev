import { FC } from "react";

export const OtherText: FC = () => {
  return (
    <div className="grid place-items-center">
      <div className="hidden md:block">
        {/* prettier-ignore */}
        <pre className="ascii-art text-sky-300">
{" "}██████╗ ████████╗██╗  ██╗███████╗██████╗ <br/>
██╔═══██╗╚══██╔══╝██║  ██║██╔════╝██╔══██╗<br/>
██║   ██║   ██║   ███████║█████╗  ██████╔╝<br/>
██║   ██║   ██║   ██╔══██║██╔══╝  ██╔══██╗<br/>
╚██████╔╝   ██║   ██║  ██║███████╗██║  ██║<br/>
 {" "}╚═════╝    ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
        </pre>
        <br />
      </div>
      <div className="block md:hidden">
        <br />
        <p className="font-semibold text-sky-300">~/other</p>
        <br />
      </div>
    </div>
  );
};
