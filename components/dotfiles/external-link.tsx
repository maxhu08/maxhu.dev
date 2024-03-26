import Link from "next/link";
import { FC } from "react";

interface ExternalLinkProps {
  url: string;
}

export const ExternalLink: FC<ExternalLinkProps> = ({ url }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="text-blue-500 hover:text-blue-600 ease-in-out duration-300"
    >
      <span className="whitespace-nowrap max-w-[200px] lg:max-w-none align-middle truncate">
        {url}
      </span>
    </Link>
  );
};
