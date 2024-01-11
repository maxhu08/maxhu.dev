import { Separator } from "~/components/separator";

const Page = () => {
  return (
    <div className="w-full h-full grid place-items-center pb-10">
      <main className="grid grid-flow-row gap-2 w-full sm:w-[60%] md:w-[40%] h-full pt-10">
        <div className="p-2">
          <p className="font-semibold">my-configs</p>
          <Separator orientation="horizontal" className="my-1" />
        </div>
      </main>
    </div>
  );
};

export default Page;
