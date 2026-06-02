import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from './data/projects';

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white px-6 py-20 text-neutral-950" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Projects</p>
          <motion.h2
            id="projects-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Selected work across frontend, e-commerce, and operational tools.
          </motion.h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">A focused set of practical builds, from customer-facing websites to workflow-driven applications.</p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-lg shadow-neutral-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-green-600/30 hover:shadow-2xl hover:shadow-green-950/10"
            >
              <div className="border-b border-neutral-200 bg-white p-4">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-56 w-full rounded-2xl object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 text-left">
                <h3 className="text-xl font-bold text-neutral-950">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-neutral-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-green-700/20 bg-green-700/10 px-3 py-1 text-xs font-semibold text-green-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-green-950/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg hover:shadow-green-900/30 active:translate-y-0 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500"
                    aria-label={`View live project: ${project.title}`}
                  >
                    View Project <FaExternalLinkAlt aria-hidden="true" />
                  </a>

                  {project.github === 'private' ? (
                    <button
                      type="button"
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-green-700 opacity-75 shadow-md shadow-neutral-900/10"
                      aria-label={`GitHub repository for ${project.title} is private`}
                      title="Private repository"
                    >
                      <FaGithub className="h-5 w-5" aria-hidden="true" />
                      Private
                    </button>
                  ) : project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-neutral-200 bg-white p-2 text-green-700 shadow-md shadow-neutral-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-600 hover:bg-green-700 hover:text-white hover:shadow-lg hover:shadow-green-900/20 active:translate-y-0 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <FaGithub className="w-8 h-8" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
