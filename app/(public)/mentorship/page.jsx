"use client";
import { useState } from "react";
import { User, CheckCircle, Briefcase, Clock, Camera, Star } from "lucide-react";
import FAQSection from "../../../components/sections/FAQSection";

const MentorshipHero = () => {
  const [role, setRole] = useState("mentee"); // "mentee" or "mentor"
  const [search, setSearch] = useState("");

  // Sample mentor data
  const mentors = [
    {
      name: "John Carter",
      title: "Senior Software Engineer @ Google",
      skills: ["React", "Node.js", "Leadership"],
      status: "available",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 4.9,
    },
    {
      name: "Sarah Johnson",
      title: "Corporate Lawyer @ Smith & Co.",
      skills: ["Corporate Law", "Negotiation", "Mentorship"],
      status: "matched",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4.8,
    },
    {
      name: "David Lee",
      title: "Immigration Consultant",
      skills: ["Immigration", "Policy", "Counseling"],
      status: "available",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
      rating: 4.7,
    },
  ];

  // Steps based on role
  const steps = role === "mentee"
    ? [
        { title: "Create Account", description: "Sign up with your email and personal details.", icon: "User" },
        { title: "Set Goals", description: "Define what you want to learn and achieve through mentorship.", icon: "CheckCircle" },
        { title: "Browse Mentors", description: "Explore mentors' profiles and find the best match for your goals.", icon: "Briefcase" },
        { title: "Connect & Learn", description: "Schedule sessions and gain insights from your mentor.", icon: "Clock" },
      ]
    : [
        { title: "Create Account", description: "Choose a username, provide full name, email, and location.", icon: "User" },
        { title: "Upload Headshot", description: "Add a professional photo that will appear on your Mentor Profile.", icon: "Camera" },
        { title: "Set Area of Practice", description: "Specify your legal expertise to match mentees efficiently.", icon: "Briefcase" },
        { title: "Set Availability", description: "Indicate your mentorship availability to help us connect you quickly.", icon: "Clock" },
      ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-40 bg-black text-center overflow-hidden sm:pb-20 lg:pb-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-white">
            {role === "mentee" ? "Accelerate Your Career with a Mentor" : "Share Your Expertise as a Mentor"}
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {role === "mentee"
              ? "Connect with experienced professionals who can guide you, help you navigate challenges, and achieve your goals faster."
              : "Guide, support, and grow the next generation of professionals by sharing your experience and expertise."}
          </p>

          {/* Search */}
          {role === "mentee" && (
            <div className="relative mt-8 sm:mt-12 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Try 'Corporate Law', 'Software Engineering', 'Leadership'..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="block w-full py-6 pr-6 pl-6 text-white placeholder-gray-500 bg-black border border-gray-700 rounded-lg focus:ring-0 focus:outline-none"
              />
              <button className="mt-6 sm:mt-0 sm:absolute sm:right-1.5 sm:inset-y-1.5 inline-flex items-center justify-center w-full sm:w-auto px-5 py-4 text-sm font-semibold tracking-widest text-black uppercase bg-yellow-500 rounded-lg hover:opacity-90">
                Find A Mentor
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Mentors Section */}
      <section className="relative py-16 sm:pb-20 lg:pb-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Meet Our Mentors
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our experienced mentors and see if they’re available for matching.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, i) => (
              <div
                key={i}
                className="relative bg-white rounded-3xl p-6 border border-gray-200 shadow hover:shadow-lg transition-all duration-300"
              >
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

                <div className="flex items-center justify-center mt-4 space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-700">{mentor.rating}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Role Toggle */}
        </div>
      </section>

      {/* How to Join Section */}
      <section className="relative py-8 bg-black overflow-hidden">
          <div className="mt-16 text-center">
            <div className="inline-flex rounded-lg bg-gray-100 p-1 mb-10">
              <button
                onClick={() => setRole("mentee")}
                className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                  role === "mentee" ? "bg-yellow-500 text-black" : "text-gray-700 hover:bg-yellow-200"
                }`}
              >
                Become a Mentee
              </button>
              <button
                onClick={() => setRole("mentor")}
                className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                  role === "mentor" ? "bg-yellow-500 text-black" : "text-gray-700 hover:bg-yellow-200"
                }`}
              >
                Become a Mentor
              </button>
            </div>
          </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              How to Join as a {role === "mentee" ? "Mentee" : "Mentor"}
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Follow these simple steps to {role === "mentee" ? "sign up, set your goals, and start growing with guidance" : "sign up, set your availability, and start mentoring"}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => {
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
              Sign Up as {role === "mentee" ? "Mentee" : "Mentor"}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default MentorshipHero;
