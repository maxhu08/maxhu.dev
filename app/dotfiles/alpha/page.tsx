import { Q } from "~/components/configs/quote";
import { AlphaText } from "~/components/dotfiles/alpha-text";
import { Code } from "~/components/dotfiles/code";
import { Command } from "~/components/dotfiles/command";
import { CommandContainer } from "~/components/dotfiles/command-container";
import { ExternalLink } from "~/components/dotfiles/external-link";
import { Header } from "~/components/dotfiles/header";
import { ProgramSlot } from "~/components/dotfiles/program-slot";
import { Warning } from "~/components/dotfiles/warning";
import { YoutubeEmbed } from "~/components/dotfiles/youtube-embed";

const Page = () => {
  return (
    <div className="grid grid-flow-row mx-auto w-[95%] lg:w-[60%] xl:w-[40%] py-20">
      <AlphaText />
      <p className="text-center">
        install guide for <span className="text-teal-700">alpha (α)</span> dotfiles
      </p>
      <Header name="info" />
      this setup uses the following programs:
      <br />
      <br />
      <div className="grid grid-flow-row w-max">
        <ProgramSlot purpose="Distro" name="EndeavourOS" url="https://endeavouros.com/" />
        <ProgramSlot purpose="DE/WM/Compositor" name="hyprland" url="https://hyprland.org/" />
        <ProgramSlot
          purpose="Terminal Emulator"
          name="kitty"
          url="https://github.com/kovidgoyal/kitty"
        />
        <ProgramSlot purpose="Shell" name="fish" url="https://github.com/kovidgoyal/kitty" />
        <ProgramSlot
          purpose="App Launcher"
          name="wofi"
          url="https://man.archlinux.org/man/wofi.1.en"
        />
        <ProgramSlot purpose="Taskbar" name="waybar" url="https://github.com/Alexays/Waybar" />
        <ProgramSlot
          purpose="File Manager"
          name="nemo"
          url="https://wiki.archlinux.org/title/Nemo"
        />
        <ProgramSlot purpose="IDE" name="VSCode" url="https://code.visualstudio.com/" />
      </div>
      <br />
      <p>Here's a little showcase of the setup:</p>
      <YoutubeEmbed videoId="XK7gal3Wrtk" />
      <br />
      <p>
        The actual dotfiles are in the <Q>alpha</Q> branch on my dotfiles repo <br />
        (<ExternalLink url="https://github.com/maxhu08/dotfiles" />
        ). Keep in mind the file strucuture in the dotfiles repo is not the same, most of these file
        should go in the <Q>.config</Q> directory. Here is the file structure of the dotfiles repo.
      </p>
      <br />
      <CommandContainer>
        <pre>
          {/* prettier-ignore */}
          {`dotfiles
├── fish
│   └── config.fish
├── hypr
│   ├── hyprland.conf
│   └── hyprpaper.conf
├── kitty
│   └── kitty.conf
├── vim
│   ├── keybindings.json
├── vscode
│   ├── keybindings.json
│   └── settings.json
├── waybar
│   ├── config
│   └── style.css
└── wofi
    ├── config
    └── style.css`}
        </pre>
      </CommandContainer>
      <br />
      <Header name="getting-started" />
      <p>
        If you want to follow along exactly, first install EndeavourOS with the GNOME Desktop
        Environment. EndeavourOS will allow you to choose this in the install setup.
      </p>
      <br />
      <Header name="installing-hyprland" />
      <p>
        Once you have EndeavourOS installed boot into it and press <Q>CTRL+ALT+F2</Q> to launch the
        tty. The first thing to install is Hyprland which is going to be the DE. To install Hyprland
        just run:
      </p>
      <br />
      <CommandContainer>
        <Command command="sudo pacman -S hyprland" />
        <br />
        <Command comment="then run this command to start hyprland" command="Hyprland" />
      </CommandContainer>
      <br />
      <p>
        If your cursor isn't showing up and you're using a NVIDIA graphics card, follow the fish
        setup instructions and use my config, which set somes env vars to fix this. (see{" "}
        <ExternalLink url="https://wiki.hyprland.org/FAQ/#me-cursor-no-render" />)
      </p>
      <br />
      <p>Then reboot.</p>
      <br />
      <CommandContainer>
        <Command command="sudo reboot" />
      </CommandContainer>
      <br />
      <p>
        I also made a tutorial on how to install hyprland on EndeavourOS (in a VM), so you can also
        check that out if you're having trouble:
      </p>
      <YoutubeEmbed videoId="Tvo_OUAW_KY" />
      <br />
      <Header name="configuring-hyprland" />
      <p>
        I have a <Q>hyprland.conf</Q> in my dotfiles repo but I don't recommend to copy everything
        because some things might not work for you, such as the monitors setup.
      </p>
      <br />
      <p>
        You will also need to install some programs like kitty (terminal emulator), nemo (file
        manager), and wofi (app launcher) so exit hyprland with <Q>SUPER+M</Q> and install:
      </p>
      <br />
      <Warning>
        If you're installing this on a VM, kitty might not work and many other things in this guide
        may not work either, if you still want to try to follow again in a VM, try `foot` instead of
        kitty
      </Warning>
      <br />
      <CommandContainer>
        <Command command="sudo pacman -S kitty nemo wofi" />
      </CommandContainer>
      <br />
      <p>
        You will also need to update your <Q>hyprland.conf</Q> so it knows to use these programs
      </p>
      <br />
      <CommandContainer>
        <Command comment="should be autogenerated by hyprland" command="cd ~/.config/hypr" />
        <br />
        <Command comment="install vim if not installed" command="sudo pacman -S vim" />
        <br />
        <Command comment="edit hyprland config" command="vim hyprland.conf" />
      </CommandContainer>
      <br />
      <p>
        Just change these variables in your hyprland.conf to this (<Q>CTRL+SHIFT+V</Q> or
        middle-click to paste)
      </p>
      <br />
      <CommandContainer>
        <Code
          name="hyprland.conf"
          text={`...\n$terminal = kitty\n$fileManager = nemo\n$menu = wofi --show drun\n...`}
        />
      </CommandContainer>
      <br />
      <p>
        You will probably need to configure your monitors, to do that first get the name of your
        monitors
      </p>
      <br />
      <CommandContainer>
        <Command comment="this will output your monitor info" command="hyprctl monitors" />
      </CommandContainer>
      <br />
      <p>
        Then adjust your hyprland.conf accordingly. Here is what it would look like assuming your
        monitor names are DP-1 and DP-2 (it may different for you, it's what you got from running
        hyprctl monitors, see <ExternalLink url="https://wiki.hyprland.org/Configuring/Monitors" />
        ).
      </p>
      <br />
      <CommandContainer>
        <Code
          name="hyprland.conf"
          text={`monitor=DP-1,1920x1080@165,1920x1080,auto
monitor=DP-2,1920x1080@165,0x1080,auto`}
        />
      </CommandContainer>
      <br />
      <p>
        If you have multiple monitors and want to have separate workspaces for each monitor you can
        use a program called hyprsome by sopa0 (
        <ExternalLink url="https://github.com/sopa0/hyprsome" />)
      </p>
      <br />
      <p>For now don't worry about that you can come back to this later</p>
      <br />
      <Header name="setting-wallpaper" />
      <p>
        To set a wallpaper, I used a program called <Q>hyprpaper</Q>, which works well with hyprland
      </p>
      <br />
      <CommandContainer>
        <Command command="sudo pacman -S hyprpaper" />
      </CommandContainer>
      <br />
      <p>
        To set a wallpaper I would suggest creating a hidden folder in like <Q>.wallpapers</Q> in
        your home directory add putting your wallpapers there
      </p>
      <br />
      <p>
        To actually set the wallpaper, edit the <Q>hyprpaper.conf</Q> file
      </p>
      <br />
      <CommandContainer>
        <Command command="cd ~/.config/hypr" />
        <br />
        <Command comment="if hyprpaper.conf doesn't exit" command="touch hyprpaper.conf" />
        <br />
        <Command command="vim hyprpaper.conf" />
      </CommandContainer>
      <br />
      <p>
        set preload to and wallpaper to whatever you named your wallpaper file. you can also choose
        a wallpaper to set for each monitor.
      </p>
      <br />
      <CommandContainer>
        <Code
          name="hyprpaper.conf"
          text={`preload = ~/.wallpapers/wall0.jpg

wallpaper = DP-1,~/.wallpapers/wall0.jpg
wallpaper = DP-2,~/.wallpapers/wall0.jpg
# .. more monitors

# disable messages on bottom
splash = false

# fully disable ipc
# ipc = off`}
        />
      </CommandContainer>
      <br />
      <p>After, just add this line in your hyprland.conf to execute hyprpaper as hyprland starts</p>
      <br />
      <CommandContainer>
        <Code name="hyprland.conf" text="exec-once = hyprpaper" />
      </CommandContainer>
      <br />
      <Header name="configuring-wofi" />
      <p>
        To configure wofi copy my <Q>config</Q> and <Q>style.css</Q> from my dotfiles repo into{" "}
        <Q>~/.config/wofi/config</Q> and <Q>~/.config/wofi/style.css</Q>.
      </p>
      <br />
      <CommandContainer>
        <Command command="cd ~/.config" />
        <br />
        <Command comment="if doesn't exist" command="mkdir -p waybar" />
        <Command command="touch config" />
        <Command command="touch style.css" />
      </CommandContainer>
      <br />
      <p>
        The wofi window should automatically change when pressing <Q>SUPER+R</Q> or whatever you set
        the keybind to, no need to refresh.
      </p>
      <br />
      <Header name="installing-waybar" />
      <p>
        For the taskbar, I used <Q>waybar</Q> which works well with hyprland
      </p>
      <br />
      <CommandContainer>
        <Command command="sudo pacman -S waybar" />
      </CommandContainer>
      <br />
      <p>Now run waybar with</p>
      <br />
      <CommandContainer>
        <Command command="waybar" />
      </CommandContainer>
      <br />
      <p>
        Or add it to your exec-once in your <Q>hyprland.conf</Q>
      </p>
      <br />
      <CommandContainer>
        <Code name="hyprland.conf" text="exec-once = waybar" />
      </CommandContainer>
      <br />
      <Header name="configuring-waybar" />
      <p>
        To use my dotfiles for waybar, copy my <Q>config</Q> and <Q>style.css</Q>
      </p>
      <br />
      <CommandContainer>
        <Command command="cd ~/.config" />
        <br />
        <Command comment="if doesn't exist" command="mkdir -p waybar" />
        <Command command="touch config" />
        <Command command="touch style.css" />
      </CommandContainer>
      <br />
      <p>
        Then copy the configs in <Q>waybar</Q> from the dotfiles on my github in branch <Q>alpha</Q>{" "}
      </p>
      <br />
      <p>
        It would also be good to install a font since some of the icons might not render properly if
        you don't have it installed. You should also install wlogout to get a logout menu from the
        power button.
      </p>
      <br />
      <CommandContainer>
        <Command comment="make sure yay is installed" command="yay -S ttf-firacode-nerd" />
        <Command command="sudo pacman -S wlogout" />
      </CommandContainer>
      <br />
      <p>Then you can reboot to see changes</p>
      <br />
      <CommandContainer>
        <Command command="sudo reboot" />
      </CommandContainer>
      <br />
      <p>After this, most of the desktop environment stuff is setup</p>
      <br />
      <Header name="fish" />
      <p>Setting up fish is pretty simple. First install fish</p>
      <br />
      <CommandContainer>
        <Command command="sudo pacman -S fish" />
      </CommandContainer>
      <br />
      <p>Then set fish as default shell</p>
      <br />
      <CommandContainer>
        <Command command="chsh -s /usr/bin/fish" />
      </CommandContainer>
      <br />
      <p>
        To get my fish setup, which includes vim mode through keybind <Q>kj</Q>, tokyonight
        colorscheme, custom prompt, and more. It also sets some env vars for wayland. Just copy the
        config.fish file from my dotfiles repo. The fish config should be located in{" "}
        <Q>~/.config/fish/config.fish</Q>. That's it.
      </p>
      <br />
      <Header name="kitty" />
      <p>
        You should already have kitty installed from setting up hyprland. For kitty, my setup is
        pretty simple, just a config file. Copy my kitty.conf from my dotfiles file into your{" "}
        <Q>~/.config/kitty/kitty.conf</Q>. My kitty.conf file just sets font size, transparency, and
        colorscheme
      </p>
      <br />
      <Header name="vscode" />
      <p>Setting up VSCode should be pretty simple, first run this command to install:</p>
      <br />
      <CommandContainer>
        <Command command="yay -S visual-studio-code-bin" />
      </CommandContainer>
      <br />
      <p>
        VSCode should not automatically appear in the wofi menu. It should also work in wayland if
        you setup my fish config earlier. The top bar may also look a little different than normal,
        don't worry it should be fixed after copying my configs
      </p>
      <br />
      <p>
        To get my configs just copy the <Q>settings.json</Q> and <Q>keybindings.json</Q> file from
        my dotfiles repo in <Q>vscode</Q>.
      </p>
      <br />
      <p>
        To set the settings.json file press{" "}
        <Q>CTRL+SHIFT+P {`>`} Preferences: Open User Settings (JSON)</Q>
      </p>
      <br />
      <p>
        To set the keybindings.json file press{" "}
        <Q>CTRL+SHIFT+P {`>`} Preferences: Open Keyboards Shortcuts (JSON)</Q>
      </p>
      <br />
      <p>Lastly, installing the extensions on vscode should be pretty easy.</p>
      <br />
      <Header name="chrome" />
      <p>Installing chrome should be pretty simple just use yay</p>
      <br />
      <CommandContainer>
        <Command command="yay -S google-chrome" />
      </CommandContainer>
      <br />
      <p>
        I thought I would mention you should go to the url, <Q>chrome://flags</Q>, there you can set
        ozone layer to wayland to make things run smoother
      </p>
    </div>
  );
};

export default Page;
