"use client"

import * as React from "react"
import { List } from "lucide-react"
import { cn } from "@/lib/utils"
import { DeleteButton } from "../shared/delete-button"

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
  const [isItemHovered, setIsItemHovered] = React.useState(false)
  const [isButtonHovered, setIsButtonHovered] = React.useState(false)

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
      <div
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
      >
        <DeleteButton onDelete={onDelete} ariaLabel={`Delete ${name}`} />
      </div>
    </div>
  )
}

