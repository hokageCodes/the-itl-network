"use client";
import React from "react";
import { useAuth } from "../../../context/AuthContext";
import Link from "next/link";

export default function FooterCTA() {
  const { user } = useAuth();

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <div className="relative max-w-4xl mx-auto text-center px-4 lg:px-6">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Be a part of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-500">
            The ITL Network
          </span>
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          A global community where <span className="font-semibold">ambition meets opportunity</span>.  
          Learn, build, and grow alongside innovators, leaders, and mentors shaping the future.  
        </p>
        {!user ? (
          <Link
            href="/register"
            className="inline-flex items-center px-8 py-4 bg-brand-gold text-black font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Join the Network Today
          </Link>
        ) : (
          <Link
            href="/dashboard"
            className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Go to Dashboard
          </Link>
        )}
      </div>
    </section>
  );
}
