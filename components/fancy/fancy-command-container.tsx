import { FC } from "react";
import { cn } from "~/utils/cn";

interface FancyCommandContainerProps {
  children: React.ReactNode;
  noPadding?: boolean;
}

export const FancyCommandContainer: FC<FancyCommandContainerProps> = ({
  children,
  noPadding,
}) => {
  return (
    <>
      <br className="select-none" />
      <div
        className={cn(
          !noPadding && "p-2",
          "bg-neutral-300 dark:bg-neutral-800 rounded-md w-full overflow-y-hidden overflow-x-auto",
        )}
      >
        {children}
      </div>
      <br className="select-none" />
    </>
  );
};
