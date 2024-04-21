import { Helmet } from "react-helmet";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Articles from "../Components/Articles/Articles";

export default function Blog() {
  return (
    <>
      <Helmet>
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
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=165915656582367&ev=PageView
          &noscript=1"
          />
        </noscript>
      </Helmet>
      <Navbar />
      <Articles />

      <Footer />
    </>
  );
}
