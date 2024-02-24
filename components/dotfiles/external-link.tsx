import Link from "next/link";
import { FC } from "react";

interface ExternalLinkProps {
  url: string;
}

export const ExternalLink: FC<ExternalLinkProps> = ({ url }) => {
  return (
    <Link href={url} className="text-blue-500 hover:text-blue-600 ease-in-out duration-300">
      {url}
    </Link>
  );
};
