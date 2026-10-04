import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface FinalCtaProps {
  onStartConversationClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onStartConversationClick }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#09090c] border-b border-white/[0.08] relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#bef264]/[0.035] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono-num font-semibold uppercase tracking-widest text-[#bef264] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>COLLABORATION INVITATION</span>
        </div>

        {/* Required lines */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-syne mb-3 leading-[1.1]">
          {SITE_DATA.finalCta.line1}
        </h2>
        <div className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#bef264] font-syne mb-10">
          {SITE_DATA.finalCta.line2}
        </div>

        <p className="text-base sm:text-lg text-neutral-300 font-body max-w-xl mx-auto mb-10 leading-relaxed">
          Reach out to Aditya Agrawat directly. Whether you need strategic digital marketing, a high-converting website, an application, or a 48+ member execution team.
        </p>

        {/* Required button */}
        <button
          type="button"
          onClick={onStartConversationClick}
          className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-sm sm:text-base font-bold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all duration-200 active:scale-[0.98] shadow-2xl shadow-[#bef264]/20 cursor-pointer"
        >
          <span>{SITE_DATA.finalCta.buttonLabel}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        <div className="mt-8 text-xs text-neutral-500 font-mono-num">
          Direct email: <a href="mailto:adityaagrawatofficial@gmail.com" className="text-neutral-400 hover:text-[#bef264] transition-colors">adityaagrawatofficial@gmail.com</a>
        </div>
      </div>
    </section>
  );
};
