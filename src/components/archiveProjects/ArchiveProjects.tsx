import React from 'react';
import { AllProjectDatas } from '@/datas/projectDatas';

export default function ArchiveProjects() {
   return (
      <div className="container mx-auto px-4 py-8">
         <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
               Archive Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
               Explore our collection of completed and archived projects
            </p>
         </div>

         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {AllProjectDatas.map((project) => (
               <a
                  href={project.link}
                  key={project.title}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-slate-800 hover:to-slate-700"
               >
                  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[120px]">
                     <div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                           {project.title}
                        </h3>
                        {project.description && (
                           <p className="text-sm text-gray-300 line-clamp-2">
                              {project.description}
                           </p>
                        )}
                     </div>

                     <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
                        {project.technology && (
                           <span className="text-xs px-2 py-1 bg-blue-600 text-white rounded-full">
                              {project.technology}
                           </span>
                        )}
                        {project.year && (
                           <span className="text-xs text-gray-400">
                              {project.year}
                           </span>
                        )}
                     </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                     </svg>
                  </div>
               </a>
            ))}
         </div>

         {AllProjectDatas.length === 0 && (
            <div className="text-center py-12">
               <div className="w-24 h-24 mx-auto mb-4 text-gray-400">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                     />
                  </svg>
               </div>
               <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No archived projects yet
               </h3>
               <p className="text-gray-600 dark:text-gray-400">
                  Projects will appear here once they are archived.
               </p>
            </div>
         )}
      </div>
   );
}
