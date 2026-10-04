import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Users
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who is Aditya Agrawat?',
      a: 'Aditya Agrawat is an Indian digital marketer, entrepreneur and digital builder who operates at the intersection of digital marketing, technology, content and online businesses. Based in India with a global execution reach, he works alongside a 48+ member multidisciplinary team.',
      link: '/about-aditya-agrawat',
      linkText: 'Read Full About Aditya Agrawat Profile',
    },
    {
      q: 'What does Aditya Agrawat do?',
      a: 'Aditya Agrawat directs end-to-end digital assets—from concept and engineering to audience distribution and monetization. His work spans performance marketing campaigns, custom website engineering, mobile and web applications, SEO content strategies, YouTube video production, and commercial digital products.',
      link: '/services',
      linkText: 'Explore All Digital Services',
    },
    {
      q: 'What digital services does Aditya Agrawat offer?',
      a: 'Aditya offers six primary digital disciplines: Digital Marketing (paid search, conversion funnels, attribution), Website Development (bespoke high-performance web platforms), App Development (practical software and workflow utilities), SEO & Content (topical authority and Schema.org structured data), Social Media & YouTube Promotion (video packaging and retention frameworks), and Digital Products (MVP incubation and monetization).',
      link: '/services',
      linkText: 'View Service Breakdown',
    },
    {
      q: 'Does Aditya Agrawat work on websites and applications?',
      a: 'Yes. Aditya directs the engineering of modern websites and applications built with contemporary technologies like TypeScript, React, and modular cloud architectures. Projects focus on ultra-fast Core Web Vitals, accessible responsive design, clean code, and reliable cloud deployments.',
      link: '/website-development',
      linkText: 'Learn About Website Development',
    },
    {
      q: 'What areas of digital marketing does Aditya Agrawat work in?',
      a: 'In digital marketing, the focus is on measurable customer acquisition rather than vanity impressions. Work covers paid search advertising, paid social acquisition, conversion rate optimization (CRO), custom landing page funnels, audience segmentation, and multi-touch attribution measurement.',
      link: '/digital-marketing',
      linkText: 'Learn About Digital Marketing',
    },
    {
      q: 'How does the 48+ member team work?',
      a: 'Aditya coordinates a distributed team of 48+ specialists across frontend and backend development, copywriting, video editing, graphic design, search optimization, and campaign operations. This multidisciplinary structure allows initiatives to be engineered and scaled with high speed and technical quality.',
      link: '/about-aditya-agrawat',
      linkText: 'Read About Team Organization',
    },
    {
      q: 'How can I contact Aditya Agrawat?',
      a: `You can reach out directly via official email at ${SITE_DATA.contact.email} or by completing the online inquiry form on the contact page. Inquiries are typically reviewed within 24 to 48 business hours.`,
      link: '/contact',
      linkText: 'Go to Contact Page',
    },
    {
      q: 'How can I discuss a digital project or partnership?',
      a: 'Whether you are an entrepreneur looking to launch a digital venture, a business seeking growth marketing, a creator building an audience platform, or a team requiring software engineering, you can initiate a conversation through the contact page or by sending an email outlining your timeline and goals.',
      link: '/contact',
      linkText: 'Start a Project Discussion',
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
          <span className="text-white">FAQ</span>
        </nav>

        {/* Page Header */}
        <header className="mb-16 sm:mb-20 pb-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num font-semibold uppercase tracking-widest text-[#bef264] mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>KNOWLEDGE BASE &amp; ANSWERS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-syne mb-6 leading-[1.08]">
            Frequently Asked Questions
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-body leading-relaxed">
            Clear, transparent answers regarding Aditya Agrawat, his work across digital marketing, software development, video distribution, and how his 48+ member team collaborates on digital projects.
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
              to="/about-aditya-agrawat"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
            >
              <span>About Aditya Agrawat</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* FAQ Accordion List */}
        <section aria-labelledby="faq-list-heading" className="mb-20 space-y-4">
          <h2 id="faq-list-heading" className="sr-only">
            Questions List
          </h2>

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="bg-[#0c0c0f] border border-white/[0.08] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-syne flex items-center gap-3">
                    <span className="text-xs font-mono-num text-[#bef264]">0{index + 1}</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#bef264]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5">
                    <p className="text-sm sm:text-base text-neutral-300 font-body leading-relaxed mb-4">
                      {faq.a}
                    </p>
                    <Link
                      to={faq.link}
                      className="inline-flex items-center gap-1.5 text-xs font-mono-num text-[#bef264] hover:underline"
                    >
                      <span>{faq.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* Inter-Section Navigation */}
        <section className="mb-20 p-8 bg-[#0c0c0f] border border-white/10">
          <h2 className="text-lg font-bold text-white font-syne mb-4">
            Further Exploration
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-body">
            <Link
              to="/about-aditya-agrawat"
              className="p-4 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all text-neutral-300 hover:text-white"
            >
              <span className="text-[#bef264] font-mono-num block mb-1">01 / BACKGROUND</span>
              <span className="font-semibold block text-sm mb-1">About Aditya Agrawat</span>
              <span className="text-neutral-400 text-xs">Read the full professional profile and methodology.</span>
            </Link>

            <Link
              to="/services"
              className="p-4 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all text-neutral-300 hover:text-white"
            >
              <span className="text-[#bef264] font-mono-num block mb-1">02 / CAPABILITIES</span>
              <span className="font-semibold block text-sm mb-1">Digital Services</span>
              <span className="text-neutral-400 text-xs">Explore marketing, web architecture, and digital products.</span>
            </Link>

            <Link
              to="/projects"
              className="p-4 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all text-neutral-300 hover:text-white"
            >
              <span className="text-[#bef264] font-mono-num block mb-1">03 / PORTFOLIO</span>
              <span className="font-semibold block text-sm mb-1">Projects &amp; Work</span>
              <span className="text-neutral-400 text-xs">Inspect execution domains across software and media.</span>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 sm:p-10 bg-[#0e0e12] border-2 border-[#bef264]/40">
          <h2 className="text-2xl font-bold text-white font-syne mb-2">
            Have a Question Not Answered Here?
          </h2>
          <p className="text-sm text-neutral-300 font-body leading-relaxed mb-6">
            Feel free to send a message directly to discuss projects, timelines, technical feasibility, or partnership arrangements.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all cursor-pointer shadow-lg shadow-[#bef264]/10"
            >
              <span>Contact Aditya Agrawat</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
            >
              <span>Return to Homepage</span>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
};
