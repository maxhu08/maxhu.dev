import { NextPage } from "next";
import { TmuxZenText } from "~/components/ascii-art/tmux-zen-text";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { Q } from "~/components/fancy/fancy-quote";
import { PageContainer } from "~/components/page-container";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <TmuxZenText />
      <FancyHeader title="info" />
      <FancyContent>
        This page contains info about my tmux setup, called <Q>tmux-zen</Q>.
      </FancyContent>
    </PageContainer>
  );
};

export default Page;
