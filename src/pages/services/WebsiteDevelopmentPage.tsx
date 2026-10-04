import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Smartphone,
  Zap,
  Globe,
  ArrowLeft
} from 'lucide-react';

export const WebsiteDevelopmentPage: React.FC = () => {
  const areasOfWork = [
    {
      title: 'Bespoke Frontend Architecture',
      description:
        'Engineering ultra-fast single page and multi-page web applications using modern TypeScript, React, and modular styling.',
    },
    {
      title: 'Performance & Core Web Vitals',
      description:
        'Achieving sub-second initial load times, perfect visual stability (CLS), and low interaction latency (INP) across mobile devices.',
    },
    {
      title: 'Responsive & Accessible UX',
      description:
        'Crafting fluid layouts tailored for small smartphone viewports through wide desktop monitors with high typographic discipline.',
    },
    {
      title: 'Technical SEO & Metadata Integration',
      description:
        'Embedding complete Schema.org JSON-LD structured data, Open Graph share previews, and canonical hygiene into every template.',
    },
    {
      title: 'Cloud Deployment & CDN Configuration',
      description:
        'Setting up modern build pipelines, continuous integration, static site generation, and resilient production hosting.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Wireframing & Information Architecture',
      text: 'Structuring page flows, brand typography, component hierarchies, and conversion triggers before writing code.',
    },
    {
      num: '02',
      title: 'Full-Stack Development',
      text: 'Writing clean, modular code with strict TypeScript interfaces, responsive CSS, and interactive state management.',
    },
    {
      num: '03',
      title: 'Speed & Device Audit',
      text: 'Testing asset compressions, cross-browser compatibility, screen reader accessibility, and mobile render performance.',
    },
    {
      num: '04',
      title: 'Production Launch & Indexing',
      text: 'Configuring custom domains, SSL certificates, sitemap generation, and verifying clean crawler access.',
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
          <span className="text-white">Website Development</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-16 pb-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num font-semibold uppercase tracking-widest text-[#bef264] mb-4">
            <Code className="w-4 h-4" />
            <span>ENGINEERING &amp; ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-syne mb-6 leading-[1.08]">
            Website Development
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-body leading-relaxed">
            Aditya Agrawat engineers modern, ultra-responsive websites and web platforms crafted for high speed, unmistakable brand presence, and seamless conversion across desktop and mobile environments.
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
            What Website Development Involves
          </h2>
          <div className="space-y-4 text-base text-neutral-300 font-body leading-relaxed">
            <p>
              A website is often the primary anchor of a modern brand. Rather than deploying rigid, slow website builders with unnecessary dependencies, Aditya Agrawat builds bespoke web experiences with contemporary full-stack tools.
            </p>
            <p>
              Supported by frontend developers, UI designers, and technical copywriters across his 48+ member team, every platform is crafted with fast render times, clean typography, and search engine crawlability baked into the core codebase.
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
            A great website performs best with structured search marketing and robust software utilities:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/app-development"
              className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-200 transition-colors"
            >
              App Development →
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
              View Digital Work →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 sm:p-10 bg-[#0e0e12] border-2 border-[#bef264]/40">
          <h2 className="text-2xl font-bold text-white font-syne mb-3">
            Building a New Web Platform?
          </h2>
          <p className="text-sm text-neutral-300 font-body leading-relaxed mb-6">
            Discuss your technical architecture, design goals, or website redesign with Aditya Agrawat.
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
