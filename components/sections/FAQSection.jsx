"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is the ITL Network?",
    answer:
      "The ITL Network is a community of internationally trained lawyers in Canada, designed to connect, mentor, and support professionals navigating their careers.",
  },
  {
    question: "Who can join the network?",
    answer:
      "Any internationally trained lawyer or professional working in or interested in the Canadian legal sector is welcome to join.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "Membership is free for now. Some premium events and programs may require a fee, which will always be communicated clearly.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can register online by clicking the 'Join Our Network' button in the Hero section. Once registered, you'll gain access to resources, events, and mentoring opportunities.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-brand-white-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-black-900 mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-brand-white-50 rounded-2xl border-4 transition-colors duration-300 ${
                openIndex === index
                  ? "border-brand-gold-500"
                  : "border-brand-black-300 hover:border-brand-gold-400"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 lg:px-8 py-6 text-left group"
              >
                <span className="font-semibold text-lg md:text-xl text-brand-black-900 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 font-bold text-lg transition-all duration-300 ${
                    openIndex === index
                      ? "bg-brand-gold-500 border-brand-gold-600 text-brand-black-950"
                      : "bg-brand-white-50 border-brand-black-400 text-brand-black-700 group-hover:border-brand-gold-500 group-hover:text-brand-gold-600"
                  }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 lg:px-8 pb-6 border-t-2 border-brand-gold-300 mt-2 pt-6">
                  <p className="text-brand-black-600 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
