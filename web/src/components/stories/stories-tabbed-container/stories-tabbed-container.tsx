"use client"

import * as React from "react"
import { Tabs } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

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
  return (
    <Tabs
      defaultValue={defaultValue}
      className={cn("w-full", className)}
      data-slot="stories-tabbed-container"
    >
      {children}
    </Tabs>
  )
}

