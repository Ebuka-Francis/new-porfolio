import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

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
    title: 'Junior Frontend Developer',
    year: 'Pres',
    date: 2024,
    about:
      'Build and maintain critical components used to construct Snookerz, Snookerz dashboard frontend across the whole competitions and challenges. Work with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
    links: '',
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
    about:
      'Build a basic websit well interactive for a transport company called coolride though it has not gone live now but it will soon be live the app also exists in playstore the website was simple and basic desgin by me when i was an intern',
    links: '',
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
    about:
      'Cloned a netflix website and other websites like apples, clownfunds,lundry man, calculator, interior etc it was a great experience for me doing what i love then and doing it to the best of my knowledge well.',
    links: '',
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
    <section className="flex flex-col gap-[2rem] p-2 ">
      <h4 className=" sticky top-0 bg-slate-900 text-slate-400 leading-normal font-semibold text-[20px] block lg:hidden">
        Experience
      </h4>
      {MYJOB.map((item, idx) => (
        <div
          key={idx}
          className=" flex-col sm:flex-row  flex gap-5 items-start"
        >
          <div className="flex items-center gap-2">
            <h5 className="text-slate-400 font-semibold leading-normal max-w-xs">
              {item.date}
            </h5>
            <span className="nav-indicator h-px w-9 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <h5 className="text-slate-400 font-semibold leading-normal max-w-xs">
              {item.year}
            </h5>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="flex items-center gap-3">
              <h3 className="text-lg font-semibold tracking-tight text-slate-200 sm:text-xl">
                {item.title}
              </h3>
              <FaExternalLinkAlt className="text-white text-[15px] hover:text-[#4EC2C4]" />
            </span>
            <p className="text-slate-400 text-[16px] font-medium leading-normal">
              {item.about}
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="p-2 text-[10px] rounded-[15px] bg-slate-700">
                {item.technologies.language}
              </span>
              <span
                className={`p-2 text-[10px] rounded-[15px] bg-slate-700 ${
                  item.technologies.otherLanguages ? 'block' : 'hidden'
                } `}
              >
                {item.technologies.otherLanguages
                  ? item.technologies.otherLanguages
                  : null}
              </span>
              <span
                className={`p-2 text-[10px] rounded-[15px] bg-slate-700 ${
                  item.technologies.frameWork ? 'block' : 'hidden'
                } `}
              >
                {item.technologies.frameWork}
              </span>
              <span
                className={`p-2 text-[10px] rounded-[15px] bg-slate-700 ${
                  item.technologies.techie ? 'block' : 'hidden'
                } `}
              >
                {item.technologies.techie}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
