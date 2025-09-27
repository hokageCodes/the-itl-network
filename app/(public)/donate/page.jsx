"use client";
import FAQSection from "../../../components/sections/FAQSection";
import { useState } from "react";

const DonateSection = () => {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const amounts = [25, 50, 75, 100, 200];

  const handleAmountClick = (val) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(0);
  };

  const handleSubmit = async () => {
    setLoading(true);

    const firstName = (document.querySelector(
      'input[name="firstName"]'
    ))?.value;
    const lastName = (document.querySelector(
      'input[name="lastName"]'
    ))?.value;
    const email = (document.querySelector(
      'input[name="email"]'
    ))?.value;

    const donationData = {
      amount: (customAmount || amount),
      firstName,
      lastName,
      email,
    };

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      });

      const { url } = await res.json();
      window.location.href = url;
    } catch (err) {
      console.error("Stripe checkout failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen text-brand-white-50">
      {/* Hero */}
      <section className="pt-32 text-center">
        <div className="max-w-3xl mx-auto px-2">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Make A Positive Impact Today!
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Every contribution helps us empower communities, provide education,
            and create a brighter future.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 px-2">
        <div className="max-w-2xl mx-auto">
          <div className="bg-brand-black-900 border border-brand-black-700 rounded-xl p-10">
            <h2 className="text-3xl font-semibold text-center text-brand-white-100 mb-8">
              Make Your Impact
            </h2>

            <div className="space-y-8">
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-brand-white-400 mb-3">
                  Select Amount
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {amounts.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleAmountClick(val)}
                      className={`px-4 py-3 rounded-xl font-medium transition ${
                        amount === val
                          ? "bg-brand-gold-500 text-brand-black-50 shadow-gold"
                          : "bg-brand-black-800 text-brand-white-300 hover:bg-brand-black-700 border border-brand-black-600"
                      }`}
                    >
                      ${val}
                    </button>
                  ))}
                  <input
                    type="number"
                    placeholder="Custom"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="col-span-2 sm:col-span-1 px-3 py-3 bg-brand-black-800 border border-brand-black-600 rounded-xl text-brand-white-200 placeholder-brand-white-400 focus:ring-brand-gold-500 focus:border-brand-gold-500"
                  />
                </div>
              </div>

              {/* Personal Info */}
              <div>
                <label className="block text-sm font-medium text-brand-white-400 mb-3">
                  Your Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="px-4 py-3 bg-brand-black-800 border border-brand-black-600 rounded-xl text-brand-white-200 placeholder-brand-white-400 focus:ring-brand-gold-500 focus:border-brand-gold-500"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="px-4 py-3 bg-brand-black-800 border border-brand-black-600 rounded-xl text-brand-white-200 placeholder-brand-white-400 focus:ring-brand-gold-500 focus:border-brand-gold-500"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="mt-4 w-full px-4 py-3 bg-brand-black-800 border border-brand-black-600 rounded-xl text-brand-white-200 placeholder-brand-white-400 focus:ring-brand-gold-500 focus:border-brand-gold-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  onClick={handleSubmit}
                  className="w-full py-4 rounded-xl font-semibold text-lg bg-brand-gold-500 text-brand-black-950 hover:bg-brand-gold-600 transition disabled:opacity-50 shadow-gold"
                >
                  {loading ? "Processing..." : "Donate Now"}
                </button>
              </div>

              {/* Security Notice */}
              <p className="text-sm text-center text-brand-white-400">
                🔒 Secured by Stripe • Your information is protected
              </p>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
    </main>
  );
};

export default DonateSection;
