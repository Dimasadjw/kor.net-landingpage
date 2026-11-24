import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Features />
      <HowItWorks />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
