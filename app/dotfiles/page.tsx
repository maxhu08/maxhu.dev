import { FancyHeader } from "~/components/fancy/fancy-header";
import { FancyExternalLink } from "~/components/fancy/fancy-external-link";
import { FancyInternalLink } from "~/components/fancy/fancy-internal-link";
import { DotfilesText } from "~/components/ascii-art/dotfiles-text";

const Page = () => {
  return (
    <div className="grid grid-flow-row mx-auto w-[95%] lg:w-[60%] xl:w-[40%] py-20">
      <DotfilesText />
      <FancyHeader title="info" />
      <p>
        This is my dotfiles page. I have separate dotfiles and setup guides for
        different window managers and distros. You can click the link to see
        each dotfiles guide.
      </p>
      <br />
      <p>
        The actual dotfiles can be found in my github repo. Each version will
        have its own branch.{" "}
        <FancyExternalLink
          alias="dotfiles-repo"
          href="https://github.com/maxhu08/dotfiles"
        />
      </p>
      <br />
      <p>
        setup guide and info for each version (newest at top) can be found here:
      </p>
      <br />
      <div className="grid grid-cols-[max-content_max-content] gap-2">
        <p className="text-teal-700 font-semibold">hyprland-dots</p>
        <FancyInternalLink alias="info" href="/dotfiles/hyprland-dots" />
      </div>
      <div className="grid grid-cols-[max-content_max-content] gap-2">
        <p className="text-sky-500 font-semibold">awesome-dots</p>
        <FancyInternalLink alias="info" href="/dotfiles/awesome-dots" />
      </div>
    </div>
  );
};

export default Page;
