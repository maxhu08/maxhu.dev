import { FC } from "react";

interface Qprops {
  children: React.ReactNode;
}

export const Q: FC<Qprops> = ({ children }) => {
  return (
    <span className="bg-neutral-300 dark:bg-neutral-800 p-[0.125rem] rounded-sm text-black dark:text-zinc-400">
      {children}
    </span>
  );
};
