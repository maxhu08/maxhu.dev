import { Github, Twitter, Youtube } from "lucide-react";
import { FC } from "react";
import { ActionTooltip } from "~/components/action-tooltip";

const socials = [
  {
    name: "github",
    icon: <Github className="w-6 h-6 text-blue-500 hover:text-blue-600" />,
    href: "https://github.com/maxhu08",
  },
  {
    name: "youtube",
    icon: <Youtube className="w-6 h-6 text-blue-500 hover:text-blue-600" />,
    href: "https://www.youtube.com/@maxhudotdev",
  },
  {
    name: "twitter | x",
    icon: <Twitter className="w-6 h-6 text-blue-500 hover:text-blue-600" />,
    href: "https://twitter.com/maxhu08",
  },
];

export const Socials: FC = () => {
  return (
    <div className="grid grid-flow-col place-items-center gap-2 w-max">
      {socials.map((social) => {
        return (
          <ActionTooltip label={social.name} key={`social-${social.name}`}>
            <a href={social.href} target="_blank" className="cursor-pointer">
              {social.icon}
            </a>
          </ActionTooltip>
        );
      })}
    </div>
  );
};
