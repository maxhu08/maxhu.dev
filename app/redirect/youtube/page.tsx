import { redirect } from "next/navigation";
import { redirects } from "~/constants/redirects";

const Page = () => {
  return redirect(redirects.youtube);
};

export default Page;
