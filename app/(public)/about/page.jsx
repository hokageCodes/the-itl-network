import ExecutiveTeamSection from '../../../components/sections/ExecutiveSection';
import FAQSection from '../../../components/sections/FAQSection';
import React from 'react';

const AboutPage = () => {
  const stats = [
    { number: "500+", label: "ITL members nationwide", color: "bg-purple-100 text-purple-800" },
    { number: "2.3k", label: "Successful licensure completions over 2.3k milestone cases", color: "bg-yellow-100 text-yellow-800" },
  ];

  const values = [
    {
      icon: "😊",
      title: "Innovation",
      description: "We embrace our leading-edge methods as we pioneer new pathways for ITL success."
    },
    {
      icon: "🎯",
      title: "Integrity",
      description: "Integrity is the foundation of trust, guiding our interactions and building our reputation."
    },
    {
      icon: "👥",
      title: "Customer-centric",
      description: "At ITL Network, we put our community at the heart of all our actions and in all the experiences we provide."
    },
    {
      icon: "🤝",
      title: "Integrity and Trust",
      description: "We are committed to building lasting relationships through integrity, transparency, and accountability."
    },
    {
      icon: "🔗",
      title: "Collaboration and Teamwork",
      description: "Success comes when we join forces of collaboration, sharing diverse perspectives and working."
    },
    {
      icon: "⭐",
      title: "Commitment to excellence",
      description: "We are unwavering in our commitment to excellence, continuously refining our processes."
    }
  ];

  const teamMembers = [
    { name: "Sarah Chen", role: "Executive Director", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" },
    { name: "Marcus Johnson", role: "Program Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
    { name: "Priya Patel", role: "Legal Affairs", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" },
    { name: "David Wilson", role: "Community Outreach", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" }
  ];

  const testimonials = [
    {
      text: "ITL Network provided me with the guidance and support I needed during my licensing process. The mentorship program was invaluable.",
      author: "Alex Kim",
      role: "Licensed Lawyer",
      rating: 5
    },
    {
      text: "The networking opportunities and resources available through ITL Network helped me transition successfully into the Canadian legal market.",
      author: "Maria Santos",
      role: "Legal Associate",
      rating: 5
    },
    {
      text: "Outstanding community support. The events and workshops provided practical insights that made all the difference in my career.",
      author: "James Liu",
      role: "Corporate Lawyer",
      rating: 5
    },
    {
      text: "ITL Network's advocacy work is changing the landscape for internationally trained lawyers. Proud to be part of this community.",
      author: "Fatima Al-Rashid",
      role: "Immigration Lawyer",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What is an Internationally Trained Lawyer?",
      answer: "An ITL is a lawyer who received their legal education outside of Canada and is seeking to practice law in Canada."
    },
    {
      question: "What is the cost of an ITL Network membership?",
      answer: "Membership is free for all internationally trained lawyers and law graduates seeking to practice in Canada."
    },
    {
      question: "How can we be an affiliate?",
      answer: "Contact us at info@itlnetwork.ca to discuss partnership and affiliation opportunities."
    },
    {
      question: "How many members are in the network?",
      answer: "We have over 500 active members across Canada from diverse legal backgrounds and jurisdictions."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="mx-auto px-2 sm:px-6 lg:px-8 py-36">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About The ITL Network
          </h1>
        </div>

        {/* Stats and Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Stats */}
          <div className="space-y-6">
            <div className={`${stats[0].color} p-6 rounded-lg`}>
              <div className="text-2xl font-bold mb-2">{stats[0].number}</div>
              <div className="text-sm">{stats[0].label}</div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" 
              alt="Team collaboration"
              className="rounded-lg w-full h-[400px] object-cover"
            />
          </div>

          {/* Center Image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=500&fit=crop" 
              alt="Professional workspace"
              className="rounded-lg w-full h-[530px] object-cover"
            />
          </div>

          {/* Right Stats */}
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop" 
              alt="Legal meeting"
              className="rounded-lg w-full h-[400px] object-cover"
            />
            <div className={`${stats[1].color} p-6 rounded-lg`}>
              <div className="text-2xl font-bold mb-2">{stats[1].number}</div>
              <div className="text-sm">{stats[1].label}</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Professional solutions for internationally trained lawyers.
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl">
            Our mission is to assist Internationally Trained Lawyers (ITLs) and Internationally Trained Law Graduates (ITLGs) throughout the licensing process by promoting a more inclusive legal profession and a strong network for diversity and growth.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-4">{value.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Transforming Section */}
        <div className="bg-white rounded-lg p-8 mb-16 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming legal careers with professional guidance.
            </h2>
            <p className="text-gray-600 mb-6">
              We are the one stop resource for internationally trained legal professionals, and we seek to foster meaningful mentorship for ITLs undergoing the licensing process in Canada.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Our unified technology investing learning
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                24/7 support and community engagement
              </li>
              <li className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Our systems have been tried
              </li>
            </ul>
            <button className="bg-black text-white px-6 py-3 rounded-md">
              Read More About Us →
            </button>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=400&fit=crop" 
              alt="Legal professionals working"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        {/* Team Section */}
        <ExecutiveTeamSection />

        {/* Testimonials */}

        {/* FAQ Section */}
        <FAQSection />

      </main>
    </div>
  );
};

export default AboutPage;