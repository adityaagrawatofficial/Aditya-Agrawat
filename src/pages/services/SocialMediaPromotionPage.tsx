import React from 'react';
import { Link } from 'react-router-dom';
import {
  Tv,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Video,
  PlaySquare,
  Users,
  Share2,
  ArrowLeft
} from 'lucide-react';

export const SocialMediaPromotionPage: React.FC = () => {
  const areasOfWork = [
    {
      title: 'YouTube Programming & Packaging',
      description:
        'Engineering high-click-through thumbnail concepts, hook scripting, and narrative pacing designed to maximize audience watch time.',
    },
    {
      title: 'Cross-Platform Short-Form Syndication',
      description:
        'Repurposing core long-form themes into vertical video formats optimized for multi-network organic discovery.',
    },
    {
      title: 'Audience Retention & Pacing Optimization',
      description:
        'Analyzing video analytics, retention drop-off graphs, and audience engagement curves to refine content structures.',
    },
    {
      title: 'Community Building & Comment Loops',
      description:
        'Establishing authentic engagement practices, pin comments, and feedback loops that turn casual viewers into loyal followers.',
    },
    {
      title: 'Brand Positioning & Organic Reach',
      description:
        'Crafting consistent editorial tone, visual packaging, and distribution cadences that solidify market authority.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Topic & Audience Research',
      text: 'Identifying trending questions, viewer intent gaps, and search-driven video topics with high retention potential.',
    },
    {
      num: '02',
      title: 'Narrative Scripting & Hook Design',
      text: 'Structuring video outlines, script hooks, and visual cue timelines to capture attention within the opening seconds.',
    },
    {
      num: '03',
      title: 'Editing, Packaging & Publishing',
      text: 'Producing high-quality cuts, dynamic pacing, custom graphics, and metadata optimization for maximum organic reach.',
    },
    {
      num: '04',
      title: 'Retention Review & Iteration',
      text: 'Analyzing YouTube analytics, click-through rates, and average view duration to continually optimize future releases.',
    },
  ];

  return (
    <article className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#080808] text-[#f4f4f5]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs font-mono-num text-neutral-400">
          <Link to="/" className="hover:text-[#bef264] transition-colors">
            Aditya Agrawat
          </Link>
          <span className="text-neutral-600">/</span>
          <Link to="/services" className="hover:text-[#bef264] transition-colors">
            Services
          </Link>
          <span className="text-neutral-600">/</span>
          <span className="text-white">Social Media &amp; YouTube Promotion</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-16 pb-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num font-semibold uppercase tracking-widest text-[#bef264] mb-4">
            <Tv className="w-4 h-4" />
            <span>MEDIA, VIDEO &amp; DISTRIBUTION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-syne mb-6 leading-[1.08]">
            Social Media &amp; YouTube Promotion
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-body leading-relaxed">
            Aditya Agrawat directs video packaging, long-form YouTube programming, and cross-channel organic distribution systems designed to capture attention and cultivate authentic digital audiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all cursor-pointer shadow-lg shadow-[#bef264]/10"
            >
              <span>Work With Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Services</span>
            </Link>
          </div>
        </header>

        {/* What the Service Involves */}
        <section className="mb-16">
          <span className="text-xs font-mono-num text-[#bef264] uppercase tracking-wider block mb-2">
            OVERVIEW
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-4">
            What Media Distribution Involves
          </h2>
          <div className="space-y-4 text-base text-neutral-300 font-body leading-relaxed">
            <p>
              In an overcrowded digital landscape, organic media distribution is the most sustainable engine for long-term brand authority. Aditya Agrawat builds content operations that transform valuable expertise into engaging video narratives and shareable social media assets.
            </p>
            <p>
              Supported by video editors, thumbnail designers, copywriters, and channel managers across his 48+ member team, production workflows operate with consistent delivery schedules and high technical standards.
            </p>
          </div>
        </section>

        {/* Typical Areas of Work */}
        <section className="mb-16">
          <span className="text-xs font-mono-num text-[#bef264] uppercase tracking-wider block mb-2">
            PRACTICE AREAS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-6">
            Typical Areas of Work
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {areasOfWork.map((area) => (
              <div key={area.title} className="p-6 bg-[#0c0c0f] border border-white/5 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-[#bef264] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-white font-syne mb-1">{area.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-body leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-16 p-8 bg-[#0c0c0f] border border-white/10">
          <span className="text-xs font-mono-num text-[#bef264] uppercase tracking-wider block mb-2">
            METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-6">
            How the Process Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="space-y-1.5">
                <span className="text-lg font-mono-num text-[#bef264] font-extrabold">{step.num}</span>
                <h3 className="text-base font-bold text-white font-syne">{step.title}</h3>
                <p className="text-xs text-neutral-400 font-body leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Inter-Service Contextual Links */}
        <section className="mb-16 p-6 bg-white/[0.02] border border-white/5">
          <h3 className="text-sm font-bold text-white font-syne mb-3 uppercase tracking-wider">
            Related Disciplines &amp; Digital Work
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 font-body mb-4">
            Video audience reach naturally powers commercial products and service inquiries:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/seo-content"
              className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-200 transition-colors"
            >
              SEO &amp; Content →
            </Link>
            <Link
              to="/digital-marketing"
              className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-200 transition-colors"
            >
              Digital Marketing →
            </Link>
            <Link
              to="/projects"
              className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-200 transition-colors"
            >
              Explore Digital Projects →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 sm:p-10 bg-[#0e0e12] border-2 border-[#bef264]/40">
          <h2 className="text-2xl font-bold text-white font-syne mb-3">
            Looking to Scale Your Media Presence?
          </h2>
          <p className="text-sm text-neutral-300 font-body leading-relaxed mb-6">
            Discuss YouTube packaging, short-form video operations, or audience acquisition with Aditya Agrawat.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all cursor-pointer"
            >
              <span>Contact Aditya Agrawat</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
            >
              <span>Back to Services</span>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
};
