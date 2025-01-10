/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectDatas } from '@/datas/projectDatas';

export default function MyProjects() {
  return (
    <div className="flex flex-col gap-6 ">
      {ProjectDatas.map((project, index) => (
        <div
          className="group flex gap-6 p-4  hover:bg-slate-800 hover:text-[#4EC2C4] cursor-pointer rounded-md "
          key={index}
        >
          <img className="w-[30%]" src={project.imgUrl} alt={project.title} />
          <div>
            <a
              className="font-semibold flex hover:text-[#4EC2C4] items-center gap-3 mb-2 "
              href={project.link}
              target="_blank"
            >
              <span>{project.title}</span>
              <FaExternalLinkAlt className="text-white text-[15px] hover:text-[#4EC2C4]  " />
            </a>
            <p className="text-slate-400 text-[10px] font-semibold leading-normal">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
