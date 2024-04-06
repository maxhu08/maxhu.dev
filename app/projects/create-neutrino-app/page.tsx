import { NextPage } from "next";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { PageContainer } from "~/components/page-container";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <FancyHeader title="hello-world" />
      <FancyContent>create-neutrino-app page coming soon</FancyContent>
    </PageContainer>
  );
};

export default Page;
