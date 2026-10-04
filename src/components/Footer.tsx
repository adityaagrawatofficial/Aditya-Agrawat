import React from 'react';
import { ArrowUp, Mail, Globe, ArrowRight } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface FooterProps {
  onNavigate: (path: string, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainPages = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'About Aditya Agrawat', href: '/about-aditya-agrawat', isRoute: true },
    { label: 'Digital Services', href: '/services', isRoute: true },
    { label: 'Projects & Work', href: '/projects', isRoute: true },
    { label: 'FAQ', href: '/faq', isRoute: true },
    { label: 'Contact', href: '/contact', isRoute: true },
  ];

  const servicePages = [
    { label: 'Digital Marketing', href: '/digital-marketing' },
    { label: 'Website Development', href: '/website-development' },
    { label: 'App Development', href: '/app-development' },
    { label: 'SEO & Content', href: '/seo-content' },
    { label: 'Social Media & YouTube', href: '/social-media-promotion' },
    { label: 'Digital Products', href: '/digital-products' },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050505] text-neutral-400 py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-white/[0.08]">
          {/* Col 1: Wordmark & Label (4 cols) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/');
                  scrollToTop();
                }}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-syne hover:text-neutral-200 transition-colors inline-block cursor-pointer"
              >
                ADITYA<span className="text-[#bef264]">.</span>
              </a>
              <div className="text-xs uppercase tracking-widest text-[#bef264] mt-2 font-mono-num font-semibold">
                Digital Marketing · Technology · Media
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed max-w-sm font-body">
                Aditya Agrawat is a digital marketer, entrepreneur and digital builder working across digital marketing, website development, applications, content, social media, SEO and digital products with a 48+ member team.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-neutral-400 font-mono-num">
              <Globe className="w-3.5 h-3.5 text-[#bef264]" />
              <span>Based in India · Working Worldwide</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-300 block mb-4 font-mono-num">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {mainPages.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Specialized Services (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-300 block mb-4 font-mono-num">
              Digital Practices
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicePages.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#bef264] transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Inquiries (2 cols) */}
          <div className="md:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-300 block mb-4 font-mono-num">
              Direct Contact
            </span>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed font-body">
              Have an idea, project inquiry, or partnership opportunity?
            </p>
            <a
              href={`mailto:${SITE_DATA.contact.email}`}
              className="inline-flex items-center gap-1.5 text-xs text-white hover:text-[#bef264] transition-colors font-mono-num break-all mb-4"
            >
              <Mail className="w-3.5 h-3.5 text-[#bef264] shrink-0" />
              <span>{SITE_DATA.contact.email}</span>
            </a>
            <div>
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className="text-xs font-semibold uppercase tracking-wider text-[#bef264] hover:underline"
              >
                Inquiry Form →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-mono-num">
          <div>
            &copy; 2026 Aditya Agrawat. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-500">48+ Member Team</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#bef264]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
