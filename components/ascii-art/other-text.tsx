import { FC } from "react";

export const OtherText: FC = () => {
  return (
    <div className="grid place-items-center">
      <div className="hidden md:block">
        {/* prettier-ignore */}
        <pre className="whitespace-pre text-sky-300 leading-4">
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
        <p className="text-sky-300 font-semibold">~/other</p>
        <br />
      </div>
    </div>
  );
};
