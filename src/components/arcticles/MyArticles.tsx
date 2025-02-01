import React from 'react';
import MyAbouts from '../abouts/MyAbouts';
import MyProjects from '../projects/MyProjects';
import MyLinks from '../utilities/MyLinks';
import MyExperience from '../experiences/MyExperience';

export default function MyArticles() {
  return (
    <div className=" flex flex-col gap-16 lg:py-24 pt-24 max-w-[100%] lg:max-w-[50%]">
      <MyAbouts />
      <MyProjects />
      <MyLinks />
      <MyExperience />
    </div>
  );
}
