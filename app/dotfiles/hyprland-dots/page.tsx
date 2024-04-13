import { NextPage } from "next";
import { HyprlandDotsText } from "~/components/ascii-art/hyprland-dots-text";
import { FancyCommand } from "~/components/fancy/fancy-command";
import { FancyCommandContainer } from "~/components/fancy/fancy-command-container";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyExternalLink } from "~/components/fancy/fancy-external-link";
import { FancyGap } from "~/components/fancy/fancy-gap";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { FancyInternalLink } from "~/components/fancy/fancy-internal-link";
import { FancyMapLinks } from "~/components/fancy/fancy-map-links";
import { Q } from "~/components/fancy/fancy-quote";
import { FancySyntaxHighlighter } from "~/components/fancy/fancy-syntax-highlight";
import { FancyYoutubeEmbed } from "~/components/fancy/fancy-youtube-embed";
import { PageContainer } from "~/components/page-container";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <HyprlandDotsText />
      <FancyHeader title="info" />
      <FancyContent>this setup uses these programs:</FancyContent>
      <br />
      <FancyMapLinks
        items={[
          {
            left: "Distro",
            right: {
              name: "EndeavourOS",
              url: "https://endeavouros.com/",
            },
          },
          {
            left: "DE/WM/Compositor",
            right: {
              name: "Hyprland",
              url: "https://hyprland.org/",
            },
          },
          {
            left: "Terminal Emulator",
            right: {
              name: "kitty",
              url: "https://github.com/kovidgoyal/kitty",
            },
          },
          {
            left: "Shell",
            right: {
              name: "fish",
              url: "https://fishshell.com/",
            },
          },
          {
            left: "App Launcher",
            right: {
              name: "wofi",
              url: "https://man.archlinux.org/man/wofi.1.en",
            },
          },
          {
            left: "Taskbar",
            right: {
              name: "waybar",
              url: "https://github.com/Alexays/Waybar",
            },
          },
          {
            left: "File Manager",
            right: {
              name: "nemo",
              url: "https://wiki.archlinux.org/title/Nemo",
            },
          },
          {
            left: "Editor",
            right: {
              name: "VSCode",
              url: "https://code.visualstudio.com/",
            },
          },
          {
            left: "Editor",
            right: {
              name: "neovim",
              url: "https://neovim.io/",
            },
          },
        ]}
      />
      <br />
      <FancyContent>Here is a quick showcase of my setup:</FancyContent>
      <FancyYoutubeEmbed videoId="XK7gal3Wrtk" />
      <FancyContent>
        The actual dotfiles are in my dotfiles repo,{" "}
        <FancyExternalLink
          href="https://github.com/maxhu08/dotfiles"
          alias="github.com/maxhu08/dotfiles"
        />
        , under the <Q>hyprland-dots</Q> branch.
        <br />
        <br />
        Keep in mind the file strucuture in the dotfiles repo are not the exact
        structure you should have on your system. Most of these files should go
        in the <Q>.config</Q> directory. I kept like it this to keep it simple
        so all you have to set everything is copy and paste some configs.
        <br />
        <br />
        For heavier stuff like my <Q>neovim</Q> setup I have a separate repo and
        I guide on how to set it up. For that, check out my{" "}
        <FancyInternalLink href="/neovim-zen" alias="neovim-zen" /> page.
      </FancyContent>
      <FancyGap />
      <FancyHeader title="getting-started" />
      <FancyContent>
        {" "}
        If you want to follow along exactly, install <Q>EndeavourOS</Q>, but any
        arch based distro should work. I used <Q>EndeavourOS</Q> because it
        works well with nvidia and is less hassle to set up.
      </FancyContent>
      <FancyGap />
      <FancyHeader title="installing-hyprland" />
      <FancyContent>
        Once you have <Q>EndeavourOS</Q> installed, boot into it and press{" "}
        <Q>CTRL+ALT+F2</Q> to open the tty. The first thing to install is
        Hyprland which is going to be the DE. To install Hyprland just run:
      </FancyContent>
      <FancyCommandContainer>
        <FancyCommand>sudo pacman -S hyprland</FancyCommand>
      </FancyCommandContainer>
      <FancyContent>Then run this command to start hyprland:</FancyContent>
      <FancyCommandContainer>
        <FancyCommand>Hyprland</FancyCommand>
      </FancyCommandContainer>
      <FancyGap />
      <FancyHeader title="hyprland-troubleshooting" />
      <FancyContent>
        If your cursor isn't showing up and you're using a NVIDIA graphics card,
        follow the fish setup instructions and use my config, which sets the{" "}
        <Q>WLR_NO_HARDWARE_CURSORS</Q> env var to be <Q>1</Q> to fix this. For
        more info, see{" "}
        <FancyExternalLink
          alias="wiki.hyprland.org"
          href="https://wiki.hyprland.org/FAQ/#me-cursor-no-render"
        />
        <br />
        <br />
        Then reboot.
      </FancyContent>
      <FancyCommandContainer>
        <FancyCommand>reboot</FancyCommand>
      </FancyCommandContainer>
      <FancyGap />
      <FancyHeader title="configuring-hyprland" />
      <FancyContent>
        I have a <Q>hyprland.conf</Q> in my dotfiles repo but I don't recommend
        to copy everything because some things might not work for you, such my
        monitors setup. For monitors use something like <Q>xrandr</Q> or{" "}
        <Q>hyprctl monitors</Q> to help you.
      </FancyContent>
      <FancyGap />
      <FancyContent>
        You will also need to install some programs like kitty (terminal
        emulator), nemo (file manager), and wofi (app launcher) so exit hyprland
        with <Q>SUPER+M</Q> and install:
      </FancyContent>
      <FancyCommandContainer>
        <FancyCommand>sudo pacman -S kitty nemo wofi</FancyCommand>
      </FancyCommandContainer>
      <FancyContent>
        You will also need to update your <Q>hyprland.conf</Q> so it knows to
        use these programs. To do this just copy my <Q>hyprland.conf</Q> in my
        dotfiles github repo under the <Q>hyprland-dots</Q> branch in{" "}
        <Q>hypr/hyprland.conf</Q>
      </FancyContent>
      <FancyGap />
      <FancyContent>
        {" "}
        If you have multiple monitors and want to have separate workspaces for
        each monitor you can use a program called hyprsome by sopa0, see here:
        <FancyExternalLink
          alias="github.com/sopa0/hyprsome"
          href="https://github.com/sopa0/hyprsome"
        />
        .
      </FancyContent>
      <FancyGap />
      <FancyHeader title="hyprland-screenshotting" />
      <FancyContent>
        You will also probably want to setup screenshotting. To do so just
        install <Q>grim</Q> and <Q>slurp</Q>
      </FancyContent>
      <FancyCommandContainer>
        <FancyCommand>sudo pacman -S grim slurp</FancyCommand>
      </FancyCommandContainer>
      <FancyContent>
        Then add these lines to your <Q>hyprland.conf</Q>
      </FancyContent>
      <FancyCommandContainer>
        <FancySyntaxHighlighter language="conf">
          {/* prettier-ignore */}
          {`# screenshot keybind (change DP-1 to your display name)
# also make sure you created a directory called screenshots in Pictures/ otherwise the screenshots won't appear anywhere
bind = $mainMod, S, exec, grim -o DP-1 "\${HOME}/Pictures/screenshots/screenshot-$(date +%F-%T).png"
# screenshot + crop keybind
bind = $mainMod SHIFT, S, exec, grim -g "$(slurp)" "\${HOME}/Pictures/screenshots/screenshot-$(date +%F-%T).png"

...

# Example special workspace (scratchpad) COMMENT THIS OUT FOR SCREENSHOT KEYBIND
# bind = $mainMod, S, togglespecialworkspace, magic
# bind = $mainMod SHIFT, S, movetoworkspace, special:magic`}
        </FancySyntaxHighlighter>
      </FancyCommandContainer>
      <FancyGap />
      <FancyHeader title="setting-wallpapers" />
      <FancyContent>
        To set a wallpapers, I used a program called <Q>hyprpaper</Q>, which
        works well with hyprland
      </FancyContent>
      <FancyCommandContainer>
        <FancyCommand>sudo pacman -S hyprpaper</FancyCommand>
      </FancyCommandContainer>
      <FancyContent>
        To actually set the wallpaper, edit the <Q>hyprpaper.conf</Q> file in{" "}
        <Q>~/.config/hypr</Q>, you may need to create this file yourself.
        <br />
        <br />
        set preload to and wallpaper to whatever you named your wallpaper file.
        you can also choose a wallpaper to set for each monitor.
      </FancyContent>
      <FancyCommandContainer>
        <FancySyntaxHighlighter language="conf">
          {`# make sure you to change the wallpaper location to be where you put your wallpaper
preload = ~/.wallpapers/wall0.jpg

wallpaper = DP-1,~/.wallpapers/wall0.jpg
wallpaper = DP-2,~/.wallpapers/wall0.jpg
# ... more monitors

# disable messages on bottom
splash = false

# fully disable ipc
# ipc = off`}
        </FancySyntaxHighlighter>
      </FancyCommandContainer>
      <FancyContent>
        After, just add this line in your <Q>hyprland.conf</Q> to execute
        hyprpaper as hyprland starts
      </FancyContent>
      <FancyCommandContainer>
        <FancySyntaxHighlighter language="conf">
          {`exec-once = hyprpaper`}
        </FancySyntaxHighlighter>
      </FancyCommandContainer>
      <FancyGap />
      <FancyHeader title="obs" />
      <FancyContent>
        use <Q>wlrobs-hg</Q> which is less laggy than <Q>pipewire</Q> and select
        `Wayland output(dmabuf)`
      </FancyContent>
    </PageContainer>
  );
};

export default Page;
