
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
      "You can register online by clicking the 'Join Our Network' button in the Hero section. Once registered, you’ll gain access to resources, events, and mentoring opportunities.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    (null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="container mx-auto px-2 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the most common questions about the ITL Network.
          </p> */}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
