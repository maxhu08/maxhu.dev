import { NextPage } from "next";
import { OtherText } from "~/components/ascii-art/other-text";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { FancyInternalLink } from "~/components/fancy/fancy-internal-link";
import { PageContainer } from "~/components/page-container";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <OtherText />
      <FancyHeader title="info" />
      <FancyContent>
        This page contains links to stuff that I don't think is important enough
        to put on the home page but still wanted to include on my website.
      </FancyContent>
      <br />
      <FancyContent>
        This page mainly consists of stuff like my dotfiles and other configs
      </FancyContent>
      <br />
      <FancyHeader title="links" />
      <FancyContent>You can find the links here</FancyContent>
      <br />
      <FancyContent>
        <FancyInternalLink alias="dotfiles" href="/dotfiles" />
        <br />
        <FancyInternalLink alias="neovim-zen" href="/neovim-zen" />
        <br />
        <FancyInternalLink alias="tmux-zen" href="/tmux-zen" />
      </FancyContent>
      <br />
    </PageContainer>
  );
};

export default Page;
