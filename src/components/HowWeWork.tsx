import React from 'react';
import { SITE_DATA } from '../data/siteData';

export const HowWeWork: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 border-b border-white/[0.06] bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#bef264] block mb-3 font-mono-num">
            // WORKING METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-syne mb-4">
            How We Work<span className="text-[#bef264]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-body">
            A transparent, pragmatic four-step collaboration process designed to move from initial idea to live execution with clarity and speed.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.howWeWork.map((step) => (
            <div
              key={step.step}
              className="p-8 bg-[#0c0c0e] border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative flex flex-col justify-between min-h-[240px] group"
            >
              <div>
                <span className="font-mono-num text-2xl font-extrabold text-[#bef264] block mb-4">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-white font-syne mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-300 font-body leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500 font-mono-num">
                <span>Phase {step.step}</span>
                <span className="text-neutral-400">Structured Process</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
