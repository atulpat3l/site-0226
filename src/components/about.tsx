'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Atul Patel, a software engineer based in India with a passion
          for building modern web applications. I specialize in frontend
          technologies like React, Next.js, and TypeScript, while also having
          strong backend experience with Node.js, NestJs, and MongoDB. I&apos;ve
          worked on exciting projects ranging from content generation platforms
          and drone control systems to e-commerce applications.
        </p>
        <p>
          I&apos;m always looking to learn new technologies and take on
          challenging projects. If you have an opportunity that matches my
          skills and experience, don&apos;t hesitate to reach out!
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
