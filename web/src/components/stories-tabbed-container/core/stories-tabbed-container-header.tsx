"use client"

import * as React from "react"
import { Plus, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StoriesTabbedContainerList } from "./stories-tabbed-container-list"
import { cn } from "@/lib/utils"

export type StoriesTabbedContainerHeaderProps = {
  className?: string
  onNewClick?: () => void
  onSettingsClick?: () => void
  children: React.ReactNode
}

export function StoriesTabbedContainerHeader({
  className,
  onNewClick,
  onSettingsClick,
  children,
}: StoriesTabbedContainerHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 h-9",
        className
      )}
      data-slot="stories-tabbed-container-header"
    >
      <StoriesTabbedContainerList>{children}</StoriesTabbedContainerList>
      <div className="flex items-center gap-2" data-slot="stories-tabbed-container-actions">
        <Button
          variant="outline"
          size="sm"
          onClick={onNewClick}
          data-slot="stories-tabbed-container-new-button"
        >
          <Plus />
          New
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onSettingsClick}
          data-slot="stories-tabbed-container-settings-button"
        >
          <Settings />
          <span className="sr-only">Settings</span>
        </Button>
      </div>
    </div>
  )
}

