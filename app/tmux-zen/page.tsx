import { NextPage } from "next";
import { TmuxZenText } from "~/components/ascii-art/tmux-zen-text";
import { FancyCommand } from "~/components/fancy/fancy-command";
import { FancyCommandContainer } from "~/components/fancy/fancy-command-container";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyExternalLink } from "~/components/fancy/fancy-external-link";
import { FancyFileDisplay } from "~/components/fancy/fancy-file-display";
import { FancyGap } from "~/components/fancy/fancy-gap";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { FancyImage } from "~/components/fancy/fancy-image";
import { Q } from "~/components/fancy/fancy-quote";
import { FancySyntaxHighlighter } from "~/components/fancy/fancy-syntax-highlight";
import { PageContainer } from "~/components/page-container";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <TmuxZenText />
      <FancyHeader title="info" />
      <FancyContent>
        This page contains info about my tmux setup, called <Q>tmux-zen</Q>. You
        can find the repo for my config at{" "}
        <FancyExternalLink
          alias="tmux-zen"
          href="https://github.com/maxhu08/tmux-zen"
        />
      </FancyContent>
      <FancyImage src="/assets/tmux-zen/1.png" />
      <FancyHeader title="installing" />
      <FancyContent>
        To setup first install <Q>tmux</Q>:
      </FancyContent>
      <br />
      <FancyCommandContainer>
        <FancyCommand>paru -S tmux</FancyCommand>
      </FancyCommandContainer>
      <br />
      <FancyContent>
        Then copy create this your <Q>.tmux.conf</Q> and copy this config:
      </FancyContent>
      <br />
      <FancyCommandContainer>
        <FancyCommand>touch ~/.tmux.conf</FancyCommand>
      </FancyCommandContainer>
      <br />
      <FancyCommandContainer>
        <FancyFileDisplay
          language="conf"
          alias="github.com/maxhu08/tmux-zen/.tmux.conf"
          url="https://raw.githubusercontent.com/maxhu08/tmux-zen/master/.tmux.conf"
        />
      </FancyCommandContainer>
      <br />
      <FancyContent>Lastly run these commands:</FancyContent>
      <br />
      <FancyCommandContainer>
        <FancySyntaxHighlighter language="bash">{`# source config
tmux source-file ~/.tmux.conf

# start tmux !
tmux
`}</FancySyntaxHighlighter>
      </FancyCommandContainer>

      <FancyGap />
      <FancyHeader title="about" />
      <FancyContent>
        My <Q>tmux</Q> setup is pretty simple. I just customized some of the
        keybinds, the colors, and added some qol stuff.
      </FancyContent>
      <FancyGap />
      <FancyContent>
        I added some qol stuff to my setup like auto start in the current
        directory when creating new windows or panes. I also changed some of to
        keybinds to be more intuitive.
      </FancyContent>
      <FancyGap />
      <FancyHeader title="keybinds" />
      <FancyContent>
        I left the prefix key as <Q>{"<C-b>"}</Q>. But I changed the key for
        creating windows to be <Q>{"-"}</Q> & <Q>{"\\"}</Q> because - and |
        represent horizontal and vertical. I changed | to <Q>{"\\"}</Q> because
        it's easier to press because I don't have to press shift to get |.
      </FancyContent>
      <FancyGap />
      <FancyContent>
        For the statusline, I left it pretty minimal because I don't like having
        a bunch of random info on my statusline. I set the background to be
        transparent becauase I think that looks better. I made the text brightly
        colored and bolded so it's easier to see. I also think this looks
        better.
      </FancyContent>
    </PageContainer>
  );
};

export default Page;
