"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black-950 border-t-4 border-brand-gold-500">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top section: Logo + Links */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between mb-8">
          <Link
            href="/"
            className="flex items-center mb-6 sm:mb-0 space-x-3 transition-transform hover:scale-105"
          >
            <img 
              src="/itl-logo-nobg.png" 
              className="h-20 lg:h-24 w-auto object-contain" 
              alt="ITL Network Logo" 
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
            <Link 
              href="/about" 
              className="text-brand-white-200 hover:text-brand-gold-400 transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-brand-gold-400 pb-1"
            >
              About
            </Link>
            <Link 
              href="/events" 
              className="text-brand-white-200 hover:text-brand-gold-400 transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-brand-gold-400 pb-1"
            >
              Events
            </Link>
            <Link 
              href="/privacy" 
              className="text-brand-white-200 hover:text-brand-gold-400 transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-brand-gold-400 pb-1"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-brand-white-200 hover:text-brand-gold-400 transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-brand-gold-400 pb-1"
            >
              Terms
            </Link>
            <Link 
              href="/contact" 
              className="text-brand-white-200 hover:text-brand-gold-400 transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-brand-gold-400 pb-1"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-brand-gold-300/50 my-8"></div>

        {/* Bottom section: Copyright + Socials */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-6 sm:mb-0">
            <span className="block text-brand-white-300 text-sm lg:text-base">
              © {new Date().getFullYear()}{" "}
              <Link 
                href="/" 
                className="text-brand-gold-400 hover:text-brand-gold-300 font-semibold transition-colors duration-200"
              >
                The ITL Network
              </Link>
              . All Rights Reserved.
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-brand-white-500/30 rounded-full text-brand-white-300 hover:text-brand-gold-400 hover:border-brand-gold-400 transition-all duration-200"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-brand-white-500/30 rounded-full text-brand-white-300 hover:text-brand-gold-400 hover:border-brand-gold-400 transition-all duration-200"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-brand-white-500/30 rounded-full text-brand-white-300 hover:text-brand-gold-400 hover:border-brand-gold-400 transition-all duration-200"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-brand-white-500/30 rounded-full text-brand-white-300 hover:text-brand-gold-400 hover:border-brand-gold-400 transition-all duration-200"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}