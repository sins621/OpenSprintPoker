"use client";

import * as React from "react";
import type { ChartConfig } from "@/components/ui/chart";
import type { PokerCardValue } from "@/lib/types";
import { COLORS } from "./constants";
import { getChartData } from "./utils";

export function useChartData(votes: Record<PokerCardValue, number>) {
  return React.useMemo(() => getChartData(votes), [votes]);
}

export function useChartConfig(chartData: Array<{ storyPoint: PokerCardValue; count: number }>) {
  return React.useMemo<ChartConfig>(() => {
    const config: ChartConfig = {};
    chartData.forEach((item, index) => {
      config[item.storyPoint] = {
        label: item.storyPoint,
        color: COLORS[index % COLORS.length],
      };
    });
    return config;
  }, [chartData]);
}

export function usePieData(chartData: Array<{ storyPoint: PokerCardValue; count: number }>) {
  return React.useMemo(() => {
    return chartData.map((item, index) => {
      const color = COLORS[index % COLORS.length];
      return {
        name: item.storyPoint,
        value: item.count,
        fill: color,
        colorIndex: index,
      };
    });
  }, [chartData]);
}

export function useBarData(chartData: Array<{ storyPoint: PokerCardValue; count: number }>) {
  return React.useMemo(() => {
    return chartData.map((item, index) => {
      const color = COLORS[index % COLORS.length];
      return {
        storyPoint: item.storyPoint,
        votes: item.count,
        fill: color,
        colorIndex: index,
      };
    });
  }, [chartData]);
}

