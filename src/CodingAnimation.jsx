import React from 'react';

const codeLines = [
  'const portfolio = build({',
  '  focus: "reliable apps",',
  '  stack: ["React", "Node"],',
  '  deploy: "production"',
  '});',
];

export default function CodingAnimation() {
  return (
    <div className="relative mx-auto w-full max-w-sm" aria-label="Animated illustration of a developer coding">
      <div className="absolute inset-0 rounded-[2rem] bg-green-500/20 blur-3xl" aria-hidden="true"></div>
      <div className="coding-scene relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-green-950/40">
        <div className="absolute left-6 top-6 h-3 w-3 rounded-full bg-green-400 shadow-[24px_0_0_rgba(255,255,255,0.25),48px_0_0_rgba(255,255,255,0.16)]" aria-hidden="true"></div>

        <div className="relative mt-8 flex min-h-[380px] flex-col justify-end rounded-[1.5rem] border border-white/10 bg-neutral-950/80 px-5 pb-6 pt-20">
          <div className="absolute left-1/2 top-8 h-20 w-20 -translate-x-1/2 rounded-full bg-green-400/10 blur-2xl" aria-hidden="true"></div>

          <div className="developer-head mx-auto" aria-hidden="true">
            <div className="developer-hair"></div>
            <div className="developer-face">
              <span className="developer-eye developer-eye-left"></span>
              <span className="developer-eye developer-eye-right"></span>
              <span className="developer-smile"></span>
            </div>
          </div>

          <div className="developer-body mx-auto" aria-hidden="true">
            <span className="developer-neck"></span>
            <span className="developer-arm developer-arm-left"></span>
            <span className="developer-arm developer-arm-right"></span>
          </div>

          <div className="laptop mx-auto" aria-hidden="true">
            <div className="laptop-screen">
              {codeLines.map((line, index) => (
                <span
                  className="code-line"
                  style={{ '--line-index': index }}
                  key={line}
                >
                  {line}
                </span>
              ))}
              <span className="code-cursor"></span>
            </div>
            <div className="laptop-base"></div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
          <p className="text-sm font-semibold text-green-300">Currently building</p>
          <p className="mt-1 text-sm text-neutral-300">Responsive full stack products with clean interfaces and practical engineering.</p>
        </div>
      </div>
    </div>
  );
}
