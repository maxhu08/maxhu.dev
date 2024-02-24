import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface GuideLinkProps {
  url: string;
}

export const GuideLink: FC<GuideLinkProps> = ({ url }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="text-blue-500 hover:text-blue-600 ease-in-out duration-300"
    >
      <div className="grid grid-cols-[max-content_max-content] place-items-center gap-2">
        <ExternalLink className="w-4 h-4" /> <span>install guide</span>
      </div>
    </Link>
  );
};
