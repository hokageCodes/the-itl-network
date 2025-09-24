"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-12 sm:py-12">
      <div className="container mx-auto px-2 space-y-16">
        {/* Header section split in two */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mx-auto">
          {/* Left: Title + CTA */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Who We Are
            </h2>
            <Link
            href="/register"
            className="inline-flex items-center px-8 py-4 bg-brand-gold text-black font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Join the Network Today
          </Link>
          
          </div>

          {/* Right: Description */}
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              The ITL Network is a registered not-for-profit under the Canada Not-for-profit Corporations Act. We seek to promote and foster diversity and inclusion in the Canadian legal market, our mission is to assist Internationally Trained Lawyers (ITLs) and Internationally Trained Law Graduates (ITLGs) throughout the licensing process by promoting a strong network for diversity and growth. 
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
          {/* Our Story card */}
          <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=700&fit=crop"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-end">
              <div className="p-6 sm:p-8">
                <h3 className="text-white font-bold text-xl mb-2">Our Story</h3>
                <p className="text-white/90 text-sm max-w-md leading-relaxed">
                 We provide ITLs & ITLGs with opportunities to network, develop and socialize, and also advocate for them with all relevant law societies and stakeholders. Our vision is geared towards changing the narrative and perception of ITLs and ITLGs within the Canadian legal landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Mission + Vision stacked */}
          <div className="flex flex-col gap-6">
            {/* Mission */}
            <div className="bg-brand-gold/10 rounded-2xl p-6 flex-1 flex flex-col justify-center">
              <h3 className="text-brand-black font-bold text-lg mb-3">Our Mission</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                To empower internationally trained lawyers through mentorship, collaboration, 
                and innovative opportunities in Canada.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-brand-gold rounded-2xl p-6 flex-1 flex flex-col justify-center">
              <h3 className="text-brand-white font-bold text-lg mb-3">Our Vision</h3>
              <p className="text-brand-white/90 text-sm leading-relaxed">
                To lead in legal innovation and create a diverse, inclusive, and connected 
                future for the profession.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
