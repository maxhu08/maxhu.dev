import { Braces, FileTerminal } from "lucide-react";
import { CodeCard } from "~/components/configs/code-card";
import { ConfigCard } from "~/components/configs/config-card";
import { Q } from "~/components/configs/quote";
import { TerminalCard } from "~/components/configs/terminal-card";
import { FancyContent } from "~/components/fancy-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "~/components/ui/accordion";

const Page = () => {
  return (
    <div className="w-full h-full grid place-items-center pb-40">
      <main className="grid grid-flow-row gap-2 w-full sm:w-[60%] md:w-[40%] h-full pt-10 mx-auto">
        <ConfigCard title="my configs">
          <FancyContent>
            <p>
              this is where i keep my configs so if i switch computers i can easily reconfigure my
              setup. if you want to try my configs you can copy them from here. this page should
              contain all my configs related my dev environment 👨‍💻.
            </p>
          </FancyContent>
        </ConfigCard>
        <ConfigCard title="vscode configs">
          <FancyContent>
            <p>this is where i keep my configs related to vscode. </p>
            <br />
            <p>this includes: </p>
            <ul className="list-disc mx-6 mb-6 mt-4">
              <li>my extensions 🐳</li>
              <li>my settings.json ⚙️</li>
              <li>my keybindings ⌨️</li>
            </ul>
            <p>
              i use vim so keep in mind that some of the keybinds are going to be more suited
              towards vim. my vim normal mode keybind is binded to <Q>kj</Q> instead of <Q>esc</Q>,
              if you don&apos;t use <Q>kj</Q> you might want to change that.
            </p>
            <br />
            <p>
              i also changed my leader key to <Q>{"<space>"}</Q> for using the leap plugin with{" "}
              <Q>{"<space>s"}</Q>
            </p>
            <br />
            <p>
              you may also need to change some of the settings regarding the terminal because your
              terminals may be different, this config was made while using windows so the primary
              terminal is bash.
            </p>
            <br />
            <p className="font-semibold">🚀 getting started</p>
            <br />
            <p>
              i have a lot of extensions so i made a script to quickly install all my extensions
              through one command
            </p>
            <br />
            <p>
              just copy the <Q>install-extensions.sh</Q> file
            </p>
            <div className="my-2">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>hide/show install-extensions.sh</AccordionTrigger>
                  <AccordionContent>
                    <CodeCard
                      fileIcon={<FileTerminal className="w-4 h-4 text-orange-500" />}
                      fileName="install-extensions.sh"
                      codePath="/my-configs/vscode/install-extensions.txt"
                      language="bash"
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <p>then run this command: </p>
            <div className="my-2">
              <TerminalCard text="./install-extensions.sh" />
            </div>

            <br />
            <p className="font-semibold">⚙️ configuring settings and keybindings</p>
            <br />
            <p>
              after the extensions have been installed the next step is to copy the{" "}
              <Q>settings.json</Q> file
            </p>
            <div className="my-2">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>hide/show settings.json</AccordionTrigger>
                  <AccordionContent>
                    <CodeCard
                      fileIcon={<Braces className="w-4 h-4 text-yellow-500" />}
                      fileName="settings.json"
                      codePath="/my-configs/vscode/settings.json"
                      language="json"
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <p>here is my keybindings.json file as well</p>
            <div className="my-2">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>hide/show keybindings.json</AccordionTrigger>
                  <AccordionContent>
                    <CodeCard
                      fileIcon={<Braces className="w-4 h-4 text-yellow-500" />}
                      fileName="keybindings.json"
                      codePath="/my-configs/vscode/keybindings.json"
                      language="json"
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </FancyContent>
        </ConfigCard>
        <ConfigCard title="bash config">
          <FancyContent>
            <p>
              this is my .bashrc file. i mainly use bash because it is easy to use compared to other
              terminals since im on windows.
            </p>
            <br />
            <p>
              i have it setup so i can use vim directly in the bash terminal, just type <Q>kj</Q> to
              enter normal mode directly in the terminal 😎. my bashrc also an alias to cd into
              desktop quickly ⚡ with <Q>cdd</Q>
            </p>
          </FancyContent>
          <div className="my-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>hide/show .bashrc</AccordionTrigger>
                <AccordionContent>
                  <CodeCard
                    fileIcon={<FileTerminal className="w-4 h-4 text-orange-500" />}
                    fileName=".bashrc"
                    codePath="/my-configs/bash/bashrc.txt"
                    language="bash"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ConfigCard>
      </main>
    </div>
  );
};

export default Page;
