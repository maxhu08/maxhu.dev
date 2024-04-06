import { NextPage } from "next";
import { HyprlandDotsText } from "~/components/ascii-art/hyprland-dots-text";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { PageContainer } from "~/components/page-container";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <HyprlandDotsText />
      <FancyHeader title="info" />
      <FancyContent>this setup uses the following programs:</FancyContent>
    </PageContainer>
  );
};

export default Page;
