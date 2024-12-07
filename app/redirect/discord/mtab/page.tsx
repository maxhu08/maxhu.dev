import { redirect } from "next/navigation";
import { redirects } from "~/constants/redirects";

const Page = () => {
  return redirect(redirects.discord.mtab);
};

export default Page;
