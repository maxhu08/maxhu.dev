import { NextPage } from "next";
import { NeovimZenText } from "~/components/ascii-art/neovim-zen-text";

const Page: NextPage = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="pt-60">
        <NeovimZenText className="!text-6xl" />
      </div>
    </div>
  );
};

export default Page;
