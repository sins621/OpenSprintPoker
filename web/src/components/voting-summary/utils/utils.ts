import type { PokerCardValue } from "@/lib/types";
import { COLORS } from "./constants";

export function calculateAverage(votes: Record<PokerCardValue, number>): number {
  let totalValue = 0;
  let totalCount = 0;

  Object.entries(votes).forEach(([storyPoint, count]) => {
    if (count > 0) {
      const numericValue = parseFloat(storyPoint);
      if (!isNaN(numericValue)) {
        totalValue += numericValue * count;
        totalCount += count;
      }
    }
  });

  return totalCount > 0 ? totalValue / totalCount : 0;
}

export function getTotalVotes(votes: Record<PokerCardValue, number>): number {
  return Object.values(votes).reduce((sum, count) => sum + count, 0);
}

export function getChartData(votes: Record<PokerCardValue, number>) {
  return Object.entries(votes)
    .filter(([, count]) => count > 0)
    .map(([storyPoint, count]) => ({
      storyPoint: storyPoint as PokerCardValue,
      count,
    }));
}

export function calculatePercentage(count: number, total: number): number {
  return total > 0 ? Math.round((count / total) * 100) : 0;
}

export function getColorForIndex(index: number): string {
  return COLORS[index % COLORS.length];
}

