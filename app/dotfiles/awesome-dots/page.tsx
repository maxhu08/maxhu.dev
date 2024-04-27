import { NextPage } from "next";
import { AwesomeDotsText } from "~/components/ascii-art/awesome-dots-text";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { PageContainer } from "~/components/page-container";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <AwesomeDotsText />
      <FancyHeader title="info" />
    </PageContainer>
  );
};

export default Page;
