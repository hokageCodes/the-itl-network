"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import FAQSection from "../../../components/sections/FAQSection";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    console.log("📩 Contact form submitted:", formData);

    // placeholder
    setTimeout(() => {
      alert("Message sent (demo only)");
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-64 bg-black flex items-center justify-center text-white py-48">
        <h1 className="text-4xl font-extrabold">Contact Us</h1>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-6xl mx-auto px-6 py-48 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info Side */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            We are always ready to help you
          </h2>
          <p className="text-gray-600">
            Have questions, ideas, or need assistance? Reach out to our team —
            we’d love to hear from you.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="w-5 h-5 text-brand-gold" />
              <span>+1 (234) 567 890</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-5 h-5 text-brand-gold" />
              <span>contact@itl.org</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="w-5 h-5 text-brand-gold" />
              <span>152 W 42nd Street, New York, NY</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 pt-4">
            <a href="#" className="text-gray-500 hover:text-brand-gold">Fb</a>
            <a href="#" className="text-gray-500 hover:text-brand-gold">X</a>
            <a href="#" className="text-gray-500 hover:text-brand-gold">In</a>
          </div>
        </div>

        {/* Form Side */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm space-y-6"
        >
          <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-lg focus:ring-brand-gold focus:border-brand-gold text-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border rounded-lg focus:ring-brand-gold focus:border-brand-gold text-sm"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-3 border rounded-lg focus:ring-brand-gold focus:border-brand-gold text-sm"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            className="w-full px-4 py-3 border rounded-lg focus:ring-brand-gold focus:border-brand-gold text-sm"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-brand-gold hover:opacity-90 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      {/* Map Section (static for now) */}
      {/* <section className="h-80 bg-gray-200">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=New+York&key=YOUR_API_KEY"
        ></iframe>
      </section> */}
      <div className="-mt-24">
        <FAQSection />
      </div>
    </main>
  );
};

export default ContactPage;
