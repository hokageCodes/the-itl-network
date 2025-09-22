"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function ProtectedRoute({ children, roles }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login");
      } else if (roles && !roles.includes(user.role)) {
        router.push("/unauthorized");
      }
    }
  }, [user, loading, roles, router]);

  if (loading) return <div className="p-6">Loading...</div>;

  if (!user) return null; // waits for redirect
  if (roles && !roles.includes(user.role)) return null;

  return children;
}
