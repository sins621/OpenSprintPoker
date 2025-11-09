"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import type { PokerCardValue } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useChartData, useChartConfig, useBarData } from "../../utils/hooks";

export type VotingSummaryBarChartProps = {
  votes: Record<PokerCardValue, number>;
  children?: React.ReactNode;
  className?: string;
};

export function VotingSummaryBarChart({
  votes,
  children,
  className,
}: VotingSummaryBarChartProps) {
  const chartData = useChartData(votes);
  const chartConfig = useChartConfig(chartData);
  const barData = useBarData(chartData);

  return (
    <div className={cn("relative h-full w-full", className)}>
      <ChartContainer config={chartConfig} className="h-full w-full">
        <RechartsPrimitive.BarChart data={barData} layout="vertical">
          <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
          <RechartsPrimitive.XAxis type="number" />
          <RechartsPrimitive.YAxis
            dataKey="storyPoint"
            type="category"
            width={60}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <RechartsPrimitive.Bar
            dataKey="votes"
            radius={[0, 4, 4, 0]}
          >
            {barData.map((entry, index) => (
              <RechartsPrimitive.Cell
                key={`cell-${index}`}
                fill={entry.fill}
              />
            ))}
          </RechartsPrimitive.Bar>
        </RechartsPrimitive.BarChart>
      </ChartContainer>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {children}
        </div>
      )}
    </div>
  );
}

