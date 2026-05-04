import careerCoaching from '../assets/career-coaching-website.PNG';
import shoeRetail from '../assets/shoe_retail.PNG';
import firstRubber from '../assets/first-rubber.PNG';
import beanCo from '../assets/BeanCo.PNG';
import logistics from '../assets/logistics_erp.PNG';

export const projects = [
  {
    title: 'Career Coaching Website',
    description:
      'Oracle Career Coaching Program helps IT professionals, students, and career changers build stronger skills in networking and databases. It offers guidance, coaching, and learning sessions to improve technical knowledge, prepare for certifications, and support career growth.',
    image: careerCoaching,
    imageAlt: 'Career coaching website landing page screenshot',
    tools: ['React', 'HTML', 'CSS', 'TailwindCSS', 'Vercel', 'API', 'Git'],
    link: 'https://oracle-career-coaching.vercel.app/',
    github: 'https://github.com/kaungkhantnaynay/Oracle-Career-Coaching-Program',
  },
  {
    title: 'E-Commerce Website',
    description:
      'All of Us Are Smart is an e-commerce shoe website designed to give customers a smooth shopping experience. It features a modern design, product browsing, and a simple checkout process, with room for future features like filters, reviews, and secure payments.',
    image: shoeRetail,
    imageAlt: 'Shoe e-commerce website product page screenshot',
    tools: ['React', 'JavaScript', 'CSS3', 'Redux', 'TailwindCSS', 'Authentication', 'Firebase', 'API'],
    link: 'https://all-of-us-are-smart.vercel.app/',
    github: 'https://github.com/kaungkhantnaynay/AllOfUsAreSmart',
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
    title: 'Logistics ERP Project',
    description:
      'A full-stack logistics ERP web application designed to manage orders, inventory, shipments, and operational workflows. Built with role-based access, real-time updates, and a scalable architecture to support real-world logistics operations.',
    image: logistics,
    imageAlt: 'Logistics ERP dashboard screenshot',
    tools: ['Next.js', 'TypeScript', 'TailwindCSS', 'Recharts', 'Node.js', 'MySQL', 'RESTful APIs'],
    link: 'https://logistics-erp-project.vercel.app/',
    github: 'https://github.com/kaungkhantnaynay/Logistics-ERP-Project',
  },
];
