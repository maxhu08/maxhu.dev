import { FC } from "react";
import { cn } from "~/utils/cn";

interface FancyCommandContainerProps {
  children: React.ReactNode;
  noPadding?: boolean;
}

export const FancyCommandContainer: FC<FancyCommandContainerProps> = ({ children, noPadding }) => {
  return (
    <>
      <br className="select-none" />
      <div
        className={cn(
          !noPadding && "p-2",
          "w-full overflow-x-auto overflow-y-hidden rounded-md bg-neutral-300 dark:bg-neutral-800"
        )}
      >
        {children}
      </div>
      <br className="select-none" />
    </>
  );
};
