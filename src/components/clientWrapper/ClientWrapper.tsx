'use client';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClientWrapper({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <AnimatePresence mode="wait">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="p-7 lg:p-5 justify-between flex-col lg:flex-row flex mx-auto max-w-7xl bg-slate-900 h-full"
         >
            {children}
         </motion.div>
      </AnimatePresence>
   );
}
