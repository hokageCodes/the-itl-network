"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import api from "../../../lib/api";
import { useAuth } from "../../../context/AuthContext";

export default function VerifyOtpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setAccessTokenDirect } = useAuth();

  const email = searchParams.get("email")?.toLowerCase(); // ✅ normalize email
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState(null);

  const handleVerify = async () => {
    try {
      const res = await api.post("/auth/verify-otp", { email, otp });
      await setAccessTokenDirect(res.data.accessToken);
      setStatus("success");
      setTimeout(() => router.push("/dashboard"), 3000);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 rounded-xl shadow-md bg-white text-center">
        <h2 className="text-lg font-semibold mb-4">Enter OTP for {email}</h2>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          className="border p-2 rounded w-40 text-center tracking-widest text-lg"
        />
        <button
          onClick={handleVerify}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Verify
        </button>

        {status === "success" && (
          <p className="text-green-600 mt-2">✅ Verified! Redirecting...</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2">❌ Invalid or expired code</p>
        )}
      </div>
    </div>
  );
}
