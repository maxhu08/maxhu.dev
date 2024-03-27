import { DotfilesText } from "~/components/dotfiles/dotfiles-text";
import { ExternalLink } from "~/components/dotfiles/external-link";
import { GuideLink } from "~/components/dotfiles/guide-link";
import { Header } from "~/components/dotfiles/header";

const Page = () => {
  return (
    <div className="grid grid-flow-row mx-auto w-[95%] lg:w-[60%] xl:w-[40%] py-20">
      <DotfilesText />
      <Header name="info" />
      <p>
        This is my dotfiles page. I have separate dotfiles and setup guides for different window
        managers and distros. You can click the link to see each dotfiles guide.
      </p>
      <br />
      <p>
        The actual dotfiles can be found in my github repo. Each version will have its own branch.{" "}
        <ExternalLink url="https://github.com/maxhu08/dotfiles" />
      </p>
      <br />
      <p>setup guide for each version (newest at top) can be found here:</p>
      <br />
      <div className="grid grid-cols-[max-content_max-content] gap-2">
        <p className="text-teal-500">hyprland-dots</p>
        <GuideLink url="/dotfiles/hyprland-dots" />
      </div>
    </div>
  );
};

export default Page;
