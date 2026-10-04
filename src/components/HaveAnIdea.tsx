import React from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface HaveAnIdeaProps {
  onSubmitIdeaClick: () => void;
  onTalkToTeamClick: () => void;
}

export const HaveAnIdea: React.FC<HaveAnIdeaProps> = ({ onSubmitIdeaClick, onTalkToTeamClick }) => {
  return (
    <section className="py-24 sm:py-32 border-b border-white/[0.06] bg-[#0c0c0f] relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#bef264]/[0.03] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#bef264] block mb-4 font-mono-num">
            {SITE_DATA.haveAnIdea.label}
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-syne mb-8 leading-[1.08]">
            {SITE_DATA.haveAnIdea.headingLine1}
            <br />
            <span className="text-[#bef264]">{SITE_DATA.haveAnIdea.headingLine2}</span>
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-10 text-base sm:text-lg text-neutral-300 font-body leading-relaxed">
            <p className="font-semibold text-white">
              {SITE_DATA.haveAnIdea.leadParagraph}
            </p>
            <p>
              {SITE_DATA.haveAnIdea.bodyParagraph}
            </p>
            <p className="text-sm sm:text-base text-neutral-400">
              {SITE_DATA.haveAnIdea.supportParagraph}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={onSubmitIdeaClick}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#bef264]/10 cursor-pointer"
            >
              <span>Submit Your Idea</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              type="button"
              onClick={onTalkToTeamClick}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Talk to Our Team</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
