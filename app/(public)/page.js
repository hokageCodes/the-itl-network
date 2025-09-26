import FAQSection from "../../components/sections/FAQSection";
import AboutSection from "../../components/sections/AboutSection";
import Hero from "../../components/sections/HeroSection";
import WhyJoinUs from "../../components/sections/WhyJoinUs";
import ImageGallery from "../../components/sections/ExecutiveSection";
import KeyOfferings from "../../components/sections/KeyOfferings";
import ParallaxCarousel from "../../components/sections/ParallaxSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ParallaxCarousel />
      <AboutSection />
      <WhyJoinUs />
      <ImageGallery />
      <KeyOfferings />
      <FAQSection />
    </div>
  );
}
