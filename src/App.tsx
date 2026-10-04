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

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [selectedPathway, setSelectedPathway] = useState<string>('have-business');
  const [preselectedInterest, setPreselectedInterest] = useState<string>('Digital Marketing');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync document title dynamically based on route
  useEffect(() => {
    if (currentPath === '/about-aditya-agrawat') {
      document.title = 'Who Is Aditya Agrawat? | Digital Marketer & Entrepreneur';
    } else if (currentPath === '/') {
      document.title = 'Aditya Agrawat | Digital Marketer, Entrepreneur & Digital Builder';
    } else {
      document.title = '404 - Page Not Found | Aditya Agrawat';
    }
  }, [currentPath]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string, hash?: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
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
    // Map service title to contact dropdown item
    const interestMap: Record<string, string> = {
      'Digital Marketing': 'Digital Marketing',
      'Website Development': 'Website',
      'App Development': 'Application',
      'Content & Social Media': 'Content & Social Media',
      'SEO & Blogging': 'SEO & Blogging',
      'Digital Products': 'Digital Product'
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
              onWhoIsAdityaClick={() => scrollToSection('who-is-aditya')}
            />

            {/* 2. 01 — WHO IS ADITYA AGRAWAT? */}
            <WhoIsAditya
              onMoreAboutClick={() => scrollToSection('about-aditya')}
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
                window.location.href = 'mailto:adityaagrawatofficial@gmail.com?subject=Discussion%20with%20Aditya%20Agrawat%20Team';
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
