import KeyOfferings from '../../../components/sections/KeyOfferings';
import ExecutiveTeamSection from '../../../components/sections/ExecutiveSection';
import FAQSection from '../../../components/sections/FAQSection';
import React from 'react';

const AboutPage = () => {
  const stats = [
    { number: "500+", label: "ITL members nationwide", color: "bg-purple-100 text-purple-800" },
    { number: "2.3k", label: "Successful licensure completions", color: "bg-yellow-100 text-yellow-800" },
  ];

  return (
    <div className="min-h-screen">
      <main className="mx-auto px-2 sm:px-6 lg:px-8 py-36">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About The ITL Network
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building equity, opportunity, and community for Internationally Trained Lawyers in Canada.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <div key={i} className={`${s.color} p-8 rounded-lg text-center`}>
              <div className="text-5xl font-extrabold mb-2">{s.number}</div>
              <div className="text-lg font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <section className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Story</h2>
          <div className="relative border-l-4 border-yellow-500 pl-6 space-y-8">
            <p className="text-gray-700 leading-relaxed">
              The ITL Network was established as a registered not-for-profit under the Canada Not-for-profit Corporations Act 
              to respond to the unique challenges faced by internationally trained legal professionals. What began as a community 
              to support candidates navigating the licensing process has grown into a platform for mentorship, professional development, 
              and advocacy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A key pillar of our work is the ITL Conference — the national conference for internationally trained lawyers, held annually 
              in partnership with fellow equity-seeking groups. The conference attracts impactful speakers and brings together hundreds 
              of ITLs from across Canada to deliberate, connect, network, learn, and inspire each other.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Alongside the conference, our Revamped Mentorship Program connects ITLs with experienced lawyers and leaders in the profession, 
              offering tailored guidance on licensing, career advancement, and building sustainable practices. Complementing this, our Membership 
              Platform provides year-round access to resources, networking opportunities, and exclusive programming designed to foster growth, 
              collaboration, and long-term success.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through these initiatives, we are building a strong, connected network that promotes equitable access to opportunities and strengthens 
              the future of the Canadian legal profession.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
{/* Mission & Vision */}
<section className="relative bg-gradient-to-br from-brand.black.950 via-brand.black.900 to-brand.black.800 rounded-3xl shadow-gold p-12 mb-24 max-w-6xl mx-auto overflow-hidden">
  {/* Accent Glow */}
  <div className="absolute inset-0 bg-brand.gold.500/5 blur-3xl rounded-3xl pointer-events-none"></div>

  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Mission */}
    <div className="bg-brand.black.900/60 backdrop-blur-xs p-8 rounded-2xl border border-brand.gold.500/20 hover:shadow-gold-lg transition-all duration-500 hover:-translate-y-2 animate-slide-up">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand.gold.500 text-brand.black.950 font-extrabold shadow-md mr-4">
          M
        </div>
        <h3 className="text-2xl font-bold text-brand.gold.400">Mission</h3>
      </div>
      <p className="text-brand.white.200 leading-relaxed">
        To advance diversity, equity, and inclusion within the Canadian legal profession by supporting Internationally Trained Lawyers (ITLs) 
        and Internationally Trained Law Graduates (ITLGs) at every stage of their professional journey. We provide guidance through the licensing 
        process, mentorship for practicing lawyers, and resources to foster career growth, leadership development, and the building of sustainable 
        legal practices.
      </p>
    </div>

    {/* Vision */}
    <div className="bg-brand.black.900/60 backdrop-blur-xs p-8 rounded-2xl border border-brand.gold.500/20 hover:shadow-gold-lg transition-all duration-500 hover:-translate-y-2 animate-slide-up delay-200">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand.gold.500 text-brand.black.950 font-extrabold shadow-md mr-4">
          V
        </div>
        <h3 className="text-2xl font-bold text-brand.gold.400">Vision</h3>
      </div>
      <p className="text-brand.white.200 leading-relaxed">
        A legal profession in Canada that reflects the richness of global perspectives, where internationally trained talent is fully integrated, 
        valued, and empowered to thrive, contribute, and lead.
      </p>
    </div>
  </div>
</section>


        {/* About Section */}
        <section className="max-w-6xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/confe.webp" 
              alt="Conference"
              className="rounded-xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">About</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The ITL Network is a registered not-for-profit organization under the Canada Not-for-profit Corporations Act. Our mission is to advance diversity, equity, and inclusion within the Canadian legal profession by supporting Internationally Trained Lawyers (ITLs) and Internationally Trained Law Graduates (ITLGs) at every stage of their professional journey. 
            </p>
            <p className="text-gray-700 leading-relaxed">
             We provide guidance through the licensing process, mentorship for practicing lawyers, and resources to foster career growth, leadership development, and the building of sustainable legal practices. Through a strong and connected community, we are committed to creating equitable access to opportunities and strengthening the future of the profession.
            </p>
          </div>
        </section>


        <KeyOfferings />

        {/* Team */}
        <ExecutiveTeamSection />

        {/* FAQ */}
        <FAQSection />
      </main>
    </div>
  );
};

export default AboutPage;
