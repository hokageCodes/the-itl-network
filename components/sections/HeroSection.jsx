"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Play, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ITLHeroSection() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = ["/slides/1.png", "/slides/2.png", "//slides/3.png", "/slides/4.png", "/slides/5.png", "/slides/6.png", "/slides/7.png", "/slides/8.png", "/slides/9.png"];

  useEffect(() => {
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

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div ref={heroRef} className="relative min-h-screen bg-white overflow-hidden">
      <div className="flex min-h-screen">
        {/* Left Side - Text/CTA */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-12 py-16">
          <div className="max-w-2xl">
            <div ref={badgeRef} className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full border border-yellow-300/50 shadow-sm">
                The ITL Network
              </span>
            </div>

            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 leading-tight"
            >
              A Network of Internationally Trained Lawyers in{" "}
              <span className="text-yellow-600 relative">
                Canada
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-yellow-300/60"
                  viewBox="0 0 200 8"
                  fill="currentColor"
                  preserveAspectRatio="none"
                >
                  <path d="M0,6 Q50,1 100,6 T200,6 L200,8 L0,8 Z" />
                </svg>
              </span>
            </h1>

            <p ref={subtitleRef} className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Connect, learn, and grow together with lawyers and professionals
              shaping the future of legal practice in Canada.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/register"
                className="flex items-center px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Become a Member
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <button className="flex items-center space-x-3 text-gray-700 hover:text-yellow-600 transition-colors duration-300 group">
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300 border border-gray-200 group-hover:border-yellow-400/50">
                  <Play className="w-5 h-5 text-yellow-600 ml-1" />
                </div>
                <span className="font-medium">Watch Intro</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Image Slider */}
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
          {slides.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
              }`}
            >
              <img src={image} alt={`slide-${index}`} className="w-full h-full object-contain" />
            </div>
          ))}

          {/* Nav Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-7 h-7 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight className="w-7 h-7 text-gray-800" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-yellow-400 w-10" : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden px-4 pb-16">
        <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-xl">
          {slides.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={image} alt={`slide-${index}`} className="w-full h-full object-contain" />
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-yellow-400 w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
