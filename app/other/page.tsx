import { NextPage } from "next";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { FancyInternalLink } from "~/components/fancy/fancy-internal-link";
import { PageContainer } from "~/components/page-container";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <FancyHeader title="info" />
      <FancyContent>
        This page contains links to stuff that I don't consider as projects but
        I wanted to put on my website anyway.
      </FancyContent>
      <br />
      <FancyContent>
        This page mainly consists of stuff like my dotfiles and neovim config
      </FancyContent>
      <br />
      <FancyHeader title="links" />
      <FancyContent>Other links: </FancyContent>
      <br />
      <FancyContent>
        <FancyInternalLink alias="dotfiles" href="/dotfiles" />
        <br />
        <FancyInternalLink alias="neovim-zen" href="/neovim-zen" />
      </FancyContent>
      <br />
    </PageContainer>
  );
};

export default Page;
