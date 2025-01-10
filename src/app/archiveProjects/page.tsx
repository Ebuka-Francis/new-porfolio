'use client';
import React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <div className="">
      <button className="flex gap-1 items-center" onClick={() => router.back()}>
        <BiLeftArrowAlt className="text-white" />
        <h4>Ebuka Francis</h4>
      </button>
    </div>
  );
}
