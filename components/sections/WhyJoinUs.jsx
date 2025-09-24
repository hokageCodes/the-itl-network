"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Build Your Network",
    description:
      "Connect with internationally trained lawyers, mentors, and professionals who can support your journey in Canada.",
  },
  {
    number: "02",
    title: "Access Resources",
    description:
      "Get exclusive access to career tools, workshops, and insights designed to help you succeed.",
  },
  {
    number: "03",
    title: "Grow Professionally",
    description:
      "Enhance your skills and opportunities through mentorship, events, and collaborations.",
  },
  {
    number: "04",
    title: "Achieve Your Goals",
    description:
      "Take clear steps towards licensing, employment, and building a sustainable legal career in Canada.",
  },
];

export default function WhyJoinUs() {
  return (
    <section className="bg-brand.black text-brand.white py-16 sm:py-20">
      <div className="container mx-auto px-2">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Join Us
          </h2>
          <p className="text-brand.gold max-w-2xl mx-auto text-lg">
            A simple, clear path to advancing your legal career in Canada.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-brand.white text-brand.black rounded-2xl p-6 shadow-md flex flex-col"
            >
              <span className="text-brand.gold font-bold text-xl mb-2">
                {step.number}
              </span>
              <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
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
