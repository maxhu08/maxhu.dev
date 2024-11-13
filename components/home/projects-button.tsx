"use client";

import { Webhook } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { ActionTooltip } from "~/components/action-tooltip";
import { cn } from "~/utils/cn";
import styles from "~/components/home/projects-button.module.scss";

export const ProjectsButton: FC = () => {
  return (
    <ActionTooltip label="view projects" side="bottom">
      <Link href="/projects" className={styles.button}>
        <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 rounded-md bg-pink-500 p-2 text-white duration-300 ease-in-out hover:bg-pink-700">
          <Webhook className={cn("h-4 w-4", styles.icon)} />
          <span>projects</span>
        </div>
      </Link>
    </ActionTooltip>
  );
};
