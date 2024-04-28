import { NextPage } from "next";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { PageContainer } from "~/components/page-container";
import { ProjectHeader } from "~/components/projects/project-header";
import { projects } from "~/constants/projects";

const Page: NextPage = () => {
  const project = projects["tomb-of-the-mask-clone"];

  return (
    <PageContainer>
      <ProjectHeader project={project} />
      <FancyHeader title="hello-world" />
      <FancyContent>tomb-of-the-mask page coming soon</FancyContent>
    </PageContainer>
  );
};

export default Page;
