import { Distros } from "~/components/ascii-art/distros-text";

const Page = () => {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="grid place-items-center">
        <Distros.arch />
      </div>
    </div>
  );
};

export default Page;
