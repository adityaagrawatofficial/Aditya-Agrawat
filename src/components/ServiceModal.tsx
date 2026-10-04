import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../data/siteData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectServiceForInquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0d0d10] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle lime accent top line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#bef264]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Service Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono-num font-semibold text-[#bef264] uppercase tracking-wider mb-2">
            <span>SERVICE {service.number}</span>
            <span className="text-neutral-600">·</span>
            <span>CAPABILITY BREAKDOWN</span>
          </div>
          <h3 id="modal-service-title" className="text-2xl sm:text-3xl font-bold text-white font-syne">
            {service.title}
          </h3>
          <p className="text-sm sm:text-base text-[#bef264]/90 mt-2 font-body font-medium">
            {service.tagline}
          </p>
        </div>

        {/* Detailed Scope */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 font-mono-num">
            Overview
          </h4>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-body">
            {service.description}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 font-mono-num">
            Core Execution Capabilities
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.capabilities.map((cap) => (
              <li
                key={cap}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 p-2.5 bg-white/[0.02] border border-white/5"
              >
                <CheckCircle2 className="w-4 h-4 text-[#bef264] shrink-0 mt-0.5" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 font-mono-num">
            Standard Deliverables
          </h4>
          <div className="space-y-2">
            {service.deliverables.map((deliv) => (
              <div
                key={deliv}
                className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300 py-1.5 px-3 bg-neutral-900/60 border-l-2 border-[#bef264]"
              >
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-400 font-mono-num">
            Backed by our 48+ member specialist team
          </div>
          <button
            type="button"
            onClick={() => {
              onSelectServiceForInquiry(service.title);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#bef264] hover:bg-[#d9f99d] transition-all duration-200 cursor-pointer"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
