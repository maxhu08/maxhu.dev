import { FancyHeader } from "~/components/fancy/fancy-header";
import { FancyExternalLink } from "~/components/fancy/fancy-external-link";
import { DotfilesText } from "~/components/ascii-art/dotfiles-text";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyMapLinks } from "~/components/fancy/fancy-map-links";

const Page = () => {
  return (
    <div className="mx-auto grid w-[95%] grid-flow-row py-20 lg:w-[60%] xl:w-[40%]">
      <DotfilesText />
      <FancyHeader title="info" />
      <FancyContent>This page is under construction.</FancyContent>
    </div>
  );
};

export default Page;
