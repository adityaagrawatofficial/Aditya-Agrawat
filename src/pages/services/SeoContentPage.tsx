import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Network,
  BarChart,
  Compass,
  ArrowLeft
} from 'lucide-react';

export const SeoContentPage: React.FC = () => {
  const areasOfWork = [
    {
      title: 'Topical Authority & Semantic Mapping',
      description:
        'Clustering editorial subjects into structured topic silos that signal depth and comprehensive expertise to search engines.',
    },
    {
      title: 'Schema.org Structured Data Architecture',
      description:
        'Implementing clean JSON-LD entities (Person, WebSite, AboutPage, BreadcrumbList, Article) to optimize rich snippet display.',
    },
    {
      title: 'Technical Crawlability & Index Hygiene',
      description:
        'Auditing sitemap hierarchies, canonical URLs, robots directives, and header responses to ensure error-free crawling.',
    },
    {
      title: 'Long-Form Content Strategy & Publishing',
      description:
        'Producing authoritative, non-fluff editorial articles engineered to resolve user intent and attract natural inbound backlinks.',
    },
    {
      title: 'Internal Linking & PageRank Flow',
      description:
        'Structuring contextual internal connections between service pages, editorial resources, and core brand conversion assets.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Topical Research & Intent Audit',
      text: 'Identifying informational and commercial search intents where genuine market demand aligns with business expertise.',
    },
    {
      num: '02',
      title: 'Technical Foundation & Hygiene',
      text: 'Validating server responses, metadata headers, mobile render paths, and structured data schemas across templates.',
    },
    {
      num: '03',
      title: 'Content Architecture & Editorial Production',
      text: 'Authoring in-depth, structured content resources with clear headings, actionable insights, and strict semantic clarity.',
    },
    {
      num: '04',
      title: 'Monitoring, Indexation & Compounding',
      text: 'Tracking search console metrics, impressions, average positions, and organic keyword growth over time.',
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
          <span className="text-white">SEO &amp; Content</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-16 pb-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num font-semibold uppercase tracking-widest text-[#bef264] mb-4">
            <Search className="w-4 h-4" />
            <span>ORGANIC SEARCH &amp; AUTHORITY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-syne mb-6 leading-[1.08]">
            SEO &amp; Content Strategy
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-body leading-relaxed">
            Aditya Agrawat establishes sustainable organic search authority through clean technical SEO, structured data hygiene, and topical content architecture that compounds inbound visibility month after month.
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
            What SEO &amp; Content Strategy Involves
          </h2>
          <div className="space-y-4 text-base text-neutral-300 font-body leading-relaxed">
            <p>
              Search engines reward comprehensive subject-matter depth, transparent technical infrastructure, and genuine user value. Rather than resorting to keyword stuffing or thin automated articles, Aditya Agrawat implements disciplined search systems.
            </p>
            <p>
              Collaborating with research analysts, technical writers, and SEO specialists across his 48+ member team, campaigns prioritize sustainable organic positioning, complete Schema.org graphs, and authoritative publishing.
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
            SEO produces compound value when coupled with video distribution and conversion systems:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/social-media-promotion"
              className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-200 transition-colors"
            >
              Social Media &amp; YouTube →
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
            Want to Build Search Authority?
          </h2>
          <p className="text-sm text-neutral-300 font-body leading-relaxed mb-6">
            Discuss website audits, Schema structured data integration, or long-term content roadmaps with Aditya Agrawat.
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
