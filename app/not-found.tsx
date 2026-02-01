import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "~/app/not-found.module.scss";
import { cn } from "~/utils/cn";

const Page: NextPage = () => {
  return (
    <div className="grid h-screen w-full place-items-center">
      <div className="grid grid-flow-row place-items-center gap-2">
        <div className={cn("pb-100 relative h-32 w-32 pb-40", styles["float-animation"])}>
          <Image src="/assets/palm_tree.svg" alt="tree" fill />
        </div>
        <p>page not found :/</p>
        <Link
          href="/"
          className="rounded-md p-1 text-blue-500 duration-300 ease-in-out hover:bg-blue-500/20"
        >
          return home?
        </Link>
      </div>
    </div>
  );
};

export default Page;
