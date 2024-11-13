import { FC } from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <main className="mx-auto mb-20 mt-20 grid w-[95%] grid-flow-row md:mb-60 lg:w-[60%] xl:w-[40%]">
      {children}
    </main>
  );
};
