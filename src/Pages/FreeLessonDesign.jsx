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
          type="image/svg+xml"
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
      </Helmet>
      <HeroFreeDesign />
      <Method />
      <Contact />
      <Footer />
    </>
  );
}
