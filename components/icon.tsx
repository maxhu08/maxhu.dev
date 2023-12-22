import Image from "next/image"
import { FC } from "react"

export interface IconProps {
  name: string
  icon: string
}

export const Icon: FC<IconProps> = ({ name, icon }) => {
  return (
    <div className="w-8 h-8 relative">
      <Image src={icon} alt={name} fill />
    </div>
  )
}
