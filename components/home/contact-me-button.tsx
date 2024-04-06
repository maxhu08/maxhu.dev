"use client";

import { ChevronRight } from "lucide-react";
import { FC } from "react";
import { ActionTooltip } from "~/components/action-tooltip";
import styles from "~/components/home/contact-me-button.module.scss";
import { cn } from "~/utils/cn";

export const ContactMeButton: FC = () => {
  const openEmail = () => {
    const recipientEmail = "hello@maxhu.dev";
    const mailtoLink = `mailto:${recipientEmail}`;
    window.location.href = mailtoLink;
  };

  return (
    <ActionTooltip label="email hello@maxhu.dev" side="bottom">
      <button onClick={openEmail} className={styles.button}>
        <div className="text-white grid grid-cols-[max-content_max-content] place-items-center gap-1 bg-emerald-500 hover:bg-emerald-700 duration-300 ease-in-out p-2 rounded-md">
          <ChevronRight className={cn("w-4 h-4", styles.arrow)} />
          <span>contact me</span>
        </div>
      </button>
    </ActionTooltip>
  );
};
