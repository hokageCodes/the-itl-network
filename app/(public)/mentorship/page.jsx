"use client"
import { useState } from "react";
import { Search, Menu, X, Star } from "lucide-react";
import FAQSection from "../../../components/sections/FAQSection";

const MentorshipHero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>

      {/* Hero */}
{/* Mentorship Hero Section */}
<section className="relative py-40 overflow-hidden bg-black sm:pb-20 lg:pb-24">
  <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
    <div className="flex flex-col items-center text-center space-y-12">
      
      {/* Text Content */}
      <div className="max-w-3xl">
        <h2 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Connecting Mentors with Mentees
        </h2>
        <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8 leading-relaxed">
          Get personalized guidance from experienced mentors to accelerate
          your growth, navigate challenges, and unlock new opportunities.
        </p>

        {/* Search */}
        <div className="relative mt-8 sm:mt-12 max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-6">
            {/* <Search className="w-5 h-5 text-gray-500" /> */}
          </div>
          <input
            type="text"
            placeholder="Try 'Corporate Law', 'Litigation', 'Immigration'..."
            className="block w-full py-6 pr-6 pl-6 text-white placeholder-gray-500 bg-black border border-gray-700 rounded-lg focus:ring-0 focus:outline-none"
          />
          <button className="mt-6 sm:mt-0 sm:absolute sm:right-1.5 sm:inset-y-1.5 inline-flex items-center justify-center w-full sm:w-auto px-5 py-4 text-sm font-semibold tracking-widest text-black uppercase bg-white rounded-lg hover:opacity-90">
            Find A Mentor
          </button>
        </div>

      </div>

      {/* Mentor Profile Card - Full width, below text */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Design */}
        <div className="absolute inset-0">
          <div className="blur-3xl filter opacity-70 w-full h-full rounded-lg"></div>
        </div>
        <div className="relative w-full rounded-xl p-8 border border-yellow-500/20
          transform transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10">
          
          {/* Profile */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="John Carter"
              className="w-24 h-24 rounded-lg border-2 border-yellow-500 object-cover"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white">
                John Carter
              </h3>
              <p className="text-sm text-gray-400">
                Senior Software Engineer @ Google
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {["React", "Node.js", "Leadership", "Career Growth"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-lg border border-yellow-400/40"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* Bio */}
          <p className="mt-6 text-base text-gray-400 leading-relaxed text-center">
            With 10+ years of experience in full-stack development, I’ve
            mentored 200+ engineers across different industries. I
            specialize in helping professionals transition into leadership
            roles and scale their technical careers.
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-white">4.9 (320 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Mentors Profile Section */}
<section className="relative py-16 sm:pb-20 lg:pb-24">
  <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
        Meet Our Top Mentors
      </h2>
      <p className="mt-4 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto">
        Browse through our experienced mentors. See at a glance if they're currently available for matching.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: "John Carter",
          title: "Senior Software Engineer @ Google",
          skills: ["React", "Node.js", "Leadership"],
          status: "available",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
          name: "Sarah Johnson",
          title: "Corporate Lawyer @ Smith & Co.",
          skills: ["Corporate Law", "Negotiation", "Mentorship"],
          status: "matched",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        {
          name: "David Lee",
          title: "Immigration Consultant",
          skills: ["Immigration", "Policy", "Counseling"],
          status: "available",
          image: "https://randomuser.me/api/portraits/men/34.jpg",
        },
        // Add more mentors here
      ].map((mentor, i) => (
        <div
          key={i}
          className="relative bg-white rounded-3xl p-6 border border-gray-200 shadow hover:shadow-lg transition-all duration-300"
        >
          {/* Status badge */}
          <span
            className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-xs font-semibold ${
              mentor.status === "available"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {mentor.status === "available" ? "Available" : "Matched"}
          </span>

          {/* Profile */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-20 h-20 rounded-lg border-2 border-gray-300 object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
              <p className="text-sm text-gray-500">{mentor.title}</p>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {mentor.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-lg border border-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Rating (optional) */}
          <div className="flex items-center justify-center mt-4 space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-gray-700">4.8</span>
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className="mt-16 text-center">
            <a
              href="/register"
              className="inline-block px-10 py-4 bg-yellow-500 text-black font-bold rounded-lg text-lg hover:bg-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Become a Mentor
            </a>
          </div>
</section>


{/* How to Register - Mentorship Page */}
<section className="relative py-20 bg-black overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
        How to Join as a Mentor
      </h2>
      <p className="mt-4 text-lg text-gray-300 sm:text-xl max-w-3xl mx-auto">
        Follow these simple steps to sign up, set your availability, and start mentoring.
      </p>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {[
        {
          title: "Create Account",
          description: "Choose a username, provide your full name, email, and location.",
          icon: "User",
        },
        {
          title: "Upload Headshot",
          description: "Add a professional photo that will appear on your Mentor Profile.",
          icon: "Camera",
        },
        {
          title: "Set Area of Practice",
          description: "Specify your legal expertise to match mentees efficiently.",
          icon: "Briefcase",
        },
        {
          title: "Set Availability",
          description: "Indicate your mentorship availability to help us connect you quickly.",
          icon: "Clock",
        },
      ].map((step, idx) => {
        // Dynamically render Lucide icon
        const Icon = require("lucide-react")[step.icon];
        return (
          <div
            key={idx}
            className="relative bg-gray-900/60 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20"
          >
            <div className="bg-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center text-black mb-6">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        );
      })}
    </div>

    {/* CTA Button */}
    <div className="mt-16 text-center">
      <a
        href="/register"
        className="inline-block px-10 py-4 bg-yellow-500 text-black font-bold rounded-lg text-lg hover:bg-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Sign Up as Mentor
      </a>
    </div>
  </div>
</section>


<FAQSection />

    </div>
  );
};

export default MentorshipHero;
