import { Zap } from "lucide-react"
import { FC } from "react"
import { ThemeToggle } from "~/components/theme-toggle"

export const Navbar: FC = () => {
  return (
    <nav className="fixed z-20 w-full">
      <div className="p-2 grid grid-flow-col w-full">
        <div className="grid grid-cols-[max-content_max-content] gap-1 text-blue-500 place-items-center select-none">
          <Zap className="w-4 h-4" />
          <span>maxhu.dev</span>
        </div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
