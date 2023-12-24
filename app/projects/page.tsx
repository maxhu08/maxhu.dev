"use client"

import { NextPage } from "next"
import { useEffect, useRef, useState } from "react"
import { ProjectCard } from "~/components/project-card"
import styles from "~/app/projects/page.module.scss"

const Page: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const hiddenElements = document.querySelectorAll(`.${styles["project"]}`)
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add(styles["project-shown"])
        else {
          entry.target.classList.remove(styles["project-shown"])
        }
      })
    })

    hiddenElements.forEach(el => observer.observe(el))
  }, [setIsMounted, isMounted])

  return (
    <div className="w-full h-screen grid place-items-center">
      <main className="grid grid-flow-row gap-2 w-full sm:w-[60%] md:w-[50%] lg:w-[40%] h-full pt-10">
        <ProjectCard
          className={styles["project"]}
          info={{
            title: "todo: add later",
            technologies: ["typescript", "nodejs"]
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
  )
}

export default Page
