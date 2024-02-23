import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Method from "../Components/Method/Method";
import Portfolio from "../Components/Portfolio/Portfolio";
import Opinion from "../Components/Opinion/Opinion";
import Blog from "../Components/Blog/Blog";
import Contacts from "../Components/Contact/Contacts";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Method />
      <Portfolio />
      <Opinion />
      <Blog />
      <Contacts />
      <Footer />
    </>
  );
}
