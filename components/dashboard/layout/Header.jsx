"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = { name: "Admin User" }; // replace with real auth data

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-bold text-black">Dashboard</h1>

      <div className="relative">
        <button
          className="flex items-center space-x-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="font-medium">{user.name}</span>
          <span className="text-[#dd9933]">▼</span>
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 bg-white border rounded shadow w-40">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Profile
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
