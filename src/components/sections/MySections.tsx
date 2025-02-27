// 'use client';

// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const navItems = [
//   { id: 'about', label: 'About' },
//   { id: 'experience', label: 'Projects' },
//   { id: 'project', label: 'Experience' },
// ];

// export default function MySections() {
//   return (
//     <ul className="hidden lg:block w-max mt-16">
//       {navItems.map(({ id, label }) => (
//         <NavItem key={id} sectionId={id} label={label} />
//       ))}
//     </ul>
//   );
// }

// const NavItem = ({
//   sectionId,
//   label,
// }: {
//   sectionId: string;
//   label: string;
// }) => {
//   const controls = useAnimation();
//   const { ref, inView } = useInView({ threshold: 0.9 });

//   useEffect(() => {
//     controls.start({ width: inView ? '100%' : '0%' });
//   }, [inView, controls]);

//   return (
//     <li ref={ref}>
//       <a className="flex items-center py-3" href={`#${sectionId}`}>
//         <motion.span
//           animate={controls}
//           initial={{ width: '0%' }}
//           className="nav-indicator mr-4 h-px bg-slate-600 transition-all"
//         />
//         <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
//           {label}
//         </span>
//       </a>
//     </li>
//   );
// };

'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Projects' },
  { id: 'project', label: 'Experience' },
];

export default function MySections() {
  const { scrollYProgress } = useScroll(); // Tracks scroll progress

  return (
    <ul className="hidden lg:block w-max mt-16">
      {navItems.map(({ id, label }, index) => (
        <NavItem
          key={id}
          sectionId={id}
          label={label}
          index={index}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </ul>
  );
}

interface NavItemProps {
  sectionId: string;
  label: string;
  index: number;
  scrollYProgress: import('framer-motion').MotionValue<number>;
}

const NavItem: React.FC<NavItemProps> = ({
  sectionId,
  label,
  index,
  scrollYProgress,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    controls.start({ width: inView ? '100%' : '0%' });
  }, [inView, controls]);

  // 🔹 Correcting the `.to()` error with `useTransform`
  const widthTransform = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <li ref={ref}>
      <a className="flex items-center py-3" href={`#${sectionId}`}>
        <motion.span
          animate={controls}
          initial={{ width: '0%' }}
          className="nav-indicator mr-4 h-px bg-slate-600 transition-all"
          style={{
            width:
              index === 0
                ? widthTransform // First item scales with scroll
                : index === navItems.length - 1
                ? // eslint-disable-next-line react-hooks/rules-of-hooks
                  useTransform(scrollYProgress, [0, 1], ['100%', '20%']) // Last item scales in reverse
                : inView
                ? '100%'
                : '20%', // Middle items expand when in view
          }}
        />
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
          {label}
        </span>
      </a>
    </li>
  );
};
