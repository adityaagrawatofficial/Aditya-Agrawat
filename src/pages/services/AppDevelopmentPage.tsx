import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Database,
  Cloud,
  Terminal,
  Shield,
  ArrowLeft
} from 'lucide-react';

export const AppDevelopmentPage: React.FC = () => {
  const areasOfWork = [
    {
      title: 'Full-Stack Web Applications',
      description:
        'Architecting custom web applications with responsive interfaces, robust server logic, and structured database state.',
    },
    {
      title: 'Workflow Automation & Internal Tools',
      description:
        'Developing practical internal utilities and automated software workflows that replace repetitive manual tasks.',
    },
    {
      title: 'API Integrations & Microservices',
      description:
        'Connecting third-party platforms, payment gateways, communication APIs, and cloud services via clean modular endpoints.',
    },
    {
      title: 'Client Portals & Authenticated Dashboards',
      description:
        'Building secure authenticated user zones with role-based access, data visualization, and session management.',
    },
    {
      title: 'Progressive Web Apps (PWAs)',
      description:
        'Creating mobile-first web applications with offline capabilities, home-screen installation, and fast caching strategies.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Scope & Functional Blueprint',
      text: 'Specifying user stories, data schemas, API contracts, and core features for MVP validation.',
    },
    {
      num: '02',
      title: 'Interface Design & Prototyping',
      text: 'Developing interactive UX wireframes and component styling tailored to usability and rapid task completion.',
    },
    {
      num: '03',
      title: 'Core Engineering & Integration',
      text: 'Building frontend views, connecting backend logic, configuring databases, and establishing automated testing.',
    },
    {
      num: '04',
      title: 'Deployment & Monitoring',
      text: 'Deploying to scalable cloud infrastructure with environment isolation, logging, and error tracking.',
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
          <span className="text-white">App Development</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-16 pb-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num font-semibold uppercase tracking-widest text-[#bef264] mb-4">
            <Layers className="w-4 h-4" />
            <span>SOFTWARE &amp; UTILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-syne mb-6 leading-[1.08]">
            App Development
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-body leading-relaxed">
            Aditya Agrawat directs the design and engineering of practical web and mobile applications. Focused on intuitive usability, clean code, and reliable backend infrastructure, each application solves real operational and customer needs.
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
            What App Development Involves
          </h2>
          <div className="space-y-4 text-base text-neutral-300 font-body leading-relaxed">
            <p>
              Modern digital ventures frequently require software beyond marketing landing pages. Whether building interactive calculation tools, client portals, internal team dashboards, or standalone SaaS products, Aditya Agrawat leads application engineering from concept through deployment.
            </p>
            <p>
              In close collaboration with full-stack engineers and backend specialists across his 48+ member team, applications are built with clear interfaces, maintainable TypeScript code, and scalable database schemas.
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
            Software applications frequently power broader commercial digital platforms:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/digital-products"
              className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-200 transition-colors"
            >
              Digital Products →
            </Link>
            <Link
              to="/website-development"
              className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-200 transition-colors"
            >
              Website Development →
            </Link>
            <Link
              to="/projects"
              className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-200 transition-colors"
            >
              Explore Digital Work →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 sm:p-10 bg-[#0e0e12] border-2 border-[#bef264]/40">
          <h2 className="text-2xl font-bold text-white font-syne mb-3">
            Have an Application Idea?
          </h2>
          <p className="text-sm text-neutral-300 font-body leading-relaxed mb-6">
            Discuss functional requirements, technical stack choices, or development roadmaps with Aditya Agrawat.
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
