"use client";
import React, { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Clock,
  Users,
} from "lucide-react";
import FAQSection from "../../../components/sections/FAQSection";

// Dummy Featured Events
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

// Dummy Events
const allEvents = [
  {
    id: 1,
    date: "2024-01-24",
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
    date: "2024-06-12",
    time: "6:00 AM - 3:00 PM",
    title: "Professional Development Workshop",
    subtitle: "Skills for Success in Canadian Legal Practice",
    location: "Toronto, Canada",
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
    date: "2025-02-10",
    time: "5:00 AM - 2:00 PM",
    title: "Networking Mixer & Panel Discussion",
    subtitle: "Building Connections in the Legal Community",
    location: "Calgary, Canada",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=200&fit=crop",
    attendees: [
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
    ],
    attendeeCount: "150+",
  },
];

const ITEMS_PER_PAGE = 2;

export default function EventsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showUpcoming, setShowUpcoming] = useState(true);

  // Split Upcoming vs Past
  const today = new Date();
  const upcomingEvents = allEvents.filter((e) => new Date(e.date) >= today);
  const pastEvents = allEvents.filter((e) => new Date(e.date) < today);

  const eventsToShow = showUpcoming ? upcomingEvents : pastEvents;

  // Pagination
  const totalPages = Math.ceil(eventsToShow.length / ITEMS_PER_PAGE);
  const paginatedEvents = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return eventsToShow.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, eventsToShow]);

  // Carousel navigation (no loop)
  const nextSlide = () =>
    setCurrentSlide((prev) =>
      prev < featuredEvents.length - 1 ? prev + 1 : prev
    );
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-18">
        {/* Featured Event Carousel */}
        <div className="mb-12">
          {featuredEvents.length > 0 ? (
            <div className="relative bg-brand-black rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="min-w-full h-96 relative flex items-end"
                  >
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                      {event.category}
                    </div>

                    {/* Background image */}
                    <img
                      src={event.image}
                      alt={event.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    {/* Text */}
                    <div className="relative z-10 p-8 text-white">
                      <div className="flex items-center space-x-4 text-sm mb-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {event.date}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        {event.title}
                      </h2>
                      <p className="text-gray-200 text-lg">{event.subtitle}</p>
                      <div className="flex items-center mt-4 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full p-2 transition disabled:opacity-40"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === featuredEvents.length - 1}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full p-2 transition disabled:opacity-40"
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
                        ? "bg-white scale-110"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-gray-100 border border-gray-200 rounded-2xl shadow-sm py-16 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                No upcoming events
              </h2>
              <p className="text-gray-600 text-lg">Watch this space for updates!</p>
            </div>
          )}
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-center mb-10 space-x-6">
          <button
            onClick={() => {
              setShowUpcoming(true);
              setCurrentPage(1);
            }}
            className={`pb-2 text-lg font-semibold transition-colors border-b-2 ${
              showUpcoming
                ? "text-brand-gold border-brand-gold"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => {
              setShowUpcoming(false);
              setCurrentPage(1);
            }}
            className={`pb-2 text-lg font-semibold transition-colors border-b-2 ${
              !showUpcoming
                ? "text-brand-gold border-brand-gold"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Events List */}
        <div className="space-y-6 mb-12 transition-all duration-500">
          {paginatedEvents.length > 0 ? (
            paginatedEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Event Image */}
                  <div className="md:w-64 h-48 md:h-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1 text-brand-gold" />
                          {new Date(event.date).toDateString()}
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
            ))
          ) : (
            <div className="border-gray-200 rounded-xl py-16 text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {showUpcoming ? "No upcoming events" : "No past events"}
              </h3>
              <p className="text-gray-500">Watch this space for updates!</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50"
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {[...Array(totalPages)].map((_, page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page + 1)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === page + 1
                    ? "bg-brand-gold text-white"
                    : "border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {page + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
