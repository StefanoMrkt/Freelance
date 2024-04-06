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
import FollowMe from "../Components/FollowMe/FollowMe";
import CTA from "../Components/CTA/CTA";

import { Helmet } from "react-helmet";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <link
          rel="icon"
          type="image/png"
          href="/src/assets/Images/Favicon.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stefano Montemarli - Web Designer & Social Media Manager</title>
        <meta
          name="description"
          content="Realizzo siti web professionali e gestisco la tua presenza sui social media. Scorpi come posso migliorare la tua presenza online!"
        />

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

        <script>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '165915656582367'); 
          fbq('track', 'PageView');`}
        </script>
        <noscript>
          {` <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=165915656582367&ev=PageView
          &noscript=1"
          />`}
        </noscript>
        <meta
          name="google-site-verification"
          content="0ijiX29zHbhM4fP7fjQ6Imgd3PbpjZ2Xir1rKPR6eZM"
        />
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
