import React, { useState } from 'react';
import WaveText from './WaveText.jsx'
import Experience from './Experience.jsx'
import SkillsTools from './SkillsTools.jsx'
import Projects from './Projects.jsx'
import Footer from './Footer.jsx'
import CodingAnimation from './CodingAnimation.jsx'

const navLinkClass = 'text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 px-5 py-4 text-white shadow-xl shadow-black/20 backdrop-blur md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#portfolio" className="text-xl font-bold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500">
          <span className="text-green-500">Kaung</span> Khant <span className="text-neutral-400">(Nay)</span>
        </a>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            className="rounded-full border border-white/10 p-2 shadow-md shadow-green-950/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-500/60 hover:bg-green-700 hover:shadow-lg hover:shadow-green-900/50 active:translate-y-0 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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
        <ul
          id="primary-navigation"
          className={`md:flex md:items-center md:gap-8 ${isMenuOpen ? 'absolute left-0 top-16 flex w-full flex-col items-center gap-5 border-b border-white/10 bg-black px-5 py-6 shadow-2xl' : 'hidden'}`}
        >
          <li>
            <a href="#portfolio" className="text-sm font-semibold text-green-400 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#experience" className={navLinkClass}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className={navLinkClass}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className={navLinkClass}>
              About
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-green-950/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-600 hover:text-white hover:shadow-xl hover:shadow-green-900/40 active:translate-y-0 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500 md:block"
        >
          Contact Me
        </a>
        </div>
      </nav>

      <main>
      <section id="portfolio" className="overflow-hidden bg-neutral-950 px-6 pt-32 pb-20 text-white md:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="text-center lg:text-left">
            <WaveText/>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300 lg:mx-0">
              Former Network & Data Center Engineer building reliable, user-friendly web applications with a practical infrastructure mindset.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="inline-flex w-full justify-center rounded-full bg-green-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-green-950/40 transition-all duration-200 hover:-translate-y-1 hover:bg-green-500 hover:shadow-xl hover:shadow-green-900/40 active:translate-y-0 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500 sm:w-auto"
              >
                View Projects
              </a>
              <a
                href="#experience"
                className="inline-flex w-full justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-1 hover:border-green-500/60 hover:bg-white/10 hover:shadow-xl hover:shadow-green-950/30 active:translate-y-0 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500 sm:w-auto"
              >
                See Experience
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-3 text-left">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-black/20">
                <dt className="text-2xl font-bold text-white">5+</dt>
                <dd className="mt-1 text-xs text-neutral-400">Years of experience</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-black/20">
                <dt className="text-2xl font-bold text-white">3</dt>
                <dd className="mt-1 text-xs text-neutral-400">Career chapters</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-black/20">
                <dt className="text-2xl font-bold text-white">15+</dt>
                <dd className="mt-1 text-xs text-neutral-400">Tools covered</dd>
              </div>
            </dl>
          </div>

          <CodingAnimation />
        </div>
      </section>

      <section id="experience" className="px-6 py-20" aria-labelledby="experience-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Experience</p>
            <h2 id="experience-heading" className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">Practical engineering background with modern web delivery.</h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">A career path that combines network operations, data work, and client-facing full stack development.</p>
          </div>
          <Experience/>
        </div>
      </section>
          
      <SkillsTools/>
      <section id='projects'>
          <Projects/>
      </section>

      <section id="about" className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 shadow-xl shadow-neutral-900/5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">About</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">Built from operations, sharpened through code.</h2>
          <p className="mt-5 text-base leading-7 text-neutral-600">
            For years, I worked in networking and data centers, keeping systems reliable and secure. That background now shapes how I build web products: structured, resilient, and clear for the people using them.
          </p>
        </div>

        <div className="max-w-3xl">
          <p className="text-xl font-semibold leading-8 text-neutral-900">
            I am focused on mastering full stack development and creating digital experiences that feel dependable, useful, and easy to navigate.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-lg shadow-neutral-900/5">
              <h3 className="font-semibold text-neutral-950">Engineering mindset</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">Infrastructure experience helps me think about reliability, maintainability, and real-world constraints.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-lg shadow-neutral-900/5">
              <h3 className="font-semibold text-neutral-950">Product focus</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">I care about clean interfaces, clear flows, and applications that help users finish tasks without friction.</p>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section id="contact">
        <Footer />
      </section>
      </main>
    </div>
  )
}

export default App
