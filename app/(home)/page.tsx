import { Metadata, NextPage } from "next";
import { Content } from "~/components/home/content";
import { Footer } from "~/components/home/footer";
import { websiteName } from "~/constants/website-name";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxhu.dev/"),
  title: `${websiteName}`,
  description: "This is my website",
  openGraph: {
    title: `🌴 ${websiteName}`,
    description: "This is my website",
    images: "/assets/palm_tree.png"
  },
  authors: [{ name: "Max Hu", url: "https://maxhu.dev" }]
};

const Page: NextPage = () => {
  return (
    <>
      <main className="grid h-screen w-full place-items-center overflow-hidden">
        <div className="grid h-max grid-flow-row place-items-center gap-2 pb-[5%]">
          <Content />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
