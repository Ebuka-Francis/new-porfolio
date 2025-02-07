import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
// import { FaFacebook } from 'react-icons/fa';
// import { FaSquareInstagram } from 'react-icons/fa6';
import { FaWhatsappSquare } from 'react-icons/fa';

export default function MySocials() {
  return (
    <ul className="ml-1 gap-5 mt-8 flex items-center">
      <li className="shrink-0 text-xs">
        <a href="https://github.com/Ebuka-Francis" target="_blank">
          {' '}
          <FaGithub className="text-[25px] lg:text-[30px]text-[#94A3B8] " />{' '}
        </a>
      </li>
      <li className="shrink-0 text-xs">
        <a
          href="https://www.linkedin.com/in/ebuka-francis-3a3690272/"
          target="_blank"
        >
          {' '}
          <FaLinkedin className="text-[25px] lg:text-[30px] text-[#94A3B8] " />{' '}
        </a>
      </li>
      {/* <li className="shrink-0 text-xs">
        <a href="">
          {' '}
          <FaFacebook className="text-[25px] lg:text-[30px] text-[#94A3B8] " />{' '}
        </a>
      </li>
      <li className="shrink-0 text-xs">
        <a href="">
          {' '}
          <FaSquareInstagram className="text-[25px] lg:text-[30px] text-[#94A3B8] " />{' '}
        </a>
      </li> */}
      <li className="shrink-0 text-xs">
        <a href="https://wa.me/+2348133842387" target="_blank">
          {' '}
          <FaWhatsappSquare className=" text-[25px] lg:text-[30px] text-[#94A3B8] " />{' '}
        </a>
      </li>
    </ul>
  );
}
