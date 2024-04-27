import { NextPage } from "next";
import { AwesomeDotsText } from "~/components/ascii-art/awesome-dots-text";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyGap } from "~/components/fancy/fancy-gap";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { FancyMapLinks } from "~/components/fancy/fancy-map-links";
import { FancyYoutubeEmbed } from "~/components/fancy/fancy-youtube-embed";
import { PageContainer } from "~/components/page-container";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <AwesomeDotsText />
      <FancyHeader title="info" />
      <FancyContent>this setup uses these programs:</FancyContent>
      <FancyMapLinks
        items={[
          {
            left: "Distro",
            right: {
              name: "Arch",
              url: "https://archlinux.org/",
            },
          },
          {
            left: "WM",
            right: {
              name: "awesome",
              url: "https://awesomewm.org/",
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
              name: "rofi",
              url: "https://github.com/davatorium/rofi",
            },
          },
          {
            left: "Taskbar",
            right: {
              name: "wibar",
              url: "https://awesomewm.org/doc/api/classes/awful.wibar.html",
            },
          },
          {
            left: "File Manager",
            right: {
              name: "thunar",
              url: "https://wiki.archlinux.org/title/Thunar",
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
      <FancyYoutubeEmbed videoId="ouDFiR3QKpo" />
      <FancyGap />
    </PageContainer>
  );
};

export default Page;
