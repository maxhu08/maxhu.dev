import { FC } from "react";

interface Qprops {
  children: React.ReactNode;
}

export const Q: FC<Qprops> = ({ children }) => {
  return (
    <span className="rounded-sm bg-neutral-300 p-[0.125rem] text-black dark:bg-neutral-800 dark:text-zinc-400">
      {children}
    </span>
  );
};
