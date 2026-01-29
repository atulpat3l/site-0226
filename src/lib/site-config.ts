import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Atul Patel | Software Engineer',
  description:
    "Hello, I'm Atul Patel. I am a software engineer based in India, specializing in building modern web applications using React, Next.js, TypeScript, and Node.js.",
  keywords: [
    'Atul Patel',
    'Software Engineer',
    'Full-stack developer',
    'India',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'NestJs',
    'MongoDB',
    'Web development',
    'Frontend',
    'Backend',
    'Tailwind CSS',
    'JavaScript',
    'Portfolio',
    'Projects',
    'Web applications',
    'Developer',
    'Programming',
  ],
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
