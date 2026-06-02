import careerCoaching from '../assets/NCCP.png';
import shoeRetail from '../assets/shoe_retail.PNG';
import firstRubber from '../assets/first-rubber.PNG';
import beanCo from '../assets/BeanCo.PNG';
import logistics from '../assets/logistics_erp.PNG';
import HealingClub from '../assets/Healing-Club-mm.png'

export const projects = [
  {
    title: 'Network Career Coaching Program',
    description:
      'NCCP Career Coaching Program helps IT professionals, students, and career changers build stronger skills in networking and IT support. It offers guidance, coaching, and learning sessions to improve technical knowledge, prepare for certifications, and support career growth.',
    image: careerCoaching,
    imageAlt: 'Career coaching website landing page screenshot',
    tools: ['React', 'HTML', 'CSS', 'GSAP', 'Canvas API', 'TailwindCSS', 'Git'],
    link: 'https://network-ccp.vercel.app/',
    github: 'https://github.com/kaungkhantnaynay/Network-CCP',
  },
  {
    title: 'Healing Club Myanmar',
    description:
      'Healing Club Myanmar is a holistic wellness and spiritual guidance platform offering tarot-based insight, emotional support, and self-reflection tools for people seeking clarity in their personal lives. The project is designed to create a calm, trustworthy online experience where visitors can explore healing-focused services, connect with guidance, and receive supportive messages through a simple digital flow.',
    image: HealingClub,
    imageAlt: 'Healing Club Myanmar-Service website',
    tools: ['React', 'Next.js', 'TypeScript', 'shadcn/ui', 'TailwindCSS', 'GSAP', 'Zod', 'Upstash Redis', 'Next API', 'Resend', 'Cloudinary', 'Jest'],
    link: 'https://www.healingclubmyanmar.org/',
    github: 'private',
  },
  {
    title: 'BeanCo Mini E-commerce',
    description:
      'BeanCo is a self-developed e-commerce frontend project that showcases modern, responsive, and interactive web application skills. It presents a minimal coffee bean store where users can explore products, view details, and browse an organized shopping interface.',
    image: beanCo,
    imageAlt: 'BeanCo coffee e-commerce website screenshot',
    tools: ['React', 'JavaScript', 'Next.js', 'TypeScript', 'CSS', 'Tailwind', 'Zustand'],
    link: 'https://beanco-mini-e-commerce.vercel.app/',
    github: 'https://github.com/kaungkhantnaynay/beanco-mini-e-commerce',
  },
  {
    title: 'First Rubber Corporate Website',
    description:
      'First Rubber is a company website showcasing rubber products and solutions. It features product catalogs, technical specifications, and application information with a focus on clear presentation, easy navigation, and customer contact options.',
    image: firstRubber,
    imageAlt: 'First Rubber corporate website screenshot',
    tools: ['WordPress', 'API', 'PHP', 'Elementor', 'Custom CSS'],
    link: 'http://test.firstrubber.com/',
  },
  {
    title: 'Best Step ERP Project',
    description:
      'A full-stack logistics ERP web application designed to manage orders, inventory, shipments, warehouse and operational workflows. Built with role-based access, real-time updates, and a scalable architecture to support real-world logistics operations.',
    image: logistics,
    imageAlt: 'Logistics ERP dashboard screenshot',
    tools: ['Next.js', 'TypeScript', 'TailwindCSS', 'ShadCN UI', 'Node.js', 'PostgreSQL', 'RESTful APIs', 'JWT', 'RBAC', 'Docker'],
    link: 'https://logistics-erp-project.vercel.app/',
    github: 'https://github.com/kaungkhantnaynay/Logistics-ERP-Project',
  },
];
