"use client";
import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../lib/api";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const { user, setAccessToken, setUser } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (err) {
      console.error("Logout error", err);
    } finally {
      setAccessToken(null);
      setUser(null);
      router.push("/");
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/membership", label: "Membership" },
    { href: "/mentorship", label: "Mentorship" },
    { href: "/resources", label: "Resources" },
    { href: "/events", label: "Events" },
    { href: "/blog", label: "Blog" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Logo - Far Left */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <div className="relative transition-all duration-300">
              <Image
                src="/itl-logo-nobg.png" // Replace with your actual logo path
                alt="ITL Network Logo"
                width={120}
                height={37}
                className="h-8 w-auto sm:h-10 lg:h-16 group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </Link>

          {/* Navigation Links - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#dd9933] rounded-lg transition-all duration-200 relative group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute inset-x-3 bottom-1 h-0.5 bg-[#dd9933] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Section - Far Right */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {!user ? (
              <div className="flex items-center space-x-2">
                <Link
                  href="/login"
                  className="hidden sm:flex px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#dd9933] border border-gray-300 rounded-lg hover:border-[#dd9933] transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-[#dd9933] to-[#cc8822] text-white rounded-lg hover:from-[#cc8822] hover:to-[#bb7711] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center space-x-3 px-4 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-[#dd9933] hover:to-[#cc8822] transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#dd9933] to-[#cc8822] rounded-full flex items-center justify-center text-sm font-bold text-white shadow-inner">
                    {user.username ? user.username.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span className="hidden sm:block font-medium">
                    {user.username || 'Dashboard'}
                  </span>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      open ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {open && (
                  <div className="absolute right-0 mt-3 w-56 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl border border-gray-200/50 overflow-hidden z-50">
                    <div className="p-4 bg-gradient-to-r from-[#dd9933]/10 to-[#cc8822]/10 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">Welcome back!</p>
                      <p className="text-xs text-gray-600 truncate">{user.username}</p>
                    </div>
                    <div className="py-2">
                      <Link
                        href="/dashboard"
                        className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#dd9933] transition-all duration-200"
                        onClick={() => setOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                        </svg>
                        Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#dd9933] transition-all duration-200"
                        onClick={() => setOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Profile
                      </Link>
                      <div className="h-px bg-gray-100 my-2"></div>
                      <button
                        onClick={() => {
                          handleLogout();
                          setOpen(false);
                        }}
                        className="flex items-center w-full text-left px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200"
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden relative w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-[#dd9933] hover:to-[#cc8822] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center ml-3"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Nav */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-screen pb-6' : 'max-h-0'}`}>
          <div className="pt-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#dd9933] hover:bg-gray-50 rounded-lg transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {!user ? (
              <div className="pt-4 space-y-2 border-t border-gray-200">
                <Link
                  href="/login"
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#dd9933] hover:bg-gray-50 rounded-lg transition-all duration-200"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-4 py-3 text-base font-semibold bg-gradient-to-r from-[#dd9933] to-[#cc8822] text-white rounded-lg hover:from-[#cc8822] hover:to-[#bb7711] transition-all duration-200 text-center"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            ) : (
              <div className="pt-4 space-y-2 border-t border-gray-200">
                <div className="px-4 py-2 bg-gradient-to-r from-[#dd9933]/10 to-[#cc8822]/10 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900">Signed in as</p>
                  <p className="text-sm text-gray-600">{user.username}</p>
                </div>
                <Link
                  href="/dashboard"
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#dd9933] hover:bg-gray-50 rounded-lg transition-all duration-200"
                  onClick={() => setOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#dd9933] hover:bg-gray-50 rounded-lg transition-all duration-200"
                  onClick={() => setOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}