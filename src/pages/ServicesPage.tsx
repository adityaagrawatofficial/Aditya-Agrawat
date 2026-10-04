import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Code,
  Layers,
  Search,
  Tv,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Users,
  Compass,
  Zap,
  Target
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export const ServicesPage: React.FC = () => {
  const serviceList = [
    {
      title: 'Digital Marketing',
      slug: '/digital-marketing',
      icon: TrendingUp,
      tag: 'GROWTH & ACQUISITION',
      summary:
        'Performance marketing, search acquisition funnels, audience targeting, and data-backed conversion optimization.',
      deliverables: [
        'Search engine marketing & campaign management',
        'Conversion funnel architecture & CRO',
        'Audience segmentation & acquisition modeling',
        'Performance tracking & attribution measurement',
      ],
    },
    {
      title: 'Website Development',
      slug: '/website-development',
      icon: Code,
      tag: 'WEB ARCHITECTURE',
      summary:
        'Engineering ultra-fast, bespoke websites and brand platforms built with contemporary TypeScript and modern CSS.',
      deliverables: [
        'Custom responsive frontend architecture',
        'Corporate & personal brand web platforms',
        'Core Web Vitals & performance optimization',
        'Modular component design systems',
      ],
    },
    {
      title: 'App Development',
      slug: '/app-development',
      icon: Layers,
      tag: 'SOFTWARE SOLUTIONS',
      summary:
        'Practical web and mobile applications designed to resolve concrete business needs with clean UX and resilient cloud backends.',
      deliverables: [
        'Full-stack web application development',
        'REST & cloud API integration architecture',
        'Workflow automation tools & utilities',
        'Interactive dashboards & authenticated portals',
      ],
    },
    {
      title: 'SEO & Content',
      slug: '/seo-content',
      icon: Search,
      tag: 'ORGANIC AUTHORITY',
      summary:
        'Establishing sustainable organic search authority through clean technical indexing, structured data, and high-depth editorial content.',
      deliverables: [
        'Topical search authority & architecture mapping',
        'Schema.org structured data implementation',
        'Technical crawlability & index hygiene',
        'Long-term editorial publishing strategies',
      ],
    },
    {
      title: 'Social Media & YouTube Promotion',
      slug: '/social-media-promotion',
      icon: Tv,
      tag: 'MEDIA & REACH',
      summary:
        'Audience retention packaging, long-form YouTube programming, and cross-channel organic distribution systems.',
      deliverables: [
        'YouTube video packaging & click-through optimization',
        'Audience retention & programming frameworks',
        'Short-form vertical video syndication',
        'Organic community growth & engagement loops',
      ],
    },
    {
      title: 'Digital Products',
      slug: '/digital-products',
      icon: Sparkles,
      tag: 'PRODUCT INCUBATION',
      summary:
        'Incubating, designing, and launching digital products, software utilities, and online platforms from concept through monetization.',
      deliverables: [
        'MVP prototyping & product validation',
        'Digital utility & self-service software design',
        'Monetization & payment workflow engineering',
        'User onboarding & activation systems',
      ],
    },
  ];

  return (
    <article className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#080808] text-[#f4f4f5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs font-mono-num text-neutral-400">
          <Link to="/" className="hover:text-[#bef264] transition-colors">
            Aditya Agrawat
          </Link>
          <span className="text-neutral-600">/</span>
          <span className="text-white">Services</span>
        </nav>

        {/* Page Header */}
        <header className="mb-16 sm:mb-20 pb-12 border-b border-white/10 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num font-semibold uppercase tracking-widest text-[#bef264] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#bef264]" />
            <span>DISCIPLINES &amp; CAPABILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-syne mb-4 leading-[1.08]">
            Digital Marketing &amp; Digital Services
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-body leading-relaxed max-w-3xl">
            Aditya Agrawat directs comprehensive digital initiatives combining software engineering, performance marketing, search authority, content distribution, and online product design.
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
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
            >
              <span>Explore Digital Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* Core Services Grid */}
        <section aria-labelledby="all-services-heading" className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-mono-num text-[#bef264] uppercase tracking-wider block mb-1">
                EXECUTION PILLARS
              </span>
              <h2 id="all-services-heading" className="text-2xl sm:text-4xl font-bold text-white font-syne">
                Six Strategic Areas of Practice
              </h2>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono-num text-neutral-500">
              06 SPECIALIZED DOMAINS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.slug}
                  className="p-8 bg-[#0c0c0f] border border-white/[0.08] hover:border-white/25 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#bef264] group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono-num text-[#bef264] font-semibold">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono-num text-neutral-400 uppercase tracking-wider mb-2">
                      {service.tag}
                    </div>

                    <h3 className="text-xl font-bold text-white font-syne mb-3 group-hover:text-[#bef264] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-neutral-300 font-body leading-relaxed mb-6">
                      {service.summary}
                    </p>

                    <div className="space-y-2 mb-8 pt-4 border-t border-white/5">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-neutral-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#bef264] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={service.slug}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-wider text-neutral-300 group-hover:text-[#bef264] transition-colors"
                  >
                    <span>View {service.title} Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Strategic Delivery Methodology */}
        <section className="mb-24 p-8 sm:p-12 bg-[#0c0c0f] border border-white/10">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono-num text-[#bef264] uppercase tracking-wider block mb-2">
              METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-3">
              How Strategy Connects to Execution
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-body leading-relaxed">
              Every digital engagement is led directly by Aditya Agrawat in coordination with a 48+ member execution team. By removing the boundary between engineering and marketing, campaigns launch faster and software converts higher.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono-num text-[#bef264] block">01 / DISCOVERY</span>
              <h3 className="text-base font-bold text-white font-syne">Clarity &amp; Positioning</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-body">
                Defining technical requirements, target personas, unit economics, and primary conversion objectives.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono-num text-[#bef264] block">02 / ENGINEERING</span>
              <h3 className="text-base font-bold text-white font-syne">Bespoke Build</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-body">
                Developing clean code, landing pages, editorial assets, and media packaging with strict technical quality.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono-num text-[#bef264] block">03 / DISTRIBUTION</span>
              <h3 className="text-base font-bold text-white font-syne">Optimization &amp; Scale</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-body">
                Continuously testing attribution signals, search rankings, retention metrics, and funnel efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="p-8 sm:p-12 bg-[#0e0e12] border-2 border-[#bef264]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono-num text-[#bef264] uppercase tracking-wider block mb-2">
              GET STARTED
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-2">
              Have a Project or Initiative in Mind?
            </h2>
            <p className="text-sm text-neutral-300 font-body max-w-xl">
              Discuss marketing campaigns, website architecture, mobile apps, or product collaboration directly with Aditya Agrawat.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all cursor-pointer shadow-lg shadow-[#bef264]/10"
            >
              <span>Contact Aditya Agrawat</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about-aditya-agrawat"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
            >
              <span>About Aditya Agrawat</span>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
};
