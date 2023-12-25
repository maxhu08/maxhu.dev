import { FC } from "react";
import { Socials } from "~/components/home/socials";

export const Footer: FC = () => {
  return (
    <div className="fixed z-20 w-full bottom-0">
      <div className="py-2 px-4 grid place-items-center">
        <Socials />
      </div>
    </div>
  );
};
