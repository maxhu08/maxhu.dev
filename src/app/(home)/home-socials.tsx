import Link from "next/link";
import { RiBlueskyLine, RiGithubLine, RiTwitterXLine, RiYoutubeLine } from "@remixicon/react";
import { ActionTooltip } from "~/components/action-tooltip";

const socials = [
  {
    label: "github",
    href: "https://github.com/maxhu08",
    icon: RiGithubLine
  },
  {
    label: "youtube",
    href: "https://www.youtube.com/@maxhudotdev",
    icon: RiYoutubeLine
  },
  {
    label: "twitter/x",
    href: "https://twitter.com/maxhu08",
    icon: RiTwitterXLine
  },
  {
    label: "bluesky",
    href: "https://bsky.app/profile/maxhu08.bsky.social",
    icon: RiBlueskyLine
  }
] as const;

export function HomeSocials() {
  return (
    <footer className="fixed bottom-0 z-20 w-full">
      <div className="grid place-items-center px-4 py-2">
        <div className="grid w-max grid-flow-col place-items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <ActionTooltip key={label} label={label}>
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
                aria-label={label}
              >
                <Icon className="h-6 w-6 text-blue-500 hover:text-blue-600" />
              </Link>
            </ActionTooltip>
          ))}
        </div>
      </div>
    </footer>
  );
}
