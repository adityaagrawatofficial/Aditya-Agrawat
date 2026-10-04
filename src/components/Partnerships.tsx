import React from 'react';
import { ArrowRight, Handshake, Users2, Rocket, CheckCircle2 } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface PartnershipsProps {
  onStartPartnershipClick: (category?: string) => void;
}

export const Partnerships: React.FC<PartnershipsProps> = ({ onStartPartnershipClick }) => {
  const cardIcons = [Handshake, Users2, Rocket];

  return (
    <section id="partnerships" className="py-24 sm:py-32 border-b border-white/[0.06] bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#bef264] block mb-3 font-mono-num">
            // COLLABORATION ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-syne mb-6">
            {SITE_DATA.partnerships.heading}
          </h2>
          <p className="text-base sm:text-lg text-neutral-200 font-body leading-relaxed mb-4">
            {SITE_DATA.partnerships.subheading}
          </p>
        </div>

        {/* Open to working with pills / indicators */}
        <div className="mb-14 p-6 bg-[#0e0e12] border border-white/5">
          <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono-num mb-3">
            Open to collaborating with:
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {SITE_DATA.partnerships.openTo.map((entity) => (
              <span
                key={entity}
                className="px-3 py-1.5 bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-medium text-white font-mono-num"
              >
                {entity}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {SITE_DATA.partnerships.cards.map((card, idx) => {
            const Icon = cardIcons[idx];
            return (
              <div
                key={card.title}
                className="p-8 sm:p-9 bg-[#0c0c0e] border border-white/[0.08] hover:border-[#bef264]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-[#bef264]/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono-num text-xs font-bold text-[#bef264]">
                      {card.number}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-500 group-hover:text-[#bef264] transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white font-syne mb-2.5">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#bef264]/90 font-medium mb-4 font-body">
                    {card.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-body">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => onStartPartnershipClick(card.title)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 group-hover:text-[#bef264] transition-colors cursor-pointer"
                  >
                    <span>Start This Partnership</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-start">
          <button
            type="button"
            onClick={() => onStartPartnershipClick('Partnership')}
            className="group inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all cursor-pointer shadow-lg shadow-[#bef264]/10"
          >
            <span>Start a Partnership</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
