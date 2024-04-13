import { FC } from "react";

interface FancyCommandContainerProps {
  children: React.ReactNode;
}

export const FancyCommandContainer: FC<FancyCommandContainerProps> = ({
  children,
}) => {
  return (
    <>
      <br className="select-none" />
      <div className="bg-neutral-300 dark:bg-neutral-800 p-2 rounded-md w-full overflow-y-hidden overflow-x-auto">
        {children}
      </div>
      <br className="select-none" />
    </>
  );
};
