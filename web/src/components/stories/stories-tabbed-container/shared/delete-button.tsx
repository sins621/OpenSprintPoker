"use client"

import * as React from "react"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type DeleteButtonProps = {
  onDelete?: () => void
  ariaLabel: string
}

export function DeleteButton({ onDelete, ariaLabel }: DeleteButtonProps) {
  const [isButtonHovered, setIsButtonHovered] = React.useState(false)

  const handleDelete = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      onDelete?.()
    },
    [onDelete]
  )

  if (!onDelete) {
    return null
  }

  return (
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
      aria-label={ariaLabel}
    >
      <Trash2 className="size-4" />
    </Button>
  )
}

