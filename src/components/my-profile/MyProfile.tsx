'use client';
import React, { useState, useEffect } from 'react';
import MySections from '../sections/MySections';
import MySocials from '../socials/MySocials';

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
        </div>
        <MySections />
      </div>
      <MySocials />
    </div>
  );
}
