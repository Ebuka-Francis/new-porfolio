import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaWhatsappSquare } from 'react-icons/fa';

export default function MySocials() {
  return (
    <ul className="ml-1 gap-5 mt-8 flex items-center">
      <li className="shrink-0 text-xs">
        <a href="">
          {' '}
          <FaGithub className="text-[30px] text-[#94A3B8] " />{' '}
        </a>
      </li>
      <li className="shrink-0 text-xs">
        <a href="">
          {' '}
          <FaLinkedin className="text-[30px] text-[#94A3B8] " />{' '}
        </a>
      </li>
      <li className="shrink-0 text-xs">
        <a href="">
          {' '}
          <FaFacebook className="text-[30px] text-[#94A3B8] " />{' '}
        </a>
      </li>
      <li className="shrink-0 text-xs">
        <a href="">
          {' '}
          <FaSquareInstagram className="text-[30px] text-[#94A3B8] " />{' '}
        </a>
      </li>
      <li className="shrink-0 text-xs">
        <a href="">
          {' '}
          <FaWhatsappSquare className="text-[30px] text-[#94A3B8] " />{' '}
        </a>
      </li>
    </ul>
  );
}
