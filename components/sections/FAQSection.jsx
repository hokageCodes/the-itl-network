"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is the ITL Network?",
    answer:
      "The ITL Network is a registered not-for-profit organization that supports Internationally Trained Lawyers (ITLs) and Internationally Trained Law Graduates (ITLGs) in Canada. We provide mentorship, professional development, networking opportunities, and resources to help members succeed at every stage of their legal careers. Our flagship event, the annual ITL Conference, brings together hundreds of ITLs and equity-seeking partners nationwide.",
  },
  {
    question: "Who can join the Network?",
    answer:
      "Membership is open to internationally trained lawyers, internationally trained law graduates, and professionals interested in the Canadian legal sector. We welcome students, practicing lawyers, academics, and allies who share our vision.",
  },
  {
    question: "Do I need to be licensed in Canada to join?",
    answer:
      "No. We welcome internationally trained law graduates and lawyers at all stages of their journey, whether you are beginning the licensing process, actively practicing, or exploring career options in Canada.",
  },
  {
    question: "Can Canadian-trained lawyers or professionals join?",
    answer:
      "Yes. Canadian-trained lawyers, legal professionals, and academics are encouraged to join as mentors, collaborators, and allies in advancing diversity and inclusion in the legal profession.",
  },
  {
    question: "How does the Mentorship Program work?",
    answer:
      "Our Revamped Mentorship Program matches members with experienced legal professionals who provide tailored guidance on licensing, career advancement, leadership, and building a sustainable practice. Mentorship can take the form of one-on-one guidance, group sessions, or workshops.",
  },
  {
    question: "What is the ITL Conference?",
    answer:
      "The ITL Conference is Canada’s national gathering for internationally trained lawyers, held annually in partnership with equity-seeking groups. It features impactful speakers, interactive sessions, and networking opportunities that bring together hundreds of ITLs from across the country.",
  },
  {
    question: "How can organizations partner with the ITL Network?",
    answer:
      "We collaborate with law firms, corporations, academic institutions, and community organizations that share our vision for equity and inclusion. Partnership opportunities include event sponsorships, mentorship collaborations, research projects, and resource sharing.",
  },
  {
    question: "What career resources are available to members?",
    answer:
      "Through our Membership Platform, members gain access to practical resources such as licensing guidance, career-building workshops, leadership development tools, and networking opportunities.",
  },
  {
    question: "Is the ITL Network only for newcomers to Canada?",
    answer:
      "Not at all. While many of our members are internationally trained lawyers building their careers in Canada, the Network also supports established practitioners seeking mentorship, leadership growth, and community connection.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-2 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">FAQs</h2>
          <p className="text-gray-600 text-xl">
            Frequently asked questions about the ITL Network
          </p>
          <div className="w-24 h-1 bg-brand-gold-500 mx-auto mt-6"></div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-lg bg-white shadow-sm flex flex-col"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text- p-6 focus:outline-none"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className="ml-4 text-brand-gold-500 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* animate height without messing siblings */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
