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
  const { user, logout, loading } = useAuth();
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
        { href: "/#", label: "Our Team" },
        { href: "/events", label: "Events" },
      ],
    },
    {
      label: "Community",
      auth: true,
      items: [
        { href: "/membership", label: "Membership" },
        { href: "/mentorship", label: "Mentorship" },
        { href: "/https://www.itlconference.ca", label: "ITL Conference" },
        { href: "/donate", label: "Donate" },
      ],
    },
    {
      label: "Resources",
      items: [
        { href: "##", label: "Professional Development", auth: true },
        { href: "#", label: "ITL Manual", auth: true },
        { href: "/resources", label: "Blog", auth: true },
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

  if (loading) {
    return (
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-brand-black-950"
        style={{ minHeight: "64px" }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between min-h-[64px]">
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img
                  src="/Original-ITL-Logo.png"
                  alt="Logo"
                  className="h-16 w-auto object-cover max-w-[120px] sm:max-w-[160px] lg:max-w-[200px]"
                  style={{
                    height: "60px",
                    maxHeight: "60px",
                  }}
                  width="auto"
                  height="48"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="animate-pulse bg-brand-black-600 h-10 w-32 rounded-lg"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-white-50/95 backdrop-blur-md border-b border-brand-black-200/20 shadow-sm"
          : "bg-brand-black-950"
      }`}
      style={{ minHeight: "64px" }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between min-h-[64px]">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="flex items-center transition-transform hover:scale-105"
            >
              <img
                src="/Original-ITL - Logo-Transparent-background.png"
                alt="Logo"
                className="h-12 border object-cover max-w-[120px] sm:max-w-[160px] lg:max-w-[200px]"
                style={{
                  height: "60px",
                  maxHeight: "60px",
                }}
                width="auto"
                height="48"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-3xl mx-auto">
            <div className="flex items-center space-x-2">
              {navigationGroups.map((group) => (
                <div key={group.label} className="relative group">
                  <button
                    className={`flex items-center space-x-2 px-4 py-3 min-h-[44px] rounded-lg font-medium transition-all duration-200 ${
                      scrolled
                        ? "text-brand-black-800 hover:text-brand-gold-600 hover:bg-brand-gold-50"
                        : "text-brand-white-50 hover:text-brand-gold-400 hover:bg-brand-white-50/10"
                    }`}
                  >
                    <span className="text-sm">{group.label}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div
                      className={`${
                        scrolled
                          ? "bg-brand-white-50 border border-brand-black-200/20"
                          : "bg-brand-black-900 border border-brand-white-50/20"
                      } rounded-xl shadow-xl overflow-hidden backdrop-blur-md`}
                    >
                      {group.items.map((item, index) => (
                        <div key={item.href}>
                          {item.auth && !user ? (
                            <button
                              onClick={() => handleAuthClick(item.href)}
                              className={`w-full text-left px-5 py-3 min-h-[44px] text-sm font-medium transition-all duration-200 ${
                                scrolled
                                  ? "text-brand-black-700 hover:text-brand-gold-600 hover:bg-brand-gold-50"
                                  : "text-brand-white-100 hover:text-brand-gold-400 hover:bg-brand-white-50/10"
                              } ${
                                index !== group.items.length - 1
                                  ? scrolled
                                    ? "border-b border-brand-black-100"
                                    : "border-b border-brand-white-50/10"
                                  : ""
                              }`}
                            >
                              {item.label}
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              className={`block px-5 py-3 min-h-[44px] text-sm font-medium transition-all duration-200 ${
                                scrolled
                                  ? "text-brand-black-700 hover:text-brand-gold-600 hover:bg-brand-gold-50"
                                  : "text-brand-white-100 hover:text-brand-gold-400 hover:bg-brand-white-50/10"
                              } ${
                                index !== group.items.length - 1
                                  ? scrolled
                                    ? "border-b border-brand-black-100"
                                    : "border-b border-brand-white-50/10"
                                  : ""
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
                  className={`hidden sm:flex items-center px-4 py-2 min-h-[44px] border rounded-lg transition-all duration-200 font-medium text-sm ${
                    scrolled
                      ? "text-brand-black-700 border-brand-black-300 hover:text-brand-gold-600 hover:border-brand-gold-400 hover:bg-brand-gold-50"
                      : "text-brand-white-100 border-brand-white-50/30 hover:text-brand-gold-400 hover:border-brand-gold-400 hover:bg-brand-white-50/10"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex items-center px-5 py-2 min-h-[44px] bg-brand-gold-500 text-brand-black-950 font-semibold rounded-lg hover:bg-brand-gold-600 transition-all duration-200 whitespace-nowrap text-sm shadow-gold hover:shadow-gold-lg transform hover:scale-105"
                >
                  Become a Member
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center space-x-3 px-3 py-2 min-h-[44px] border rounded-lg transition-all duration-200 ${
                    scrolled
                      ? "text-brand-black-700 border-brand-black-300 hover:text-brand-gold-600 hover:border-brand-gold-400 hover:bg-brand-gold-50"
                      : "text-brand-white-100 border-brand-white-50/30 hover:text-brand-gold-400 hover:border-brand-gold-400 hover:bg-brand-white-50/10"
                  }`}
                >
                  <div className="w-8 h-8 bg-brand-gold-500 text-brand-black-950 font-bold rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    {user.firstName
                      ? user.firstName.charAt(0).toUpperCase()
                      : user.username?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <span className="hidden sm:block font-medium text-sm">
                    {user.firstName || user.username}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div
                    className={`absolute right-0 mt-2 w-52 ${
                      scrolled
                        ? "bg-brand-white-50 border border-brand-black-200/20"
                        : "bg-brand-black-900 border border-brand-white-50/20"
                    } rounded-xl shadow-xl overflow-hidden z-50 backdrop-blur-md`}
                  >
                    <Link
                      href="/dashboard"
                      className={`flex items-center px-5 py-3 min-h-[44px] text-sm font-medium transition-all duration-200 ${
                        scrolled
                          ? "text-brand-black-700 hover:text-brand-gold-600 hover:bg-brand-gold-50"
                          : "text-brand-white-100 hover:text-brand-gold-400 hover:bg-brand-white-50/10"
                      } border-b ${
                        scrolled
                          ? "border-brand-black-100"
                          : "border-brand-white-50/10"
                      }`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <User className="w-4 h-4 mr-3 flex-shrink-0" />
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className={`flex items-center px-5 py-3 min-h-[44px] text-sm font-medium transition-all duration-200 ${
                        scrolled
                          ? "text-brand-black-700 hover:text-brand-gold-600 hover:bg-brand-gold-50"
                          : "text-brand-white-100 hover:text-brand-gold-400 hover:bg-brand-white-50/10"
                      } border-b ${
                        scrolled
                          ? "border-brand-black-100"
                          : "border-brand-white-50/10"
                      }`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Settings className="w-4 h-4 mr-3 flex-shrink-0" />
                      Settings
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-5 py-3 min-h-[44px] text-sm font-medium text-error-600 hover:text-error-500 hover:bg-error-50 transition-all duration-200"
                    >
                      <LogOut className="w-4 h-4 mr-3 flex-shrink-0" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg transition-all duration-200 ${
                scrolled
                  ? "text-brand-black-700 hover:text-brand-gold-600 hover:bg-brand-gold-50"
                  : "text-brand-white-100 hover:text-brand-gold-400 hover:bg-brand-white-50/10"
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
            scrolled
              ? "bg-brand-white-50/95 backdrop-blur-md border-t border-brand-black-200/20"
              : "bg-brand-black-950 border-t border-brand-white-50/10"
          }`}
        >
          <div className="px-4 py-4 max-w-7xl mx-auto">
            <div className="space-y-2">
              {navigationGroups.map((group) => (
                <div key={group.label}>
                  <button
                    onClick={() => toggleMobileDropdown(group.label)}
                    className={`w-full flex justify-between items-center px-4 py-3 min-h-[44px] font-semibold rounded-lg transition-all duration-200 ${
                      scrolled
                        ? "text-brand-black-800 hover:text-brand-gold-600 hover:bg-brand-gold-50"
                        : "text-brand-white-50 hover:text-brand-gold-400 hover:bg-brand-white-50/10"
                    }`}
                  >
                    <span className="text-sm">{group.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${
                        mobileDropdowns[group.label] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileDropdowns[group.label] && (
                    <div className="ml-4 mt-2 space-y-1">
                      {group.items.map((item) => (
                        <div key={item.href}>
                          {item.auth && !user ? (
                            <button
                              onClick={() => {
                                handleAuthClick(item.href);
                                setMobileOpen(false);
                              }}
                              className={`block w-full text-left px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium transition-all duration-200 ${
                                scrolled
                                  ? "text-brand-black-600 hover:text-brand-gold-600 hover:bg-brand-gold-50"
                                  : "text-brand-white-200 hover:text-brand-gold-400 hover:bg-brand-white-50/10"
                              }`}
                            >
                              {item.label}
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className={`block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium transition-all duration-200 ${
                                scrolled
                                  ? "text-brand-black-600 hover:text-brand-gold-600 hover:bg-brand-gold-50"
                                  : "text-brand-white-200 hover:text-brand-gold-400 hover:bg-brand-white-50/10"
                              }`}
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
              <div
                className="pt-4 mt-4 border-t space-y-3"
                style={{
                  borderColor: scrolled
                    ? "rgb(209 213 219 / 0.3)"
                    : "rgb(248 250 252 / 0.1)",
                }}
              >
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 min-h-[44px] text-center border rounded-lg transition-all duration-200 font-medium text-sm ${
                    scrolled
                      ? "text-brand-black-700 border-brand-black-300 hover:text-brand-gold-600 hover:border-brand-gold-400 hover:bg-brand-gold-50"
                      : "text-brand-white-100 border-brand-white-50/30 hover:text-brand-gold-400 hover:border-brand-gold-400 hover:bg-brand-white-50/10"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 min-h-[44px] text-center bg-brand-gold-500 text-brand-black-950 font-semibold rounded-lg hover:bg-brand-gold-600 transition-all duration-200 text-sm shadow-gold"
                >
                  Become a Member
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
