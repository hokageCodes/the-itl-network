"use client";

import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute roles={["member", "admin"]}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-4">
          <h2 className="text-lg font-bold mb-4">Dashboard</h2>
          {/* your sidebar nav links */}
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-gray-50 text-black">
          {/* Header */}
          <header className="p-4 border-b bg-white shadow">
            <h1 className="text-xl font-bold">Welcome</h1>
          </header>

          {/* Page content */}
          <div className="p-6">{children}</div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
