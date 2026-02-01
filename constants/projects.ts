export interface Project {
  title: string;
  description: string;
  technologies: string[];
  codeLink?: string;
  demoLink?: string;
}

export type ProjectName = "mtab" | "tomb-of-the-mask-clone" | "create-neutrino-app";

export const projects: Record<ProjectName, Project> = {
  mtab: {
    title: "mtab",
    description: "simple new tab page extension for chrome",
    technologies: ["html", "css", "tailwindcss", "typescript"],
    demoLink: "https://chromewebstore.google.com/detail/mtab/fdaphilojaklgkoocegabckfanjoacjg",
    codeLink: "https://github.com/maxhu08/mtab"
  },
  "tomb-of-the-mask-clone": {
    title: "tomb-of-the-mask-clone",
    description: "simple version tomb of the mask written in java",
    technologies: ["java"],
    codeLink: "https://github.com/maxhu08/tomb-of-the-mask-clone"
  },
  "create-neutrino-app": {
    title: "create-neutrino-app",
    description: "create a lightweight template which has hmr, typescript, tailwind & sass",
    technologies: ["html", "sass", "tailwindcss", "typescript", "nodejs"],
    codeLink: "https://github.com/maxhu08/tomb-of-the-mask-clone"
  }
} as const;
