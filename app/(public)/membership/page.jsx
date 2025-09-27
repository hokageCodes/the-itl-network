"use client"
import { useState } from "react";
import { Search, User, Star, Clock, Briefcase, CheckCircle } from "lucide-react";
import FAQSection from "../../../components/sections/FAQSection";

const MenteeHero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-40 bg-black overflow-hidden sm:pb-20 lg:pb-24">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center text-center space-y-12">
            
            <div className="max-w-3xl">
              <h2 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Accelerate Your Career with a Mentor
              </h2>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8 leading-relaxed">
                Connect with experienced professionals who can guide you, help you navigate challenges, and achieve your goals faster.
              </p>

              {/* Search */}
              <div className="relative mt-8 sm:mt-12 max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                  {/* <Search className="w-5 h-5 text-gray-500" /> */}
                </div>
                <input
                  type="text"
                  placeholder="Try 'Corporate Law', 'Software Engineering', 'Leadership'..."
                  className="block w-full py-6 pr-6 pl-12 text-white placeholder-gray-500 bg-black border border-gray-700 rounded-lg focus:ring-0 focus:outline-none"
                />
                <button className="mt-6 sm:mt-0 sm:absolute sm:right-1.5 sm:inset-y-1.5 inline-flex items-center justify-center w-full sm:w-auto px-5 py-4 text-sm font-semibold tracking-widest text-black uppercase bg-yellow-500 rounded-lg hover:opacity-90">
                  Find Mentor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Mentors Section */}
      <section className="relative py-16 sm:pb-20 lg:pb-24">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Explore Our Mentors
            </h2>
            <p className="mt-4 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto">
              Browse through mentors by their expertise and experience to find the perfect guide for your growth.
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
                status: "available",
                image: "https://randomuser.me/api/portraits/women/65.jpg",
              },
              {
                name: "David Lee",
                title: "Immigration Consultant",
                skills: ["Immigration", "Policy", "Counseling"],
                status: "matched",
                image: "https://randomuser.me/api/portraits/men/34.jpg",
              },
            ].map((mentor, i) => (
              <div key={i} className="relative bg-white rounded-3xl p-6 border border-gray-200 shadow hover:shadow-lg transition-all duration-300">
                <span
                  className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-xs font-semibold ${
                    mentor.status === "available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {mentor.status === "available" ? "Available" : "Matched"}
                </span>

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
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
            <a
              href="/register"
              className="inline-block px-10 py-4 bg-yellow-500 text-black font-bold rounded-lg text-lg hover:bg-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View all Mentors
            </a>
          </div>
      </section>

      {/* How to Join as Mentee */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              How to Join as a Mentee
            </h2>
            <p className="mt-4 text-lg text-gray-300 sm:text-xl max-w-3xl mx-auto">
              Sign up, set your goals, browse mentors, and start growing with guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Create Account",
                description: "Sign up with your email and personal details.",
                icon: "User",
              },
              {
                title: "Set Goals",
                description: "Define what you want to learn and achieve through mentorship.",
                icon: "CheckCircle",
              },
              {
                title: "Browse Mentors",
                description: "Explore mentors' profiles and find the best match for your goals.",
                icon: "Briefcase",
              },
              {
                title: "Connect & Learn",
                description: "Schedule sessions and gain insights from your mentor.",
                icon: "Clock",
              },
            ].map((step, idx) => {
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

          <div className="mt-16 text-center">
            <a
              href="/register"
              className="inline-block px-10 py-4 bg-yellow-500 text-black font-bold rounded-lg text-lg hover:bg-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Sign Up as Mentee
            </a>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

export default MenteeHero;
