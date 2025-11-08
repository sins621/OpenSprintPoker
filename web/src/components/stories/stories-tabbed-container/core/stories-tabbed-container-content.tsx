"use client"

import * as React from "react"
import { TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export function StoriesTabbedContainerContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsContent>) {
  return (
    <TabsContent
      className={cn("mt-4", className)}
      data-slot="stories-tabbed-container-content"
      {...props}
    />
  )
}

