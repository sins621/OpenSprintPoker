"use client"

import * as React from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import type { StoriesTabbedContainerUnifiedItemProps } from "./stories-tabbed-container-unified-item"

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
    <Table className={cn(className)}>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Estimated</TableHead>
          <TableHead>Time</TableHead>
          <TableHead className="w-[100px] text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {React.cloneElement(item, { inUnifiedTable: true })}
          </React.Fragment>
        ))}
      </TableBody>
      {hasTableItems && (
        <TableFooter>
          <TableRow>
            <TableCell className="font-medium">
              Total
            </TableCell>
            <TableCell className="font-medium">{totalEstimated}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  )
}

