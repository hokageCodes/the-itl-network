"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-12 sm:py-8">
      <div className="container mx-auto px-2 md:px-12 space-y-16">
        {/* Header section split in two / three */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 items-start mx-auto">
          {/* Left: Title + CTA */}
          <div className="xl:col-span-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
              Who We Are
            </h2>
            <Link
              href="/about"
              className="flex items-center w-[200px] px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] bg-brand-gold-500 text-brand-black-950 font-semibold rounded-lg sm:rounded-xl hover:bg-brand-gold-600 transition-all duration-200 whitespace-nowrap text-base shadow-gold hover:shadow-gold-lg transform hover:scale-105"
            >
              Learn more
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Right: Description */}
          <div className="xl:col-span-2">
            <p className="text-lg text-gray-600 leading-relaxed animate-slide-up">
              The ITL Network is a registered not-for-profit organization under
              the Canada Not-for-profit Corporations Act. Our mission is to
              advance diversity, equity, and inclusion within the Canadian legal
              profession by supporting Internationally Trained Lawyers (ITLs)
              and Internationally Trained Law Graduates (ITLGs) at every stage
              of their professional journey. We provide guidance through the
              licensing process, mentorship for practicing lawyers, and
              resources to foster career growth, leadership development, and the
              building of sustainable legal practices. Through a strong and
              connected community, we are committed to creating equitable access
              to opportunities and strengthening the future of the profession.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
          {/* Our Story card */}
          <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[420px] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-gold-lg animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=700&fit=crop"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-end">
              <div className="p-6 sm:p-8 bg-black/60">
                <h3 className="text-white font-bold text-xl mb-2">Our Story</h3>
                <p className="text-white/90 text-sm max-w-md leading-relaxed">
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
            <div className="bg-brand-gold/20 rounded-2xl p-6 flex-1 flex flex-col justify-center 
                            transition-all duration-300 hover:scale-[1.02] hover:shadow-md animate-slide-up">
              <h3 className="text-brand-black font-bold text-lg mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
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
            <div className="bg-brand-gold rounded-2xl p-6 flex-1 flex flex-col justify-center 
                            transition-all duration-300 hover:scale-[1.02] hover:shadow-gold animate-slide-up">
              <h3 className="text-brand-white font-bold text-lg mb-3">
                Our Vision
              </h3>
              <p className="text-brand-white/90 text-sm leading-relaxed">
                A legal profession in Canada that reflects the richness of
                global perspectives, where internationally trained talent is
                fully integrated, valued, and empowered to thrive, contribute,
                and lead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
