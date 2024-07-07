import { NextPage } from "next";
import { FancyContent } from "~/components/fancy/fancy-content";
import { Q } from "~/components/fancy/fancy-quote";
import { FancyYoutubeEmbed } from "~/components/fancy/fancy-youtube-embed";
import { PageContainer } from "~/components/page-container";
import { ProjectHeader } from "~/components/projects/project-header";
import { projects } from "~/constants/projects";

const Page: NextPage = () => {
  const project = projects["create-neutrino-app"];

  return (
    <PageContainer>
      <ProjectHeader project={project} />
      <FancyYoutubeEmbed videoId="GaxSwBDmsbM" />
      <FancyContent>
        <Q>create-neutrino-app</Q> is a cli tool I made to setup a parcel app with nodejs,
        typescript & tailwind.
      </FancyContent>
    </PageContainer>
  );
};

export default Page;
