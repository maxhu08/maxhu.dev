import { ExternalLink } from "lucide-react";
import Link from "next/link";

const links = [{ text: "dotfiles", destination: "/dotfiles" }];

const Page = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="grid grid-flow-row place-items-center pb-40">
        <p className="font-semibold p-2">other links</p>
        {links.map((link) => (
          <Link href={link.destination} key={`link-${link.text}`}>
            <div className="text-blue-500 hover:bg-blue-500/20 duration-300 ease-in-out grid grid-cols-[max-content_max-content] place-items-center gap-2 p-1 rounded-md">
              <ExternalLink className="w-4 h-4" />
              <span>{link.text}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
