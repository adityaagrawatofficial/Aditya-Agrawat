import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoIsAditya } from './components/WhoIsAditya';
import { WhatBringsYouHere } from './components/WhatBringsYouHere';
import { AboutAditya } from './components/AboutAditya';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { HowWeWork } from './components/HowWeWork';
import { Team } from './components/Team';
import { HaveAnIdea } from './components/HaveAnIdea';
import { Partnerships } from './components/Partnerships';
import { Contact } from './components/Contact';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

const normalizePath = (path: string): string => {
  if (!path) return '/';
  const clean = path.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return normalizePath(window.location.pathname);
  });
  const [selectedPathway, setSelectedPathway] = useState<string>('have-business');
  const [preselectedInterest, setPreselectedInterest] = useState<string>('Digital Marketing');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Synchronize document title, meta descriptions, canonical URLs, OG tags, and Schema.org JSON-LD
  useEffect(() => {
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          const propName = selector.match(/property="([^"]+)"/)?.[1];
          if (propName) el.setAttribute('property', propName);
        } else if (selector.includes('name=')) {
          const nameValue = selector.match(/name="([^"]+)"/)?.[1];
          if (nameValue) el.setAttribute('name', nameValue);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attribute, value);
    };

    const updateCanonical = (url: string) => {
      let el = document.querySelector('link[rel="canonical"]');
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
      }
      el.setAttribute('href', url);
    };

    const updateStructuredData = (schemaObj: object) => {
      let script = document.getElementById('dynamic-jsonld') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = 'dynamic-jsonld';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schemaObj);
    };

    if (currentPath === '/about-aditya-agrawat') {
      const pageTitle = 'Aditya Agrawat | About, Digital Marketing & Entrepreneurship';
      const pageDescription =
        'Learn about Aditya Agrawat, a digital marketer, entrepreneur and digital builder working across digital marketing, websites, applications, SEO, content, social media and digital products.';
      const pageCanonical = 'https://aditya-agrawat.onrender.com/about-aditya-agrawat';

      document.title = pageTitle;
      updateMetaTag('meta[name="description"]', 'content', pageDescription);
      updateCanonical(pageCanonical);

      // Open Graph & Twitter
      updateMetaTag('meta[property="og:title"]', 'content', pageTitle);
      updateMetaTag('meta[property="og:description"]', 'content', pageDescription);
      updateMetaTag('meta[property="og:url"]', 'content', pageCanonical);
      updateMetaTag('meta[name="twitter:title"]', 'content', pageTitle);
      updateMetaTag('meta[name="twitter:description"]', 'content', pageDescription);

      // Dedicated JSON-LD: Person, AboutPage, WebPage, BreadcrumbList
      updateStructuredData({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': 'https://aditya-agrawat.onrender.com/#person',
            name: 'Aditya Agrawat',
            url: 'https://aditya-agrawat.onrender.com/',
            jobTitle: 'Digital Marketer, Entrepreneur & Digital Builder',
            description:
              'A digital marketer, entrepreneur and digital builder working across digital marketing, website development, applications, content, social media, SEO and digital products.',
            email: 'adityaagrawatofficial@gmail.com',
            nationality: {
              '@type': 'Country',
              name: 'India',
            },
            knowsAbout: [
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
            ],
          },
          {
            '@type': ['AboutPage', 'WebPage'],
            '@id': 'https://aditya-agrawat.onrender.com/about-aditya-agrawat#webpage',
            url: pageCanonical,
            name: pageTitle,
            description: pageDescription,
            mainEntity: {
              '@id': 'https://aditya-agrawat.onrender.com/#person',
            },
            isPartOf: {
              '@type': 'WebSite',
              '@id': 'https://aditya-agrawat.onrender.com/#website',
              url: 'https://aditya-agrawat.onrender.com/',
              name: 'Aditya Agrawat',
              publisher: {
                '@id': 'https://aditya-agrawat.onrender.com/#person',
              },
            },
            breadcrumb: {
              '@id': 'https://aditya-agrawat.onrender.com/about-aditya-agrawat#breadcrumb',
            },
          },
          {
            '@type': 'BreadcrumbList',
            '@id': 'https://aditya-agrawat.onrender.com/about-aditya-agrawat#breadcrumb',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://aditya-agrawat.onrender.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'About Aditya Agrawat',
                item: pageCanonical,
              },
            ],
          },
        ],
      });
    } else if (currentPath === '/') {
      const homeTitle = 'Aditya Agrawat | Digital Marketer, Entrepreneur & Digital Builder';
      const homeDescription =
        'Aditya Agrawat is an Indian digital marketer, entrepreneur and digital builder working across digital marketing, websites, applications, content, social media and digital products with a 48+ member team.';
      const homeCanonical = 'https://aditya-agrawat.onrender.com/';

      document.title = homeTitle;
      updateMetaTag('meta[name="description"]', 'content', homeDescription);
      updateCanonical(homeCanonical);

      // Open Graph & Twitter
      updateMetaTag('meta[property="og:title"]', 'content', homeTitle);
      updateMetaTag('meta[property="og:description"]', 'content', homeDescription);
      updateMetaTag('meta[property="og:url"]', 'content', homeCanonical);
      updateMetaTag('meta[name="twitter:title"]', 'content', homeTitle);
      updateMetaTag('meta[name="twitter:description"]', 'content', homeDescription);

      // Homepage JSON-LD: Person & WebSite
      updateStructuredData({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': 'https://aditya-agrawat.onrender.com/#person',
            name: 'Aditya Agrawat',
            url: 'https://aditya-agrawat.onrender.com/',
            jobTitle: 'Digital Marketer, Entrepreneur & Digital Builder',
            description:
              'A digital marketer, entrepreneur and digital builder working across digital marketing, website development, applications, content, social media, SEO and digital products.',
            email: 'adityaagrawatofficial@gmail.com',
            nationality: {
              '@type': 'Country',
              name: 'India',
            },
            knowsAbout: [
              'Digital Marketing',
              'Website Development',
              'App Development',
              'Content & Social Media Promotion',
              'SEO & Blogging',
              'Digital Products',
              'Online Entrepreneurship',
            ],
          },
          {
            '@type': 'WebSite',
            '@id': 'https://aditya-agrawat.onrender.com/#website',
            url: 'https://aditya-agrawat.onrender.com/',
            name: 'Aditya Agrawat',
            description:
              'A digital marketer, entrepreneur and digital builder working across digital marketing, website development, applications, content, social media, SEO and digital products.',
            publisher: {
              '@id': 'https://aditya-agrawat.onrender.com/#person',
            },
          },
        ],
      });
    } else {
      document.title = '404 - Page Not Found | Aditya Agrawat';
    }
  }, [currentPath]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string, hash?: string) => {
    const targetPath = normalizePath(path);
    if (targetPath !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(targetPath);
    }
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else if (path !== currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 4000);
  };

  const scrollToSection = (sectionId: string) => {
    if (currentPath !== '/') {
      navigate('/', `#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePathwaySelect = (optionId: string, defaultInterest: string) => {
    setSelectedPathway(optionId);
    setPreselectedInterest(defaultInterest);
    scrollToSection('contact');
    showToast(`Focused on: "${defaultInterest}"`);
  };

  const handleServiceSelect = (serviceTitle: string) => {
    const interestMap: Record<string, string> = {
      'Digital Marketing': 'Digital Marketing',
      'Website Development': 'Website',
      'App Development': 'Application',
      'Content & Social Media': 'Content & Social Media',
      'SEO & Blogging': 'SEO & Blogging',
      'Digital Products': 'Digital Product',
    };
    const mapped = interestMap[serviceTitle] || serviceTitle;
    setPreselectedInterest(mapped);
    scrollToSection('contact');
    showToast(`Selected "${mapped}" for your enquiry.`);
  };

  const handlePartnershipClick = (category?: string) => {
    setPreselectedInterest(category || 'Partnership');
    scrollToSection('contact');
    showToast(`Prepared enquiry for: "${category || 'Partnership'}"`);
  };

  const isAboutPage = currentPath === '/about-aditya-agrawat';
  const isHomePage = currentPath === '/' || currentPath === '';
  const isNotFound = !isAboutPage && !isHomePage;

  return (
    <div className="min-h-screen bg-[#080808] text-[#f4f4f5] flex flex-col font-body selection:bg-[#bef264] selection:text-black">
      {/* Top Bar Navigation */}
      <Navbar
        currentRoute={currentPath}
        onNavigate={navigate}
        onWorkWithTeamClick={() => scrollToSection('contact')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {isHomePage && (
          <>
            {/* 1. Hero Section with Above-The-Fold Conversion */}
            <Hero
              onExploreWorkClick={() => scrollToSection('work')}
              onStartProjectClick={() => scrollToSection('contact')}
              onExplorePartnershipsClick={() => scrollToSection('partnerships')}
              onWhoIsAdityaClick={() => navigate('/about-aditya-agrawat')}
            />

            {/* 2. 01 — WHO IS ADITYA AGRAWAT? */}
            <WhoIsAditya
              onMoreAboutClick={() => navigate('/about-aditya-agrawat')}
              onStartProjectClick={() => scrollToSection('contact')}
            />

            {/* 3. What brings you here? (Interactive Pathway Selector) */}
            <WhatBringsYouHere
              selectedOptionId={selectedPathway}
              onSelectOption={handlePathwaySelect}
            />

            {/* 4. About Aditya Profile & Compact Identity Card */}
            <AboutAditya
              onLearnMoreClick={() => navigate('/about-aditya-agrawat')}
              onWorkWithTeamClick={() => scrollToSection('contact')}
            />

            {/* 5. Services (01 — 06 Premium Cards with sophisticated hover) */}
            <Services onServiceSelect={handleServiceSelect} />

            {/* 6. Selected Work (Web & Applications, Digital Marketing, Content & Social, Digital Products) */}
            <Work onStartProjectClick={() => scrollToSection('contact')} />

            {/* 7. How We Work (01 — 04 Steps) */}
            <HowWeWork />

            {/* 8. Team (One Vision. 48+ People. One Digital Direction.) */}
            <Team />

            {/* 9. Have An Idea? Let's build it together. */}
            <HaveAnIdea
              onSubmitIdeaClick={() => scrollToSection('contact')}
              onTalkToTeamClick={() => {
                window.location.href =
                  'mailto:adityaagrawatofficial@gmail.com?subject=Discussion%20with%20Aditya%20Agrawat%20Team';
              }}
            />

            {/* 10. Partnerships & Collaboration */}
            <Partnerships onStartPartnershipClick={handlePartnershipClick} />

            {/* 11. Contact Area & Enquiry Form */}
            <Contact
              preselectedInterest={preselectedInterest}
              onShowToast={showToast}
            />

            {/* 12. Final CTA Before Footer */}
            <FinalCta
              onStartConversationClick={() => scrollToSection('contact')}
            />
          </>
        )}

        {isAboutPage && (
          <AboutPage
            onNavigateHome={(hash) => navigate('/', hash)}
            onStartProjectClick={() => {
              navigate('/', '#contact');
            }}
          />
        )}

        {isNotFound && (
          <NotFoundPage
            onNavigateHome={() => navigate('/')}
            onNavigateAbout={() => navigate('/about-aditya-agrawat')}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigate} />

      {/* Tactile Toast Notification */}
      <Toast
        message={toastMessage}
        onDismiss={() => setToastMessage(null)}
      />
    </div>
  );
}
