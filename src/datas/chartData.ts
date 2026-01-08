
export type ChartType = 'line' | 'bar' | 'area' | 'pie' | 'donut' | 'mixed';

export interface ChartData {
   categories: string[];
   sales: number[];
   revenue: number[];
}

export interface ChartButton {
   id: ChartType;
   label: string;
   icon: string;
}

export interface StatsCard {
   title: string;
   value: string;
   color: string;
}

// Sample data with proper typing
export const monthlyData: ChartData = {
   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
   sales: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
   revenue: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
};

export const chartButtons: ChartButton[] = [
   { id: 'line', label: 'Line Chart', icon: '📈' },
   { id: 'bar', label: 'Bar Chart', icon: '📊' },
   { id: 'area', label: 'Area Chart', icon: '📉' },
   { id: 'pie', label: 'Pie Chart', icon: '🥧' },
   { id: 'donut', label: 'Donut Chart', icon: '🍩' },
   { id: 'mixed', label: 'Mixed Chart', icon: '📋' },
];

export const getStatsCards = (data: ChartData): StatsCard[] => [
   {
      title: 'Total Sales',
      value: data.sales.reduce((a, b) => a + b, 0).toLocaleString(),
      color: 'text-blue-400',
   },
   {
      title: 'Total Revenue',
      value: `$${data.revenue.reduce((a, b) => a + b, 0).toLocaleString()}`,
      color: 'text-green-400',
   },
   {
      title: 'Average Growth',
      value: '12.5%',
      color: 'text-purple-400',
   },
];
