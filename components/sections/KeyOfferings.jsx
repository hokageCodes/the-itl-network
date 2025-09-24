'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl text md:text-5xl font-bold mb-16 text-center">
          Unlock Exclusive Advantages <br /> when you join us
        </h2>
        {/* <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Discover how we empower internationally trained lawyers with tailored opportunities, resources, and connections. 
        </p> */}

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[#12182B] p-6 rounded-xl hover:bg-[#1A2035] transition"
            >
              <span className="text-sm text-brand-gold font-semibold">{step.id}</span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="bg-[#12182B] flex flex-col md:flex-row items-center justify-between p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            {/* Example avatars — replace with actual */}
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="member"
                className="w-8 h-8 rounded-full border border-[#0B0E1A]"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="member"
                className="w-8 h-8 rounded-full border border-[#0B0E1A]"
              />
              <img
                src="https://randomuser.me/api/portraits/men/56.jpg"
                alt="member"
                className="w-8 h-8 rounded-full border border-[#0B0E1A]"
              />
            </div>
            <p className="text-sm text-gray-300">
              Trusted by <span className="text-white font-semibold">hundreds of ITLs</span>
            </p>
          </div>

          <Link
            href="/register"
            className="inline-flex items-center px-8 py-4 bg-brand-gold text-black font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Join the Network Today
          </Link>
          
        </div>
      </div>
    </section>
  );
}
