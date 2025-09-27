"use client";
import React from "react";
import { useAuth } from "../../../context/AuthContext";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  const { user } = useAuth();

  return (
    <section className="relative bg-brand-white-50 py-20 lg:py-28 overflow-hidden">
      <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-black-900 mb-8 leading-tight">
          Be a part of{" "}
          <span className="relative inline-block">
            <span className="text-brand-gold-600">The ITL Network</span>
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-brand-gold-300"
              viewBox="0 0 200 12"
              fill="currentColor"
            >
              <path d="M0,8 Q50,2 100,8 T200,8 L200,12 L0,12 Z" />
            </svg>
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-brand-black-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Want to keep up with our latest events, activities and access member-only perks? Become a member today!
        </p>
      </div>

      {/* Trusted by row - full width */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="offer-footer bg-brand-black-950 flex flex-col md:flex-row items-center justify-between p-6 lg:p-8 rounded-2xl">
          {/* Avatars + text */}
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="offer-avatars flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="ITL Network Member"
                className="w-10 h-10 rounded-full border-3 border-brand-gold-500"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="ITL Network Member"
                className="w-10 h-10 rounded-full border-3 border-brand-gold-500"
              />
              <img
                src="https://randomuser.me/api/portraits/men/56.jpg"
                alt="ITL Network Member"
                className="w-10 h-10 rounded-full border-3 border-brand-gold-500"
              />
            </div>
            <div>
              <p className="text-lg md:text-xl text-brand-white-200">
                Trusted by{" "}
                <span className="text-brand-white-50 font-semibold">
                  hundreds of ITLs
                </span>
              </p>
            </div>
          </div>

          {/* CTA Button w/ user logic */}
          {!user ? (
            <Link
              href="/register"
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-brand-gold-500 text-brand-black-950 font-semibold rounded-lg hover:bg-brand-gold-600 transition-all duration-300 border-4 border-brand-gold-500 hover:border-brand-gold-600"
            >
              <span>Join the Network Today</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <Link
              href="/dashboard"
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-brand-black-950 text-brand-white-50 font-semibold rounded-lg hover:bg-brand-black-800 transition-all duration-300 border-4 border-brand-black-950 hover:border-brand-black-800"
            >
              <span>Go to Dashboard</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
