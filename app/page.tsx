import { NextPage } from "next"

const Page: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <div>
        <div>
          <div className="grid grid-cols-[max-content_max-content] place-items-center gap-2">
            <span className="text-4xl">👋</span>
            <span className="text-4xl font-semibold">
              Hi! I&apos;m <span>Max Hu</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
