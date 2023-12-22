import Image from "next/image"
import { FC } from "react"

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  icon: string
}

export const Icon: FC<IconProps> = ({ name, icon, ...props }) => {
  return (
    <div className="w-8 h-8 relative" {...props}>
      <Image src={icon} alt={name} fill />
    </div>
  )
}
