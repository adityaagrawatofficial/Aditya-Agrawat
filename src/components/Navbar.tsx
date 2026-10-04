import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (path: string, hash?: string) => void;
  onWorkWithTeamClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate, onWorkWithTeamClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Aditya Agrawat', href: '/about-aditya-agrawat', isRoute: true },
    { label: 'Services', href: '#services', isRoute: false },
    { label: 'Selected Work', href: '#work', isRoute: false },
    { label: 'Team', href: '#team', isRoute: false },
    { label: 'Partnership', href: '#partnerships', isRoute: false },
    { label: 'Contact', href: '#contact', isRoute: false },
  ];

  const handleLinkClick = (e: React.MouseEvent, item: { label: string; href: string; isRoute: boolean }) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.isRoute) {
      onNavigate(item.href);
    } else {
      if (currentRoute !== '/') {
        onNavigate('/', item.href);
      } else {
        const el = document.querySelector(item.href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/');
    if (currentRoute === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#080808]/92 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-neutral-200 transition-colors font-syne select-none cursor-pointer"
        >
          ADITYA<span className="text-[#bef264]">.</span>
        </a>

        {/* Zone 2: 5-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => {
            const isActive = link.isRoute && currentRoute === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`relative py-1 transition-colors group cursor-pointer text-xs uppercase tracking-wider ${
                  isActive ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#bef264] transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            type="button"
            onClick={onWorkWithTeamClick}
            className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all duration-200 active:scale-[0.98] whitespace-nowrap cursor-pointer shadow-sm shadow-[#bef264]/10"
          >
            <span>Work With My Team</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/98 border-b border-white/10 px-6 py-6 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-neutral-300 hover:text-[#bef264] transition-colors py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-neutral-500 font-mono-num">0{idx + 1}</span>
              </a>
            ))}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onWorkWithTeamClick();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-colors cursor-pointer"
              >
                <span>Work With My Team</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
