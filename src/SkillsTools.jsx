import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiVercel,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

export default function SkillsTools() {
  const tools = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Vue.js", icon: <FaVuejs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-6  pl-3">
            Skills
          </h2>
          <p className="text-gray-300 mb-4">
            I specialize in building responsive, dynamic web applications using
            modern frontend and backend technologies. My key skills include:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Frontend development with React, Next.js, and Vue.js</li>
            <li>Backend development with Node.js, Express, and REST APIs</li>
            <li>Database integration using MongoDB and MySQL</li>
            <li>UI design and prototyping using TailwindCSS and Figma</li>
            <li>Deployment and hosting with Firebase, Vercel, and Netlify</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 pl-3">
            Tools & Technologies
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center border border-green-700 rounded-md p-4 hover:scale-110 transition-transform duration-300"
              >
                <div className="text-2xl md:text-3xl mb-2">{tool.icon}</div>
                <p className="text-xs">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
