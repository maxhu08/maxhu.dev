"use client";

import { Boxes } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { ActionTooltip } from "~/components/action-tooltip";
import { cn } from "~/utils/cn";
import styles from "~/components/home/other-button.module.scss";

export const OtherButton: FC = () => {
  return (
    <ActionTooltip label="other links" side="top">
      <Link href="/other" className={cn("w-full", styles.button)}>
        <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 rounded-md bg-sky-500 p-2 text-white duration-300 ease-in-out hover:bg-sky-700">
          <Boxes className={cn("h-4 w-4", styles.boxes)} />
          <span>other links</span>
        </div>
      </Link>
    </ActionTooltip>
  );
};
