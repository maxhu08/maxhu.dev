import { NextPage } from "next";
import { HyprlandDotsText } from "~/components/ascii-art/hyprland-dots-text";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { FancyMapLinks } from "~/components/fancy/fancy-map-links";
import { FancyYoutubeEmbed } from "~/components/fancy/fancy-youtube-embed";
import { PageContainer } from "~/components/page-container";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <HyprlandDotsText />
      <FancyHeader title="info" />
      <FancyContent>this setup uses these programs:</FancyContent>
      <br />
      <FancyMapLinks
        items={[
          {
            left: "Distro",
            right: {
              name: "EndeavourOS",
              url: "https://endeavouros.com/",
            },
          },
          {
            left: "DE/WM/Compositor",
            right: {
              name: "Hyprland",
              url: "https://hyprland.org/",
            },
          },
          {
            left: "Terminal Emulator",
            right: {
              name: "kitty",
              url: "https://github.com/kovidgoyal/kitty",
            },
          },
          {
            left: "Shell",
            right: {
              name: "fish",
              url: "https://fishshell.com/",
            },
          },
          {
            left: "App Launcher",
            right: {
              name: "wofi",
              url: "https://man.archlinux.org/man/wofi.1.en",
            },
          },
          {
            left: "Taskbar",
            right: {
              name: "waybar",
              url: "https://github.com/Alexays/Waybar",
            },
          },
          {
            left: "File Manager",
            right: {
              name: "nemo",
              url: "https://wiki.archlinux.org/title/Nemo",
            },
          },
          {
            left: "Editor",
            right: {
              name: "VSCode",
              url: "https://code.visualstudio.com/",
            },
          },
          {
            left: "Editor",
            right: {
              name: "neovim",
              url: "https://neovim.io/",
            },
          },
        ]}
      />
      <br />
      <FancyContent>Here is a quick showcase of my setup:</FancyContent>
      <FancyYoutubeEmbed videoId="XK7gal3Wrtk" />
    </PageContainer>
  );
};

export default Page;
