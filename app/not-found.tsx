import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "~/app/not-found.module.scss";
import { cn } from "~/utils/cn";

const Page: NextPage = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="grid grid-flow-row gap-2 place-items-center">
        <div
          className={cn("w-32 h-32 relative pb-2", styles["float-animation"])}
        >
          <Image src="/assets/palm_tree.svg" alt="tree" fill />
        </div>
        <p>page not found :/</p>
        <Link
          href="/"
          className="text-blue-500 hover:bg-blue-500/20 p-1 rounded-md duration-300 ease-in-out"
        >
          return home?
        </Link>
      </div>
    </div>
  );
};

export default Page;
