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

export type TableStructureProps = {
  children: React.ReactNode
  className?: string
  showFooter?: boolean
  totalEstimated?: number
}

export function TableStructure({
  children,
  className,
  showFooter = false,
  totalEstimated = 0,
}: TableStructureProps) {
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
      {showFooter && (
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

