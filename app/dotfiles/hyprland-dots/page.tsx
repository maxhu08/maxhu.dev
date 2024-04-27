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
      <FancyContent>Here is a quick showcase of my setup:</FancyContent>
      <FancyYoutubeEmbed videoId="XK7gal3Wrtk" />
      <FancyContent>
        The actual dotfiles are in my dotfiles repo,{" "}
        <FancyExternalLink
          href="https://github.com/maxhu08/dotfiles"
          alias="github.com/maxhu08/dotfiles"
        />
        , under the <Q>hyprland-dots</Q> branch. Keep in mind the file
        strucuture in the dotfiles repo are not the exact structure you should
        have on your system. Most of these files should go in the <Q>.config</Q>{" "}
        directory. I kept like it this to keep it simple so all you have to set
        everything is copy and paste some configs. For heavier stuff like my{" "}
        <Q>neovim</Q> setup I have a separate repo and I guide on how to set it
        up. For that, check out my{" "}
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
        <Q>~/.config/hypr</Q>, you may need to create this file yourself. set
        preload to and wallpaper to whatever you named your wallpaper file. you
        can also choose a wallpaper to set for each monitor.
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
        <FancySyntaxHighlighter language="conf">{`exec-once = hyprpaper`}</FancySyntaxHighlighter>
      </FancyCommandContainer>
      <FancyGap />
      <FancyHeader name="configuring-wofi" />
      <p>
        To configure wofi copy my <Q>config</Q> and <Q>style.css</Q> from my
        dotfiles repo into <Q>~/.config/wofi/config</Q> and{" "}
        <Q>~/.config/wofi/style.css</Q>.
      </p>
      <FancyCommandContainer>
        <FancyCommand>cd ~/.config</FancyCommand>
        <FancyCommand>mkdir -p waybar</FancyCommand>
        <FancyCommand>touch config</FancyCommand>
        <FancyCommand>touch style.css</FancyCommand>
      </FancyCommandContainer>
      <p>
        The wofi window should automatically change when pressing <Q>SUPER+R</Q>{" "}
        or whatever you set the keybind to, no need to refresh.
      </p>
      <FancyHeader title="installing-waybar" />
      <p>
        For the taskbar, I used <Q>waybar</Q> which works well with hyprland
      </p>
      <FancyCommandContainer>
        <FancyCommand>sudo pacman -S waybar</FancyCommand>
      </FancyCommandContainer>
      <p>Now run waybar with</p>
      <FancyCommandContainer>
        <FancyCommand>waybar</FancyCommand>
      </FancyCommandContainer>
      <p>
        Or add it to your exec-once in your <Q>hyprland.conf</Q>
      </p>
      <FancyCommandContainer>
        <FancySyntaxHighlighter language="conf">{`exec-once = waybar`}</FancySyntaxHighlighter>
      </FancyCommandContainer>
      <FancyHeader title="configuring-waybar" />
      <p>
        To use my dotfiles for waybar, copy my <Q>config</Q> and{" "}
        <Q>style.css</Q>
      </p>
      <FancyCommandContainer>
        <FancyCommand>cd ~/.config</FancyCommand>
        <FancyCommand>mkdir -p waybar</FancyCommand>
        <FancyCommand>touch config</FancyCommand>
        <FancyCommand>touch style.css</FancyCommand>
      </FancyCommandContainer>
      <p>
        Then copy the configs in <Q>waybar</Q> from the dotfiles on my github in
        branch <Q>alpha</Q>{" "}
      </p>
      <p>
        It would also be good to install a font since some of the icons might
        not render properly if you don't have it installed. You should also
        install wlogout to get a logout menu from the power button. Need aur
        helper like <Q>yay</Q> or <Q>paru</Q> installed
      </p>
      <FancyCommandContainer>
        <FancyCommand>paru -S ttf-firacode-nerd</FancyCommand>
        <FancyCommand>sudo pacman -S wlogout</FancyCommand>
      </FancyCommandContainer>
      <p>Then you can reboot to see changes</p>
      <FancyCommandContainer>
        <FancyCommand>reboot</FancyCommand>
      </FancyCommandContainer>
      <p>After this, most of the desktop environment stuff is setup</p>
      <FancyHeader title="fish" />
      <p>Setting up fish is pretty simple. First install fish</p>
      <FancyCommandContainer>
        <FancyCommand>sudo pacman -S fish</FancyCommand>
      </FancyCommandContainer>
      <p>Then set fish as default shell</p>
      <FancyCommandContainer>
        <FancyCommand>chsh -s /usr/bin/fish</FancyCommand>
      </FancyCommandContainer>
      <p>
        To get my fish setup, which includes vim mode through keybind <Q>kj</Q>,
        tokyonight colorscheme, custom prompt, and more. It also sets some env
        vars for wayland. Just copy the config.fish file from my dotfiles repo.
        The fish config should be located in <Q>~/.config/fish/config.fish</Q>.
        That's it.
      </p>
      <FancyHeader title="kitty" />
      <p>
        You should already have kitty installed from setting up hyprland. For
        kitty, my setup is pretty simple, just a config file. Copy my kitty.conf
        from my dotfiles file into your <Q>~/.config/kitty/kitty.conf</Q>. My
        kitty.conf file just sets font size, transparency, and colorscheme
      </p>
      <FancyHeader title="vscode" />
      <p>
        Setting up VSCode should be pretty simple, first run this command to
        install:
      </p>
      <FancyCommandContainer>
        <FancyCommand>paru -S visual-studio-code-bin</FancyCommand>
      </FancyCommandContainer>
      <p>
        VSCode should not automatically appear in the wofi menu. The top bar may
        also look a little different than normal, don't worry it should be fixed
        after copying my configs
      </p>
      <p>
        To get my configs just copy the <Q>settings.json</Q> and{" "}
        <Q>keybindings.json</Q> file from my dotfiles repo in <Q>vscode</Q>.
      </p>
      <p>
        To set the settings.json file press{" "}
        <Q>CTRL+SHIFT+P {`>`} Preferences: Open User Settings (JSON)</Q>
      </p>
      <p>
        To set the keybindings.json file press{" "}
        <Q>CTRL+SHIFT+P {`>`} Preferences: Open Keyboards Shortcuts (JSON)</Q>
      </p>
      <p>
        If VSCode feels laggy or your cursor is off, VSCode may not be using
        wayland
      </p>
      <p>
        To fix that, create a <Q>code-flags.conf</Q> in <Q>.config</Q>, then add
        this to it
      </p>
      <FancyCommandContainer>
        <FancySyntaxHighlighter language="conf">
          {`# put in ~/.config/code-flags.conf
--enable-features=UseOzonePlatform
--ozone-platform=wayland`}
        </FancySyntaxHighlighter>
      </FancyCommandContainer>
      <p>
        Lastly, installing the extensions on VSCode should be pretty easy, just
        search for extensions in VSCode and install them
      </p>
      <FancyHeader title="chrome" />
      <p>Installing chrome should be pretty simple just use your aur helper</p>
      <FancyCommandContainer>
        <FancyCommand>paru -S google-chrome</FancyCommand>
      </FancyCommandContainer>
      <p>
        I thought I would mention you should go to the url,{" "}
        <Q>chrome://flags</Q>, there you can set ozone layer to wayland to make
        things run smoother
      </p>
      <FancyHeader title="theming" />
      <p>
        To set up themes for stuff like nemo install a gtk theme. I'm using the
        catpuccin theme from{" "}
      </p>
      <FancyExternalLink
        alias="catppuccincatppuccin--gtk-theme-mocha"
        href="https://aur.archlinux.org/packages/catppuccin-gtk-theme-mocha"
      />
      <p>
        For my folder icons I used papirus folders along with the catpuccin
        papirus folders to color them.
      </p>
      <FancyExternalLink
        alias="papirus-folders"
        href="https://aur.archlinux.org/packages/papirus-folders"
      />
      <FancyExternalLink
        alias="catppuccin-papirus-folders"
        href="https://github.com/catppuccin/papirus-folders"
      />
      <FancyHeader title="obs" />
      <FancyContent>
        use <Q>wlrobs-hg</Q> which is less laggy than <Q>pipewire</Q> and select
        `Wayland
      </FancyContent>
      output(dmabuf)`
    </PageContainer>
  );
};

export default Page;
