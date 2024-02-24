import { DotfilesText } from "~/components/dotfiles/dotfiles-text";
import { ExternalLink } from "~/components/dotfiles/external-link";
import { GuideLink } from "~/components/dotfiles/guide-link";

const Page = () => {
  return (
    <div className="grid grid-flow-row gap-2 mx-auto w-[95%] lg:w-[60%] xl:w-[40%] py-20">
      <DotfilesText />
      <div className="pt-10">
        <p>
          This is my dotfiles page. I version my each major change in my dotfiles by greek letters
          (eg. α, β, γ). You can click the link for each one to see dotfiles guide.
        </p>
        <br />
        <p>
          The actual dotfiles can be found in my github repo. Each version will have its own branch.{" "}
          <ExternalLink url="https://github.com/maxhu08/dotfiles" />
        </p>
        <br />
        <p>setup guide for each version (newest at top) can be found here:</p>
        <br />
        <div className="w-full">
          <div className="border border-neutral-500">
            <div className="grid grid-cols-2 bg-neutral-300 dark:bg-neutral-800">
              <div className="border border-neutral-500 px-4 py-2">version</div>
              <div className="border border-neutral-500 px-4 py-2">install guide</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="border border-neutral-500 px-4 py-2 text-teal-500">alpha (α)</div>
              <div className="border border-neutral-500 px-4 py-2">
                <GuideLink url="/dotfiles/alpha" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
