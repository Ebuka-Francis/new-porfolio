'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
];

export default function MySections() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px', // Adjust margin to trigger active state more naturally
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ul className="hidden lg:block w-max mt-16">
      {navItems.map(({ id, label }) => (
        <NavItem
          key={id}
          sectionId={id}
          label={label}
          isActive={activeSection === id}
        />
      ))}
    </ul>
  );
}

interface NavItemProps {
  sectionId: string;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ sectionId, label, isActive }) => {
  return (
    <li>
      <a className="group flex items-center py-3" href={`#${sectionId}`}>
        <motion.span
          animate={{ width: isActive ? '3rem' : '1rem' }} // using rem or px for consistent numeric width, or stick to % if parent is constrained.
          initial={{ width: '1rem' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`nav-indicator mr-4 h-px transition-all ${
            isActive ? 'bg-slate-200' : 'bg-slate-600'
          }`}
          style={{ width: isActive ? '50px' : '20px' }} // Fallback if motion fails or conflicts, but motion animate should handle it
        />
        <span
          className={`nav-text text-xs font-bold uppercase tracking-widest ${
            isActive ? 'text-slate-200' : 'text-slate-500'
          } group-hover:text-slate-200 transition-colors`}
        >
          {label}
        </span>
      </a>
    </li>
  );
};
