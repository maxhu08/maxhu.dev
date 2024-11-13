import { Slash } from "lucide-react";
import { FC } from "react";

export const FancyGap: FC = () => {
  return (
    <div className="grid h-32 w-full place-items-center py-4">
      <Slash className="h-6 w-6 text-zinc-300 dark:text-neutral-800" />
    </div>
  );
};
