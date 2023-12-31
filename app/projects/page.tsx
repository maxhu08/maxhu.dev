"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";
import { ProjectCard } from "~/components/projects/project-card";
import styles from "~/app/projects/page.module.scss";
import Image from "next/image";
import { SimpleImage } from "~/components/simple-image";

const Page: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const hiddenElements = document.querySelectorAll(`.${styles["project"]}`);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add(styles["project-shown"]);
        else entry.target.classList.remove(styles["project-shown"]);
      });
    });

    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [setIsMounted, isMounted]);

  return (
    <div className="w-full h-full grid place-items-center overflow-x-clip pb-10">
      <main className="grid grid-flow-row gap-2 w-full sm:w-[60%] md:w-[40%] h-full pt-10">
        <ProjectCard
          className={styles["project"]}
          info={{
            title: "tomb-of-the-mask-clone",
            technologies: ["java"],
            codeLink: "https://github.com/maxhu08/tomb-of-the-mask-clone"
          }}
        >
          <p>
            This is a project I made as my final project for java class. It is a tomb of the mask
            style game where you collect the keys to go through the portal and progress to the next
            level. There are eight worlds in total. You can also collect coins, which increase your
            score. You can find the download for the game&nbsp;
            <a
              href="https://github.com/maxhu08/tomb-of-the-mask-clone/blob/master/tomb-of-the-mask-clone.exe"
              className="text-blue-500 hover:text-blue-700 duration-300 ease-in-out underline"
            >
              here
            </a>
          </p>

          <SimpleImage src="assets/projects/tomb-of-the-mask-clone/demo-1.png" alt="demo" />
          <SimpleImage src="assets/projects/tomb-of-the-mask-clone/demo-2.png" alt="demo" />
        </ProjectCard>
        <ProjectCard
          className={styles["project"]}
          info={{
            title: "todo: add later",
            technologies: ["typescript", "nodejs"],
            codeLink: "https://github.com/maxhu08/maxhu.dev",
            demoLink: "https://maxhu.dev/"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ProjectCard>
        <ProjectCard
          className={styles["project"]}
          info={{
            title: "todo: add later",
            technologies: ["typescript", "nodejs"],
            codeLink: "https://github.com/maxhu08/maxhu.dev",
            demoLink: "https://maxhu.dev/"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ProjectCard>
        <ProjectCard
          className={styles["project"]}
          info={{
            title: "todo: add later",
            technologies: ["typescript", "nodejs"],
            codeLink: "https://github.com/maxhu08/maxhu.dev",
            demoLink: "https://maxhu.dev/"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ProjectCard>
      </main>
    </div>
  );
};

export default Page;
