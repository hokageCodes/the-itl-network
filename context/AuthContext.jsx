  "use client";
  import { createContext, useContext, useEffect, useState } from "react";
  import { useRouter } from "next/navigation";
  import api from "../lib/api";

  const AuthContext = createContext();

  export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [loading, setLoading] = useState(true); // true until refresh finishes
    const router = useRouter();

    const setAccessTokenDirect = async (token) => {
      setAccessToken(token);
      await fetchMe(token);
    };

    const fetchMe = async (token) => {
      try {
        const res = await api.get("/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      }
    };

    useEffect(() => {
      const refresh = async () => {
        try {
          const res = await api.get("/auth/refresh");
          setAccessToken(res.data.accessToken);
          await fetchMe(res.data.accessToken);
        } catch (error) {
          if (error.response?.status !== 401) {
            console.error("Token refresh failed:", error);
          }
          setUser(null);
          setAccessToken(null);
        } finally {
          setLoading(false); // ✅ only finish after refresh attempt
        }
      };
      refresh();
    }, []);

    const login = async (values) => {
      try {
        const res = await api.post("/auth/login", values);
        if (res.data.accessToken && res.data.user) {
          setAccessToken(res.data.accessToken);
          setUser(res.data.user);
          router.push("/dashboard");
        } else {
          throw new Error("Invalid response from server");
        }
      } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        throw error;
      }
    };

    const logout = async () => {
      try {
        await api.post("/auth/logout");
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        setUser(null);
        setAccessToken(null);
        router.push("/login");
      }
    };

    return (
      <AuthContext.Provider
        value={{
          user,
          accessToken,
          login,
          logout,
          loading,
          setAccessTokenDirect,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }

  export const useAuth = () => useContext(AuthContext);
