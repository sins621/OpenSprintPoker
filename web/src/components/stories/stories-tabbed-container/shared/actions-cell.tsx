"use client"

import * as React from "react"
import { DeleteButton } from "./delete-button"

export type ActionsCellProps = {
  actions?: React.ReactNode
  onDelete?: () => void
  deleteAriaLabel: string
}

export function ActionsCell({
  actions,
  onDelete,
  deleteAriaLabel,
}: ActionsCellProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      {actions}
      <DeleteButton onDelete={onDelete} ariaLabel={deleteAriaLabel} />
    </div>
  )
}

