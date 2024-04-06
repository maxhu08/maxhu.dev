"use client";

import { Boxes } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { ActionTooltip } from "~/components/action-tooltip";
import { cn } from "~/utils/cn";
import styles from "~/components/home/other-button.module.scss";

export const OtherButton: FC = () => {
  return (
    <ActionTooltip label="other links" side="bottom">
      <Link href="/other" className={styles.button}>
        <div className="text-white grid grid-cols-[max-content_max-content] place-items-center gap-1 bg-sky-500 hover:bg-sky-700 duration-300 ease-in-out p-2 rounded-md">
          <Boxes className={cn("w-4 h-4", styles.boxes)} />
          <span>other links</span>
        </div>
      </Link>
    </ActionTooltip>
  );
};
