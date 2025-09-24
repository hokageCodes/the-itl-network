"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-8">
        {/* Top section: Logo + Links */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/itl-logo-nobg.png" className="h-24" alt="ITL Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              The ITL Network
            </span> */}
          </Link>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center items-center gap-4 mb-6 sm:mb-0 text-sm font-medium text-gray-400">
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-700" />

        {/* Bottom section: Socials + Copyright */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between">
          <span className="block text-sm text-gray-400 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              The ITL Network
            </Link>
            . All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className="flex mt-4 sm:mt-0 space-x-5 text-gray-400">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-gold"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-gold"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-gold"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-gold"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
