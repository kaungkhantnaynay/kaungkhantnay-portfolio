import React, { useState } from 'react';
import WaveText from './WaveText.jsx'
import Experience from './Experience.jsx'
import SkillsTools from './SkillsTools.jsx'
import Projects from './Projects.jsx'
import Footer from './Footer.jsx'
import profile from './assets/Profile-Pic.jpg'


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-black text-white py-4 px-8 flex items-center justify-between fixed top-0 w-full z-50">
        <div className="text-xl font-bold">
          <span className="text-green-600">Kaung</span> Khant
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-8 ${isMenuOpen ? 'absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4' : 'hidden'}`}>
          <li>
            <a href="#portfolio" className="text-green-600 underline underline-offset-4">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-green-500 transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-green-500 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-500 transition-colors">
              About
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="bg-white text-black font-semibold py-2 px-5 rounded-full shadow hover:scale-105 transition-transform hidden md:block"
        >
          Contact Me
        </a>
      </nav>

      <section id='portfolio' className='flex flex-col items-center justify-center text-center py-24'>
        <div>
          <p className='text-3xl sm:text-3xl md:text-4xl font-bold text-black'>Hello</p>
          <WaveText/>
        </div>
        <div>
          <p className='mt-6 max-w-2xl text-2xl/relaxed text-gray-800 italic'>“Former Network & Data Center Engineer turned Full Stack Web Developer, passionate about building dynamic and user-friendly web applications.”</p>
          <a href="#projects"
          className="mt-8 inline-block bg-green-700 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-700 transition">
          View Projects
          </a>
        </div>
      </section>

      <section id='experience'>
        <div>
          <h1 className='flex flex-col items-center justify-center text-center text-xl sm:text-2xl font-bold text-black'>Work Experiences</h1>
          <Experience/>
        </div>
      </section>
          
      <section id='skills-tools'>
          <SkillsTools/>
      </section>
      <section id='projects'>
          <Projects/>
      </section>

      <section id="about" className="bg-[#F2EEA7] py-16 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Profile"
            className="w-40 h-50 sm:w-60 sm:h-70 rounded-full"
          />
        </div>

        <div className="text-center md:text-left max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">About Me</h2>

          <p className="text-xl sm:text-2xl font-semibold text-orange-500 mb-6">
            "An aspiring web developer determined to master my craft."
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            For years, I worked in networking and data centers, making sure systems ran smoothly
            and securely. Along the way, I discovered a passion for solving problems with code and
            creating tools that make life easier.
          </p>

          <p className="text-gray-800 leading-relaxed">
            These days, I’m diving deep into <span className="font-semibold">web development</span>,
            learning how to build modern, user-friendly websites and applications. My goal is to bring
            together my technical background and new skills in coding to create digital experiences
            that are both reliable and impactful.
          </p>
        </div>
      </div>
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  )
}

export default App
