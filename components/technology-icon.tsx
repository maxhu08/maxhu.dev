import Image from "next/image"
import { FC } from "react"
import { cn } from "~/utils/cn"
import styles from "./technology-icon.module.scss"

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  icon: string
  delay: number
}

export const Icon: FC<IconProps> = ({ name, icon, delay, ...props }) => {
  return (
    <div className={cn("w-8 h-8 relative", styles["fade-in-right"])} style={{ animationDelay: `${delay.toString()}ms !important` }} {...props}>
      <Image src={icon} alt={name} fill />
    </div>
  )
}
