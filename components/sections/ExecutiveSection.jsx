'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const executives = [
  { 
    id: 'President', 
    name: 'Cynthia Okafor',
    role: 'Co-Founder & President',
    image: '/board/Cynthia.png',
    bio: 'cynthia.okafor@itlnetwork.ca'
  },
  { 
    id: 'Co-Founder & Director', 
    name: 'Kenny Okunola',
    role: 'Co-Founder & Director',
    image: '/board/Kenny.png',
    bio: 'kenny.okunola@itlnetwork.ca'
  },
  { 
    id: 'Treasurer', 
    name: 'Marshall Ilechie',
    role: 'Treasurer',
    image: '/board/Marshall.png',
    bio: 'marshall.ilechie@itlnetwork.ca'
  },
  { 
    id: 'Sarah Lopez', 
    name: 'Board Secretary',
    role: 'Sarah Lopez',
    image: '/board/Sarah.png',
    bio: 'sarah.lopez@itlnetwork.ca'
  },
  { 
    id: 'Director of Mentorship', 
    name: 'Jaanam Mahboobani',
    role: 'Director of Mentorship',
    image: '/board/Jaanam.png',
    bio: 'jaanam.mahboobani@itlnetwork.ca'
  },
  { 
    id: ' Director of Communications', 
    name: 'Aishwerya Kansal',
    role: 'Director of Communications',
    image: '/board/Aishwerya.png',
    bio: 'aishwerya.kansal@itlnetwork.ca'
  },
  { 
    id: ' Director', 
    name: 'Idayat Balogun',
    role: 'Director',
    image: '/board/Idayat.png',
    bio: 'idayat.balogun@itlnetwork.ca'
  },
  { 
    id: ' Director of Events', 
    name: 'Funto Omotoso',
    role: 'Director of Events',
    image: '/board/Funto.png',
    bio: 'funto.omotoso@itlnetwork.ca'
  },
];

// Simple lazy-loaded image
function LazyImage({ src, alt }) {
  return <img src={src} alt={alt} loading="lazy" className="object-cover w-full h-full" />;
}

export default function ExecutiveTeamSection() {
  const [activeSection, setActiveSection] = useState(executives[0]?.id || '');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const containerRef = useRef(null);

  // Check scroll position to show/hide navigation arrows
  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll to active card when it changes
  useEffect(() => {
    if (containerRef.current) {
      const activeIndex = executives.findIndex(exec => exec.id === activeSection);
      const cardWidth = 150; // collapsed width
      const expandedWidth = 500;
      const gap = 24;
      
      let scrollPosition = activeIndex * (cardWidth + gap);
      // Adjust for expanded card width
      if (activeIndex > 0) {
        scrollPosition = scrollPosition - cardWidth + expandedWidth/3;
      }
      
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeSection]);

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-white">
          Board Members
        </h2>

        {/* Desktop Layout with Carousel Controls */}
        <div className="hidden lg:block relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/80 border-2 border-yellow-500 flex items-center justify-center transition-all duration-300 ${
              canScrollLeft 
                ? 'opacity-100 hover:bg-yellow-500 hover:text-black cursor-pointer' 
                : 'opacity-30 cursor-not-allowed'
            }`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/80 border-2 border-yellow-500 flex items-center justify-center transition-all duration-300 ${
              canScrollRight 
                ? 'opacity-100 hover:bg-yellow-500 hover:text-black cursor-pointer' 
                : 'opacity-30 cursor-not-allowed'
            }`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={containerRef}
            className="flex w-full h-[600px] gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-16"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            {executives.map((executive, index) => {
              const isActive = activeSection === executive.id;

              return (
                <div
                  key={executive.id}
                  onClick={() => setActiveSection(executive.id)}
                  className={`relative cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 ${
                    isActive ? 'w-[500px]' : 'w-[150px]'
                  } h-full rounded-2xl overflow-hidden border-4 ${
                    isActive ? 'border-yellow-500 shadow-2xl shadow-yellow-500/20' : 'border-gray-700'
                  } hover:border-yellow-400 transform hover:scale-105`}
                >
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    {executive.image ? (
                      <LazyImage src={executive.image} alt={`${executive.name} - ${executive.role}`} />
                    ) : (
                      <div className="text-white text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold">{executive.name.charAt(0)}</span>
                        </div>
                        <p className="text-sm">Photo Coming Soon</p>
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    {isActive ? (
                      <div className="space-y-4 bg-black/95 border-4 border-yellow-500 p-6 rounded-xl backdrop-blur-sm">
                        <div>
                          <h3 className="text-white font-bold text-2xl mb-2">{executive.name}</h3>
                          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wide border-b-2 border-yellow-500 pb-1 inline-block">
                            {executive.role}
                          </p>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {executive.bio}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-black/95 border-4 border-white/20 p-4 rounded-xl backdrop-blur-sm">
                        <h3 className="text-white font-bold text-lg writing-mode-vertical lg:writing-mode-horizontal transform lg:transform-none rotate-180 lg:rotate-0">
                          {executive.name}
                        </h3>
                      </div>
                    )}
                  </div>

                  {/* Subtle indicator for more cards */}
                  {!isActive && index === executives.length - 1 && canScrollRight && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                      <div className="flex flex-col gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-yellow-500/60 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {executives.map((executive, index) => (
              <button
                key={executive.id}
                onClick={() => setActiveSection(executive.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === executive.id 
                    ? 'bg-yellow-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Layout - unchanged */}
        <div className="lg:hidden w-full flex flex-col gap-8">
          {executives.map((executive) => (
            <div
              key={executive.id}
              className="relative w-full h-[400px] rounded-2xl overflow-hidden border-4 border-gray-700"
            >
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                {executive.image ? (
                  <LazyImage src={executive.image} alt={`${executive.name} - ${executive.role}`} />
                ) : (
                  <div className="text-white text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold">{executive.name.charAt(0)}</span>
                    </div>
                    <p className="text-sm">Photo Coming Soon</p>
                  </div>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0">
                <div className="space-y-4 bg-black/95 border-t-4 border-yellow-500 p-6 backdrop-blur-sm">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">{executive.name}</h3>
                    <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wide border-b-2 border-yellow-500 pb-1 inline-block">
                      {executive.role}
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
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

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}