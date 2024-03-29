import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Method from "../Components/Method/Method";
import Portfolio from "../Components/Portfolio/Portfolio";
import Opinion from "../Components/Opinion/Opinion";
// import Blog from "../Components/Blog/Blog";
import Contacts from "../Components/Contact/Contacts";
import Footer from "../Components/Footer/Footer";
import FollowMe from "../Components/FollowMe/FollowMe";
import CTA from "../Components/CTA/CTA";

import { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/src/assets/Images/Favicon.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stefano Montemarli - Web Designer & Social Media Manager</title>
        <meta property="og:title" content="Stefano Montemarli" />
        <meta
          property="og:description"
          content="Migliora la tua presenza online"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://1drv.ms/i/s!AmWaVBl9p_dCgWiemacZx7YdEJm6?e=OpigS2"
        />
        <meta property="og:url" content="https://www.stefanomontemarli.it" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Method />
      <CTA />
      <Portfolio />
      <Opinion />
      {/* <Blog /> */}
      <Contacts />
      <FollowMe />
      <Footer />
    </>
  );
}
