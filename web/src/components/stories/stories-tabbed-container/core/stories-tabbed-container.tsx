"use client"

import * as React from "react"
import { Tabs } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type TabTitleContextType = {
  titlesRef: React.MutableRefObject<Map<string, string>>
  titlesVersion: number
  updateTitles: () => void
  currentValue: string
  setCurrentValue: (value: string) => void
}

const TabTitleContext = React.createContext<TabTitleContextType | undefined>(undefined)

export function useTabTitleContext() {
  const context = React.useContext(TabTitleContext)
  if (!context) {
    throw new Error("useTabTitleContext must be used within StoriesTabbedContainer")
  }
  return context
}

export type StoriesTabbedContainerProps = {
  defaultValue?: "active" | "completed" | "all"
  className?: string
  children?: React.ReactNode
}

  export function StoriesTabbedContainer({
  defaultValue = "active",
  className,
  children,
}: StoriesTabbedContainerProps) {
  const titlesRef = React.useRef<Map<string, string>>(new Map())
  const [titlesVersion, setTitlesVersion] = React.useState(0)
  const [currentValue, setCurrentValue] = React.useState<string>(defaultValue)

  const updateTitles = React.useCallback(() => {
    setTitlesVersion((v) => v + 1)
  }, [])

  return (
    <TabTitleContext.Provider value={{ titlesRef, titlesVersion, updateTitles, currentValue, setCurrentValue }}>
      <Tabs
        value={currentValue}
        onValueChange={setCurrentValue}
        className={cn("w-full", className)}
        data-slot="stories-tabbed-container"
      >
        {children}
      </Tabs>
    </TabTitleContext.Provider>
  )
}

