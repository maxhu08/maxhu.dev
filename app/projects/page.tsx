import { NextPage } from "next"
import { ProjectCard } from "~/components/project-card"

const Page: NextPage = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <main className="grid grid-flow-row gap-2 w-full sm:w-[60%] md:w-[50%] lg:w-[40%] h-full pt-10">
        <ProjectCard
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
