'use client';
import React, { useState, Suspense } from 'react';

const executives = [
  { 
    id: 'Co-Founder & President', 
    name: 'Cynthia Okafor',
    role: 'Co-Founder & President',
    image: '/cynthia.png',
    bio: 'cynthia.okafor@itlnetwork.ca'
  },
  { 
    id: 'Co-Founder & Director', 
    name: 'Kenny Okunola',
    role: 'Co-Founder & Director',
    image: '/kenny.png',
    bio: 'kenny.okunola@itlnetwork.ca'
  },
  { 
    id: 'Vice- President', 
    name: 'Anjana Bhaskaran',
    role: 'Vice-President',
    image: '/anjana.png',
    bio: 'anjana.bhaskaran@itlnetwork.ca'
  },
  { 
    id: 'Secretary', 
    name: 'Marshall Ilechie',
    role: 'Secretary',
    image: '/marshall.png',
    bio: 'marshall.ilechie@itlnetwork.ca'
  },
  { 
    id: 'Treasurer', 
    name: 'Seun Smith',
    role: 'Treasurer',
    image: '/seun.png',
    bio: 'seun.smith@itlnetwork.ca'
  },
];

// simple lazy-loaded image
function LazyImage({ src, alt }) {
  return <img src={src} alt={alt} loading="lazy" className="object-cover w-full h-full" />;
}

export default function ExecutiveTeamSection() {
  const [activeSection, setActiveSection] = useState(executives[0]?.id || '');

  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Meet the Executive Team
        </h2>
        {/* <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
          Passionate leaders dedicated to empowering internationally trained lawyers 
          and building a stronger legal community across Canada.
        </p> */}

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full h-[600px] gap-4 justify-center">
          {executives.map((executive) => {
            const isActive = activeSection === executive.id;

            return (
              <div
                key={executive.id}
                onClick={() => setActiveSection(executive.id)}
                className={`relative cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 ${
                  isActive ? 'w-[500px]' : 'w-[150px]'
                } h-full rounded-[10px] overflow-hidden`}
              >
                <Suspense fallback={<div className="w-full h-full bg-gray-200" />}>
                  <LazyImage src={executive.image} alt={`${executive.name} - ${executive.role}`} />
                </Suspense>

                <div className="absolute bottom-6 left-6 right-6">
                  {isActive ? (
                    <div className="space-y-3 bg-black w-auto p-4">
                      <div className=''>
                        <h3 className="text-white font-bold text-2xl mb-1">{executive.name}</h3>
                        <p className="text-brand-gold font-semibold text-sm uppercase tracking-wide">
                          {executive.role}
                        </p>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {executive.bio}
                      </p>
                    </div>
                  ) : (
                    <h3 className="text-white bg-black p-4 font-bold text-lg writing-mode-vertical lg:writing-mode-horizontal transform lg:transform-none rotate-180 lg:rotate-0">
                      {executive.name}
                    </h3>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden w-full flex flex-col gap-6">
          {executives.map((executive) => (
            <div
              key={executive.id}
              className="relative w-full h-[400px] rounded-[10px] overflow-hidden"
            >
              <Suspense fallback={<div className="w-full h-full bg-gray-200" />}>
                <LazyImage src={executive.image} alt={`${executive.name} - ${executive.role}`} />
              </Suspense>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{executive.name}</h3>
                    <p className="text-brand-gold font-semibold text-sm uppercase tracking-wide">
                      {executive.role}
                    </p>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {executive.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        
        @media (min-width: 1024px) {
          .writing-mode-horizontal {
            writing-mode: horizontal-tb;
            text-orientation: initial;
          }
        }
      `}</style>
    </section>
  );
}
