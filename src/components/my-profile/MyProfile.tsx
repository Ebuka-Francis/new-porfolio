'use client';
import React, { useState, useEffect } from 'react';
import MySections from '../sections/MySections';
import MySocials from '../socials/MySocials';
import { BiRightArrowAlt } from 'react-icons/bi';
import Link from 'next/link';

export default function MyProfile() {
   const text = 'FRONT END DEVELOPER';
   const [displayedText, setDisplayedText] = useState('');
   const [index, setIndex] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false);

   useEffect(() => {
      const interval = setInterval(() => {
         setDisplayedText((prev) => {
            if (!isDeleting) {
               // Typing effect
               if (index < text.length) {
                  setIndex((prev) => prev + 1);
                  return text.slice(0, index + 1);
               } else {
                  setIsDeleting(true); // Start deleting after typing is complete
               }
            } else {
               // Deleting effect
               if (index > 0) {
                  setIndex((prev) => prev - 1);
                  return text.slice(0, index - 1);
               } else {
                  setIsDeleting(false);
               }
            }
            return prev;
         });
      }, 100);

      return () => clearInterval(interval);
   }, [index, isDeleting]);

   return (
      <div className=" mt-[30px] lg:mt-0 static lg:sticky lg:w-[48%] lg:top-0 lg:py-24 h-auto lg:h-[100vh]  flex flex-col justify-between">
         <div>
            <div>
               <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl ">
                  Ebuka Francis
               </h1>
               <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-200 sm:text-xl ">
                  {displayedText}
                  <span className="animate-bounce">|</span>
               </h2>
               <p className=" text-slate-400 font-semibold leading-normal max-w-xs mt-4">
                  I Build accessible, pixel-perfect digital experience for web{' '}
               </p>
               <div
                  className="relative flex items-center text-[14px] font-semibold text-gray-600 transition-all duration-300 
hover:text-blue-600 before:absolute before:-bottom-1 before:left-0 before:w-0 
before:h-1 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-[50%] mt-3"
               >
                  <Link
                     className="font-semibold flex items-center gap-3 mb-2"
                     href="/charts"
                  >
                     View My Chart Page
                  </Link>

                  <BiRightArrowAlt className="text-[14px] font-semibold flex items-center gap-3 mb-2 " />
               </div>
            </div>
            <MySections />
         </div>
         <MySocials />s
      </div>
   );
}
