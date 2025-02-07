'use client';
import React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import ArchiveProjects from '@/components/archiveProjects/ArchiveProjects';

export default function Page() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl mt-9 flex flex-col gap-8 ">
      <button
        className="flex gap-1 items-center text-blue-700 text-[20px] font-bold"
        onClick={() => router.back()}
      >
        <BiLeftArrowAlt className="" />
        <h4>Ebuka Francis</h4>
      </button>
      <ArchiveProjects />
    </div>
  );
}
