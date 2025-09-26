"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ParallaxCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/slides/1.png",
    "/slides/2.png",
    "/slides/3.png",
    "/slides/4.png",
    "/slides/5.png",
  ];

  // auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover -mt-24"
      style={{ backgroundImage: "url('/slides/7.png')" }} // <-- Parallax background
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Carousel */}
      <div className="relative z-10 max-w-4xl w-full px-2">
        <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
          {slides.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/70 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/70 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-3 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-yellow-400 w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
