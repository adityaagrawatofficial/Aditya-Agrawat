import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare, Phone } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface ContactProps {
  preselectedInterest?: string;
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ preselectedInterest = '', onShowToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState(preselectedInterest || 'Digital Marketing');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (preselectedInterest) {
      setInterest(preselectedInterest);
    }
  }, [preselectedInterest]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_DATA.contact.email).then(() => {
      setCopiedEmail(true);
      onShowToast(`Email copied: ${SITE_DATA.contact.email}`);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  const constructMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Project Enquiry: ${interest} - ${name || 'Prospective Partner'}`
    );
    const bodyContent = [
      `Hi Aditya,`,
      ``,
      `I would like to start a conversation regarding: ${interest}`,
      ``,
      name ? `Name: ${name}` : '',
      email ? `Email: ${email}` : '',
      phone ? `Phone / WhatsApp: ${phone}` : '',
      `Interest: ${interest}`,
      ``,
      `Message:`,
      message || `Looking to explore collaboration or project execution with you and your team.`,
      ``,
      `Best regards,`,
      name || 'Website Visitor'
    ]
      .filter(Boolean)
      .join('\n');

    return `mailto:${SITE_DATA.contact.email}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const mailto = constructMailtoUrl();
    window.location.href = mailto;
    onShowToast('Opening email client with your enquiry details...');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct CTA & Context (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#bef264] block mb-3 font-mono-num">
                // GET IN TOUCH
              </span>

              {/* Exact required heading */}
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-syne mb-3 leading-[1.1]">
                {SITE_DATA.contact.headingLine1}
              </h2>
              <div className="text-2xl sm:text-4xl font-bold tracking-tight text-[#bef264] font-syne mb-6">
                {SITE_DATA.contact.headingLine2}
              </div>

              <p className="text-base text-neutral-300 font-body leading-relaxed mb-8">
                Whether you have an early-stage digital idea, want to build or modernize a web application, require data-driven marketing, or want to explore collaboration with Aditya Agrawat and his 48+ member team, get in touch directly.
              </p>

              {/* Direct Email Action */}
              <div className="space-y-4 mb-10">
                <a
                  href={`mailto:${SITE_DATA.contact.email}?subject=Direct%20Conversation%20-%20Aditya%20Agrawat`}
                  className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#bef264]/10 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Email Aditya Directly</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Email Display & Copy Button */}
                <div className="p-4 bg-[#0c0c0e] border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-4 h-4 text-[#bef264] shrink-0" />
                    <a
                      href={`mailto:${SITE_DATA.contact.email}`}
                      className="text-xs sm:text-sm text-neutral-200 hover:text-white font-mono-num truncate transition-colors"
                      title={SITE_DATA.contact.email}
                    >
                      {SITE_DATA.contact.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors shrink-0 cursor-pointer"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#bef264]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Operational Note */}
            <div className="p-5 bg-[#0c0c0e] border border-white/5 space-y-2 text-xs text-neutral-400 font-mono-num">
              <div className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse" />
                <span className="font-semibold">Direct Communication</span>
              </div>
              <p className="text-neutral-400 font-body">
                All inquiries go directly to Aditya Agrawat and the core project coordination desk.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0c0c0e] border border-white/10 p-6 sm:p-10 shadow-2xl relative">
            <div className="border-b border-white/10 pb-4 mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white font-syne">Start a Project Enquiry</h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Direct connection with Aditya Agrawat &amp; his 48+ member team
                </p>
              </div>
              <span className="text-[11px] font-mono-num text-[#bef264]">
                48+ TEAM
              </span>
            </div>

            {submitted ? (
              <div className="py-12 px-6 text-center bg-[#111115] border border-[#bef264]/30 animate-in fade-in duration-300">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#bef264]/10 border border-[#bef264] flex items-center justify-center mb-4">
                  <Check className="w-7 h-7 text-[#bef264]" />
                </div>
                <h4 className="text-xl font-bold text-white font-syne mb-2">
                  Enquiry Prepared
                </h4>
                <p className="text-sm text-neutral-300 font-body max-w-md mx-auto mb-6">
                  Your email client has been launched with your enquiry details. You can also email Aditya directly at{' '}
                  <span className="text-[#bef264] font-mono-num">{SITE_DATA.contact.email}</span>.
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={`mailto:${SITE_DATA.contact.email}`}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    Open Mailbox
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-form-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono-num"
                  >
                    Name <span className="text-[#bef264]">*</span>
                  </label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full bg-[#121216] border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#bef264] transition-colors"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-form-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono-num"
                    >
                      Email Address <span className="text-[#bef264]">*</span>
                    </label>
                    <input
                      id="contact-form-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-[#121216] border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#bef264] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-form-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono-num"
                    >
                      Phone / WhatsApp
                    </label>
                    <input
                      id="contact-form-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#121216] border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#bef264] transition-colors"
                    />
                  </div>
                </div>

                {/* Interest Dropdown */}
                <div>
                  <label
                    htmlFor="contact-form-interest"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono-num"
                  >
                    Interest <span className="text-[#bef264]">*</span>
                  </label>
                  <select
                    id="contact-form-interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-[#121216] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#bef264] transition-colors"
                  >
                    {SITE_DATA.contact.interests.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#121216] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-form-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono-num"
                  >
                    Message <span className="text-[#bef264]">*</span>
                  </label>
                  <textarea
                    id="contact-form-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project, idea, current digital setup, or partnership goals..."
                    className="w-full bg-[#121216] border border-white/10 p-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#bef264] transition-colors resize-none font-body"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all cursor-pointer shadow-lg shadow-[#bef264]/10 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry →</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
