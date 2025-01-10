import Link from 'next/link';
import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

export default function MyLinks() {
  return (
    <div className="flex max-w-[35%] gap-1 items-center hover:border-b border-[#4EC2C4]">
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
