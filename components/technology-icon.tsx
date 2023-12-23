"use client"

import Image from "next/image"
import { FC, useEffect, useState } from "react"
import { cn } from "~/utils/cn"
import styles from "./technology-icon.module.scss"
import { useTheme } from "next-themes"
import { ActionTooltip } from "~/components/action-tooltip"

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  icon: string
  iconLight?: string
  delay: number
}

export const Icon: FC<IconProps> = ({ name, icon, iconLight, delay, ...props }) => {
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div className="w-8 h-8"></div>

  return (
    <ActionTooltip label={name} side="bottom">
      <div
        className={cn("w-6 h-6 md:w-8 md:h-8 relative cursor-pointer !aspect-square", styles["fade-in-right"])}
        style={{ animationDelay: `${delay.toString()}ms` }}
        {...props}
      >
        {iconLight && theme === "light" ? <Image src={iconLight} alt={name} fill /> : <Image src={icon} alt={name} fill />}
      </div>
    </ActionTooltip>
  )
}
