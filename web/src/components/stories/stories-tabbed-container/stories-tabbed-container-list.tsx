"use client"

import * as React from "react"
import { TabsList } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export function StoriesTabbedContainerList({
  className,
  ...props
}: React.ComponentProps<typeof TabsList>) {
  return (
    <TabsList
      className={cn("justify-start w-fit", className)}
      data-slot="stories-tabbed-container-list"
      {...props}
    />
  )
}

