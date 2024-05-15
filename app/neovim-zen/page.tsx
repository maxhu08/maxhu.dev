import { NextPage } from "next";
import { NeovimZenText } from "~/components/ascii-art/neovim-zen-text";
import { FancyCommand } from "~/components/fancy/fancy-command";
import { FancyCommandContainer } from "~/components/fancy/fancy-command-container";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyExternalLink } from "~/components/fancy/fancy-external-link";
import { FancyFileDisplay } from "~/components/fancy/fancy-file-display";
import { FancyGap } from "~/components/fancy/fancy-gap";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { FancyImage } from "~/components/fancy/fancy-image";
import { FancyInternalLink } from "~/components/fancy/fancy-internal-link";
import { FancyList } from "~/components/fancy/fancy-list";
import { Q } from "~/components/fancy/fancy-quote";
import { FancySyntaxHighlighter } from "~/components/fancy/fancy-syntax-highlight";
import { FancyYoutubeEmbed } from "~/components/fancy/fancy-youtube-embed";
import { PageContainer } from "~/components/page-container";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <NeovimZenText />
      <FancyHeader title="info" />
      <FancyContent>
        This page contains info about my neovim config, called <Q>neovim-zen</Q>
        . You can find the repo for my config at{" "}
        <FancyExternalLink
          alias="neovim-zen"
          href="https://github.com/maxhu08/neovim-zen"
        />
      </FancyContent>
      <FancyImage src="/assets/neovim-zen/1.png" />
      <FancyContent>
        <Q>neovim-zen</Q> is my first attempt at doing neovim from scratch
      </FancyContent>
      <br />
      <FancyContent>
        I wanted to have a minimal text editor that I actually understood how it
        worked. I tried community setups like <Q>LazyVim</Q> but disliked them
        becuase they had a bunch of keymaps that I didn't make so I didn't
        understand what was actually happening and often had to search how to do
        something.
      </FancyContent>
      <br />
      <FancyContent>
        This is why I wanted to neovim from scratch, so I could customize
        everything the way I wanted to and only have plugins I wanted. Creating
        my own neovim config would mean I wouldn't have to search how do
        something in it since I'm the person who made it.
      </FancyContent>
      <br />
      <FancyContent>
        Here are the plugins in my neovim setup as of{" "}
        <span className="font-semibold text-indigo-500">right now</span>. (from
        my lazy-lock.json)
      </FancyContent>
      <FancyCommandContainer>
        <FancyFileDisplay
          language="json"
          alias="https://github.com/maxhu08/neovim-zen/blob/master/lazy-lock.json"
          url="https://raw.githubusercontent.com/maxhu08/neovim-zen/master/lazy-lock.json"
          isJSON
          defaultHidden
        />
      </FancyCommandContainer>
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
        While following the video, I customized things such as the keymaps and
        how plugins are configured. I also added plugins I wanted like{" "}
        <Q>noice.nvim</Q> and <Q>flash.nvim</Q>. I also replaced{" "}
        <Q>alpha.nvim</Q> with <Q>dashboard.nvim</Q>
      </FancyContent>
      <br />
      <FancyContent>
        In the next section, I will go over how to install my setup,{" "}
        <Q>neovim-zen</Q>
      </FancyContent>
      <FancyImage src="/assets/neovim-zen/2.png" />
      <FancyGap />
      <FancyHeader title="quick-start" />
      <FancyContent>
        To setup <Q>neovim-zen</Q> you need to have these programs installed
      </FancyContent>
      <br />
      <FancyList
        name="requirements:"
        items={[
          "neovim",
          "a true color terminal (e.g. kitty)",
          "a nerd font like (ttf-firacode-nerd)",
          "nodejs and npm",
          "ripgrep",
        ]}
      />
      <br />
      <FancyCommandContainer>
        <FancyCommand>pacman -S neovim</FancyCommand>
      </FancyCommandContainer>
      <FancyContent>
        First install a true color like <Q>kitty</Q>, I prefer kitty over
        alacritty because it supports ligatures like this{" "}
        <span className="text-indigo-500 font-semibold">
          {"-> => >= <= == !="}
        </span>
      </FancyContent>
      <FancyCommandContainer>
        <FancyCommand>pacman -S kitty</FancyCommand>
      </FancyCommandContainer>
      <FancyContent>
        Next install a nerd font to display icons properly. I use{" "}
        <Q>ttf-firacode-nerd</Q>. I'll also install <Q>ttf-apple-emoji</Q> for
        displaying emojis.
      </FancyContent>
      <FancyCommandContainer>
        <FancyCommand>pacman -S ttf-fira-code ttf-firacode-nerd</FancyCommand>
      </FancyCommandContainer>
      <FancyContent>
        <Q>ttf-apple-emoji</Q> is from the aur
      </FancyContent>
      <FancyCommandContainer>
        <FancyCommand>paru -S ttf-apple-emoji</FancyCommand>
      </FancyCommandContainer>
      <FancyContent>
        Install <Q>nodejs</Q> and <Q>npm</Q> which will be needed for some
        plugins. I also installed <Q>pnpm</Q> since it's faster than <Q>npm</Q>
      </FancyContent>
      <FancyCommandContainer>
        <FancyCommand>pacman -S nodejs npm pnpm</FancyCommand>
      </FancyCommandContainer>
      <FancyContent>
        Lastly, install <Q>ripgrep</Q> which is needed for telescope
      </FancyContent>
      <FancyCommandContainer>
        <FancyCommand>pacman -S ripgrep</FancyCommand>
      </FancyCommandContainer>
      <FancyContent>
        I'll also install <Q>eslint</Q> and <Q>biome</Q> which will be using for
        linting. Use (npm/yarn/pnpm/bun)
      </FancyContent>
      <FancyCommandContainer>
        <FancyCommand>bun i -g eslint biome</FancyCommand>
      </FancyCommandContainer>
      <FancyGap />
      <FancyContent>
        After that just follow these commands to copy my config into your{" "}
        <Q>~/.config/nvim</Q>
      </FancyContent>
      <FancyCommandContainer noPadding>
        <FancySyntaxHighlighter language="bash">
          {`# backup old neovim config
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
        </FancySyntaxHighlighter>
      </FancyCommandContainer>
      <FancyContent>That's it!</FancyContent>
      <FancyGap />
      <FancyHeader title="using-neovim-zen" />
      <FancyImage src="/assets/neovim-zen/3.png" />
      <FancyContent>
        For using neovim, the keymappings are the most important thing, which
        applies to all neovim configs. So I'll talk about how I set up my
        keymappings first.
      </FancyContent>
      <FancyGap />
      <FancyContent>
        I tried to keep all the keymaps easy to remember. I follow a pattern,
        keymaps starting with <Q>{"<leader>s"}</Q> are for managing splits,{" "}
        <Q>{"<leader>t"}</Q> is for managing tabs, and so on.
      </FancyContent>
      <FancyGap />
      <FancyContent>
        I also made it so the most common actions are done by pressing the key
        twice. Like pressing <Q>{"<leader><leader>"}</Q> opens telescope,{" "}
        <Q>{"<leader>ss"}</Q> creates a new vertical split,
        <Q>{"<leader>tt"}</Q> creates a tab. So pressing a key twice is usually
        for creating or opening something new. Except for the file tree,{" "}
        <Q>nvim-tree</Q> which is opened with <Q>{"<leader>e"}</Q>
      </FancyContent>
      <FancyGap />
      <FancyContent>
        Next, I made it so pressing a key then <Q>l</Q> closes it. For example
        closing the current focused split is just <Q>{"<leader>sl"}</Q> and
        closing a tab is just <Q>{"<leader>tl"}</Q>. I usually remember it as l
        stands for `lose` and l is also easier to press than x for me.
      </FancyContent>
      <FancyGap />
      <FancyContent>Here are some other important keybinds:</FancyContent>
      <br />
      <FancyList
        name="other important keybinds"
        items={[
          "<leader>ca - code actions",
          "<leader>srn - smart rename",
          "<C-space> - cmp",
          "g? - show documentation",
          "J & K - move current line up and down",
          "H & L - move to prev or next tab",
          "<leader>nh - clear highlight after search",
        ]}
      />
      <FancyGap />
      <FancyContent>
        Lastly, for using the terminal I use <Q>tmux</Q>. I know there are
        plugins that allow a terminal in neovim, but I went with <Q>tmux</Q>{" "}
        because it's more flexible and it also has sessions which are pretty
        useful. To check out my tmux workflow see{" "}
        <FancyInternalLink alias="tmux-zen" href="/tmux-zen" />
      </FancyContent>
      <FancyImage src="/assets/neovim-zen/4.png" />
    </PageContainer>
  );
};

export default Page;
