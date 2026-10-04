import React from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe, Users, Code, TrendingUp, Tv, Search, Layers, Mail } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface AboutPageProps {
  onNavigateHome: (hash?: string) => void;
  onStartProjectClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome, onStartProjectClick }) => {
  return (
    <article className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#080808] text-[#f4f4f5]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb / Back to Home */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <button
            type="button"
            onClick={() => onNavigateHome()}
            className="inline-flex items-center gap-2 text-xs font-mono-num text-neutral-400 hover:text-[#bef264] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Main Hub</span>
          </button>
        </nav>

        {/* Primary Page Header */}
        <header className="mb-14 pb-10 border-b border-white/10">
          <div className="text-xs font-mono-num font-semibold uppercase tracking-widest text-[#bef264] mb-3">
            DETAILED PROFILE &amp; PROFESSIONAL BACKGROUND
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-syne mb-6 leading-[1.08]">
            Who Is Aditya Agrawat?
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-300 font-medium font-body leading-relaxed">
            Digital Marketer, Entrepreneur &amp; Digital Builder. Leading cross-disciplinary digital initiatives with a 48+ member team.
          </p>
        </header>

        {/* 1. Who is Aditya Agrawat? */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-5 flex items-center gap-3">
            <span className="text-xs font-mono-num text-[#bef264]">01</span>
            <span>Who is Aditya Agrawat?</span>
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-body leading-relaxed">
            <p>
              Aditya Agrawat is an Indian digital marketer, entrepreneur and digital builder working across technology, digital marketing, content and online businesses. Operating from India with a global execution footprint, he focuses on turning strategic concepts into robust, revenue-generating digital realities.
            </p>
            <p>
              Rather than treating technical development and marketing as isolated functions, Aditya unites them into a cohesive digital discipline. His philosophy centers on practical execution: software must be engineered to scale, and marketing campaigns must be grounded in measurable commercial outcomes.
            </p>
            <p>
              Working alongside a dedicated 48+ member team across marketing, content, design, development, promotion and operations, Aditya provides comprehensive leadership for brands, founders, and digital ventures.
            </p>
          </div>
        </section>

        {/* 2. What does Aditya Agrawat do? */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-5 flex items-center gap-3">
            <span className="text-xs font-mono-num text-[#bef264]">02</span>
            <span>What does Aditya Agrawat do?</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-body leading-relaxed mb-6">
            Aditya Agrawat orchestrates the entire lifecycle of modern digital assets. From early-stage product roadmaps to technical engineering and multi-channel audience growth, his scope of work spans six key execution pillars:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-[#0e0e12] border border-white/5">
              <span className="text-xs font-mono-num text-[#bef264] block mb-1">Pillar 1</span>
              <h3 className="text-base font-bold text-white font-syne mb-1">Digital Marketing</h3>
              <p className="text-xs text-neutral-400">Search strategy, paid acquisition, and conversion funnels.</p>
            </div>
            <div className="p-5 bg-[#0e0e12] border border-white/5">
              <span className="text-xs font-mono-num text-[#bef264] block mb-1">Pillar 2</span>
              <h3 className="text-base font-bold text-white font-syne mb-1">Web &amp; Application Development</h3>
              <p className="text-xs text-neutral-400">Custom web architecture, mobile apps, and developer toolchains.</p>
            </div>
            <div className="p-5 bg-[#0e0e12] border border-white/5">
              <span className="text-xs font-mono-num text-[#bef264] block mb-1">Pillar 3</span>
              <h3 className="text-base font-bold text-white font-syne mb-1">Content &amp; Social Media</h3>
              <p className="text-xs text-neutral-400">YouTube programming, video syndication, and editorial reach.</p>
            </div>
            <div className="p-5 bg-[#0e0e12] border border-white/5">
              <span className="text-xs font-mono-num text-[#bef264] block mb-1">Pillar 4</span>
              <h3 className="text-base font-bold text-white font-syne mb-1">SEO &amp; Digital Products</h3>
              <p className="text-xs text-neutral-400">Topical search authority, SaaS utilities, and venture incubation.</p>
            </div>
          </div>
        </section>

        {/* 3. Digital Marketing */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-5 flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-[#bef264]" />
            <span>Digital Marketing</span>
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-body leading-relaxed">
            <p>
              In digital marketing, Aditya Agrawat emphasizes measurable conversion systems over vanity impressions. His approach aligns paid search and paid social campaigns with optimized landing pages, precise tracking infrastructure, and deep audience segmentation.
            </p>
            <p>
              By continuously evaluating attribution data and user journey metrics, his marketing workflows help businesses generate sustainable inbound discovery and customer retention without wasted advertising spend.
            </p>
          </div>
        </section>

        {/* 4. Website & Application Development */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-5 flex items-center gap-3">
            <Code className="w-5 h-5 text-[#bef264]" />
            <span>Website &amp; Application Development</span>
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-body leading-relaxed">
            <p>
              Modern digital brands need more than surface-level templates. Aditya directs the engineering of bespoke websites and applications using contemporary full-stack technologies like TypeScript, React, and modular cloud APIs.
            </p>
            <p>
              Prioritizing ultra-fast load times, clean typographic hierarchy, and responsive layouts, each web build is crafted to deliver seamless performance on mobile, tablet, and desktop environments.
            </p>
          </div>
        </section>

        {/* 5. Content & Social Media */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-5 flex items-center gap-3">
            <Tv className="w-5 h-5 text-[#bef264]" />
            <span>Content &amp; Social Media</span>
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-body leading-relaxed">
            <p>
              Organic distribution is central to sustainable digital growth. Aditya Agrawat oversees content frameworks and YouTube channel operations that translate complex concepts into high-retention video narratives.
            </p>
            <p>
              Through systematic short-form packaging, long-form video programming, and community engagement loops, his media systems cultivate dedicated audiences and establish authentic brand presence across networks.
            </p>
          </div>
        </section>

        {/* 6. SEO & Blogging */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-5 flex items-center gap-3">
            <Search className="w-5 h-5 text-[#bef264]" />
            <span>SEO &amp; Blogging</span>
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-body leading-relaxed">
            <p>
              Search engines reward clarity, technical rigor, and topical depth. Aditya approaches search engine optimization (SEO) by building authoritative content hubs and maintaining strict technical hygiene.
            </p>
            <p>
              His work includes architectural site indexing, Schema.org structured data, and content publishing strategies that generate compound organic traffic over months and years.
            </p>
          </div>
        </section>

        {/* 7. Digital Products */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-5 flex items-center gap-3">
            <Layers className="w-5 h-5 text-[#bef264]" />
            <span>Digital Products</span>
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-body leading-relaxed">
            <p>
              Beyond service client engagements, Aditya focuses on incubating commercial digital products and online businesses. These ventures translate recurring market needs into intuitive digital tools, web platforms, and automated utilities.
            </p>
            <p>
              From validation and MVP prototyping to monetization and user onboarding, each product is built with clear unit economics and functional elegance.
            </p>
          </div>
        </section>

        {/* 8. The 48+ Member Team */}
        <section className="mb-16 p-8 bg-[#0c0c0e] border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-4 flex items-center gap-3">
            <Users className="w-6 h-6 text-[#bef264]" />
            <span>The 48+ Member Team</span>
          </h2>
          <blockquote className="text-base sm:text-lg text-neutral-200 font-body italic border-l-2 border-[#bef264] pl-4 mb-4">
            &ldquo;Great digital work isn&apos;t built alone. A 48+ member team works across technology, marketing, content, design, promotion and operations.&rdquo;
          </blockquote>
          <p className="text-sm text-neutral-300 leading-relaxed font-body mb-6">
            Aditya Agrawat leads a distributed, multidisciplinary workforce. With specialists across engineering, content production, graphic design, search optimization, and campaign operations, the team delivers comprehensive digital execution without compromising speed or craftsmanship.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono-num text-neutral-400">
            <span className="p-2 bg-white/5 border border-white/5">MARKETING</span>
            <span className="p-2 bg-white/5 border border-white/5">CONTENT</span>
            <span className="p-2 bg-white/5 border border-white/5">DESIGN</span>
            <span className="p-2 bg-white/5 border border-white/5">DEVELOPMENT</span>
            <span className="p-2 bg-white/5 border border-white/5">PROMOTION</span>
            <span className="p-2 bg-white/5 border border-white/5">OPERATIONS</span>
          </div>
        </section>

        {/* 9. Partnerships & Collaborations */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-5 flex items-center gap-3">
            <Globe className="w-5 h-5 text-[#bef264]" />
            <span>Partnerships &amp; Collaborations</span>
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-body leading-relaxed mb-6">
            <p>
              Aditya Agrawat is actively open to collaborating with entrepreneurs, businesses, content creators, and digital teams. Whether partnering on long-term venture building, audience monetization, or technical software execution, he values shared conviction and clear alignment.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateHome('#partnerships')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#bef264] hover:underline cursor-pointer"
          >
            <span>Explore Partnership Models on Home Page</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </section>

        {/* 10. Contact Aditya Agrawat */}
        <section className="p-8 sm:p-10 bg-[#0e0e12] border-2 border-[#bef264]/40">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-syne mb-3">
            Contact Aditya Agrawat
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-body leading-relaxed mb-6">
            Ready to discuss a digital marketing campaign, web development project, application, or partnership? Reach out directly to Aditya and his team.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${SITE_DATA.contact.email}?subject=Inquiry%20from%20Profile%20Page%20-%20Aditya%20Agrawat`}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Email Aditya Directly</span>
            </a>
            <button
              type="button"
              onClick={onStartProjectClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
            >
              <span>Open Project Form</span>
            </button>
          </div>
          <div className="mt-6 text-xs text-neutral-400 font-mono-num">
            Direct email: <span className="text-white">{SITE_DATA.contact.email}</span>
          </div>
        </section>
      </div>
    </article>
  );
};
