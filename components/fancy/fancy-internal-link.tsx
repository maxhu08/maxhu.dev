"use client";

import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface FancyInternalLinkProps {
  href: string;
  alias: string;
}

export const FancyInternalLink: FC<FancyInternalLinkProps> = ({ href, alias }) => {
  return (
    <Link
      href={href}
      className="inline-flex cursor-pointer items-center gap-1 text-blue-500 duration-300 ease-in-out hover:text-blue-600"
      onClick={() => window.scrollTo(0, 0)}
    >
      <ExternalLinkIcon className="h-4 w-4" />
      <span>{alias}</span>
    </Link>
  );
};
