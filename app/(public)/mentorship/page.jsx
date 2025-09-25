import React from 'react';

const EduFlexHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-600 p-6">
      {/* Navigation */}
      <nav className="flex items-center justify-between mb-8">
        <div className="text-2xl font-bold text-white">EduFlex</div>
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="#" className="hover:text-green-200 transition-colors">Course</a>
          <a href="#" className="hover:text-green-200 transition-colors">Pricing</a>
          <a href="#" className="hover:text-green-200 transition-colors">Tutor</a>
          <a href="#" className="hover:text-green-200 transition-colors">Admission</a>
          <a href="#" className="hover:text-green-200 transition-colors">About</a>
        </div>
        <button className="bg-white text-green-600 px-6 py-2 rounded-full font-medium hover:bg-green-50 transition-colors">
          Contact
        </button>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                A new way to learn
                <br />
                <span className="text-green-600">&</span> get knowledge
              </h1>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                EduFlex is here for you with various courses & 
                <br />
                materials from skilled tutors around the world
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button className="bg-purple-500 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-600 transition-colors">
                  Get started
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                  Learn more
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">15.2K</div>
                  <div className="text-gray-600 text-sm">Active students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.5K</div>
                  <div className="text-gray-600 text-sm">Tutors</div>
                </div>
                <div className="text-center flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="text-gray-600 text-sm">Resources</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-purple-50">
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-blue-400 rounded-full opacity-20"></div>
              <div className="absolute bottom-16 left-8 w-8 h-8 bg-purple-400 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 right-4 w-4 h-4 bg-green-400 rounded-full opacity-40"></div>
              
              {/* Student cards */}
              <div className="relative z-10">
                {/* Top student */}
                <div className="absolute top-0 left-8 bg-white rounded-2xl shadow-lg p-4 w-48 transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="w-full h-24 bg-orange-400 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700">Interactive Learning</div>
                </div>

                {/* Middle student */}
                <div className="absolute top-16 right-0 bg-white rounded-2xl shadow-lg p-4 w-44 transform -rotate-2 hover:rotate-0 transition-transform">
                  <div className="w-full h-20 bg-purple-400 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
                  </div>
                  <div className="text-xs font-medium text-gray-700">Smart Analytics</div>
                </div>

                {/* Bottom student */}
                <div className="absolute bottom-8 left-4 bg-white rounded-2xl shadow-lg p-4 w-52 transform rotate-1 hover:rotate-0 transition-transform">
                  <div className="w-full h-28 bg-green-400 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-20 h-20 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700">Expert Guidance</div>
                </div>
              </div>

              {/* Plus icons */}
              <div className="absolute top-1/4 left-1/2 w-8 h-8 text-gray-400">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
              <div className="absolute bottom-1/3 right-1/4 w-6 h-6 text-gray-300">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduFlexHero;