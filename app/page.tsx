import { NextPage } from "next"
import { Technologies } from "~/components/technologies"

const Page: NextPage = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="grid place-items-center grid-flow-row pb-16 h-max gap-2">
        <div className="grid grid-cols-[repeat(3,max-content)] place-items-center gap-2 fade-in-down">
          <span className="text-2xl md:text-4xl select-none wave-animation">👋</span>
          <span className="text-2xl md:text-4xl font-semibold dark:text-white">
            Hi! I&apos;m <span className="special-text">Max Hu</span>
          </span>
        </div>
        <div className="grid place-items-center grid-flow-row gap-1">
          <span className="text-zinc-500 dark:text-zinc-400 fade-in-left ">technologies i&apos;m learning</span>
          <Technologies />
        </div>
      </div>
    </div>
  )
}

export default Page
