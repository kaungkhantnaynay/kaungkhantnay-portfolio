import React from 'react';
import { skillCategories, techStackIcons } from './data/skills';

export default function SkillsTools() {
  return (
    <section id="skills-tools" className="bg-neutral-950 px-6 py-20 text-white" aria-labelledby="skills-heading">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">Skills</p>
          <h2 id="skills-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Technical skills from full stack delivery, data work, and deployment.
          </h2>
          <p className="mt-5 text-base leading-7 text-neutral-300">
            A practical stack shaped by frontend development, backend APIs,
            database work, business reporting, and production deployment.
          </p>
          <div className="mt-8">
            <h3 className="mb-6 text-lg font-semibold text-neutral-200">Core Stack</h3>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-4">
              {techStackIcons.map((tool) => {
                const Icon = tool.icon;

                return (
                  <div
                    key={tool.name}
                    className="group flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-center shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-500/50 hover:bg-green-500/10 hover:shadow-xl hover:shadow-green-950/30"
                    title={tool.name}
                    aria-label={tool.name}
                  >
                    <Icon className="text-2xl text-green-400 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:pt-12">
          <div className="grid gap-4 sm:grid-cols-2" aria-label="Technical skill categories">
            {skillCategories.map((category) => (
              <article
                key={category.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:bg-green-500/10 hover:shadow-xl hover:shadow-green-950/30"
              >
                <h4 className="text-base font-semibold text-white">{category.title}</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={`${category.title}-${skill}`}
                      className="rounded-full border border-green-400/20 bg-black/30 px-3 py-1.5 text-xs font-medium text-green-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
