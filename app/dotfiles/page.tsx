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
      <FancyContent>This page is under construction.</FancyContent>
    </div>
  );
};

export default Page;
