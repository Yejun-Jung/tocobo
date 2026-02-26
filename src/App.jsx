import { useState, useEffect } from "react";
import "./styles/main.scss";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Review from "./sections/Review";
import Footer from "./components/Footer";
import Follow from "./sections/Follow";
import Collection from "./sections/Collection";
import SkinCare from "./sections/SkinCare";
import Instagram from "./sections/Instagram";
import TopBanner from "./components/TopBanner";
import FixedTopBtn from "./components/FixedTopBtn";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [topBanner, setTopBanner] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
      once: false,
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const upTopBanner = () => {
    setTopBanner("up");
  };

  return (
    <div className={`app-container ${topBanner} ${isScrolled ? "scrolled" : ""}`}>
      <FixedTopBtn />
      <TopBanner onClick={upTopBanner} />
      <Header />
      <main>
        <section id="hero" className="section">
          <Hero />
        </section>
        <section id="follow" className="section">
          <Follow />
        </section>
        <section id="collection" className="section">
          <Collection />
        </section>
        <section id="skincare" className="section">
          <SkinCare />
        </section>
        <section id="instargram" className="section">
          <Instagram />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;