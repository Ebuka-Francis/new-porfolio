'use client';
import MyProfile from '@/components/my-profile/MyProfile';
import MyArticles from '@/components/arcticles/MyArticles';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className=" p-7 lg:p-5 justify-between flex-col lg:flex-row flex mx-auto max-w-7xl bg-slate-900 h-full"
      >
        <MyProfile />
        <MyArticles />
      </motion.div>
    </AnimatePresence>
  );
}
