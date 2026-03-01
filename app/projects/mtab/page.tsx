import { NextPage } from "next";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyGap } from "~/components/fancy/fancy-gap";
import { FancyImage } from "~/components/fancy/fancy-image";
import { PageContainer } from "~/components/page-container";
import { ProjectHeader } from "~/components/projects/project-header";
import { getProject } from "~/constants/projects";

const Page: NextPage = () => {
  const project = getProject("mtab");

  return (
    <PageContainer>
      <ProjectHeader project={project} />

      <FancyImage src="/assets/projects/mtab/showcase.png" alt="mtab showcase" />

      <FancyContent>
        A modern alternative to the default browser start page, mtab is a highly customizable
        extension I built to combine speed, aesthetics, and practical daily utility. It replaces the
        standard new tab with a fast, polished personal dashboard designed to feel intentional
        rather than empty.
      </FancyContent>

      <FancyGap />

      <FancyContent>
        The project began when I could not find a start page extension that balanced customization,
        performance, and clean design. After experimenting with prototypes and reading through
        browser extension documentation, I built my own solution and published it so I could use it
        across my devices.
        <br />
        <br />
        What started as a personal tool quickly grew beyond that. The extension now has 10,000+
        users and 500+ GitHub stars. Since launching it, I have continuously maintained and improved
        it by shipping new features, responding to user feedback, fixing bugs, reviewing pull
        requests, and managing version migrations. Building and supporting a real user base taught
        me how to test features properly, iterate based on feedback, and ship production-ready
        software.
      </FancyContent>

      <FancyGap />

      <FancyContent>
        Features include:
        <br />
        💡 fast and lightweight
        <br />
        🔒 privacy-focused (local storage, no tracking)
        <br />
        🎨 fully customizable layout and theming
        <br />
        🔎 smart search bar with multi-engine support and utilities
        <br />
        📕 highly configurable bookmarks with folders, icons, and layout control
        <br />
        👋 personalized greeting, date, time, and weather widget
        <br />
        🌦️ location-based weather support
        <br />
        🖼️ URL, uploaded, random, and mixed wallpapers including video
        <br />
        🌟 custom favicon and dynamic tab title effects
        <br />
        🧑‍💻 custom CSS styling and custom font support
        <br />
        ⌨️ keyboard shortcuts for fast navigation
        <br />
        ✈️ shareable configuration import and export
        <br />✨ polished animations and UI effects
      </FancyContent>

      <FancyGap />

      <FancyContent>
        The search bar functions as more than a simple query field. It supports multiple search
        engines, custom engine URLs, direct link detection, and smart assist features such as math
        evaluation, date calculations, unit and currency conversions, definitions, and password
        generation. This allows the new tab page to act as a lightweight command utility directly
        within the browser.
        <br />
        <br />
        Bookmarks are deeply customizable, supporting nested folders, multiple icon systems, browser
        bookmark integration, pagination, keyboard navigation, and flexible layout controls. The
        entire interface, from wallpapers and glass effects to animation timing and highlight
        colors, can be tuned to match a user's workflow and visual preferences.
      </FancyContent>

      <FancyGap />

      <FancyContent>
        The extension is built with TypeScript, Tailwind, and Parcel, with configuration stored in
        chrome.storage.local and supported by versioned migration logic. It runs across
        Chromium-based and Firefox-based browsers and is structured with dedicated new tab, options,
        and popup pages.
      </FancyContent>
    </PageContainer>
  );
};

export default Page;
