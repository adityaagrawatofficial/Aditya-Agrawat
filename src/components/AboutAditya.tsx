import React from 'react';
import { SITE_DATA } from '../data/siteData';
import { Globe, Users, Sparkles, ArrowRight } from 'lucide-react';

interface AboutAdityaProps {
  onLearnMoreClick?: () => void;
  onWorkWithTeamClick: () => void;
}

export const AboutAditya: React.FC<AboutAdityaProps> = ({ onLearnMoreClick, onWorkWithTeamClick }) => {
  return (
    <section id="about-aditya" className="py-24 sm:py-32 border-b border-white/[0.06] relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#bef264] block mb-3 font-mono-num">
              // PROFILE &amp; CORE FOCUS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-syne leading-[1.12] mb-6">
              {SITE_DATA.aboutProfile.heading}
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-body">
              {SITE_DATA.aboutProfile.lead}
            </p>
          </div>

          {/* Compact Identity Card strictly as requested */}
          <div className="lg:col-span-4">
            <div className="p-6 sm:p-8 bg-[#0e0e12] border-2 border-[#bef264]/40 shadow-2xl relative">
              <div className="text-[11px] font-mono-num text-[#bef264] uppercase tracking-wider mb-2">
                PERSONAL IDENTITY
              </div>
              <h3 className="text-2xl font-extrabold text-white font-syne tracking-tight mb-4">
                ADITYA AGRAWAT
              </h3>
              
              <div className="space-y-2 text-sm text-neutral-300 font-body mb-6 border-y border-white/10 py-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bef264]" />
                  <span className="font-semibold text-white">Digital Marketer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bef264]" />
                  <span className="font-semibold text-white">Entrepreneur</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bef264]" />
                  <span className="font-semibold text-white">Digital Builder</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-neutral-400 font-mono-num">
                <div className="flex items-center justify-between">
                  <span>Based in:</span>
                  <span className="text-white">India</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Team:</span>
                  <span className="text-[#bef264] font-bold">48+ Specialists</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Status:</span>
                  <span className="text-white">Active Projects</span>
                </div>
              </div>

              {onLearnMoreClick && (
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={onLearnMoreClick}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#bef264] hover:underline uppercase tracking-wider cursor-pointer"
                  >
                    <span>Read Full Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 8 Clear Natural Professional Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.aboutProfile.disciplines.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 bg-[#0c0c0f] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono-num text-[#bef264] mb-3 block">
                  0{idx + 1}
                </span>
                <h4 className="text-base font-bold text-white font-syne mb-2.5">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono-num">
                <span>Integrated Execution</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-8 bg-[#0e0e12] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white font-syne">
              Looking for leadership on your next digital initiative?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-body">
              Aditya Agrawat works directly with businesses and creators to turn ideas into tangible, working software and distribution channels.
            </p>
          </div>
          <button
            type="button"
            onClick={onWorkWithTeamClick}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};
