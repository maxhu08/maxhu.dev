import { NextPage } from "next";
import { NeovimZenText } from "~/components/ascii-art/neovim-zen-text";
import { FancyCommandContainer } from "~/components/fancy/fancy-command-container";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyGap } from "~/components/fancy/fancy-gap";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { FancyList } from "~/components/fancy/fancy-list";
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
      <br />
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
      <FancyGap />
      <FancyHeader title="quick-start" />
      <FancyContent>
        To setup <Q>neovim-zen</Q> you need to have these programs installed
      </FancyContent>
      <br />
      <FancyList
        name="requirements:"
        items={[
          "a true color terminal (e.g. kitty)",
          "a nerd font like (ttf-firacode-nerd)",
          "nodejs and npm",
          "ripgrep",
        ]}
      />
      <br />
      <FancyContent>
        First install a true color like <Q>kitty</Q>, I prefer kitty over
        alacritty because it supports ligatures like this{" "}
        <span className="text-indigo-500 font-semibold">
          {"-> => >= <= == !="}
        </span>
      </FancyContent>
      <br />
      <FancyCommandContainer>
        <span>paru -S kitty</span>
      </FancyCommandContainer>
      <br />
      <FancyContent>
        Next install a nerd font to display icons properly. I use{" "}
        <Q>ttf-firacode-nerd</Q>. I'll also install <Q>ttf-apple-emoji</Q> for
        displaying emojis.
      </FancyContent>
      <br />
      <FancyCommandContainer>
        <span>paru -S ttf-fira-code ttf-firacode-nerd ttf-apple-emoji</span>
      </FancyCommandContainer>
      <br />
      <FancyContent>
        Install <Q>nodejs</Q> and <Q>npm</Q> which will be needed for some
        plugins
      </FancyContent>
      <br />
      <FancyCommandContainer>
        <span>paru -S nodejs npm</span>
      </FancyCommandContainer>
      <br />
      <FancyContent>
        Lastly, install <Q>ripgrep</Q> which is needed for telescope
      </FancyContent>
      <br />
      <FancyCommandContainer>
        <span>paru -S ripgrep</span>
      </FancyCommandContainer>
      <FancyGap />
      <FancyContent>
        After that just follow these commands to copy my config into your{" "}
        <Q>~/.config/nvim</Q>
      </FancyContent>
      <br />
      <FancyCommandContainer>
        <pre>
          {`
# backup old neovim config
mv ~/.config/nvim{,.bak}

# optional backup
mv ~/.local/share/nvim{,.bak}
mv ~/.local/state/nvim{,.bak}
mv ~/.cache/nvim{,.bak}

# copy neovim-zen config
git clone https://github.com/maxhu08/neovim-zen ~/.config/nvim

# remove .git folder so you can add your own repo later
rm -rf ~/.config/nvim/.git

# start nvim !
nvim
`}
        </pre>
      </FancyCommandContainer>
      <br />
      <FancyContent>That's it!</FancyContent>
      <FancyGap />
    </PageContainer>
  );
};

export default Page;
