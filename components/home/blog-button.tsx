"use client";

import Link from "next/link";
import { FC } from "react";
import { ActionTooltip } from "~/components/action-tooltip";
import { cn } from "~/utils/cn";
import styles from "~/components/home/blog-button.module.scss";
import { Antenna } from "lucide-react";

export const BlogButton: FC = () => {
  return (
    <ActionTooltip label="other links" side="bottom">
      <Link href="https://blog.maxhu.dev" target="_blank" className={styles.button}>
        <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 rounded-md bg-indigo-500 p-2 text-white duration-300 ease-in-out hover:bg-indigo-700">
          <Antenna className={cn("h-4 w-4", styles.antenna)} />
          <span>blog</span>
        </div>
      </Link>
    </ActionTooltip>
  );
};
