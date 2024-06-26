import { NextPage } from "next";
import { FancyContent } from "~/components/fancy/fancy-content";
import { PageContainer } from "~/components/page-container";
import { ProjectHeader } from "~/components/projects/project-header";
import { projects } from "~/constants/projects";

const Page: NextPage = () => {
  const project = projects["create-neutrino-app"];

  return (
    <PageContainer>
      <ProjectHeader project={project} />
      <FancyContent>create-neutrino-app page coming soon</FancyContent>
    </PageContainer>
  );
};

export default Page;
