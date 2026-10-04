import React, { useState } from 'react';
import { Check, Code, TrendingUp, Layers, ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface WorkProps {
  onStartProjectClick: () => void;
}

export const Work: React.FC<WorkProps> = ({ onStartProjectClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'Web & Applications', label: 'Web & Applications' },
    { id: 'Digital Marketing', label: 'Digital Marketing' },
    { id: 'Content & Social', label: 'Content & Social' },
    { id: 'Digital Products', label: 'Digital Products' }
  ];

  const filteredWork =
    activeCategory === 'all'
      ? SITE_DATA.selectedWork
      : SITE_DATA.selectedWork.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="py-24 sm:py-32 border-b border-white/[0.06] bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#bef264] block mb-3 font-mono-num">
              // TRACK RECORD &amp; CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-syne">
              Selected Work<span className="text-[#bef264]">.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-body">
            Exemplary architectures, growth systems, media pipelines, and software tools built and directed by Aditya Agrawat with his 48+ member team.
          </p>
        </div>

        {/* Category Filters (interactive segmented tabs) */}
        <div className="flex items-center gap-2 p-1.5 bg-[#0e0e11] border border-white/10 w-fit mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#bef264] text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Selected Work Cards */}
        <div className="space-y-12">
          {filteredWork.map((item) => (
            <article
              key={item.id}
              className="p-8 sm:p-12 bg-[#0c0c0e] border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative group overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Content & Narrative (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Index & Subtitle */}
                    <div className="flex items-center gap-3 text-xs font-mono-num font-semibold text-[#bef264] mb-3">
                      <span>{item.number}</span>
                      <span className="text-neutral-600" aria-hidden="true">·</span>
                      <span className="uppercase tracking-wider">{item.category}</span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-syne mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-neutral-300 font-body leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Execution Highlights */}
                    <div className="space-y-2.5 mb-8">
                      {item.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                          <Check className="w-4 h-4 text-[#bef264] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Row */}
                  <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400 font-mono-num">
                    <span className="text-neutral-500 uppercase tracking-wider">Stack:</span>
                    {item.technologies.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="text-neutral-300">{tech}</span>
                        {idx < item.technologies.length - 1 && (
                          <span className="text-neutral-600" aria-hidden="true">/</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Right: Visual Showcase (5 cols) */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#121216] border border-white/10 group-hover:border-[#bef264]/40 transition-colors">
                    {item.image && !imageErrors[item.id] ? (
                      <img
                        src={item.image}
                        alt={`Selected work showcase for ${item.title}`}
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(item.id)}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : item.id === 'work-marketing' ? (
                      /* Minimalist Marketing Engine Visualization */
                      <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#141418] via-[#0d0d10] to-[#080808]">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-[#bef264]" />
                            <span className="text-xs font-mono-num text-neutral-300 uppercase tracking-wider">
                              Acquisition Pipeline Architecture
                            </span>
                          </div>
                          <span className="text-[11px] font-mono-num text-[#bef264]">ACTIVE</span>
                        </div>

                        <div className="space-y-3 my-auto py-2">
                          <div className="p-3 bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                            <span className="text-neutral-400">Search &amp; Discovery Inflow</span>
                            <span className="font-mono-num text-white">Continuous</span>
                          </div>
                          <div className="p-3 bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                            <span className="text-neutral-400">High-Retention Landing Architecture</span>
                            <span className="font-mono-num text-[#bef264]">Zero Friction</span>
                          </div>
                          <div className="p-3 bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                            <span className="text-neutral-400">Audience Nurture &amp; Retargeting</span>
                            <span className="font-mono-num text-white">Full-Funnel</span>
                          </div>
                        </div>

                        <div className="text-[11px] text-neutral-500 font-mono-num pt-2 border-t border-white/5">
                          Multi-touch attribution &middot; Conversion tracking
                        </div>
                      </div>
                    ) : item.id === 'work-digital-products' ? (
                      /* Digital Products Platform Blueprint */
                      <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#141418] via-[#0d0d10] to-[#080808]">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                          <div className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-[#bef264]" />
                            <span className="text-xs font-mono-num text-neutral-300 uppercase tracking-wider">
                              Product Incubation System
                            </span>
                          </div>
                          <span className="text-[11px] font-mono-num text-[#bef264]">SCALED</span>
                        </div>

                        <div className="space-y-3 my-auto py-2">
                          <div className="p-3 bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                            <span className="text-neutral-400">Idea to Prototype Cadence</span>
                            <span className="font-mono-num text-white">Rapid Agile</span>
                          </div>
                          <div className="p-3 bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                            <span className="text-neutral-400">Self-Service Onboarding</span>
                            <span className="font-mono-num text-[#bef264]">Seamless</span>
                          </div>
                          <div className="p-3 bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                            <span className="text-neutral-400">Monetization &amp; Cloud Ops</span>
                            <span className="font-mono-num text-white">Production</span>
                          </div>
                        </div>

                        <div className="text-[11px] text-neutral-500 font-mono-num pt-2 border-t border-white/5">
                          Commercial digital tools &middot; Unit economics
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#101014] text-center">
                        <Code className="w-8 h-8 text-[#bef264] mb-3" />
                        <span className="text-white font-syne font-bold">{item.title}</span>
                        <span className="text-xs text-neutral-400 mt-1">{item.subtitle}</span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 p-6 sm:p-8 bg-[#0c0c0e] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white font-syne">
              Have a digital project or venture in mind?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-body">
              Let&apos;s review your objectives and see how Aditya Agrawat and our 48+ member team can help execute.
            </p>
          </div>
          <button
            type="button"
            onClick={onStartProjectClick}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Discuss Your Idea</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
