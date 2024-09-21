import { NextPage } from "next";
import { OtherText } from "~/components/ascii-art/other-text";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyGap } from "~/components/fancy/fancy-gap";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { FancyInternalLink } from "~/components/fancy/fancy-internal-link";
import { Q } from "~/components/fancy/fancy-quote";
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
      <FancyHeader title="dotfiles" />
      <FancyContent>
        You can find the page with all my dotfiles here:
      </FancyContent>
      <FancyInternalLink alias="dotfiles" href="/dotfiles" />
      <FancyInternalLink alias="dotfiles-old" href="/dotfiles-old" />
      <FancyGap />
      <FancyHeader title="dev-environment" />
      <FancyContent>
        You can find the pages for all my dev environment stuff that's mostly in
        the terminal like <Q>neovim</Q> & <Q>tmux</Q>
      </FancyContent>
      <FancyContent>
        <br />
        <FancyInternalLink alias="neovim-zen" href="/neovim-zen" />
        <br />
        <FancyInternalLink alias="tmux-zen" href="/tmux-zen" />
      </FancyContent>
      <FancyGap />
      <FancyHeader title="other-stuff" />
      <FancyContent>
        You can find any other stuff on my website through these links:
      </FancyContent>
      <FancyContent>
        <br />
      </FancyContent>
    </PageContainer>
  );
};

export default Page;
