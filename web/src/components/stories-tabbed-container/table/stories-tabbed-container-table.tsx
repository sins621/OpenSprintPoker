"use client"

import * as React from "react"
import { TableStructure } from "../shared/table-structure"
import type { StoriesTabbedContainerTableItemProps } from "./stories-tabbed-container-table-item"

export type StoriesTabbedContainerTableProps = {
  children: React.ReactNode
  className?: string
}

export function StoriesTabbedContainerTable({
  children,
  className,
}: StoriesTabbedContainerTableProps) {
  const items = React.Children.toArray(children) as React.ReactElement<StoriesTabbedContainerTableItemProps>[]

  const totalEstimated = React.useMemo(() => {
    return items.reduce((sum, item) => {
      const estimated = (item.props as StoriesTabbedContainerTableItemProps)?.estimated ?? 0
      return sum + (typeof estimated === 'number' ? estimated : 0)
    }, 0)
  }, [items])

  return (
    <TableStructure
      className={className}
      showFooter={true}
      totalEstimated={totalEstimated}
    >
      {children}
    </TableStructure>
  )
}
