import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_ROUTES } from './seoConfig';

export const SEOHead: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const rawPath = location.pathname || '/';
    // Clean trailing slash for matching
    const cleanPath = rawPath.replace(/\/+$/, '') || '/';
    const seoData = SEO_ROUTES[cleanPath] || SEO_ROUTES['/'];

    // Update Page Title
    document.title = seoData.title;

    // Helper to update meta tag
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

    // Update Meta Description
    updateMetaTag('meta[name="description"]', 'content', seoData.description);

    // Update Canonical URL
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', seoData.canonical);

    // Open Graph Tags
    updateMetaTag('meta[property="og:title"]', 'content', seoData.title);
    updateMetaTag('meta[property="og:description"]', 'content', seoData.description);
    updateMetaTag('meta[property="og:url"]', 'content', seoData.canonical);

    // Twitter Tags
    updateMetaTag('meta[name="twitter:title"]', 'content', seoData.title);
    updateMetaTag('meta[name="twitter:description"]', 'content', seoData.description);

    // Inject Structured Data JSON-LD
    let scriptEl = document.getElementById('dynamic-jsonld') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'dynamic-jsonld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(seoData.schema);

    // Scroll to top on route change unless hash is present
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  }, [location.pathname, location.hash]);

  return null;
};
