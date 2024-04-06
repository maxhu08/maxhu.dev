import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface FancyExternalLinkProps {
  href: string;
  alias: string;
}

export const FancyExternalLink: FC<FancyExternalLinkProps> = ({
  href,
  alias,
}) => {
  return (
    <a
      href={href}
      className="cursor-pointer text-blue-500 hover:text-blue-600 ease-in-out duration-300 inline-flex items-center gap-1"
    >
      <ExternalLinkIcon className="w-4 h-4" />
      <span>{alias}</span>
    </a>
  );
};
