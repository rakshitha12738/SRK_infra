import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";
import WhatsAppButton from "../components/WhatsAppButton";


function Home() {
  return (
    <>
      <Navbar />

      <HeroSlider />

      <AboutSection />

      <WhyChooseUs />

      <CTASection />

      <Footer />

      <WhatsAppButton />
    </>
  );
}


export default Home;