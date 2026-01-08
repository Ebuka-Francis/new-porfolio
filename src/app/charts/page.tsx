'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { motion } from 'framer-motion';
import {
   monthlyData,
   chartButtons,
   getStatsCards,
   ChartType,
} from '@/datas/chartData';

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

// Animation Variants
const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         straggerChildren: 0.1,
         delayChildren: 0.2, // Check if this should be staggerChildren
      },
   },
};

const itemVariants = {
   hidden: { y: 20, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
   },
};

const ChartDashboard = () => {
   const [activeChart, setActiveChart] = useState<ChartType>('line');
   const router = useRouter();
   const statsCards = getStatsCards(monthlyData);

   // --- Chart Configurations (Moved logic here to keep component readable, or could also move to data file if static) ---

   // Common Theme Settings
   const commonOptions: Partial<ApexOptions> = {
      chart: { background: 'transparent', toolbar: { show: true } },
      theme: { mode: 'dark' },
      grid: { borderColor: '#374151' },
      tooltip: { theme: 'dark' },
      legend: { labels: { colors: '#f3f4f6' } },
      xaxis: {
         categories: monthlyData.categories,
         labels: { style: { colors: '#9ca3af' } },
      },
      yaxis: { labels: { style: { colors: '#9ca3af' } } },
   };

   // Specific Options
   const lineChartOptions: ApexOptions = {
      ...commonOptions,
      chart: { ...commonOptions.chart, type: 'line' },
      stroke: { curve: 'smooth', width: 3 },
      colors: ['#3b82f6', '#10b981'],
   };

   const barChartOptions: ApexOptions = {
      ...commonOptions,
      chart: { ...commonOptions.chart, type: 'bar' },
      colors: ['#8b5cf6', '#f59e0b'],
      plotOptions: { bar: { borderRadius: 4, columnWidth: '55%' } },
   };

   const areaChartOptions: ApexOptions = {
      ...commonOptions,
      chart: { ...commonOptions.chart, type: 'area' },
      colors: ['#06b6d4', '#ec4899'],
      fill: {
         type: 'gradient',
         gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.3 },
      },
      stroke: { curve: 'smooth', width: 2 },
   };

   const pieChartOptions: ApexOptions = {
      ...commonOptions,
      chart: { ...commonOptions.chart, type: 'pie' },
      colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
      labels: ['Desktop', 'Mobile', 'Tablet', 'Other'],
   };

   const donutChartOptions: ApexOptions = {
      ...pieChartOptions,
      chart: { ...pieChartOptions.chart, type: 'donut' },
   };

   const mixedChartOptions: ApexOptions = {
      ...commonOptions,
      chart: { ...commonOptions.chart, type: 'line' },
      stroke: { width: [0, 4] },
      colors: ['#3b82f6', '#10b981'],
      yaxis: [
         {
            title: { text: 'Sales', style: { color: '#9ca3af' } },
            labels: { style: { colors: '#9ca3af' } },
         },
         {
            opposite: true,
            title: { text: 'Revenue', style: { color: '#9ca3af' } },
            labels: { style: { colors: '#9ca3af' } },
         },
      ],
   };

   const chartConfigs: Record<
      ChartType,
      { options: ApexOptions; series: ApexOptions['series'] }
   > = {
      line: {
         options: lineChartOptions,
         series: [
            { name: 'Sales', data: monthlyData.sales },
            { name: 'Revenue', data: monthlyData.revenue },
         ],
      },
      bar: {
         options: barChartOptions,
         series: [
            { name: 'Sales', data: monthlyData.sales },
            { name: 'Revenue', data: monthlyData.revenue },
         ],
      },
      area: {
         options: areaChartOptions,
         series: [
            { name: 'Sales', data: monthlyData.sales },
            { name: 'Revenue', data: monthlyData.revenue },
         ],
      },
      pie: { options: pieChartOptions, series: [400, 300, 200, 100] },
      donut: { options: donutChartOptions, series: [400, 300, 200, 100] },
      mixed: {
         options: mixedChartOptions,
         series: [
            { name: 'Sales', type: 'column', data: monthlyData.sales },
            { name: 'Revenue', type: 'line', data: monthlyData.revenue },
         ],
      },
   };

   const currentConfig = chartConfigs[activeChart];

   return (
      <div className="min-h-screen bg-gray-900 p-8">
         <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
               visible: {
                  transition: { staggerChildren: 0.1 },
               },
            }}
         >
            <motion.button
               variants={itemVariants}
               className="flex gap-1 items-center text-blue-700 text-[20px] font-bold mb-6 hover:text-blue-500 transition-colors"
               onClick={() => router.back()}
            >
               <BiLeftArrowAlt className="" />
               <h4>Ebuka Francis</h4>
            </motion.button>

            {/* Chart Type Buttons */}
            <motion.div
               variants={itemVariants}
               className="flex flex-wrap justify-center gap-4 mb-8"
            >
               {chartButtons.map((button) => (
                  <button
                     key={button.id}
                     onClick={() => setActiveChart(button.id)}
                     className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                        activeChart === button.id
                           ? 'bg-blue-600 text-white shadow-lg scale-105'
                           : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105'
                     }`}
                  >
                     <span>{button.icon}</span>
                     {button.label}
                  </button>
               ))}
            </motion.div>

            {/* Chart Container */}
            <motion.div
               variants={itemVariants}
               className="bg-gray-800 rounded-xl p-6 shadow-2xl"
               initial={{ scale: 0.95, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.5 }}
            >
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
            </motion.div>

            {/* Stats Cards */}
            <motion.div
               variants={itemVariants}
               className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            >
               {statsCards.map((card, index) => (
                  <motion.div
                     key={index}
                     variants={itemVariants}
                     className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
                  >
                     <h3 className="text-lg font-medium text-gray-300 mb-2">
                        {card.title}
                     </h3>
                     <p className={`text-3xl font-bold ${card.color}`}>
                        {card.value}
                     </p>
                  </motion.div>
               ))}
            </motion.div>
         </motion.div>
      </div>
   );
};

export default ChartDashboard;
