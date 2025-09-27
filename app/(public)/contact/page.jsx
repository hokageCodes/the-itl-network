"use client";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      alert("Message sent successfully!");
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen text-brand-white-50">
      {/* Hero */}
      <section className="pt-32 pb-12 px-2 text-center">
        <h1 className="text-5xl font-bold text-black">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
          Have questions, feedback, or partnership opportunities? We’d love to hear from you.
        </p>
      </section>

      {/* Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-black mb-2">Our Office</h2>
            <p className="text-gray-700 text-lg">
              Toronto, Ontario, Canada
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-2">Email</h2>
            <p>
              <a href="mailto:info@itlnetwork.org" className="text-gray-700 text-lg transition">
                info@itlnetwork.org
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-2">Social</h2>
            <div className="flex gap-4 underline">
              <a href="#" className="text-gray-700 text-lg trasnition">LinkedIn</a>
              <a href="#" className="text-gray-700 text-lg trasnition">Twitter</a>
              <a href="#" className="text-gray-700 text-lg trasnition">Instagram</a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="bg-brand-black-900 p-8 rounded-2xl shadow-gold space-y-6 border border-brand-black-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-brand-black-800 border border-brand-black-600 text-brand-white-50 placeholder-brand-white-400 focus:ring-2 focus:ring-brand-gold-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-brand-black-800 border border-brand-black-600 text-brand-white-50 placeholder-brand-white-400 focus:ring-2 focus:ring-brand-gold-500 focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-lg bg-brand-black-800 border border-brand-black-600 text-brand-white-50 placeholder-brand-white-400 focus:ring-2 focus:ring-brand-gold-500 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="6"
              className="w-full px-4 py-3 rounded-lg bg-brand-black-800 border border-brand-black-600 text-brand-white-50 placeholder-brand-white-400 focus:ring-2 focus:ring-brand-gold-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 font-semibold text-lg bg-brand-gold-500 text-brand-black-950 rounded-lg hover:bg-brand-gold-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
