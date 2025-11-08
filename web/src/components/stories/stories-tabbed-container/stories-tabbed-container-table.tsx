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
        {children}
      </TableBody>
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
    </Table>
  )
}

