import { Github, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { ActionTooltip } from "~/components/action-tooltip";

const socials = [
  {
    name: "github",
    icon: <Github className="h-6 w-6 text-blue-500 hover:text-blue-600" />,
    href: "/redirect/github"
  },
  {
    name: "youtube",
    icon: <Youtube className="h-6 w-6 text-blue-500 hover:text-blue-600" />,
    href: "/redirect/youtube"
  },
  {
    name: "twitter/x",
    icon: <Twitter className="h-6 w-6 text-blue-500 hover:text-blue-600" />,
    href: "/redirect/twitter"
  }
];

export const Socials: FC = () => {
  return (
    <div className="grid w-max grid-flow-col place-items-center gap-2">
      {socials.map((social) => {
        return (
          <ActionTooltip label={social.name} key={`social-${social.name}`}>
            <Link href={social.href} target="_blank" className="cursor-pointer">
              {social.icon}
            </Link>
          </ActionTooltip>
        );
      })}
    </div>
  );
};
