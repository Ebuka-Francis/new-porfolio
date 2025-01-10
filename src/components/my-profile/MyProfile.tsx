import React from 'react';
import MySections from '../sections/MySections';
import MySocials from '../socials/MySocials';

export default function MyProfile() {
  return (
    <div className="lg:sticky lg:w-[48%] lg:top-0 lg:py-24 h-[100vh]  flex flex-col justify-between">
      <div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl ">
            Ebuka Francis
          </h1>
          <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-200 sm:text-xl ">
            Front End Developer
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
