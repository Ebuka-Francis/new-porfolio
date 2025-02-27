import Link from 'next/link';
import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

export default function MyLinks() {
  return (
    <div
      className="relative flex items-center text-lg font-semibold text-gray-600 transition-all duration-300 
hover:text-blue-600 before:absolute before:-bottom-1 before:left-0 before:w-0 
before:h-1 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-[50%]"
    >
      <Link
        className="font-semibold flex items-center gap-3 mb-2"
        href="/archiveProjects"
      >
        View Full Project Archive
      </Link>

      <BiRightArrowAlt className="text-[20px] font-semibold flex items-center gap-3 mb-2 " />
    </div>
  );
}
