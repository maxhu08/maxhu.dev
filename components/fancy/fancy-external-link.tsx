import { ExternalLinkIcon } from "lucide-react";
import { FC } from "react";

interface FancyExternalLinkProps {
  href: string;
  alias: string;
}

export const FancyExternalLink: FC<FancyExternalLinkProps> = ({ href, alias }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-flex cursor-pointer items-center gap-1 text-blue-500 duration-300 ease-in-out hover:text-blue-600"
    >
      <ExternalLinkIcon className="h-4 w-4" />
      <span>{alias}</span>
    </a>
  );
};
