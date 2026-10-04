import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigateHome, onNavigateAbout }) => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-24 px-6 sm:px-8 bg-[#080808]">
      <div className="max-w-md w-full text-center p-8 sm:p-12 bg-[#0c0c0e] border border-white/10 shadow-2xl">
        <div className="text-4xl sm:text-6xl font-extrabold text-[#bef264] font-syne mb-2 font-mono-num">
          404
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white font-syne mb-3">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 font-body mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has moved. Explore Aditya Agrawat&apos;s digital portfolio or profile below.
        </p>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Main Hub</span>
          </button>
          <button
            type="button"
            onClick={onNavigateAbout}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
          >
            <span>Who is Aditya Agrawat?</span>
          </button>
        </div>
      </div>
    </section>
  );
};
