import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SITE_DATA, ServiceItem } from '../data/siteData';
import { ServiceModal } from './ServiceModal';

interface ServicesProps {
  onServiceSelect: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 sm:py-32 border-b border-white/[0.06] bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#bef264] block mb-3 font-mono-num">
              // CORE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-syne">
              Services &amp; Execution<span className="text-[#bef264]">.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-body leading-relaxed">
            Full-spectrum digital capabilities directed by Aditya Agrawat and delivered by his 48+ member team with institutional craft and commercial rigor.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid with Sophisticated Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SITE_DATA.services.map((service) => (
            <article
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer p-8 sm:p-9 bg-[#0c0c0e] border border-white/[0.08] transition-all duration-300 relative flex flex-col justify-between min-h-[340px] shadow-sm hover:border-[#bef264]/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#bef264]/5"
            >
              {/* Top Row: Index & Interactive Trigger */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-num text-sm font-bold text-[#bef264] tracking-wider">
                    {service.number}
                  </span>
                  <div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:bg-[#bef264] group-hover:border-[#bef264] transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-syne mb-3 group-hover:text-[#bef264] transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Service Tagline */}
                <p className="text-sm text-neutral-400 font-body leading-relaxed group-hover:text-neutral-300 transition-colors duration-200">
                  {service.tagline}
                </p>
              </div>

              {/* Bottom Feature Preview */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-neutral-400 group-hover:text-white font-medium transition-colors">
                  View deliverables &amp; scope
                </span>
                <span className="text-[#bef264] font-mono-num font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{service.capabilities.length} Capabilities</span>
                </span>
              </div>

              {/* Hover Edge Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#bef264] transition-colors duration-300" />
            </article>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForInquiry={(title) => {
          onServiceSelect(title);
        }}
      />
    </section>
  );
};
