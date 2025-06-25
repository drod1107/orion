// /types/chart.ts
export interface ChartDataPoint {
  date: string;
  amount: number;
  label?: string;
}

export interface SpendingTrendData {
  daily: ChartDataPoint[];
  weekly: ChartDataPoint[];
  monthly: ChartDataPoint[];
}
