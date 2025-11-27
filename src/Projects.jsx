import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import career_coaching from './assets/career-coaching-website.PNG'
import shoe_retail from './assets/all-of-us-are-smart-website.PNG'
import first_rubber from './assets/first-rubber.PNG'
import Bean_Co from './assets/BeanCo.PNG'

export default function Projects() {
  const projects = [
    {
    title: "Career Coaching Website",
    description:
        "Oracle Career Coaching Program is a platform that helps IT professionals, students, and career changers build strong ski ls in networking and databases. It offers guidance, coaching, and learning sessions to improve technical knowledge, prepare for certifications, and support career growth.",
    image: career_coaching,
    tools: ["React", "HTML", "CSS", "TailwindCSS", "Vercel", "API", "Git"],
    link: "https://oracle-career-coaching.vercel.app/",
    github: "https://github.com/kaungkhantnaynay/Oracle-Career-Coaching-Program",
    },
    {
    title: "E-Commerce Website",
    description:
        "All of Us Are Smart is an e-commerce shoe website designed to give customers a smooth and easy shopping experience. It features a modern design, product browsing, and a simple checkout process. The site is responsive, user-friendly, and built to support future features like product filters, reviews, and secure payments.",
    image: shoe_retail,
    tools: ["React", "JavaScript", "CSS3", "Redux", "TailwindCSS", "Authentication", "Firebase", "API"],
    link: "https://all-of-us-are-smart.web.app/",
    github: "https://github.com/kaungkhantnaynay/AllOfUsAreSmart",
    },
    {
    title: "BeanCo Mini E-commerce",
    description:
        "BeanCo is a self-developed e-commerce frontend project created to showcase my skills in building modern, responsive, and interactive web applications. The website represents a minimal but functional online coffee bean store where users can explore products, view details, and experience an organized shopping interface.",
    image: Bean_Co,
    tools: ["React", "JavaScript", "Next.js", "TypeScript", "CSS", "Tailwind", "Zustand"],
    link: "https://beanco-mini-ecommerce.vercel.app/",
    github: "https://github.com/kaungkhantnaynay/mini-e-commerce",
    },
    {
    title: "First Rubber (Cooperate Website)",
    description:
        "First Rubber is a company website showcasing their rubber products and solutions. It features product catalogs, technical specifications, and applications, with a focus on clear presentation, easy navigation, and customer contact options",
    image: first_rubber,
    tools: ["WordPress", "API", "PHP", "Elementor", "Custom CSS"],
    link: "http://test.firstrubber.com/",
    },
  ];


  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-10 border-l-4 border-green-700 pl-3 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                className="w-full h-52 object-contain"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-black text-green-700 px-2 py-1 rounded-md text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 text-sm font-semibold hover:underline"
                >
                  View Project →
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 text-sm font-semibold hover:underline"
                >
                  <FaGithub className="w-8 h-8 mt-1.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
