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
import Call from "../Components/Call/Call";

import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Stefano Montemarli - Web Designer & Social Media Manager</title>
        <meta
          name="description"
          content="Realizzo siti web professionali e gestisco la tua presenza sui social media. Scopri come posso migliorare la tua presenza online!"
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
        <link rel="canonical" href="https://stefanomontemarli.it" />
        <meta name="msvalidate.01" content="657F792FCA9D39F2A5105AE067F78E0B" />

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
      <Call />
    </>
  );
}
