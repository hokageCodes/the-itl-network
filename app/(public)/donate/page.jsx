"use client";
import FAQSection from "../../../components/sections/FAQSection";
import { useState } from "react";

const DonateSection = () => {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("test");
  const [loading, setLoading] = useState(false);

  const amounts = [25, 50, 75, 100, 200];

  const handleAmountClick = (val) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const donationData = {
      amount: Number(customAmount || amount),
      paymentMethod,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
    };

    console.log("🚀 Donation initiated:", donationData);

    try {
      if (paymentMethod === "test") {
        alert(
          `Pretend we are redirecting to ${paymentMethod} for $${donationData.amount}`
        );
      } else if (paymentMethod === "offline") {
        alert("Offline donation recorded. We will contact you soon.");
      }
    } catch (err) {
      console.error("Payment failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* 🌟 Hero Banner */}
      <section className="relative bg-black text-white py-48 text-center">
        <div className="max-w-4xl mx-auto px-2">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Transform Lives with Your Donation
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Every contribution helps us empower communities, provide education,
            and create a brighter future.
          </p>
        </div>
      </section>

      {/* 💳 Donation Form Section */}
      <section className="max-w-3xl mx-auto px-4 py-20 -mt-24 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Donate Now
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Amount Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Amount
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {amounts.map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleAmountClick(val)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
                      amount === val
                        ? "bg-brand-gold text-white border-brand-gold"
                        : "border-gray-300 text-gray-700 hover:border-brand-gold hover:text-brand-gold"
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
                  className="col-span-2 sm:col-span-1 px-3 py-2 border rounded-lg text-sm focus:ring-brand-gold focus:border-brand-gold"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Payment Method
              </label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="payment"
                    value="test"
                    checked={paymentMethod === "test"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-brand-gold focus:ring-brand-gold"
                  />
                  Test Donation
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="payment"
                    value="offline"
                    checked={paymentMethod === "offline"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-brand-gold focus:ring-brand-gold"
                  />
                  Offline Donation
                </label>
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="px-3 py-2 border rounded-lg text-sm focus:ring-brand-gold focus:border-brand-gold"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="px-3 py-2 border rounded-lg text-sm focus:ring-brand-gold focus:border-brand-gold"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="sm:col-span-2 px-3 py-2 border rounded-lg text-sm focus:ring-brand-gold focus:border-brand-gold"
                required
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-gold hover:opacity-90 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
              >
                {loading ? "Processing..." : "Donate Now"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection />
        </div>
      </section>
    </main>
  );
};

export default DonateSection;
