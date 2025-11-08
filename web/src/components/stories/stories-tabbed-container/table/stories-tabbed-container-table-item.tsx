"use client"

import * as React from "react"
import { TableRow, TableCell } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { ActionsCell } from "../shared/actions-cell"

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
        <div
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          <ActionsCell
            actions={actions}
            onDelete={onDelete}
            deleteAriaLabel={`Delete ${title}`}
          />
        </div>
      </TableCell>
    </TableRow>
  )
}

