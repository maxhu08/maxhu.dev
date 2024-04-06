import { FC } from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <main className="grid grid-flow-row mx-auto mt-20 mb-60 w-[95%] lg:w-[60%] xl:w-[40%]">
      {children}
    </main>
  );
};
