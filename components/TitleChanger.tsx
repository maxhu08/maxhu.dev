"use client"

import { FC, useEffect, useState } from "react"
import { websiteName } from "~/config"

export const TitleChanger: FC = () => {
  const [stateIndex, setStateIndex] = useState(0)
  const states = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]

  useEffect(() => {
    const interval = setInterval(() => {
      if (stateIndex === states.length - 1) setStateIndex(0)
      else setStateIndex(prev => prev + 1)

      console.log(states[stateIndex], stateIndex)

      document.title = `${websiteName} ${states[stateIndex]}`
    }, 200)

    return () => clearInterval(interval)
  })

  return null
}
