"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Clock,
  Users,
} from "lucide-react";
import FAQSection from "../../../components/sections/FAQSection";

const EventsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("Corporate event");

  const featuredEvents = [
    {
      id: 1,
      title: "ITL Network Annual Conference 2024",
      subtitle: "Advancing Legal Excellence Together",
      date: "Dec 15, 2024",
      location: "Toronto Convention Centre",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      category: "Upcoming Event",
    },
    {
      id: 2,
      title: "Professional Development Workshop",
      subtitle: "Skills for Success in Canadian Legal Practice",
      date: "Jan 20, 2025",
      location: "Vancouver Law Courts",
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=400&fit=crop",
      category: "Upcoming Event",
    },
    {
      id: 3,
      title: "Networking Mixer & Panel Discussion",
      subtitle: "Building Connections in the Legal Community",
      date: "Feb 10, 2025",
      location: "Calgary Bar Association",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=400&fit=crop",
      category: "Upcoming Event",
    },
  ];

  const events = [
    {
      id: 1,
      date: "24 Jan, 2024",
      time: "5:00 AM - 2:00 PM",
      title: "ITL Network Annual Conference 2024",
      subtitle: "Advancing Legal Excellence Together",
      location: "152 W 42nd Street, New York",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
      attendees: [
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      ],
      attendeeCount: "240+",
    },
    {
      id: 2,
      date: "28 Jan, 2024",
      time: "6:00 AM - 3:00 PM",
      title: "Professional Development Workshop",
      subtitle: "Skills for Success in Canadian Legal Practice",
      location: "152 W 42nd Street, New York",
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=300&h=200&fit=crop",
      attendees: [
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      ],
      attendeeCount: "180+",
    },
    {
      id: 3,
      date: "04 Feb, 2024",
      time: "5:00 AM - 2:00 PM",
      title: "Networking Mixer & Panel Discussion",
      subtitle: "Building Connections in the Legal Community",
      location: "152 W 42nd Street, New York",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=200&fit=crop",
      attendees: [
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      ],
      attendeeCount: "150+",
    },
  ];

  const filters = ["Corporate event", "Club Gigs", "Indoor Concerts"];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length
    );
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Featured Event Carousel */}
        <div className="mb-12">
          <div className="relative bg-brand-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute top-4 left-4 bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-medium">
              {featuredEvents[currentSlide].category}
            </div>

            <div className="relative h-96 flex items-end">
              <img
                src={featuredEvents[currentSlide].image}
                alt={featuredEvents[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              <div className="relative z-10 p-8 text-white">
                <div className="flex items-center space-x-4 text-sm mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredEvents[currentSlide].date}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  {featuredEvents[currentSlide].title}
                </h2>
                <p className="text-gray-200 text-lg">
                  {featuredEvents[currentSlide].subtitle}
                </p>
                <div className="flex items-center mt-4 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{featuredEvents[currentSlide].location}</span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full p-2 transition"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full p-2 transition"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {featuredEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-8 mb-8 border-b border-gray-200">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`pb-4 px-1 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "text-brand-gold border-b-2 border-brand-gold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="space-y-6 mb-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                {/* Event Image */}
                <div className="md:w-64 h-48 md:h-auto">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Event Details */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-brand-gold" />
                        {event.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-brand-gold" />
                        {event.time}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{event.subtitle}</p>

                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1 text-brand-gold" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        {event.attendees.map((avatar, index) => (
                          <img
                            key={index}
                            src={avatar}
                            alt={`Attendee ${index + 1}`}
                            className="w-8 h-8 rounded-full border-2 border-white object-cover"
                          />
                        ))}
                      </div>
                      <span className="ml-3 text-sm text-gray-600">
                        <Users className="w-4 h-4 inline mr-1" />
                        {event.attendeeCount}
                      </span>
                    </div>

                    <button className="bg-brand-gold hover:opacity-90 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                currentPage === page
                  ? "bg-brand-gold text-white"
                  : "border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50"
            disabled={currentPage === 4}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div>
        <FAQSection />
      </div>
    </div>
  );
};

export default EventsPage;
