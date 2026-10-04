import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  BarChart3,
  Target,
  Search,
  Filter,
  ArrowLeft
} from 'lucide-react';

export const DigitalMarketingPage: React.FC = () => {
  const areasOfWork = [
    {
      title: 'Performance Marketing & Paid Search',
      description:
        'Managing targeted campaigns across search and acquisition channels with strict cost-per-acquisition hygiene.',
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      description:
        'Designing and testing high-intent landing pages, user journey flows, and checkout funnels that maximize lead volume.',
    },
    {
      title: 'Audience Segmentation & Targeting',
      description:
        'Profiling customer demographics and behavioral signals to eliminate advertising waste and reach high-value prospects.',
    },
    {
      title: 'Analytics, Tagging & Attribution',
      description:
        'Implementing clean measurement infrastructure to understand multi-touch user journeys and commercial channel impact.',
    },
    {
      title: 'Retargeting & Lifecycle Marketing',
      description:
        'Engaging high-intent visitors across platforms with sequential messaging to reduce churn and increase customer lifetime value.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Audit & Objective Definition',
      text: 'Evaluating existing traffic data, customer acquisition costs, competitor positioning, and primary business KPIs.',
    },
    {
      num: '02',
      title: 'Funnel & Creative Architecture',
      text: 'Drafting high-conversion landing page structures, compelling copy angles, and precise campaign targeting parameters.',
    },
    {
      num: '03',
      title: 'Launch & Baseline Tracking',
      text: 'Deploying campaigns with verified conversion tracking, negative keyword lists, and real-time behavioral event monitoring.',
    },
    {
      num: '04',
      title: 'Iterative Optimization & Scale',
      text: 'Analyzing attribution returns weekly, reallocating spend to top-performing cohorts, and expanding audience reach.',
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
          <span className="text-white">Digital Marketing</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-16 pb-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num font-semibold uppercase tracking-widest text-[#bef264] mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>GROWTH &amp; PERFORMANCE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-syne mb-6 leading-[1.08]">
            Digital Marketing
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-body leading-relaxed">
            Aditya Agrawat designs and executes data-driven digital marketing campaigns focused on commercial returns rather than vanity metrics. By aligning search intent, conversion funnels, and precise analytics, initiatives generate predictable customer acquisition.
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
            What Digital Marketing Involves
          </h2>
          <div className="space-y-4 text-base text-neutral-300 font-body leading-relaxed">
            <p>
              In contemporary business, marketing cannot be treated as separate from technical execution. Aditya Agrawat approaches digital marketing through an engineering lens: every dollar spent across paid acquisition must connect seamlessly with high-speed landing pages, clear value propositions, and clean attribution tracking.
            </p>
            <p>
              Working alongside a 48+ member execution team specializing in copywriting, graphic design, analytics setup, and campaign operations, campaigns are orchestrated to scale sustainable discovery without unnecessary trial-and-error.
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
            Digital marketing produces the strongest results when paired with high-performance web platforms and organic search compounding:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/website-development"
              className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-200 transition-colors"
            >
              Website Development →
            </Link>
            <Link
              to="/seo-content"
              className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-200 transition-colors"
            >
              SEO &amp; Content →
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
            Ready to Plan Your Marketing Acquisition?
          </h2>
          <p className="text-sm text-neutral-300 font-body leading-relaxed mb-6">
            Get in touch to discuss your campaign targets, conversion funnels, or upcoming launch.
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
