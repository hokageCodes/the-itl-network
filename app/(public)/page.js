import FAQSection from "../../components/sections/FAQSection";
import AboutSection from "../../components/sections/AboutSection";
import Hero from "../../components/sections/HeroSection";
import WhyJoinUs from "../../components/sections/WhyJoinUs";
import ImageGallery from "../../components/sections/ExecutiveSection";
import KeyOfferings from "../../components/sections/KeyOfferings";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <WhyJoinUs />
      <ImageGallery />
      <KeyOfferings />
      <FAQSection />
    </div>
  );
}
