"use client"

import * as React from "react"
import type { StoriesTabbedContainerUnifiedItemProps } from "./stories-tabbed-container-unified-item"
import { TableStructure } from "../shared/table-structure"

export type StoriesTabbedContainerUnifiedProps = {
  children: React.ReactNode
  className?: string
}

export function StoriesTabbedContainerUnified({
  children,
  className,
}: StoriesTabbedContainerUnifiedProps) {
  const items = React.Children.toArray(children) as React.ReactElement<StoriesTabbedContainerUnifiedItemProps>[]
  
  const hasTableItems = React.useMemo(() => {
    return items.some(item => {
      const props = item.props as StoriesTabbedContainerUnifiedItemProps
      return props.variant === 'table'
    })
  }, [items])

  const totalEstimated = React.useMemo(() => {
    return items.reduce((sum, item) => {
      const props = item.props as StoriesTabbedContainerUnifiedItemProps
      if (props.variant === 'table') {
        return sum + props.estimated
      }
      return sum
    }, 0)
  }, [items])

  return (
    <TableStructure
      className={className}
      showFooter={hasTableItems}
      totalEstimated={totalEstimated}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {React.cloneElement(item, { inUnifiedTable: true })}
        </React.Fragment>
      ))}
    </TableStructure>
  )
}

