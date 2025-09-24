"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import {
  ChevronDown,
  User,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const { user, logout, loading } = useAuth(); // ✅ Use real auth context
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationGroups = [
    {
      label: "Discover",
      items: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/events", label: "Events" },
        { href: "/blog", label: "Blog" },
      ],
    },
    {
      label: "Community",
      auth: true,
      items: [
        { href: "/membership", label: "Membership" },
        { href: "/mentorship", label: "Mentorship" },
      ],
    },
    {
      label: "Support",
      items: [
        { href: "/resources", label: "Resources", auth: true },
        { href: "/donate", label: "Donate" },
        { href: "/contact", label: "Contact" },
      ],
    },
  ];

  const handleAuthClick = (href) => {
    if (!user) {
      window.location.href = `/login?redirect=${encodeURIComponent(href)}`;
    }
  };

  const toggleMobileDropdown = (label) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // ✅ Show loading state while auth is being determined
  if (loading) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black" style={{ minHeight: '64px' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between min-h-[64px]">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img
                  src="/itl-logo-nobg.png"
                  alt="Logo"
                  className="h-5 w-auto object-contain lg:-ml-24 -ml-14"
                  style={{ 
                    height: '90px',
                    maxWidth: '200px',
                  }}
                  width="auto"
                  height="20"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <div className="animate-pulse bg-gray-600 h-10 w-32 rounded"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-black/10" : "bg-black"
      }`}
      style={{ minHeight: '64px' }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between min-h-[64px]">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src={scrolled ? "/itl-logo-nobg.png" : "/itl-logo-nobg.png"}
                alt="Logo"
                className="h-5 w-auto object-contain lg:-ml-24 -ml-14"
                style={{ 
                  height: '90px',
                  maxWidth: '200px',
                }}
                width="auto"
                height="20"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-3xl mx-auto">
            <div className="flex items-center space-x-8">
              {navigationGroups.map((group) => (
                <div key={group.label} className="relative group">
                  <button
                    className={`flex items-center space-x-1 px-4 py-3 min-h-[44px] ${
                      scrolled ? "text-black" : "text-white"
                    } hover:text-[#DD9933] transition-colors font-medium`}
                  >
                    <span>{group.label}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div
                      className={`${
                        scrolled ? "bg-white" : "bg-black"
                      } border border-black/10 rounded-lg shadow-lg overflow-hidden`}
                    >
                      {group.items.map((item, index) => (
                        <div key={item.href}>
                          {item.auth && !user ? (
                            <button
                              onClick={() => handleAuthClick(item.href)}
                              className={`w-full text-left px-4 py-3 min-h-[44px] ${
                                scrolled
                                  ? "text-black hover:text-[#DD9933] hover:bg-black/5"
                                  : "text-white hover:text-[#DD9933] hover:bg-white/5"
                              } transition-colors ${
                                index !== group.items.length - 1 ? "border-b border-black/5" : ""
                              }`}
                            >
                              {item.label}
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              className={`block px-4 py-3 min-h-[44px] ${
                                scrolled
                                  ? "text-black hover:text-[#DD9933] hover:bg-black/5"
                                  : "text-white hover:text-[#DD9933] hover:bg-white/5"
                              } transition-colors ${
                                index !== group.items.length - 1 ? "border-b border-black/5" : ""
                              }`}
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - CTA & User */}
          <div className="flex items-center space-x-3">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className={`hidden sm:block px-4 py-2 min-h-[44px] border rounded transition flex items-center ${
                    scrolled
                      ? "text-black border-black/20 hover:text-[#DD9933] hover:border-[#DD9933]"
                      : "text-white border-white/20 hover:text-[#DD9933] hover:border-[#DD9933]"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 min-h-[44px] bg-[#DD9933] text-black font-medium rounded hover:bg-[#c2852b] transition flex items-center whitespace-nowrap"
                >
                  Become a member
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center space-x-2 px-3 py-2 min-h-[44px] border rounded transition ${
                    scrolled
                      ? "text-black border-black/20 hover:text-[#DD9933]"
                      : "text-white border-white/20 hover:text-[#DD9933]"
                  }`}
                >
                  <div className="w-8 h-8 bg-[#DD9933] text-black font-bold rounded-full flex items-center justify-center flex-shrink-0">
                    {/* ✅ Use firstName or username from real user object */}
                    {user.firstName 
                      ? user.firstName.charAt(0).toUpperCase() 
                      : user.username?.charAt(0).toUpperCase() || 'U'
                    }
                  </div>
                  <span className="hidden sm:block">
                    {user.firstName || user.username}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform flex-shrink-0 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div
                    className={`absolute right-0 mt-2 w-48 ${
                      scrolled ? "bg-white" : "bg-black"
                    } border border-black/10 rounded-lg shadow-lg overflow-hidden z-50`}
                  >
                    <Link
                      href="/dashboard"
                      className={`flex items-center px-4 py-3 min-h-[44px] ${
                        scrolled
                          ? "text-black hover:text-[#DD9933] hover:bg-black/5"
                          : "text-white hover:text-[#DD9933] hover:bg-white/5"
                      } transition border-b border-black/5`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <User className="w-4 h-4 mr-3 flex-shrink-0" /> Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className={`flex items-center px-4 py-3 min-h-[44px] ${
                        scrolled
                          ? "text-black hover:text-[#DD9933] hover:bg-black/5"
                          : "text-white hover:text-[#DD9933] hover:bg-white/5"
                      } transition border-b border-black/5`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Settings className="w-4 h-4 mr-3 flex-shrink-0" /> Settings
                    </Link>
                    <button
                      onClick={() => {
                        logout(); // ✅ Use real logout function
                        setDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-3 min-h-[44px] text-red-500 hover:text-red-400 hover:bg-red-500/10 transition"
                    >
                      <LogOut className="w-4 h-4 mr-3 flex-shrink-0" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                scrolled
                  ? "text-black hover:text-[#DD9933]"
                  : "text-white hover:text-[#DD9933]"
              }`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={`lg:hidden ${
            scrolled ? "bg-white" : "bg-black"
          } border-t border-black/10`}
        >
          <div className="px-4 py-4 max-w-7xl mx-auto">
            <div className="space-y-2">
              {navigationGroups.map((group) => (
                <div key={group.label}>
                  <button
                    onClick={() => toggleMobileDropdown(group.label)}
                    className={`w-full flex justify-between items-center px-4 py-3 min-h-[44px] font-medium rounded ${
                      scrolled ? "text-black" : "text-white"
                    } hover:text-[#DD9933] hover:bg-black/5 transition-colors`}
                  >
                    {group.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform flex-shrink-0 ${
                        mobileDropdowns[group.label] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileDropdowns[group.label] && (
                    <div className="ml-4 mt-1 space-y-1">
                      {group.items.map((item) => (
                        <div key={item.href}>
                          {item.auth && !user ? (
                            <button
                              onClick={() => {
                                handleAuthClick(item.href);
                                setMobileOpen(false);
                              }}
                              className={`block w-full text-left px-4 py-3 min-h-[44px] rounded ${
                                scrolled
                                  ? "text-black hover:text-[#DD9933] hover:bg-black/5"
                                  : "text-white hover:text-[#DD9933] hover:bg-white/5"
                              } transition-colors`}
                            >
                              {item.label}
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className={`block px-4 py-3 min-h-[44px] rounded ${
                                scrolled
                                  ? "text-black hover:text-[#DD9933] hover:bg-black/5"
                                  : "text-white hover:text-[#DD9933] hover:bg-white/5"
                              } transition-colors`}
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {!user && (
              <div className="pt-4 mt-4 border-t border-black/10 space-y-3">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 min-h-[44px] text-center border rounded transition ${
                    scrolled
                      ? "text-black border-black/20 hover:text-[#DD9933] hover:border-[#DD9933]"
                      : "text-white border-white/20 hover:text-[#DD9933] hover:border-[#DD9933]"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 min-h-[44px] text-center bg-[#DD9933] text-black font-medium rounded hover:bg-[#c2852b] transition"
                >
                  Become a member
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}