"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTabTitleContext } from "./stories-tabbed-container"

export type StoriesTabbedContainerCardProps = {
  children: React.ReactNode
}

export function StoriesTabbedContainerCard({
  children,
}: StoriesTabbedContainerCardProps) {
  const { titlesRef, titlesVersion, currentValue } = useTabTitleContext()
  const title = React.useMemo(
    () => titlesRef.current.get(currentValue) || "",
    [titlesVersion, currentValue]
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

