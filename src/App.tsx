import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { SEOHead } from './seo/SEOHead';
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
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { DigitalMarketingPage } from './pages/services/DigitalMarketingPage';
import { WebsiteDevelopmentPage } from './pages/services/WebsiteDevelopmentPage';
import { AppDevelopmentPage } from './pages/services/AppDevelopmentPage';
import { SeoContentPage } from './pages/services/SeoContentPage';
import { SocialMediaPromotionPage } from './pages/services/SocialMediaPromotionPage';
import { DigitalProductsPage } from './pages/services/DigitalProductsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedPathway, setSelectedPathway] = useState<string>('have-business');
  const [preselectedInterest, setPreselectedInterest] = useState<string>('Digital Marketing');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleNavigate = (path: string, hash?: string) => {
    navigate(path);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 4000);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
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
    const routeMap: Record<string, string> = {
      'Digital Marketing': '/digital-marketing',
      'Website Development': '/website-development',
      'App Development': '/app-development',
      'Content & Social Media': '/social-media-promotion',
      'SEO & Blogging': '/seo-content',
      'Digital Products': '/digital-products',
    };
    const targetRoute = routeMap[serviceTitle];
    if (targetRoute) {
      navigate(targetRoute);
    } else {
      scrollToSection('contact');
    }
  };

  const handlePartnershipClick = (category?: string) => {
    setPreselectedInterest(category || 'Partnership');
    scrollToSection('contact');
    showToast(`Prepared enquiry for: "${category || 'Partnership'}"`);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#f4f4f5] flex flex-col font-body selection:bg-[#bef264] selection:text-black">
      {/* Dynamic SEO Title, Description, Canonical, OG, Twitter & JSON-LD */}
      <SEOHead />

      {/* Top Bar Navigation */}
      <Navbar
        currentRoute={location.pathname}
        onNavigate={handleNavigate}
        onWorkWithTeamClick={() => navigate('/contact')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Routes>
          {/* 1. Primary Homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero
                  onExploreWorkClick={() => scrollToSection('work')}
                  onStartProjectClick={() => navigate('/contact')}
                  onExplorePartnershipsClick={() => scrollToSection('partnerships')}
                  onWhoIsAdityaClick={() => navigate('/about-aditya-agrawat')}
                />
                <WhoIsAditya
                  onMoreAboutClick={() => navigate('/about-aditya-agrawat')}
                  onStartProjectClick={() => navigate('/contact')}
                />
                <WhatBringsYouHere
                  selectedOptionId={selectedPathway}
                  onSelectOption={handlePathwaySelect}
                />
                <AboutAditya
                  onLearnMoreClick={() => navigate('/about-aditya-agrawat')}
                  onWorkWithTeamClick={() => navigate('/contact')}
                />
                <Services onServiceSelect={handleServiceSelect} />
                <Work onStartProjectClick={() => navigate('/contact')} />
                <HowWeWork />
                <Team />
                <HaveAnIdea
                  onSubmitIdeaClick={() => navigate('/contact')}
                  onTalkToTeamClick={() => navigate('/contact')}
                />
                <Partnerships onStartPartnershipClick={handlePartnershipClick} />
                <Contact
                  preselectedInterest={preselectedInterest}
                  onShowToast={showToast}
                />
                <FinalCta
                  onStartConversationClick={() => navigate('/contact')}
                />
              </>
            }
          />

          {/* 2. Dedicated About Page */}
          <Route
            path="/about-aditya-agrawat"
            element={
              <AboutPage
                onNavigateHome={(hash) => handleNavigate('/', hash)}
                onStartProjectClick={() => navigate('/contact')}
              />
            }
          />

          {/* 3. Core Pages */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />

          {/* 4. Individual Service Pages */}
          <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/website-development" element={<WebsiteDevelopmentPage />} />
          <Route path="/app-development" element={<AppDevelopmentPage />} />
          <Route path="/seo-content" element={<SeoContentPage />} />
          <Route path="/social-media-promotion" element={<SocialMediaPromotionPage />} />
          <Route path="/digital-products" element={<DigitalProductsPage />} />

          {/* 5. 404 Fallback */}
          <Route
            path="*"
            element={
              <NotFoundPage
                onNavigateHome={() => navigate('/')}
                onNavigateAbout={() => navigate('/about-aditya-agrawat')}
              />
            }
          />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Tactile Toast Notification */}
      <Toast
        message={toastMessage}
        onDismiss={() => setToastMessage(null)}
      />
    </div>
  );
}
