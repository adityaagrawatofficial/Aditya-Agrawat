import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Layers,
  TrendingUp,
  Search,
  Tv,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Filter,
  Users
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'websites', label: 'Websites' },
    { id: 'applications', label: 'Applications' },
    { id: 'marketing', label: 'Digital Marketing Projects' },
    { id: 'seo', label: 'Content & SEO' },
    { id: 'social', label: 'Social Media Projects' },
    { id: 'products', label: 'Digital Products' },
  ];

  const workItems = [
    {
      title: 'Bespoke Brand & Corporate Websites',
      category: 'websites',
      categoryLabel: 'Websites',
      icon: Code,
      desc: 'High-performance web architecture, responsive corporate portals, and personal brand platforms engineered for fast load speeds and distinct typographic presence.',
      techStack: ['TypeScript', 'Tailwind CSS', 'Vite', 'Responsive UX', 'Semantic HTML'],
      capabilities: [
        'Component design systems',
        'Sub-second Core Web Vitals',
        'Crawlable technical indexing',
      ],
      link: '/website-development',
      linkText: 'Explore Website Development',
    },
    {
      title: 'Interactive Web Applications & Dashboards',
      category: 'applications',
      categoryLabel: 'Applications',
      icon: Layers,
      desc: 'Practical software solutions, authenticated management dashboards, and workflow automation utilities engineered to solve concrete business requirements.',
      techStack: ['React', 'REST APIs', 'Cloud Databases', 'State Management'],
      capabilities: [
        'Authenticated user access',
        'Real-time data visualization',
        'Clean API integration',
      ],
      link: '/app-development',
      linkText: 'Explore App Development',
    },
    {
      title: 'Conversion Funnels & Search Acquisition Campaigns',
      category: 'marketing',
      categoryLabel: 'Digital Marketing Projects',
      icon: TrendingUp,
      desc: 'Targeted performance marketing campaigns, search acquisition structures, landing page conversion funnels, and attribution measurement setups.',
      techStack: ['Search Marketing', 'CRO', 'Attribution Analytics', 'Funnel Design'],
      capabilities: [
        'Cost-per-acquisition hygiene',
        'High-intent landing pages',
        'Audience segmentation',
      ],
      link: '/digital-marketing',
      linkText: 'Explore Digital Marketing',
    },
    {
      title: 'Topical Authority Hubs & Technical SEO Structures',
      category: 'seo',
      categoryLabel: 'Content & SEO',
      icon: Search,
      desc: 'Architectural search engine optimization, Schema.org JSON-LD structured data systems, and structured content silos designed to generate compound organic search traffic.',
      techStack: ['JSON-LD', 'Topic Modeling', 'Crawl Audits', 'Editorial Strategy'],
      capabilities: [
        'Entity-first Schema graphs',
        'Sitemap & canonical hygiene',
        'Semantic content silos',
      ],
      link: '/seo-content',
      linkText: 'Explore SEO & Content',
    },
    {
      title: 'YouTube Programming & Multi-Platform Media Distribution',
      category: 'social',
      categoryLabel: 'Social Media Projects',
      icon: Tv,
      desc: 'End-to-end video production workflows, audience retention scripting, high-CTR thumbnail packaging, and short-form video syndication systems.',
      techStack: ['Video Packaging', 'Audience Analytics', 'Shorts / Reels', 'Community Loops'],
      capabilities: [
        'High-retention narrative hooks',
        'Click-through optimization',
        'Cross-channel publishing',
      ],
      link: '/social-media-promotion',
      linkText: 'Explore Social Media & YouTube',
    },
    {
      title: 'Digital Tools, Software Utilities & MVP Products',
      category: 'products',
      categoryLabel: 'Digital Products',
      icon: Sparkles,
      desc: 'Incubation, MVP prototyping, checkout flow integrations, and monetization architectures for self-service web utilities and online software products.',
      techStack: ['Product Architecture', 'Stripe / Billing', 'MVP Validation', 'Onboarding UX'],
      capabilities: [
        'Rapid prototype validation',
        'Direct checkout integration',
        'Low-friction onboarding',
      ],
      link: '/digital-products',
      linkText: 'Explore Digital Products',
    },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? workItems
      : workItems.filter((item) => item.category === selectedCategory);

  return (
    <article className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#080808] text-[#f4f4f5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs font-mono-num text-neutral-400">
          <Link to="/" className="hover:text-[#bef264] transition-colors">
            Aditya Agrawat
          </Link>
          <span className="text-neutral-600">/</span>
          <span className="text-white">Projects</span>
        </nav>

        {/* Header */}
        <header className="mb-16 sm:mb-20 pb-12 border-b border-white/10 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num font-semibold uppercase tracking-widest text-[#bef264] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#bef264]" />
            <span>PORTFOLIO &amp; EXECUTION DOMAINS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-syne mb-4 leading-[1.08]">
            Projects &amp; Digital Work
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-body leading-relaxed max-w-3xl">
            A comprehensive overview of execution domains and digital platforms directed by Aditya Agrawat across web architecture, application development, search optimization, performance funnels, media distribution, and online software products.
          </p>

          <div className="mt-6 p-4 bg-[#0e0e12] border border-white/5 text-xs text-neutral-400 font-body max-w-2xl">
            <span className="text-white font-semibold block mb-1">Authentic Practice Disclosure:</span>
            In adherence to factual brand integrity, the projects below represent core technical and operational areas of execution directed by Aditya Agrawat and his 48+ member team, rather than unverified client testimonials or fabricated awards.
          </div>
        </header>

        {/* Filter Controls */}
        <div className="mb-12 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-mono-num font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#bef264] text-black shadow-md shadow-[#bef264]/10'
                  : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <section aria-label="Projects and execution categories" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 bg-[#0c0c0f] border border-white/[0.08] hover:border-white/25 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono-num text-[#bef264] uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-[#bef264] transition-colors" />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white font-syne mb-3 group-hover:text-[#bef264] transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-sm text-neutral-300 font-body leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Capabilities */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    {item.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#bef264] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono-num bg-white/5 border border-white/5 text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to={item.link}
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-[#bef264] transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/contact"
                    className="text-xs font-mono-num text-[#bef264] hover:underline"
                  >
                    Inquire →
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        {/* Team Collaboration Note */}
        <section className="mb-20 p-8 sm:p-10 bg-[#0c0c0f] border border-white/10">
          <div className="flex items-start gap-4">
            <Users className="w-6 h-6 text-[#bef264] shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-white font-syne mb-2">
                Team Scale &amp; Delivery Capacity
              </h2>
              <p className="text-sm text-neutral-300 font-body leading-relaxed mb-4">
                Aditya works alongside a 48+ member multidisciplinary team spanning engineering, content creation, visual design, campaign management, and digital operations. This structure ensures projects move rapidly from initial wireframes to high-performing production deployments.
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <Link to="/about-aditya-agrawat" className="text-[#bef264] hover:underline font-mono-num">
                  Read About Aditya Agrawat &amp; Team →
                </Link>
                <Link to="/services" className="text-neutral-300 hover:text-white font-mono-num">
                  View Full Services Breakdown →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 sm:p-12 bg-[#0e0e12] border-2 border-[#bef264]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono-num text-[#bef264] uppercase tracking-wider block mb-2">
              START A CONVERSATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-2">
              Have a Project in Mind?
            </h2>
            <p className="text-sm text-neutral-300 font-body max-w-xl">
              Discuss marketing systems, websites, application engineering, or product joint ventures directly.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
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
              <span>Explore Services</span>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
};
