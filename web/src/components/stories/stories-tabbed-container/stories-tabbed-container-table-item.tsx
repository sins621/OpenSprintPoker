"use client"

import * as React from "react"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TableRow, TableCell } from "@/components/ui/table"
import { cn } from "@/lib/utils"

export type StoriesTabbedContainerTableItemProps = {
  title: string
  estimated?: number
  time?: string
  onDelete?: () => void
  onClick?: () => void
  className?: string
  actions?: React.ReactNode
}

export function StoriesTabbedContainerTableItem({
  title,
  estimated,
  time,
  onDelete,
  onClick,
  className,
  actions,
}: StoriesTabbedContainerTableItemProps) {
  const [isButtonHovered, setIsButtonHovered] = React.useState(false)

  const handleDelete = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      onDelete?.()
    },
    [onDelete]
  )

  const handleRowClick = React.useCallback(() => {
    if (!isButtonHovered) {
      onClick?.()
    }
  }, [onClick, isButtonHovered])

  return (
    <TableRow
      onClick={handleRowClick}
      className={cn(
        onClick && "cursor-pointer",
        className
      )}
    >
      <TableCell className="font-medium">{title}</TableCell>
      <TableCell>{estimated ?? '-'}</TableCell>
      <TableCell>{time ?? '-'}</TableCell>
      <TableCell>
        <div className="flex items-center justify-end gap-2">
          {actions}
          {onDelete && (
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
              aria-label={`Delete ${title}`}
            >
              <Trash2 className="size-4" />
            </Button>
          )}
        </div>
      </TableCell>
    </TableRow>
  )
}

