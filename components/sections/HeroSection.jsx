"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Play, ArrowRight, X } from "lucide-react";

export default function ITLHeroSection() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const floatingBgRef = useRef([]);

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Safe way to assign refs for floating backgrounds
  const setFloatingRef = (el, index) => {
    floatingBgRef.current[index] = el;
  };

  useEffect(() => {
    // Staggered fade-in for main elements
    const elements = [badgeRef.current, titleRef.current, subtitleRef.current, ctaRef.current];
    elements.forEach((element, index) => {
      if (element) {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        setTimeout(() => {
          element.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, index * 150);
      }
    });

    // Animate floating backgrounds
    floatingBgRef.current.forEach((bg, index) => {
      if (!bg) return; // safety check
      const animate = () => {
        const y = Math.sin(Date.now() / 1000 + index) * 20; // sinusoidal movement
        bg.style.transform = `translateY(${y}px)`;
        requestAnimationFrame(animate);
      };
      animate();
    });
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen bg-white overflow-hidden">
      {/* Floating Backgrounds */}
      <div
        ref={(el) => setFloatingRef(el, 0)}
        className="absolute top-0 left-1/4 w-48 h-48 bg-yellow-200 rounded-full opacity-30 blur-3xl"
      />
      <div
        ref={(el) => setFloatingRef(el, 1)}
        className="absolute top-20 right-1/4 w-72 h-72 bg-yellow-300 rounded-full opacity-20 blur-3xl"
      />
      <div
        ref={(el) => setFloatingRef(el, 2)}
        className="absolute bottom-10 left-1/3 w-56 h-56 bg-yellow-400 rounded-full opacity-25 blur-3xl"
      />

      {/* Main content */}
      <div className="text-center max-w-7xl pt-48 mx-auto relative z-10">
        {/* Main Heading */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl p-8 font-bold text-black mb-6 sm:mb-8 leading-tight"
        >
          A Network of Internationally Trained Lawyers in{" "}
          <span className="text-yellow-600 relative">
            Canada
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-yellow-300/60"
              viewBox="0 0 200 12"
              fill="currentColor"
              preserveAspectRatio="none"
            >
              <path d="M0,8 Q50,2 100,8 T200,8 L200,12 L0,12 Z" />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Connect, learn, and grow together with lawyers and professionals
          shaping the future of legal practice in Canada.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-12 px-4"
        >
          <Link
            href="/register"
            className="flex items-center px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Become a Member
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          <button
            onClick={() => setIsVideoOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center space-x-3 text-gray-700 hover:text-yellow-600 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300 border border-yellow-200/30 group-hover:border-yellow-400/50">
              <Play className="w-5 h-5 text-yellow-600 ml-1" />
            </div>
            <span className="font-medium">Watch Intro</span>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-auto p-4">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-yellow-400 transition"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/0rHqK1gu1Nw?autoplay=1"
                title="Canadian City Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}