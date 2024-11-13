import { FC } from "react";
import { Socials } from "~/components/home/socials";

export const Footer: FC = () => {
  return (
    <div className="fixed bottom-0 z-20 w-full">
      <div className="grid place-items-center px-4 py-2">
        <Socials />
      </div>
    </div>
  );
};
