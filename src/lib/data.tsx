import { Icons } from "@/components/icons";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    image: "/images/project-1.webp",
    title: "SoManyLemons",
    description:
      "An all-in-one content marketing platform that turns ideas into ready-to-publish content across channels, supporting 1,000+ monthly users.",
    technologies: ["React", "TypeScript", "Tailwind", "Content Marketing"],
    links: {
      preview: "https://somanylemons.com",
      github: "",
      githubApi: "",
    },
  },
  {
    image: "/images/project-2.webp",
    title: "Renew Data Processing",
    description:
      "Data Processing and Analytics Backend with user authentication, CSV generation, and automated Excel file creation stored in Azure Data Lake.",
    technologies: ["Node.js", "NestJs", "MongoDB", "Azure Data Lake"],
    links: {
      preview: "",
      github: "",
      githubApi: "",
    },
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    company: "Codemonk, Bengaluru",
    description:
      "Built frontend modules for drone configuration and calibration using React, Redux, and LeafletJs, reducing setup time by 40%. Designed flight path algorithms for autonomous operations with 95% precision. Led e-commerce UI development using NextJs, delivering 2 weeks ahead of schedule.",
    period: "Jul 2022 - Jan 2025",
    technologies: ["React", "Redux", "LeafletJs", "Next.js", "Tailwind"],
  },
  {
    title: "Software Engineer",
    company: "Sonde Solutions, Bengaluru",
    description:
      "Architected content generation platform for social media serving 500+ daily users. Engineered audio-to-visual content pipeline reducing creation time by 70%. Designed specialized chatbot for training managers deployed across 3 enterprise clients.",
    period: "Feb 2025 - Present",
    technologies: ["React", "TypeScript", "OpenAI API", "Eleven Labs"],
  },
] as const;

export const skillsData = [
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nodejs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.mongodb className="size-12" /> },
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.git className="size-12" /> },
] as const;
