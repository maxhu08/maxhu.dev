import { NextPage } from "next";
import { NeovimZenText } from "~/components/ascii-art/neovim-zen-text";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { PageContainer } from "~/components/page-container";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <NeovimZenText />
      <FancyHeader title="info" />
      <FancyContent>neovim-zen (page wip)</FancyContent>
    </PageContainer>
  );
};

export default Page;
