import { NextPage } from "next";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyExternalLink } from "~/components/fancy/fancy-external-link";
import { FancyGap } from "~/components/fancy/fancy-gap";
import { FancyImage } from "~/components/fancy/fancy-image";
import { Q } from "~/components/fancy/fancy-quote";
import { PageContainer } from "~/components/page-container";
import { ProjectHeader } from "~/components/projects/project-header";
import { projects } from "~/constants/projects";

const Page: NextPage = () => {
  const project = projects["mtab"];

  return (
    <PageContainer>
      <ProjectHeader project={project} />
      <FancyImage src="/assets/projects/mtab/demo-1.png" />
      <FancyContent>
        mtab is an extension that offers a modern new tab page, prioritizing
        customizability such as choosing wallpapers, bookmarks, and more.
        Additionally, it emphasizes a smooth user experience through its
        animations on the new page.
      </FancyContent>
      <FancyGap />
      <FancyContent>
        I made mtab because I wanted to have a clean startup page for my browser
        that allowed me to change my wallpaper by uploading my own files. I also
        wanted to make it look nice and have big buttons for the bookmarks. I
        also added stuff I like having keybinds like <Q>x</Q> to close the tab,
        which works well with the{" "}
        <FancyExternalLink href="https://vimium.github.io/" alias="vimium" />{" "}
        extension. I also made it so pressing <Q>SPC</Q> focuses the search bar
        and <Q>ESC</Q> unfocuses the search bar. Lastly, I added some fancy
        animations.
      </FancyContent>
      <FancyImage src="/assets/projects/mtab/demo-2.png" />
      <FancyContent>
        I used parcel to bundle and transpile the code since I used typescript
        and tailwind which need a build step. I wanted typescript and tailwind
        since types make coding feel more organized and tailwind allowed me to
        design everything very quickly in an understandable way. This setup was
        pretty good since parcel had hot module reloading. I tried to keep
        everything minimal and make the page load fast. Everything is just html
        and some javascript to manage the page.
      </FancyContent>
      <FancyImage src="/assets/projects/mtab/demo-3.png" />
    </PageContainer>
  );
};

export default Page;
