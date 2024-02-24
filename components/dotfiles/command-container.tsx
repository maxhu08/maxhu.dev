import { FC } from "react";

interface CommandContainerProps {
  children: React.ReactNode;
}

export const CommandContainer: FC<CommandContainerProps> = ({ children }) => {
  return (
    <div className="bg-neutral-300 dark:bg-neutral-800 p-2 rounded-md w-full overflow-x-scroll">
      {children}
    </div>
  );
};
