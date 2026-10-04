import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface WhatBringsYouHereProps {
  selectedOptionId: string;
  onSelectOption: (optionId: string, interest: string) => void;
}

export const WhatBringsYouHere: React.FC<WhatBringsYouHereProps> = ({
  selectedOptionId,
  onSelectOption,
}) => {
  return (
    <section className="py-24 sm:py-32 border-b border-white/[0.06] bg-[#0c0c0e] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#bef264] block mb-2 font-mono-num">
            // INTERACTIVE DIRECTORY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-syne mb-4">
            What brings you here?
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-body">
            Choose what you&apos;re looking for and let&apos;s start from there.
          </p>
        </div>

        {/* 8 Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SITE_DATA.whatBringsYouHere.map((item) => {
            const isSelected = selectedOptionId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectOption(item.id, item.defaultInterest)}
                className={`p-5 text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[110px] group ${
                  isSelected
                    ? 'bg-[#141418] border-[#bef264] shadow-lg shadow-[#bef264]/10 -translate-y-0.5'
                    : 'bg-[#0f0f13] border-white/10 hover:border-white/30 hover:bg-[#121217]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="text-[11px] font-mono-num text-neutral-500 group-hover:text-neutral-300 uppercase tracking-wider">
                    INTENT
                  </span>
                  {isSelected ? (
                    <span className="w-5 h-5 rounded-full bg-[#bef264] text-black flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </span>
                  ) : (
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-[#bef264] transition-colors" />
                  )}
                </div>

                <div
                  className={`text-sm sm:text-base font-semibold font-syne ${
                    isSelected ? 'text-[#bef264]' : 'text-white group-hover:text-[#bef264]'
                  }`}
                >
                  {item.label}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs text-neutral-500 font-mono-num">
          <span>* Selecting an option automatically focuses the enquiry form below with your project focus.</span>
        </div>
      </div>
    </section>
  );
};
