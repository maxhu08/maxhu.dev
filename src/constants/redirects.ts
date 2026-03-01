import type { NextConfig } from "next";

type Redirects = Awaited<ReturnType<NonNullable<NextConfig["redirects"]>>>;

export const redirects: Redirects = [
  {
    source: "/redirect/github",
    destination: "https://github.com/maxhu08",
    permanent: true
  },
  {
    source: "/redirect/youtube",
    destination: "https://www.youtube.com/@maxhudotdev",
    permanent: true
  },
  {
    source: "/redirect/twitter",
    destination: "https://twitter.com/maxhu08",
    permanent: true
  },
  {
    source: "/redirect/discord/mtab",
    destination: "https://discord.gg/JMrDphV5xp",
    permanent: true
  }
];
