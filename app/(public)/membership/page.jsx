"use client";
import Link from "next/link";

export default function MembershipPage() {
  const perks = [
    {
      title: "Exclusive Resources",
      description: "Access legal templates, guides, and tools curated for members.",
    },
    {
      title: "Mentorship Opportunities",
      description: "Connect with experienced professionals for guidance and support.",
    },
    {
      title: "Networking Events",
      description: "Join webinars, workshops, and networking events to grow your career.",
    },
    {
      title: "Professional Recognition",
      description: "Showcase your achievements and be recognized within our community.",
    },
  ];

  return (
    <div className="relative">
      {/* Hero / Landing Section */}
      <section className="relative bg-black text-white py-32 sm:py-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            Join the ITL Network
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Become a member and unlock exclusive perks designed to accelerate your legal career in Canada.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href="/membership/signup"
              className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-lg"
            >
              Sign Up
            </Link>
            <Link
              href="/membership/login"
              className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Membership Perks
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              As a member, you gain access to resources, networking, mentorship, and opportunities tailored for your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 text-black text-2xl font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{perk.title}</h3>
                <p className="text-gray-600">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
