import React, { useState } from 'react';
import { SITE_DATA } from '../data/siteData';
import { Users, CheckCircle2 } from 'lucide-react';

export const Team: React.FC = () => {
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<string>('marketing');

  const selectedDiscipline =
    SITE_DATA.team.disciplines.find((d) => d.id === selectedDisciplineId) ||
    SITE_DATA.team.disciplines[0];

  return (
    <section id="team" className="py-24 sm:py-32 border-b border-white/[0.06] bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#bef264] block mb-3 font-mono-num">
              // SCALED WORKFORCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-syne leading-[1.08]">
              {SITE_DATA.team.headingLine1}
              <br />
              <span className="text-[#bef264]">{SITE_DATA.team.headingLine2}</span>
              <br />
              <span className="text-neutral-300">{SITE_DATA.team.headingLine3}</span>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-6">
            <blockquote className="text-base sm:text-lg text-neutral-200 font-normal leading-relaxed font-body border-l-2 border-[#bef264] pl-5 mb-4">
              &ldquo;{SITE_DATA.team.quote}&rdquo;
            </blockquote>
            <p className="text-sm text-neutral-400 leading-relaxed font-body">
              Aditya Agrawat leads a distributed, multidisciplinary team executing in synchrony across software engineering, content syndication, visual design, search optimization, and campaign operations.
            </p>
          </div>
        </div>

        {/* 6 Core Roles Showcase */}
        <div className="mb-12">
          <div className="text-xs uppercase tracking-widest text-neutral-400 mb-4 font-mono-num">
            Functional Divisions:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SITE_DATA.team.disciplines.map((d) => {
              const isSelected = selectedDisciplineId === d.id;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setSelectedDisciplineId(d.id)}
                  className={`p-4 text-left border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#121216] border-[#bef264] text-white shadow-lg shadow-[#bef264]/5 -translate-y-0.5'
                      : 'bg-[#0c0c0e] border-white/10 text-neutral-400 hover:text-white hover:border-white/25'
                  }`}
                >
                  <div className="text-[11px] font-mono-num text-[#bef264] mb-1">
                    0{SITE_DATA.team.disciplines.indexOf(d) + 1}
                  </div>
                  <div className="text-xs sm:text-sm font-bold tracking-wider font-syne">
                    {d.role}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Discipline Deep-Dive Box */}
        <div className="p-8 sm:p-12 bg-[#0c0c0e] border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs font-mono-num text-[#bef264] mb-2 uppercase tracking-wider">
                <span>Core Division</span>
                <span className="text-neutral-600">/</span>
                <span>{selectedDiscipline.role}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-4">
                {selectedDiscipline.description}
              </h3>
              <div className="text-sm text-neutral-300 font-body mb-6">
                <span className="text-neutral-400">Core Output: </span>
                <span className="text-white font-medium">{selectedDiscipline.leadOutput}</span>
              </div>

              {/* Focus Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
                {selectedDiscipline.focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#bef264] shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Operational Metric Visual */}
            <div className="lg:col-span-5 flex flex-col justify-center bg-[#111116] p-6 sm:p-8 border border-white/5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#bef264]" />
                  <span className="text-xs font-mono-num text-white uppercase tracking-wider">
                    Execution Scale
                  </span>
                </div>
                <span className="text-xs font-mono-num text-[#bef264] font-bold">48+ MEMBERS</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-body mb-4">
                Every client initiative and digital venture benefits from dedicated specialists in code, design, media, and promotion, ensuring rapid turnaround and high delivery standards.
              </p>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-white/5 text-neutral-400 font-mono-num">
                <span>One Digital Direction</span>
                <span className="text-[#bef264]">Unified Vision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
