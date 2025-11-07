"use client"

import * as React from "react"
import { TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type StoriesTabbedContainerTriggerProps = {
  count?: number
  value: "active" | "completed" | "all"
  children: React.ReactNode
} & Omit<React.ComponentProps<typeof TabsTrigger>, "value">

export function StoriesTabbedContainerTrigger({
  count,
  value,
  children,
  className,
  ...props
}: StoriesTabbedContainerTriggerProps) {
  return (
    <TabsTrigger
      value={value}
      className={cn("gap-2", className)}
      data-slot="stories-tabbed-container-trigger"
      {...props}
    >
      <span>{children}</span>
      {count !== undefined && (
        <Badge variant="secondary" className="ml-1">
          {count}
        </Badge>
      )}
    </TabsTrigger>
  )
}

