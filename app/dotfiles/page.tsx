import { FancyHeader } from "~/components/fancy/fancy-header";
import { FancyExternalLink } from "~/components/fancy/fancy-external-link";
import { DotfilesText } from "~/components/ascii-art/dotfiles-text";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyMapLinks } from "~/components/fancy/fancy-map-links";

const Page = () => {
  return (
    <div className="grid grid-flow-row mx-auto w-[95%] lg:w-[60%] xl:w-[40%] py-20">
      <DotfilesText />
      <FancyHeader title="info" />
      <FancyContent>
        This is my dotfiles page. I have separate dotfiles and setup guides for
        different window managers and distros. You can click the link to see
        each dotfiles guide.
      </FancyContent>
      <br />
      <FancyContent>
        The actual dotfiles can be found in my github repo. Each version will
        have its own branch.{" "}
        <FancyExternalLink
          alias="dotfiles-repo"
          href="https://github.com/maxhu08/dotfiles"
        />
      </FancyContent>
      <br />
      <FancyContent>
        setup guide and info for each version (newest at top) can be found here:
      </FancyContent>
      <br />
      <FancyMapLinks
        items={[
          {
            left: "hyprland-dots",
            right: { name: "info", url: "/dotfiles/hyprland-dots" },
          },
          {
            left: "awesome-dots",
            right: { name: "info", url: "/dotfiles/awesome-dots" },
          },
        ]}
      />
    </div>
  );
};

export default Page;
