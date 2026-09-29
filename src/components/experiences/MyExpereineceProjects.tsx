import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { FaRegArrowAltCircleDown } from 'react-icons/fa';

interface MyJobs {
   title: string;
   year: string | number;
   date: number;
   about: string;
   links: string;
   technologies: {
      language: string;
      otherLanguages?: string;
      frameWork: string;
      techie?: string;
   };
}

const MYJOB: MyJobs[] = [
    {
      title: 'Fullstack Developer',
      year: 2026,
      date: 2025,
      about: 'Prince Paul Gadgets is an e-commerce platform for purchasing authentic smartphones, laptops, gaming devices, accessories and other tech gadgets, with delivery available nationwide in Nigeria.',
      links: 'https://www.princepaulgadgets.com/',
      technologies: {
         language: 'JavaScript',
         otherLanguages: 'TypeScript',
         frameWork: 'React',
         techie: 'Firebase, Rest APIs',
      },
   },
   {
      title: 'Senior Frontend Developer',
      year: 2026,
      date: 2024,
      about: 'Snookerz is more than a website—it’s infrastructure for cue sports. The platform organizes players, tournaments, and rankings into one ecosystem, giving grassroots talent the visibility and structure needed to grow and compete at higher levels.',
      links: 'https://snookerz.com/',
      technologies: {
         language: 'JavaScript',
         otherLanguages: 'TypeScript',
         frameWork: 'React',
         techie: 'Firebase, Rest APIs',
      },
   },
   {
      title: 'Web Developer',
      year: 'mid-2026',
      date: 2025,
      about: 'Loteraa is a Web3 infrastructure platform that connects real-world data with blockchain networks, enabling devices and applications to interact through secure, automated smart contracts.',
      links: 'https://loteraa.xyz/',
      technologies: {
         language: 'JavaScript',
         otherLanguages: 'TypeScript',
         frameWork: 'React',
         techie: 'supabase, Rest APIs',
      },
   },
   {
      title: 'Junior Frontend Developer',
      year: 2025,
      date: 2024,
      about: 'Build and maintain critical components used to construct Snookerz, Snookerz dashboard frontend across the whole competitions and challenges. Work with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
      links: 'https://admin.snookerz.com/dashboard',
      technologies: {
         language: 'JavaScript',
         otherLanguages: 'TypeScript',
         frameWork: 'React',
         techie: 'Firebase, Rest APIs',
      },
   },
   {
      title: 'Intern Frontend Development',
      year: 2023,
      date: 2024,
      about: 'Build a basic websit well interactive for a transport company called coolride though it has not gone live now but it will soon be live the app also exists in playstore the website was simple and basic desgin by me when i was an intern',
      links: 'https://coolride.com',
      technologies: {
         language: 'Javascript',
         otherLanguages: '',
         frameWork: 'React',
         techie: 'Rest ApIs',
      },
   },
   {
      title: 'Beginner Web Design Projects',
      year: 2022,
      date: 2023,
      about: 'Cloned a netflix website and other websites like apples, clownfunds,lundry man, calculator, interior etc it was a great experience for me doing what i love then and doing it to the best of my knowledge well.',
      links: 'https://ebuka-commerce-app.vercel.app/',
      technologies: {
         language: 'HTML',
         otherLanguages: 'CSS',
         frameWork: '',
         techie: '',
      },
   },
];

export default function MyExperienceProjects() {
   return (
      <section className="group/list flex flex-col gap-4 p-2">
         <h4 className="sticky top-0 bg-slate-900 text-slate-400 leading-normal font-semibold text-[20px]">
            Experience
         </h4>

         {MYJOB.map((item, idx) => (
            <a
               href={item.links}
               key={idx}
               target="_blank"
               rel="noopener noreferrer"
               className="group/item relative flex flex-col sm:flex-row gap-5 items-start rounded-xl p-4
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:bg-slate-800/60 hover:shadow-xl hover:shadow-black/30
                  lg:group-hover/list:opacity-50 lg:hover:!opacity-100
                  motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
               {/* Accent bar that grows in on hover */}
               <span className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-[#4EC2C4] origin-center scale-y-0 transition-transform duration-300 group-hover/item:scale-y-100" />

               <div className="flex items-center gap-2">
                  <h5 className="text-slate-400 font-semibold leading-normal max-w-xs transition-colors duration-300 group-hover/item:text-slate-200">
                     {item.date}
                  </h5>
                  <span className="h-px w-9 bg-slate-600 transition-all duration-300 group-hover/item:w-16 group-hover/item:bg-[#4EC2C4]" />
                  <h5 className="text-slate-400 font-semibold leading-normal max-w-xs transition-colors duration-300 group-hover/item:text-slate-200">
                     {item.year}
                  </h5>
               </div>

               <div className="flex flex-col gap-[10px]">
                  <span className="flex items-center gap-3">
                     <h3 className="text-lg font-semibold tracking-tight text-slate-200 sm:text-xl transition-colors duration-300 group-hover/item:text-[#4EC2C4]">
                        {item.title}
                     </h3>
                     <FaExternalLinkAlt className="text-white text-[15px] transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:-translate-y-1 group-hover/item:text-[#4EC2C4]" />
                  </span>

                  <p className="text-slate-400 text-[16px] font-medium leading-normal">
                     {item.about}
                  </p>

                  <div className="flex gap-3 flex-wrap">
                     {[
                        item.technologies.language,
                        item.technologies.otherLanguages,
                        item.technologies.frameWork,
                        item.technologies.techie,
                     ]
                        .filter(Boolean)
                        .map((tech) => (
                           <span
                              key={tech}
                              className="p-2 text-[10px] rounded-[15px] bg-blue-800 transition-all duration-300 group-hover/item:bg-[#4EC2C4]/20 group-hover/item:text-[#4EC2C4] group-hover/item:ring-1 group-hover/item:ring-[#4EC2C4]/40"
                           >
                              {tech}
                           </span>
                        ))}
                  </div>
               </div>
            </a>
         ))}

         <div className="size-10 animate-bounce fixed bottom-2 right-10">
            <FaRegArrowAltCircleDown className="text-[25px] text-blue-800" />
         </div>
      </section>
   );
}
