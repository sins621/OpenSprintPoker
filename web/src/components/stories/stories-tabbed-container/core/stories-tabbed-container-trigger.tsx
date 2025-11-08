"use client"

import * as React from "react"
import { TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useTabTitleContext } from "./stories-tabbed-container"

function extractTextFromChildren(children: React.ReactNode): string {
  if (typeof children === "string") {
    return children
  }
  if (typeof children === "number") {
    return String(children)
  }
  if (React.isValidElement(children)) {
    const props = children.props as { children?: React.ReactNode }
    if (props.children) {
      return extractTextFromChildren(props.children)
    }
  }
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("")
  }
  return ""
}

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
  const { titlesRef, updateTitles } = useTabTitleContext()
  const titleText = React.useMemo(() => extractTextFromChildren(children), [children])
  const prevTitleText = React.useRef(titleText)

  if (titleText !== prevTitleText.current) {
    titlesRef.current.set(value, titleText)
    prevTitleText.current = titleText
    updateTitles()
  } else {
    titlesRef.current.set(value, titleText)
  }

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

