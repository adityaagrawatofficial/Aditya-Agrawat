import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Send,
  CheckCircle2,
  Clock,
  ArrowRight,
  Globe,
  Users,
  ShieldAlert,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    reason: 'Digital Marketing',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitted' | 'mailto'>('idle');

  const inquiryReasons = [
    'Digital Marketing',
    'Website Development',
    'App Development',
    'SEO & Content',
    'Social Media / YouTube Promotion',
    'Digital Products',
    'Project Collaboration',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare direct mailto link to ensure 100% genuine transmission to official email
    const subjectLine = encodeURIComponent(
      `[${formData.reason}] ${formData.subject || 'Website Inquiry'} - from ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Reason: ${formData.reason}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${SITE_DATA.contact.email}?subject=${subjectLine}&body=${bodyContent}`;

    // Open default mail client
    window.location.href = mailtoUrl;
    setStatus('submitted');
  };

  return (
    <article className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#080808] text-[#f4f4f5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs font-mono-num text-neutral-400">
          <Link to="/" className="hover:text-[#bef264] transition-colors">
            Aditya Agrawat
          </Link>
          <span className="text-neutral-600">/</span>
          <span className="text-white">Contact</span>
        </nav>

        {/* Page Header */}
        <header className="mb-16 sm:mb-20 pb-12 border-b border-white/10 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num font-semibold uppercase tracking-widest text-[#bef264] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#bef264]" />
            <span>DIRECT INQUIRIES &amp; COLLABORATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-syne mb-4 leading-[1.08]">
            Contact Aditya Agrawat
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-body leading-relaxed max-w-3xl">
            Whether you are planning a marketing acquisition campaign, engineering a new website or application, scaling search visibility, or launching a digital product, let&apos;s discuss your goals.
          </p>
        </header>

        {/* Main Grid: Form on Left, Direct Contact Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Comprehensive Enquiry Form */}
          <div className="lg:col-span-7 bg-[#0c0c0f] border border-white/10 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-white font-syne mb-2">
              Send an Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-body mb-8">
              Complete the fields below to initiate a project conversation. Submitting opens your email client addressed directly to <span className="text-[#bef264]">{SITE_DATA.contact.email}</span>.
            </p>

            {status === 'submitted' && (
              <div className="mb-8 p-4 bg-[#bef264]/10 border border-[#bef264]/30 text-xs sm:text-sm text-[#bef264] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white mb-1">Email Client Triggered</p>
                  <p className="text-neutral-300">
                    If your email application did not launch automatically, you can email directly at{' '}
                    <a href={`mailto:${SITE_DATA.contact.email}`} className="text-[#bef264] underline">
                      {SITE_DATA.contact.email}
                    </a>.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono-num uppercase tracking-wider text-neutral-300 mb-2">
                  Your Full Name <span className="text-[#bef264]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 bg-[#111116] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#bef264] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono-num uppercase tracking-wider text-neutral-300 mb-2">
                  Email Address <span className="text-[#bef264]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@domain.com"
                  className="w-full px-4 py-3 bg-[#111116] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#bef264] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-reason" className="block text-xs font-mono-num uppercase tracking-wider text-neutral-300 mb-2">
                  Reason for Contact <span className="text-[#bef264]">*</span>
                </label>
                <select
                  id="contact-reason"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-4 py-3 bg-[#111116] border border-white/10 text-white text-sm focus:outline-none focus:border-[#bef264] transition-colors cursor-pointer"
                >
                  {inquiryReasons.map((reason) => (
                    <option key={reason} value={reason} className="bg-[#111116] text-white">
                      {reason}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono-num uppercase tracking-wider text-neutral-300 mb-2">
                  Subject <span className="text-[#bef264]">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Brief summary of your project or idea"
                  className="w-full px-4 py-3 bg-[#111116] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#bef264] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono-num uppercase tracking-wider text-neutral-300 mb-2">
                  Message <span className="text-[#bef264]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your timeline, scope, objectives, or questions..."
                  className="w-full px-4 py-3 bg-[#111116] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#bef264] transition-colors resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all cursor-pointer shadow-lg shadow-[#bef264]/10"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3 bg-white/[0.02] border border-white/5 text-[11px] text-neutral-400 font-mono-num">
                <span className="text-[#bef264] font-semibold">Transmission Notice:</span> Form submissions route via your browser to {SITE_DATA.contact.email}. No third-party data tracking or storage is used.
              </div>
            </form>
          </div>

          {/* Right Column: Contact Details, Response Time, Team Scale */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-8 bg-[#0c0c0f] border border-white/10">
              <span className="text-xs font-mono-num text-[#bef264] uppercase tracking-wider block mb-2">
                OFFICIAL CHANNEL
              </span>
              <h3 className="text-xl font-bold text-white font-syne mb-2">
                Direct Email
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-body mb-4">
                For commercial inquiries, agency collaborations, and project specifications:
              </p>
              <a
                href={`mailto:${SITE_DATA.contact.email}`}
                className="text-base sm:text-lg font-mono-num font-semibold text-[#bef264] hover:underline break-all"
              >
                {SITE_DATA.contact.email}
              </a>
            </div>

            {/* Operating Hours & Response */}
            <div className="p-8 bg-[#0c0c0f] border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#bef264] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-syne mb-1">
                    Response Expectations
                  </h4>
                  <p className="text-xs text-neutral-400 font-body leading-relaxed">
                    Inquiries are typically reviewed within 24 to 48 business hours by Aditya or an operations lead.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#bef264] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-syne mb-1">
                    Location &amp; Footprint
                  </h4>
                  <p className="text-xs text-neutral-400 font-body leading-relaxed">
                    Based in India, operating globally across international time zones with a distributed 48+ member execution team.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-8 bg-[#0c0c0f] border border-white/10">
              <h4 className="text-sm font-bold text-white font-syne mb-4 uppercase tracking-wider">
                Explore Before Connecting
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-body">
                <li>
                  <Link to="/about-aditya-agrawat" className="hover:text-[#bef264] transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#bef264]" />
                    <span>Read About Aditya Agrawat</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#bef264] transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#bef264]" />
                    <span>Review Core Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-[#bef264] transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#bef264]" />
                    <span>Browse Digital Projects</span>
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-[#bef264] transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#bef264]" />
                    <span>Frequently Asked Questions</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
