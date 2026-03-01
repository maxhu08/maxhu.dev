import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="mx-auto mt-20 mb-20 grid w-[95%] grid-flow-row md:mb-60 lg:w-[60%] xl:w-[40%]">
      {children}
    </main>
  );
}
