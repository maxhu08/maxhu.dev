import { DotfilesText } from "~/components/dotfiles/dotfiles-text";
import { ExternalLink } from "~/components/dotfiles/external-link";

const Page = () => {
  return (
    <div className="grid grid-flow-row gap-2 mx-auto w-[40%] pt-20">
      <DotfilesText />
      <div className="pt-10">
        <p>
          This is my dotfiles page. I version my each major change in my dotfiles by greek letters
          (eg. α, β, γ). You can click the link for each one to see dotfiles guide.
        </p>
        <br />
        <p>
          The actual dotfiles can be found in my github repo:{" "}
          <ExternalLink url="https://github.com/maxhu08/dotfiles" />
        </p>
        <br />
        <p>setup guide for each version can be found here:</p>
      </div>
    </div>
  );
};

export default Page;
