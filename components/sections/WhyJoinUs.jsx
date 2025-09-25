'use client';
import React from 'react';

const reasons = [
  {
    title: 'Build Your Network',
    description:
      'Join a national community of internationally trained lawyers, mentors, and equity-seeking partners. Expand your connections through our annual ITL Conference and year-round networking opportunities.',
  },
  {
    title: 'Access Resources',
    description:
      'Gain exclusive access to our Membership Platform, where you’ll find career tools, workshops, and practical insights to help you navigate the licensing process and beyond.',
  },
  {
    title: 'Grow Professionally',
    description:
      'Benefit from our Revamped Mentorship Program and targeted professional development initiatives. From licensing to leadership, we provide guidance to help you thrive at every stage of your career.',
  },
  {
    title: 'Build a Sustainable Practice',
    description:
      'Move beyond short-term goals. Develop the skills, strategies, and support you need to establish and grow a lasting, impactful legal career in Canada.',
  },
];

export default function WhyJoinUsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">
            Why Join Us
          </h2>
          <p className="text-black-400 text-lg max-w-3xl mx-auto">
            A clear, supportive path to advancing your legal career in Canada.
          </p>
          <div className="w-24 h-1 bg-gray-700 mx-auto mt-6"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="border border-gray-800 bg-black p-8 lg:p-10 h-full transition-all duration-300 hover:border-gray-600"
            >
              {/* Number */}
              <div className="text-gray-500 text-lg font-mono mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
