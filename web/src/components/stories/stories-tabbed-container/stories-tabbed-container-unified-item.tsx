"use client"

import * as React from "react"
import { List, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TableRow, TableCell } from "@/components/ui/table"
import { cn } from "@/lib/utils"

type BaseStoriesTabbedContainerUnifiedItemProps = {
  title: string
  onDelete?: () => void
  onClick?: () => void
  className?: string
  actions?: React.ReactNode
  inUnifiedTable?: boolean
}

export type StoriesTabbedContainerUnifiedItemProps =
  | (BaseStoriesTabbedContainerUnifiedItemProps & {
      variant: 'list'
    })
  | (BaseStoriesTabbedContainerUnifiedItemProps & {
      variant: 'table'
      estimated: number
      time: string
    })

export function StoriesTabbedContainerUnifiedItem(
  props: StoriesTabbedContainerUnifiedItemProps
) {
  const { title, onDelete, onClick, className, actions, inUnifiedTable } = props
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

  if (props.variant === 'table' || inUnifiedTable) {
    const estimated = props.variant === 'table' ? props.estimated : undefined
    const time = props.variant === 'table' ? props.time : undefined
    const isListStyle = props.variant === 'list'

    return (
      <TableRow
        onClick={handleRowClick}
        className={cn(
          onClick && "cursor-pointer",
          className
        )}
      >
        <TableCell className="font-medium">
          {isListStyle ? (
            <div className="flex items-center gap-3">
              <List className="size-4 text-muted-foreground shrink-0" />
              <span>{title}</span>
            </div>
          ) : (
            title
          )}
        </TableCell>
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
      <span className="flex-1 text-sm">{title}</span>
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
  )
}

