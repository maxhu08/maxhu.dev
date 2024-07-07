import { NextPage } from "next";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyYoutubeEmbed } from "~/components/fancy/fancy-youtube-embed";
import { PageContainer } from "~/components/page-container";
import { ProjectHeader } from "~/components/projects/project-header";
import { projects } from "~/constants/projects";

const Page: NextPage = () => {
  const project = projects["tomb-of-the-mask-clone"];

  return (
    <PageContainer>
      <ProjectHeader project={project} />
      <FancyContent>
        tomb-of-the-mask page is a small game I made in java for class that is supposed to be like a
        very simple implementation of the game, tomb of the mask.
        <br />
        You can find a demo here:
      </FancyContent>
      <FancyYoutubeEmbed videoId="R0X7waiDf4Q" />
    </PageContainer>
  );
};

export default Page;
