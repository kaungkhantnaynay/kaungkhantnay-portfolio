import { FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import {
  SiDocker,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

export const techStackIcons = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React.js', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Redux', icon: SiRedux },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Python', icon: FaPython },
  { name: 'Docker', icon: SiDocker },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Vercel', icon: SiVercel },
];

export const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Redux', 'Redux Toolkit', 'MUI', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQL', 'PostgreSQL', 'Firebase', 'Relational Database Design', 'NoSQL Database Design'],
  },
  {
    title: 'Data & BI',
    skills: ['SQL', 'Power BI', 'Python', 'Data Cleaning', 'Reporting Automation'],
  },
  {
    title: 'DevOps & Deployment',
    skills: ['Git', 'GitHub', 'CI/CD', 'Docker', 'Vercel Deployment'],
  },
];
