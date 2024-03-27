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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add(styles["project-shown"]);
        else entry.target.classList.remove(styles["project-shown"]);
      });
    });

    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [setIsMounted, isMounted]);

  return (
    <div className="w-full h-full grid place-items-center overflow-x-clip pb-10">
      <main className="grid grid-flow-row gap-2 w-full md:w-[60%] xl:w-[40%] h-full pt-10">
        <ProjectCard
          className={styles["project"]}
          info={{
            title: "tomb-of-the-mask-clone",
            technologies: ["java"],
            codeLink: "https://github.com/maxhu08/tomb-of-the-mask-clone"
          }}
        >
          <p>
            This is a simple project I made as a project for my java class. It is a tomb of the mask
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
            title: "mtab",
            technologies: ["html", "css", "typescript"],
            codeLink: "https://github.com/maxhu08/mtab"
          }}
        >
          This is a chrome extension that adds a new tab page. I made it because I wanted a
          customizable new tab page where I can change my wallpaper. I also added a lot of fancy
          animations because it makes it feel more modern.
        </ProjectCard>
      </main>
    </div>
  );
};

export default Page;
