import "./styles/main.scss";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Review from "./sections/Review";
import Footer from "./components/Footer";
import Follow from "./sections/Follow";
import Cta from "./components/Cta";
import Collection from "./sections/Collection";
import Instagram from "./sections/Instagram";
import SkinCare from "./sections/SkinCare";

function App() {
  return (
    <>
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

        <section id="instagram" className="section">
          <Instagram />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
