import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface HeroProps {
  onExploreWorkClick: () => void;
  onStartProjectClick: () => void;
  onExplorePartnershipsClick: () => void;
  onWhoIsAdityaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWorkClick,
  onStartProjectClick,
  onExplorePartnershipsClick,
  onWhoIsAdityaClick,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden border-b border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#bef264]/[0.035] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-16 right-10 w-[320px] h-[320px] bg-white/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Personal Brand Identity, Headlines & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Primary Brand Label */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#bef264] uppercase mb-4 font-mono-num">
              <span>{SITE_DATA.profile.eyebrowLabel}</span>
            </div>

            {/* Main Personal Brand Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.04] font-syne mb-3">
              ADITYA AGRAWAT
            </h1>

            {/* Identity Subtitle */}
            <div className="text-base sm:text-xl lg:text-2xl font-semibold text-[#bef264] font-syne mb-6 tracking-wide">
              {SITE_DATA.profile.subtitle}
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-200 font-syne leading-[1.12] mb-6">
              {SITE_DATA.profile.headline}
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8 max-w-xl font-body">
              {SITE_DATA.profile.supportingText}
            </p>

            {/* Primary Exploration Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto mb-8">
              <button
                type="button"
                onClick={onStartProjectClick}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#bef264]/10 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={onExploreWorkClick}
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </button>
            </div>

            {/* Above-The-Fold Conversion Block strictly as requested */}
            <div className="w-full pt-6 border-t border-white/10 max-w-xl">
              <div className="text-xs sm:text-sm text-neutral-400 font-body mb-3">
                <span className="text-white font-medium">Have an idea, project or partnership opportunity?</span>{' '}
                <span className="text-[#bef264]">Let&apos;s talk.</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onStartProjectClick}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-colors cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={onExplorePartnershipsClick}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                >
                  <span>Explore Partnerships</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="/about-aditya-agrawat"
                  onClick={(e) => {
                    e.preventDefault();
                    onWhoIsAdityaClick();
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer ml-auto"
                >
                  <span>About Aditya Agrawat</span>
                  <ArrowRight className="w-3 h-3 text-[#bef264]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Technology, Marketing & Business Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              <div className="relative p-2 bg-[#0c0c0e] border border-white/10 transition-colors duration-300 group-hover:border-[#bef264]/30 shadow-2xl">
                <div className="relative aspect-square w-full overflow-hidden bg-[#09090b]">
                  {!imageError ? (
                    <img
                      src="/src/assets/images/hero_abstract_tech_1791140677917.jpg"
                      alt="Aditya Agrawat - Technology, Marketing and Digital Business Architecture"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#121215] to-[#080808] text-center">
                      <div className="w-20 h-20 rounded-full border border-[#bef264]/40 flex items-center justify-center mb-4 bg-[#bef264]/5">
                        <Sparkles className="w-8 h-8 text-[#bef264]" />
                      </div>
                      <span className="text-white font-syne text-lg font-bold">ADITYA AGRAWAT</span>
                      <span className="text-xs text-neutral-400 mt-1">Digital Marketer · Entrepreneur · Digital Builder</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="text-neutral-300 font-medium">Technology · Marketing · Business</span>
                    <span className="text-[#bef264] font-mono-num font-semibold">48+ TEAM</span>
                  </div>
                </div>
              </div>

              {/* Minimal corner brackets */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#bef264]/60" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#bef264]/60" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#bef264]/60" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#bef264]/60" />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            {SITE_DATA.profile.stats.map((stat, idx) => (
              <div key={stat.label} className="relative flex flex-col pr-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-syne tracking-tight font-mono-num flex items-center">
                  <span>{stat.value}</span>
                  {idx === 0 && <span className="text-[#bef264] ml-1 text-2xl sm:text-3xl">·</span>}
                </div>
                <div className="text-xs sm:text-sm font-medium text-neutral-400 mt-2 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
