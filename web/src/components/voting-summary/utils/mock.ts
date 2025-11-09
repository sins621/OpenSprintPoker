import type { PokerCardValue } from "@/lib/types";

export const sampleVotes: Record<PokerCardValue, number> = {
  "0": 0,
  "1": 2,
  "2": 1,
  "3": 3,
  "5": 5,
  "8": 4,
  "13": 2,
  "21": 1,
  "34": 0,
  "55": 0,
  "89": 0,
  "?": 0,
  "∞": 0,
};

export const fewVotes: Record<PokerCardValue, number> = {
  "0": 0,
  "1": 0,
  "2": 1,
  "3": 2,
  "5": 0,
  "8": 0,
  "13": 0,
  "21": 0,
  "34": 0,
  "55": 0,
  "89": 0,
  "?": 0,
  "∞": 0,
};

export const manyVotes: Record<PokerCardValue, number> = {
  "0": 3,
  "1": 5,
  "2": 4,
  "3": 8,
  "5": 12,
  "8": 10,
  "13": 7,
  "21": 4,
  "34": 2,
  "55": 1,
  "89": 0,
  "?": 3,
  "∞": 1,
};

