"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  // Staggered scroll reveal effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const cardsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCardsVisible(true);
          cardsObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (cardsRef.current) cardsObserver.observe(cardsRef.current);

    return () => {
      observer.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-12 sm:py-16 transition-all duration-1000"
    >
      <div className="container mx-auto px-2 md:px-12 space-y-16">
        {/* Centered Header */}
        <div
          className={`text-center transform transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mx-auto">
            Who We Are
          </h2>
        </div>

        {/* Cards grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto"
        >
          {/* Our Story card */}
          <div
            className={`relative rounded-2xl overflow-hidden h-80 lg:h-[420px] transition-all duration-1000 ease-out hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2 ${
              cardsVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-12 -rotate-2"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=700&fit=crop"
              alt="Our Story"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="bg-black/60 rounded-md p-6 sm:p-8 transform transition-all duration-500 hover:translate-y-[-4px]">
                <h3 className="text-white font-bold text-xl mb-2">Our Story</h3>
                <p className="text-white/90 text-md max-w-md leading-relaxed">
                  The ITL Network was established as a registered not-for-profit
                  under the Canada Not-for-profit Corporations Act to respond to
                  the unique challenges faced by internationally trained legal
                  professionals. What began as a community to support candidates
                  navigating the licensing process has grown into a platform for
                  mentorship, professional development, and advocacy.
                </p>
              </div>
            </div>
          </div>

          {/* Mission + Vision stacked */}
          <div className="flex flex-col gap-6">
            {/* Mission */}
            <div
              className={`border-2 bg-yellow-100/80 rounded-2xl p-6 flex-1 flex flex-col justify-center transition-all duration-1200 delay-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 ${
                cardsVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-8 translate-x-6"
              }`}
            >
              <h3 className="text-black font-bold text-lg mb-3">Our Mission</h3>
              <p className="text-gray-700 text-md leading-relaxed">
                To advance diversity, equity, and inclusion within the Canadian
                legal profession by supporting Internationally Trained Lawyers
                (ITLs) and Internationally Trained Law Graduates (ITLGs) at
                every stage of their professional journey. We provide guidance
                through the licensing process, mentorship for practicing
                lawyers, and resources to foster career growth, leadership
                development, and the building of sustainable legal practices.
              </p>
            </div>

            {/* Vision */}
            <div
              className={`border-2 bg-yellow-500 rounded-2xl p-6 flex-1 flex flex-col justify-center transition-all duration-1400 delay-500 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 ${
                cardsVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-8 translate-x-6"
              }`}
            >
              <h3 className="text-black font-bold text-lg mb-3">Our Vision</h3>
              <p className="text-gray-900 text-md leading-relaxed">
                A legal profession in Canada that reflects the richness of
                global perspectives, where internationally trained talent is
                fully integrated, valued, and empowered to thrive, contribute,
                and lead.
              </p>
            </div>
          </div>
        </div>

        {/* CTA at the end of section */}
        <div className="flex justify-center mt-12">
          <Link
            href="/about"
            className="flex items-center w-[180px] px-6 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
          >
            Learn More
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
