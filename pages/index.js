import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Works from "./works";
import Skills from "./skills";
import Testimonial from "./testimonials";
import Services from "./works";
import Contacts from "./contacts";

export default function Home() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Works />
      <Skills />
      <Testimonial />
      <Contacts />
      <Footer />
    </div>
  );
}
