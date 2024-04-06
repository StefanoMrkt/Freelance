import { Helmet } from "react-helmet";

import Footer from "../Components/Footer/Footer";
import HeroFreeDesign from "../Components/FreeDesign/HeroFreeDesign/HeroFree";
import Method from "../Components/FreeDesign/Method/Method";
import Contact from "../Components/FreeDesign/Contact/Contacts";

export default function FreeLessonDesign() {
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
        <title>
          Stefano Montemarli - Scarica la videolezione gratuita sul Web Design
        </title>
        <meta property="og:title" content="Stefano Montemarli" />
        <meta
          property="og:description"
          content="Ottimizza il tuo sito web e impara a creare contenuti di qualità con la videolezione gratuita sul Web Design. Scaricala subito!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://1drv.ms/i/s!AmWaVBl9p_dCgWiemacZx7YdEJm6?e=OpigS2"
        />
        <meta
          property="og:url"
          content="https://www.stefanomontemarli.it/lezione-gratuita-design"
        />

        <script
          src="https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127"
          type="text/javascript"
        ></script>
        <script>
          {`fetch(
            "https://assets.mailerlite.com/jsonp/644337/forms/113099232009783174/takel"
          )`}
        </script>

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
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-formsubmit@1/formsubmit.js"
        ></script>
      </Helmet>
      <HeroFreeDesign />
      <Method />
      <Contact />
      <Footer />
    </>
  );
}
