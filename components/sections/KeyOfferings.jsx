"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "Career Support",
    desc: "Guidance for internationally trained lawyers entering the Canadian market."
  },
  {
    id: "02",
    title: "Networking",
    desc: "Connect with peers, mentors, and legal professionals across Canada."
  },
  {
    id: "03",
    title: "Education",
    desc: "Workshops, training, and resources to upskill and stay ahead."
  },
  {
    id: "04",
    title: "Advocacy",
    desc: "Promoting fair representation and opportunities for ITLs."
  }
];

export default function KeyOfferings() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(".offer-header", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".offer-header",
          start: "top 80%",
        },
      });

      // Animate cards stagger
      gsap.from(".offer-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".offer-card",
          start: "top 85%",
        },
      });

      // Animate footer avatars & CTA
      gsap.from(".offer-avatars img", {
        opacity: 0,
        scale: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".offer-footer",
          start: "top 85%",
        },
      });

      gsap.from(".offer-cta", {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".offer-footer",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 lg:py-24 bg-brand-white-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="offer-header text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center text-brand-black-900 leading-tight">
          Unlock Exclusive Advantages <br className="hidden sm:block" /> when you join us
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div
              key={step.id}
              className="offer-card bg-brand-black-950 p-6 lg:p-8 rounded-2xl hover:border-brand-gold-500 transition-colors duration-300 min-h-[200px] flex flex-col"
            >
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-brand-gold-500 text-brand-black-950 text-sm font-bold rounded-full border-2 border-brand-gold-600">
                  {step.id}
                </span>
              </div>
              <h3 className="text-xl font-bold mt-2 mb-4 text-brand-white-50 flex-shrink-0">
                {step.title}
              </h3>
              <p className="text-brand-white-200 text-sm md:text-base leading-relaxed flex-1">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="offer-footer bg-brand-black-950 flex flex-col md:flex-row items-center justify-between p-6 lg:p-8 rounded-2xl">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            {/* Member avatars */}
            <div className="offer-avatars flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="ITL Network Member"
                className="w-10 h-10 rounded-full border-3 border-brand-gold-500"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="ITL Network Member"
                className="w-10 h-10 rounded-full border-3 border-brand-gold-500"
              />
              <img
                src="https://randomuser.me/api/portraits/men/56.jpg"
                alt="ITL Network Member"
                className="w-10 h-10 rounded-full border-3 border-brand-gold-500"
              />
            </div>
            <div>
              <p className="text-sm md:text-base text-brand-white-200">
                Trusted by{" "}
                <span className="text-brand-white-50 font-semibold">
                  hundreds of ITLs
                </span>
              </p>
            </div>
          </div>

          <Link
            href="/register"
            className="offer-cta group inline-flex items-center space-x-3 px-8 py-4 bg-brand-gold-500 text-brand-black-950 font-semibold rounded-full hover:bg-brand-gold-600 transition-all duration-300 border-4 border-brand-gold-500 hover:border-brand-gold-600"
          >
            <span>Join the Network Today</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
