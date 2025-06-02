'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { ChartData, ChartType, ChartButton, StatsCard } from '@/types/types';
import { BiLeftArrowAlt } from 'react-icons/bi';

// Type the Chart component properly
interface ChartProps {
   options: ApexOptions;
   series: ApexOptions['series'];
   type: string;
   height: number | string;
}

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), {
   ssr: false,
}) as React.ComponentType<ChartProps>;

const ChartDashboard = () => {
   const [activeChart, setActiveChart] = useState<ChartType>('line');
   const router = useRouter();

   // Sample data with proper typing
   const monthlyData: ChartData = {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      sales: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
      revenue: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
   };

   // Line Chart Configuration
   const lineChartOptions: ApexOptions = {
      chart: {
         type: 'line',
         height: 350,
         background: 'transparent',
         toolbar: {
            show: true,
            tools: {
               download: true,
               selection: true,
               zoom: true,
               zoomin: true,
               zoomout: true,
               pan: true,
               reset: true,
            },
         },
      },
      theme: {
         mode: 'dark',
      },
      colors: ['#3b82f6', '#10b981'],
      stroke: {
         curve: 'smooth',
         width: 3,
      },
      xaxis: {
         categories: monthlyData.categories,
         labels: {
            style: {
               colors: '#9ca3af',
            },
         },
      },
      yaxis: {
         labels: {
            style: {
               colors: '#9ca3af',
            },
         },
      },
      grid: {
         borderColor: '#374151',
         strokeDashArray: 5,
      },
      tooltip: {
         theme: 'dark',
      },
      legend: {
         labels: {
            colors: '#f3f4f6',
         },
      },
   };

   const lineChartSeries = [
      {
         name: 'Sales',
         data: monthlyData.sales,
      },
      {
         name: 'Revenue',
         data: monthlyData.revenue,
      },
   ];

   // Bar Chart Configuration
   const barChartOptions: ApexOptions = {
      chart: {
         type: 'bar',
         height: 350,
         background: 'transparent',
      },
      theme: {
         mode: 'dark',
      },
      colors: ['#8b5cf6', '#f59e0b'],
      plotOptions: {
         bar: {
            horizontal: false,
            columnWidth: '55%',
            borderRadius: 4,
         },
      },
      dataLabels: {
         enabled: false,
      },
      xaxis: {
         categories: monthlyData.categories,
         labels: {
            style: {
               colors: '#9ca3af',
            },
         },
      },
      yaxis: {
         labels: {
            style: {
               colors: '#9ca3af',
            },
         },
      },
      grid: {
         borderColor: '#374151',
      },
      tooltip: {
         theme: 'dark',
      },
      legend: {
         labels: {
            colors: '#f3f4f6',
         },
      },
   };

   const barChartSeries = [
      {
         name: 'Sales',
         data: monthlyData.sales,
      },
      {
         name: 'Revenue',
         data: monthlyData.revenue,
      },
   ];

   // Area Chart Configuration
   const areaChartOptions: ApexOptions = {
      chart: {
         type: 'area',
         height: 350,
         background: 'transparent',
      },
      theme: {
         mode: 'dark',
      },
      colors: ['#06b6d4', '#ec4899'],
      fill: {
         type: 'gradient',
         gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.3,
            stops: [0, 100],
         },
      },
      stroke: {
         curve: 'smooth',
         width: 2,
      },
      xaxis: {
         categories: monthlyData.categories,
         labels: {
            style: {
               colors: '#9ca3af',
            },
         },
      },
      yaxis: {
         labels: {
            style: {
               colors: '#9ca3af',
            },
         },
      },
      grid: {
         borderColor: '#374151',
      },
      tooltip: {
         theme: 'dark',
      },
      legend: {
         labels: {
            colors: '#f3f4f6',
         },
      },
   };

   const areaChartSeries = [
      {
         name: 'Sales',
         data: monthlyData.sales,
      },
      {
         name: 'Revenue',
         data: monthlyData.revenue,
      },
   ];

   // Pie Chart Configuration
   const pieChartOptions: ApexOptions = {
      chart: {
         type: 'pie',
         height: 350,
         background: 'transparent',
      },
      theme: {
         mode: 'dark',
      },
      colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
      labels: ['Desktop', 'Mobile', 'Tablet', 'Other'],
      legend: {
         position: 'bottom',
         labels: {
            colors: '#f3f4f6',
         },
      },
      tooltip: {
         theme: 'dark',
      },
      plotOptions: {
         pie: {
            donut: {
               size: '45%',
            },
         },
      },
   };

   const pieChartSeries = [400, 300, 200, 100];

   // Donut Chart Configuration
   const donutChartOptions: ApexOptions = {
      ...pieChartOptions,
      chart: {
         ...pieChartOptions.chart,
         type: 'donut',
      },
   };

   // Mixed Chart Configuration
   const mixedChartOptions: ApexOptions = {
      chart: {
         type: 'line',
         height: 350,
         background: 'transparent',
      },
      theme: {
         mode: 'dark',
      },
      colors: ['#3b82f6', '#10b981'],
      stroke: {
         width: [0, 4],
      },
      plotOptions: {
         bar: {
            columnWidth: '50%',
         },
      },
      xaxis: {
         categories: monthlyData.categories,
         labels: {
            style: {
               colors: '#9ca3af',
            },
         },
      },
      yaxis: [
         {
            title: {
               text: 'Sales',
               style: {
                  color: '#9ca3af',
               },
            },
            labels: {
               style: {
                  colors: '#9ca3af',
               },
            },
         },
         {
            opposite: true,
            title: {
               text: 'Revenue',
               style: {
                  color: '#9ca3af',
               },
            },
            labels: {
               style: {
                  colors: '#9ca3af',
               },
            },
         },
      ],
      grid: {
         borderColor: '#374151',
      },
      tooltip: {
         theme: 'dark',
      },
      legend: {
         labels: {
            colors: '#f3f4f6',
         },
      },
   };

   const mixedChartSeries = [
      {
         name: 'Sales',
         type: 'column',
         data: monthlyData.sales,
      },
      {
         name: 'Revenue',
         type: 'line',
         data: monthlyData.revenue,
      },
   ];

   // Chart configuration object with proper typing
   const chartConfigs: Record<
      ChartType,
      {
         options: ApexOptions;
         series: ApexOptions['series'];
      }
   > = {
      line: { options: lineChartOptions, series: lineChartSeries },
      bar: { options: barChartOptions, series: barChartSeries },
      area: { options: areaChartOptions, series: areaChartSeries },
      pie: { options: pieChartOptions, series: pieChartSeries },
      donut: { options: donutChartOptions, series: pieChartSeries },
      mixed: { options: mixedChartOptions, series: mixedChartSeries },
   };

   const chartButtons: ChartButton[] = [
      { id: 'line', label: 'Line Chart', icon: '📈' },
      { id: 'bar', label: 'Bar Chart', icon: '📊' },
      { id: 'area', label: 'Area Chart', icon: '📉' },
      { id: 'pie', label: 'Pie Chart', icon: '🥧' },
      { id: 'donut', label: 'Donut Chart', icon: '🍩' },
      { id: 'mixed', label: 'Mixed Chart', icon: '📋' },
   ];

   const statsCards: StatsCard[] = [
      {
         title: 'Total Sales',
         value: monthlyData.sales.reduce((a, b) => a + b, 0).toLocaleString(),
         color: 'text-blue-400',
      },
      {
         title: 'Total Revenue',
         value: `$${monthlyData.revenue
            .reduce((a, b) => a + b, 0)
            .toLocaleString()}`,
         color: 'text-green-400',
      },
      {
         title: 'Average Growth',
         value: '12.5%',
         color: 'text-purple-400',
      },
   ];

   const currentConfig = chartConfigs[activeChart];

   const handleChartChange = (chartType: ChartType): void => {
      setActiveChart(chartType);
   };

   return (
      <div className="min-h-screen bg-gray-900 p-8">
         <div className="max-w-6xl mx-auto">
            <button
               className="flex gap-1 items-center text-blue-700 text-[20px] font-bold mb-6"
               onClick={() => router.back()}
            >
               <BiLeftArrowAlt className="" />
               <h4>Ebuka Francis</h4>
            </button>

            {/* Chart Type Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
               {chartButtons.map((button) => (
                  <button
                     key={button.id}
                     onClick={() => handleChartChange(button.id)}
                     className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                        activeChart === button.id
                           ? 'bg-blue-600 text-white shadow-lg'
                           : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                     }`}
                  >
                     <span>{button.icon}</span>
                     {button.label}
                  </button>
               ))}
            </div>

            {/* Chart Container */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
               <h2 className="text-2xl font-semibold text-white mb-6 capitalize">
                  {activeChart.replace('_', ' ')} Chart
               </h2>

               <div className="w-full">
                  {typeof window !== 'undefined' && (
                     <Chart
                        options={currentConfig.options}
                        series={currentConfig.series}
                        type={currentConfig.options.chart?.type || 'line'}
                        height={350}
                     />
                  )}
               </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
               {statsCards.map((card, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6">
                     <h3 className="text-lg font-medium text-gray-300 mb-2">
                        {card.title}
                     </h3>
                     <p className={`text-3xl font-bold ${card.color}`}>
                        {card.value}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ChartDashboard;
