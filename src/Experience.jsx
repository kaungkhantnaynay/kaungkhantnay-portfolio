import React from 'react';
import { experiences } from './data/experience';

export default function Experience() {
  return (
    <section aria-labelledby="experience-heading">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.role}`}
            className="group flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 text-left shadow-lg shadow-neutral-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-green-600/30 hover:shadow-2xl hover:shadow-green-950/10"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">{exp.period}</p>
                <h3 className="mt-3 text-xl font-bold leading-tight text-neutral-950">{exp.role}</h3>
              </div>
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 p-2 shadow-sm transition-colors duration-300 group-hover:border-green-600/30 group-hover:bg-green-50">
                <img src={exp.logo} alt={exp.logoAlt} className="max-h-12 max-w-12 object-contain" />
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-neutral-700">{exp.company}</p>
            <p className="mt-4 flex-1 text-sm leading-6 text-neutral-600">{exp.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
