"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function ITLConferencePage() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown logic
  useEffect(() => {
    const targetDate = new Date("2026-04-23T09:00:00"); // set actual event date here
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative py-32 lg:py-48 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            ref={titleRef}
            className="text-4xl pb-4 sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 sm:mb-10 leading-[1.2]"
          >
            The Largest Gathering of Internationally Trained Lawyers in{" "}
            <span className="text-yellow-600 relative">
              Canada
              <svg
                className="absolute -bottom-3 left-0 w-full h-3 text-yellow-300/60"
                viewBox="0 0 200 12"
                fill="currentColor"
                preserveAspectRatio="none"
              >
                <path d="M0,8 Q50,2 100,8 T200,8 L200,12 L0,12 Z" />
              </svg>
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            A joint effort of our partner organizations: The ITL Network, Global Lawyers of Canada, 
            Joy ITL Initiative, and ITL NCA Networks.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-6 mb-14 px-4"
          >
            <Link
              href="https://www.itlconference.ca"
              target="_blank"
              className="flex items-center px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Register for ITL '26
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <button
              className="w-full sm:w-auto flex items-center justify-center space-x-3 text-gray-700 hover:text-yellow-600 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300 border border-yellow-200/30 group-hover:border-yellow-400/50">
                <ArrowRight className="w-5 h-5 text-yellow-600 ml-1" />
              </div>
              <a href="www.itlconference.ca" className="font-meduim text-xl underline">Visit Website</a>
            </button>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section
        className="relative h-[60vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560653764-c59462f913d3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRvcm9udG8lMjBza3lsaW5lfGVufDB8fDB8fHww')" }}
      >

        <div className="absolute inset-0 bg-black/8"></div>
      </section>

        <div className="border-t border-zinc-800 bg-zinc-950 font-[Orbitron]">
        <div className="px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-12 tracking-tight">
                COUNTDOWN TO ITL CONFERENCE 2026
            </h2>

            {/* Stopwatch Row with Colons */}
{/* Stopwatch Row */}
<div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
  {[
    { value: timeLeft.days.toString().padStart(2, "0"), label: "DAYS" },
    { value: timeLeft.hours.toString().padStart(2, "0"), label: "HOURS" },
    { value: timeLeft.minutes.toString().padStart(2, "0"), label: "MINUTES" },
    { value: timeLeft.seconds.toString().padStart(2, "0"), label: "SECONDS" },
  ].map((item, index) => {
    const isDays = index === 0;
    return (
      <React.Fragment key={index}>
        <div className="flex flex-col items-center min-w-[65px] sm:min-w-[75px]">
          <div
            className={`relative border-2 w-full text-center transition-all duration-500 transform px-4 py-6 sm:px-6 sm:py-8 ${
              isDays
                ? "bg-black border-yellow-500 shadow-lg -translate-y-2"
                : "bg-black border-zinc-700 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-lg"
            }`}
          >
            <div className={`text-3xl sm:text-5xl font-black mb-2 ${isDays ? "text-yellow-500" : "text-white group-hover:text-yellow-500"}`}>
              {item.value}
            </div>
            <div className="text-xs sm:text-sm font-bold uppercase text-gray-400">
              {item.label}
            </div>
          </div>
        </div>

        {index < 3 && (
          <div className="text-3xl sm:text-5xl font-black text-yellow-500 select-none">:</div>
        )}
      </React.Fragment>
    );
  })}
</div>


            {/* Accent line */}
            <div className="w-32 h-px bg-zinc-700 mx-auto mt-12"></div>
            </div>
        </div>
        </div>

      {/* Conference Archive */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Conference Archive</h2>

        <div className="space-y-16">
          {/* Example Archive 2025 */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">2025 – Crossing Borders, Breaking Barriers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="relative w-full h-56 rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={`/archive/2025/archive-2025-${i + 1}.webp`} // replace with real images
                    alt={`Conference 2025 photo ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Optional Second Parallax */}
<section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center text-center bg-black">
  {/* Parallax background */}
  <div
    className="absolute inset-0 bg-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: "url('/confe.webp')",
      backgroundAttachment: "fixed",
    }}
  >
    <div className="absolute inset-0 bg-black/40"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 px-6">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
      Don’t miss the upcoming Conference
    </h2>
    <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
      Be part of a global movement — network, learn, and contribute.
    </p>
    <Link
      href="/register"
      className="inline-flex items-center space-x-3 px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg transform hover:scale-105"
    >
      <span>Register Now</span>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </Link>
  </div>
</section>



    </main>
  );
}
