import { NextPage } from "next";
import { FancyContent } from "~/components/fancy/fancy-content";
import { PageContainer } from "~/components/page-container";
import { ProjectHeader } from "~/components/projects/project-header";
import { projects } from "~/constants/projects";

const Page: NextPage = () => {
  const project = projects["mtab"];

  return (
    <PageContainer>
      <ProjectHeader project={project} />
      <FancyContent>
        mtab is an extension that offers a modern new tab page, prioritizing
        customizability such as choosing wallpapers, bookmarks, and more.
        Additionally, it emphasizes a smooth user experience through its
        animations on the new page.
      </FancyContent>
    </PageContainer>
  );
};

export default Page;
