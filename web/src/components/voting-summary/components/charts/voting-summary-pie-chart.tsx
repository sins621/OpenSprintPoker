"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import type { PokerCardValue } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useChartData, useChartConfig, usePieData } from "../../utils/hooks";
import { ChartValues } from "./chart-values";

export type VotingSummaryPieChartProps = {
  votes: Record<PokerCardValue, number>;
  children?: React.ReactNode;
  className?: string;
};

export function VotingSummaryPieChart({
  votes,
  children,
  className,
}: VotingSummaryPieChartProps) {
  const chartData = useChartData(votes);
  const chartConfig = useChartConfig(chartData);
  const pieData = usePieData(chartData);

  return (
    <div className={cn("relative h-full w-full", className)}>
      <ChartContainer config={chartConfig} className="h-full w-full">
        <RechartsPrimitive.PieChart>
          <RechartsPrimitive.Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="100%"
            paddingAngle={2}
          >
            {pieData.map((entry, index) => (
              <RechartsPrimitive.Cell
                key={`cell-${index}`}
                fill={entry.fill}
              />
            ))}
          </RechartsPrimitive.Pie>
          <RechartsPrimitive.Tooltip />
        </RechartsPrimitive.PieChart>
      </ChartContainer>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {children}
        </div>
      )}
    </div>
  );
}

