import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Users,
  Code,
  TrendingUp,
  Tv,
  Search,
  Layers,
  Sparkles,
  Mail,
  Shield,
  Compass,
  Check
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface AboutPageProps {
  onNavigateHome: (hash?: string) => void;
  onStartProjectClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome, onStartProjectClick }) => {
  const whatIDoCards = [
    {
      title: 'Digital Marketing',
      desc: 'Formulating and managing performance marketing campaigns, search acquisition, conversion funnels, and data-backed audience growth.',
      icon: TrendingUp,
    },
    {
      title: 'Website Development',
      desc: 'Engineering modern, ultra-fast websites and corporate portals built with contemporary frameworks, responsive UX, and high brand aesthetic.',
      icon: Code,
    },
    {
      title: 'App Development',
      desc: 'Architecting practical web and mobile applications designed to resolve concrete business needs with clean interfaces and stable cloud backends.',
      icon: Layers,
    },
    {
      title: 'SEO & Content',
      desc: 'Establishing compound search engine authority through clean technical indexing, semantic hierarchy, and structured long-form editorial publishing.',
      icon: Search,
    },
    {
      title: 'Social Media & YouTube Promotion',
      desc: 'Developing audience retention strategies, high-click packaging, long-form YouTube programming, and cross-channel organic distribution.',
      icon: Tv,
    },
    {
      title: 'Digital Products',
      desc: 'Incubating, designing, and launching digital products, self-service software utilities, and online platforms from concept through monetization.',
      icon: Sparkles,
    },
  ];

  const howIWorkSteps = [
    {
      step: '01',
      title: '01 — Understand the Idea',
      desc: 'Analyzing your vision, target audience, market dynamics, and the core opportunity you are building toward.',
    },
    {
      step: '02',
      title: '02 — Plan the Strategy',
      desc: 'Mapping the technical stack, brand positioning, acquisition architecture, and key execution milestones.',
    },
    {
      step: '03',
      title: '03 — Build the Solution',
      desc: 'Developing high-performance code, compelling editorial assets, and intuitive user experiences with high craftsmanship.',
    },
    {
      step: '04',
      title: '04 — Launch & Improve',
      desc: 'Deploying smoothly to production, ensuring cross-platform stability, and gathering real user behavioral signals.',
    },
    {
      step: '05',
      title: '05 — Measure & Scale',
      desc: 'Optimizing conversion funnels, tracking analytics, and scaling distribution to generate long-term digital impact.',
    },
  ];

  const areasOfExpertise = [
    'Digital Marketing',
    'Website Development',
    'App Development',
    'SEO',
    'Content Strategy',
    'Social Media',
    'YouTube Promotion',
    'Digital Products',
    'Digital Strategy',
    'Online Business',
  ];

  return (
    <article className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#080808] text-[#f4f4f5]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs font-mono-num text-neutral-400">
          <button
            type="button"
            onClick={() => onNavigateHome()}
            className="hover:text-[#bef264] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span className="text-neutral-600">/</span>
          <span className="text-white">About Aditya Agrawat</span>
        </nav>

        {/* 2. HERO SECTION */}
        <header className="mb-16 sm:mb-20 pb-12 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono-num font-semibold uppercase tracking-widest text-[#bef264] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#bef264]" />
                <span>ABOUT ADITYA AGRAWAT</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-syne mb-3 leading-[1.04]">
                Aditya Agrawat
              </h1>

              <div className="text-lg sm:text-2xl font-semibold text-[#bef264] font-syne mb-6">
                Digital Marketer · Entrepreneur · Digital Builder
              </div>

              <p className="text-lg sm:text-xl text-neutral-300 font-body leading-relaxed max-w-2xl">
                Aditya Agrawat is a digital marketer, entrepreneur and digital builder working across digital marketing, website development, applications, content, social media, SEO and digital products.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onStartProjectClick}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all cursor-pointer shadow-lg shadow-[#bef264]/10"
                >
                  <span>Work With Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateHome('#work')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Subtle premium visual badge consistent with homepage */}
            <div className="lg:col-span-4 mt-4 lg:mt-0">
              <div className="p-6 bg-[#0c0c0e] border border-white/10 relative overflow-hidden group">
                <div className="text-[11px] font-mono-num text-[#bef264] uppercase tracking-wider mb-2">
                  OFFICIAL IDENTITY
                </div>
                <div className="text-xl font-extrabold text-white font-syne mb-2">
                  ADITYA AGRAWAT
                </div>
                <p className="text-xs text-neutral-400 font-body mb-4">
                  Directing end-to-end execution across technology, marketing and digital business ventures.
                </p>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono-num text-neutral-400">
                  <span>SCALE:</span>
                  <span className="text-[#bef264] font-bold">48+ SPECIALISTS</span>
                </div>
                {/* Ambient glow hairline */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#bef264]/5 blur-2xl pointer-events-none" />
              </div>
            </div>
          </div>
        </header>

        {/* 3. WHO IS ADITYA AGRAWAT? */}
        <section aria-labelledby="section-who-is-aditya" className="mb-20">
          <div className="flex items-center gap-2 text-xs font-mono-num text-[#bef264] uppercase tracking-wider mb-2">
            <span>01</span>
            <span className="text-neutral-600">·</span>
            <span>PROFILE &amp; BACKGROUND</span>
          </div>
          <h2 id="section-who-is-aditya" className="text-2xl sm:text-4xl font-bold text-white font-syne mb-6">
            Who Is Aditya Agrawat?
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-neutral-300 font-body leading-relaxed">
            <div className="p-6 sm:p-8 bg-[#0c0c0f] border-l-2 border-[#bef264] border-y border-r border-white/5">
              <p className="text-white font-medium">
                Aditya Agrawat is an Indian digital marketer, entrepreneur and digital builder who operates at the intersection of digital marketing, technology, content and online business.
              </p>
            </div>

            <p>
              His background is rooted in understanding how technical engineering and modern audience acquisition reinforce one another. Rather than approaching websites, marketing campaigns, and applications as disconnected efforts, Aditya focuses on unifying them into cohesive, self-sustaining digital systems.
            </p>

            <p>
              From conceptualizing digital products and writing technical specifications to orchestrating multi-channel search optimization, YouTube video distribution, and conversion architecture, his daily work is centered on building practical digital assets that generate real-world commercial results.
            </p>

            <p>
              Operating with an execution-driven mindset, Aditya combines long-term organic compounding through SEO and content publishing with agile engineering and performance marketing.
            </p>
          </div>
        </section>

        {/* 4. WHAT I DO */}
        <section aria-labelledby="section-what-i-do" className="mb-20">
          <div className="flex items-center gap-2 text-xs font-mono-num text-[#bef264] uppercase tracking-wider mb-2">
            <span>02</span>
            <span className="text-neutral-600">·</span>
            <span>CORE SERVICES &amp; PRACTICES</span>
          </div>
          <h2 id="section-what-i-do" className="text-2xl sm:text-4xl font-bold text-white font-syne mb-4">
            What I Do
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-body mb-8">
            Aditya leads projects across six fundamental areas of the digital ecosystem:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatIDoCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="p-6 bg-[#0c0c0f] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-5 h-5 text-[#bef264]" />
                      <span className="text-[11px] font-mono-num text-neutral-500">EXPERTISE</span>
                    </div>
                    <h3 className="text-lg font-bold text-white font-syne mb-2 group-hover:text-[#bef264] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 font-body leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. AREAS OF EXPERTISE */}
        <section aria-labelledby="section-areas-of-expertise" className="mb-20">
          <div className="flex items-center gap-2 text-xs font-mono-num text-[#bef264] uppercase tracking-wider mb-2">
            <span>03</span>
            <span className="text-neutral-600">·</span>
            <span>COMPETENCY DOMAINS</span>
          </div>
          <h2 id="section-areas-of-expertise" className="text-2xl sm:text-4xl font-bold text-white font-syne mb-4">
            Areas of Expertise
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-body mb-6">
            Aditya Agrawat brings direct strategic and technical experience across key digital disciplines:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {areasOfExpertise.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 p-3.5 bg-[#0c0c0f] border border-white/5 hover:border-white/20 transition-all text-xs sm:text-sm font-medium text-neutral-200"
              >
                <CheckCircle2 className="w-4 h-4 text-[#bef264] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. HOW I WORK */}
        <section aria-labelledby="section-how-i-work" className="mb-20">
          <div className="flex items-center gap-2 text-xs font-mono-num text-[#bef264] uppercase tracking-wider mb-2">
            <span>04</span>
            <span className="text-neutral-600">·</span>
            <span>STRATEGIC METHODOLOGY</span>
          </div>
          <h2 id="section-how-i-work" className="text-2xl sm:text-4xl font-bold text-white font-syne mb-4">
            How I Work
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-body mb-8">
            A structured, transparent 5-step process ensures digital initiatives move from initial vision to measurable scale without friction:
          </p>

          <div className="space-y-4">
            {howIWorkSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-[#0c0c0f] border border-white/[0.08] flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
              >
                <span className="text-xl sm:text-2xl font-extrabold text-[#bef264] font-mono-num shrink-0">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-syne mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-body leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. THE TEAM BEHIND THE WORK */}
        <section aria-labelledby="section-my-team" className="mb-20">
          <div className="flex items-center gap-2 text-xs font-mono-num text-[#bef264] uppercase tracking-wider mb-2">
            <span>05</span>
            <span className="text-neutral-600">·</span>
            <span>COLLECTIVE SCALE</span>
          </div>
          <h2 id="section-my-team" className="text-2xl sm:text-4xl font-bold text-white font-syne mb-4">
            The Team Behind the Work
          </h2>

          <div className="p-8 bg-[#0c0c0f] border border-white/10 relative overflow-hidden">
            <div className="flex items-start gap-4 mb-4">
              <Users className="w-6 h-6 text-[#bef264] shrink-0 mt-1" />
              <div>
                <blockquote className="text-lg sm:text-xl font-medium text-white font-body italic mb-3">
                  &ldquo;Aditya works with a 48+ member team across different digital, creative and execution-focused roles.&rdquo;
                </blockquote>
                <p className="text-xs sm:text-sm text-neutral-300 font-body leading-relaxed">
                  Great digital work requires diverse technical and creative skills. By coordinating an agile team across frontend and backend development, copywriting, video editing, graphics, campaign management, and digital operations, projects are delivered with high responsiveness and consistent quality.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/5 flex flex-wrap gap-2 text-xs font-mono-num text-neutral-400">
              <span className="px-3 py-1.5 bg-white/5 border border-white/5 text-neutral-300">Technology &amp; Code</span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/5 text-neutral-300">Marketing &amp; Growth</span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/5 text-neutral-300">Content &amp; Editorial</span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/5 text-neutral-300">Design &amp; Media</span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/5 text-neutral-300">Operations &amp; Delivery</span>
            </div>
          </div>
        </section>

        {/* 8. HAVE AN IDEA? LET'S BUILD IT. */}
        <section aria-labelledby="section-have-an-idea" className="p-8 sm:p-12 bg-[#0c0c0f] border-2 border-[#bef264]/40 relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-mono-num text-[#bef264] uppercase tracking-wider block mb-2">
              COLLABORATE
            </span>
            <h2 id="section-have-an-idea" className="text-2xl sm:text-4xl font-extrabold text-white font-syne mb-4">
              Have an Idea? Let&apos;s Build It.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-body max-w-2xl leading-relaxed mb-8">
              We are open to discussing projects, collaborations, digital marketing campaigns, websites, applications, content pipelines, digital products, and new business ideas. Reach out to Aditya Agrawat and his team to start a conversation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onStartProjectClick}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all cursor-pointer shadow-lg shadow-[#bef264]/10"
              >
                <span>Work With Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigateHome('#contact')}
                className="inline-flex items-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              >
                <span>Contact</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400 font-mono-num">
              <div>
                Direct email:{' '}
                <a
                  href={`mailto:${SITE_DATA.contact.email}`}
                  className="text-white hover:text-[#bef264] transition-colors"
                >
                  {SITE_DATA.contact.email}
                </a>
              </div>
              <div>
                Official website: <span className="text-neutral-300">aditya-agrawat.onrender.com</span>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home Link */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onNavigateHome()}
            className="inline-flex items-center gap-2 text-xs font-mono-num text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </button>
        </div>
      </div>
    </article>
  );
};
