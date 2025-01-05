"use client";

import { ChevronRight } from "lucide-react";
import { FC } from "react";
import { ActionTooltip } from "~/components/action-tooltip";
import styles from "~/components/home/contact-me-button.module.scss";
import { cn } from "~/utils/cn";

const recipientEmail = "contact@maxhu.dev";

export const ContactMeButton: FC = () => {
  const openEmail = () => {
    const mailtoLink = `mailto:${recipientEmail}`;
    window.location.href = mailtoLink;
  };

  return (
    <ActionTooltip label={`email ${recipientEmail}`} side="top">
      <button onClick={openEmail} className={cn("w-full", styles.button)}>
        <div className="grid grid-cols-[max-content_max-content] place-items-center gap-1 rounded-md bg-emerald-500 p-2 text-white duration-300 ease-in-out hover:bg-emerald-700">
          <ChevronRight className={cn("h-4 w-4", styles.arrow)} />
          <span>contact me</span>
        </div>
      </button>
    </ActionTooltip>
  );
};
