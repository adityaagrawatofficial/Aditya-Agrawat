import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Users, Layers, Award } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface WhoIsAdityaProps {
  onMoreAboutClick: () => void;
  onStartProjectClick: () => void;
}

export const WhoIsAditya: React.FC<WhoIsAdityaProps> = ({ onMoreAboutClick, onStartProjectClick }) => {
  return (
    <section id="who-is-aditya" className="py-24 sm:py-32 border-b border-white/[0.06] bg-[#0a0a0d] relative overflow-hidden">
      {/* Decorative accent hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#bef264]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Heading & Core Badge */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#bef264] block mb-3 font-mono-num">
              {SITE_DATA.whoIsAditya.label}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-syne leading-[1.1] mb-6">
              Who is Aditya Agrawat?
            </h2>

            <div className="p-4 bg-[#111116] border border-white/10 mb-8 space-y-2">
              <div className="text-xs text-[#bef264] font-mono-num font-semibold uppercase tracking-wider">
                FOUNDER &amp; BUILDER
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-body">
                Directing strategic execution across code, marketing funnels, media distribution and operations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/about-aditya-agrawat"
                onClick={(e) => {
                  e.preventDefault();
                  onMoreAboutClick();
                }}
                className="group inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] px-6 py-3.5 transition-all cursor-pointer shadow-md shadow-[#bef264]/10"
              >
                <span>About Aditya Agrawat</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onStartProjectClick();
                }}
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3.5 transition-all cursor-pointer"
              >
                <span>Work With Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Grounded Editorial Narrative & Team Integration */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 bg-[#111116] border-l-2 border-[#bef264] border-y border-r border-white/5">
              <p className="text-base sm:text-lg text-white font-normal leading-relaxed font-body">
                {SITE_DATA.whoIsAditya.paragraphs[0]}
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-body">
              {SITE_DATA.whoIsAditya.paragraphs[1]}
            </p>

            <div className="p-6 bg-[#0e0e12] border border-white/5 flex items-start gap-4">
              <Users className="w-5 h-5 text-[#bef264] shrink-0 mt-1" />
              <div>
                <h3 className="text-sm font-bold text-white font-syne mb-1">
                  Supported by a 48+ Member Team
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-body">
                  {SITE_DATA.whoIsAditya.paragraphs[2]}
                </p>
              </div>
            </div>

            {/* Core Capability Tags */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                'Digital Marketing',
                'Websites',
                'Applications',
                'Content & Media',
                'SEO & Blogging',
                'Digital Products'
              ].map((domain) => (
                <div
                  key={domain}
                  className="flex items-center gap-2 text-xs text-neutral-300 p-2.5 bg-white/[0.02] border border-white/5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#bef264] shrink-0" />
                  <span className="truncate">{domain}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
