"use client"

import * as React from "react"
import { List, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type StoriesTabbedContainerItemProps = {
  name: string
  onDelete?: () => void
  onClick?: () => void
  className?: string
}

export function StoriesTabbedContainerItem({
  name,
  onDelete,
  onClick,
  className,
}: StoriesTabbedContainerItemProps) {
  const [isButtonHovered, setIsButtonHovered] = React.useState(false)

  const handleDelete = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      onDelete?.()
    },
    [onDelete]
  )

  const [isItemHovered, setIsItemHovered] = React.useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsItemHovered(true)}
      onMouseLeave={() => setIsItemHovered(false)}
      className={cn(
        "flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors",
        isItemHovered && !isButtonHovered && "bg-accent",
        className
      )}
    >
      <List className="size-4 text-muted-foreground shrink-0" />
      <span className="flex-1 text-sm">{name}</span>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={handleDelete}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        className={cn(
          "shrink-0",
          isButtonHovered && "bg-destructive/20 text-destructive dark:bg-destructive/30"
        )}
        aria-label={`Delete ${name}`}
      >
        <Trash2 className="size-4" />
      </Button>
    </div>
  )
}

