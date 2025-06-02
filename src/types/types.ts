export interface Projects {
   imgUrl: string;
   title: string;
   description: string;
   link: string;
}

export interface ChartData {
   categories: string[];
   sales: number[];
   revenue: number[];
}

export interface PieChartData {
   name: string;
   value: number;
   color: string;
}

export type ChartType = 'line' | 'bar' | 'area' | 'pie' | 'donut' | 'mixed';

export interface ChartButton {
   id: ChartType;
   label: string;
   icon: string;
}

export interface StatsCard {
   title: string;
   value: string | number;
   color: string;
}
