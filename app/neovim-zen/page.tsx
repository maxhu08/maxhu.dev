import { NextPage } from "next";
import { NeovimZenText } from "~/components/ascii-art/neovim-zen-text";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyGap } from "~/components/fancy/fancy-gap";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { Q } from "~/components/fancy/fancy-quote";
import { FancyYoutubeEmbed } from "~/components/fancy/fancy-youtube-embed";
import { PageContainer } from "~/components/page-container";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <NeovimZenText />
      <FancyHeader title="info" />
      <FancyContent>
        This page contains info about my neovim config, called <Q>neovim-zen</Q>
        .
      </FancyContent>
      <br />
      <FancyContent>
        <Q>neovim-zen</Q> is my first attempt at doing neovim from scratch
      </FancyContent>
      <br />
      <FancyContent>
        I wanted to have a minimal text editor that I actually understood it
        worked. I had tried community setups like <Q>LazyVim</Q> but disliked
        them becuase they had a bunch of keymaps that I didn't make I didn't
        understand what was actually happening.
      </FancyContent>
      <br />
      <FancyContent>
        This is why I wanted to neovim from scratch, so I could customize
        everything the way I wanted to and only have plugins I wanted.
      </FancyContent>
      <FancyGap />
      <FancyContent>
        I used this video as a rough guide to do neovim from scratch:
      </FancyContent>
      <FancyYoutubeEmbed videoId="6pAG3BHurdM" />
      <FancyContent>
        This video was very useful for setting up lsp and it used{" "}
        <Q>lazy.nvim</Q> which is what I was looking for.
      </FancyContent>
      <FancyGap />
      <FancyContent>
        While following the video, I customized things such keymaps and how
        plugins are configured. I also added plugins like <Q>noice.nvim</Q> and
        replaced <Q>alpha.nvim</Q> with <Q>dashboard.nvim</Q>
      </FancyContent>
      <br />
      <FancyContent>
        In the next section, I will go over how to install my setup,{" "}
        <Q>neovim-zen</Q>
      </FancyContent>
      <br />
      <FancyHeader title="quick-start" />
    </PageContainer>
  );
};

export default Page;
