"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { Play, ArrowRight } from "lucide-react";

// Profile Card
const MemberCard = ({ name, role, image, position, delay = 0, className = "" }) => (
  <div
    className={`absolute ${position} transform transition-all duration-500 hover:scale-105 z-10 ${className}`}
    style={{
      animationDelay: `${delay}ms`,
      animation: "fadeInUp 800ms ease-out forwards",
    }}
  >
    <div
      className="relative flex items-center justify-center
      w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 overflow-hidden"
    >
      <img
        src={image}
        alt={name}
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full"
      />

      {/* Floating info card */}
      <div
        className="absolute bottom-2 left-2 bg-white shadow-lg rounded-xl px-3 py-2 
        w-[140px] sm:w-[160px] transform -rotate-1 hover:rotate-0 transition-all duration-300 border border-gray-100"
      >
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-gray-900 text-sm truncate">
            {name}
          </span>
          <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
        </div>
        <p className="text-xs text-gray-600 truncate">{role}</p>
      </div>
    </div>
  </div>
);

export default function ITLHeroSection() {
  const { user } = useAuth();

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Main content */}
      <div className="relative z-20 container mx-auto px-2 sm:px-6 pt-28 sm:pt-32 lg:pt-48 pb-16 sm:pb-20 lg:pb-28">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-4 py-2 bg-brand-gold/10 text-brand-gold text-sm font-medium rounded-full border border-brand-gold/20">
              The ITL Network
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            A Network of Internationally Trained Lawyers in{" "}
            <span className="text-brand-gold">Canada</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Connect, learn, and grow together with lawyers and professionals
            shaping the future of legal practice in Canada.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-12 px-4">
            {!user ? (
              <>
                <Link
                  href="/register"
                  className="w-full sm:w-auto bg-brand-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Join Our Network</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <button className="w-full sm:w-auto flex items-center justify-center space-x-3 text-gray-700 hover:text-brand-gold transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <Play className="w-5 h-5 text-brand-gold ml-1" />
                  </div>
                  <span className="font-medium">Watch Intro</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="w-full sm:w-auto bg-brand-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Go to Dashboard</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/events"
                  className="w-full sm:w-auto flex items-center justify-center space-x-3 text-gray-700 hover:text-brand-gold transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <Play className="w-5 h-5 text-brand-gold ml-1" />
                  </div>
                  <span className="font-medium">Explore Events</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile: show one card below CTAs */}
          <div className="flex justify-center md:hidden mt-6">
            <img src="/cynthia.png" alt="presido" />
          </div>
        </div>
      </div>

      {/* Floating member cards - desktop only */}
      <div className="hidden md:block">
        <MemberCard
          name="Cynthia Okafor"
          role="Co-Founder & President"
          image="/cynthia.png"
          position="top-40 left-10"
          delay={200}
        />
        <MemberCard
          name="Kenny Okunola"
          role="Co-Founder & Director"
          image="/kenny.png"
          position="top-32 right-12"
          delay={400}
        />
        {/* Bottom cards adjusted closer to CTA section */}
        <MemberCard
          name="Anjana Bhaskaran"
          role="Vice President"
          image="/anjana.png"
          position="bottom-32 left-40"
          delay={600}
        />
        <MemberCard
          name="Marshall Ilechie"
          role="Secretary"
          image="/marshall.png"
          position="bottom-28 right-40"
          delay={800}
        />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
