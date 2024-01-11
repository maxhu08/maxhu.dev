import { Braces, FileTerminal } from "lucide-react";
import { CodeCard } from "~/components/configs/code-card";
import { ConfigCard } from "~/components/configs/config-card";

const Page = () => {
  return (
    <div className="w-full h-full grid place-items-center pb-10">
      <main className="grid grid-flow-row gap-2 w-full sm:w-[60%] md:w-[40%] h-full pt-10 mx-auto">
        <ConfigCard title="my configs">
          <p>
            this is where i keep my configs so if i switch computers i can easily reconfigure my
            setup. if you want to try my configs you can copy them from here. this page should
            contain all my configs related my dev environment.
          </p>
        </ConfigCard>
        <ConfigCard title="vscode configs">
          <p>
            this is where i keep my configs related to vscode. it contains my extensions, settings
            json file, as well as some of my custom keybinds. i use vim so keep in mind that some of
            the keybinds are going to be more suited towards vim. my vim normal mode keybind is
            binded to kj instead of esc, if you don&apos;t use kj you might want to change that. you
            may also need to change some of the settings regarding the terminal because your
            terminals may be different, this config was made while using windows so the primary
            terminal is bash.
          </p>
          <div className="my-2">
            <CodeCard
              fileIcon={<Braces className="w-4 h-4 text-yellow-500" />}
              fileName="settings.json"
              codePath="/my-configs/vscode/settings.json"
              language="json"
            />
          </div>
          <p>here is my keybindings.json file</p>
          <div className="my-2">
            <CodeCard
              fileIcon={<Braces className="w-4 h-4 text-yellow-500" />}
              fileName="keybindings.json"
              codePath="/my-configs/vscode/keybindings.json"
              language="json"
            />
          </div>
        </ConfigCard>
        <ConfigCard title="bash config">
          <p>
            here is my .bashrc i mainly use bash because it is use compared to other terminals since
            im on windows. i have it setup so i can use vim directly in the bash terminal, just type
            kj to enter normal mode directly in the terminal 😎. my bashrc also an alias to cd into
            desktop quickly with `cdd`
          </p>
          <div className="my-2">
            <CodeCard
              fileIcon={<FileTerminal className="w-4 h-4 text-orange-500" />}
              fileName=".bashrc"
              codePath="/my-configs/bash/bashrc.txt"
              language="bash"
            />
          </div>
        </ConfigCard>
      </main>
    </div>
  );
};

export default Page;
