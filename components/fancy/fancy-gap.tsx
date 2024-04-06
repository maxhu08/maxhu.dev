import { Slash } from "lucide-react";
import { FC } from "react";

export const FancyGap: FC = () => {
  return (
    <div className="w-full h-32 py-4 grid place-items-center">
      <Slash className="w-6 h-6 text-zinc-300 dark:text-neutral-800" />
    </div>
  );
};
