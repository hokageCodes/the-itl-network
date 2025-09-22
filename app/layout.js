// app/layout.js
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "ITL Network",
  description: "Mentorship platform for internationally trained lawyers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
