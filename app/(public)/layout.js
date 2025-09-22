import Navbar from "../../components/public/layout/Navbar";
import Footer from "../../components/public/layout/Footer";

export default function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
