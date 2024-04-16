import { Helmet } from "react-helmet";

import NavBar from "../Components/Navbar/Navbar";
import Contact from "../Components/Contact/Contacts";
import Footer from "../Components/Footer/Footer";
import HeroSocial from "../Components/HeroSocial/HeroSocial";
import Strategy from "../Components/Strategy/Strategy";
import ServiceFor from "../Components/ServiceFor/ServiceFor";

import check from "../assets/Images/check.png";
import LaptopSocial from "../assets/Images/LaptopSocial.png";

import Smart1 from "../assets/Images/Smart1.png";
import Smart2 from "../assets/Images/Smart2.png";
import Smart3 from "../assets/Images/Smart3.png";
import Smart4 from "../assets/Images/Smart4.png";

export default function Web() {
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
        <title>Stefano Montemarli - Social Media Manager</title>
        <meta property="og:title" content="Stefano Montemarli" />
        <meta
          property="og:description"
          content="Migliora la tua presenza online con il Social Media Marketing"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://1drv.ms/i/s!AmWaVBl9p_dCgWiemacZx7YdEJm6?e=OpigS2"
        />
        <meta
          property="og:url"
          content="https://www.stefanomontemarli.it/servizi/social"
        />
        <link rel="canonical" href="https://www.stefanomontemarli.it" />

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
      <NavBar />
      <HeroSocial />
      <ServiceFor
        image={LaptopSocial}
        secondaDescrizione={`Oltre a essere un mezzo per comunicare con il tuo pubblico, 
        i social media sono un potente strumento strategico per far crescere la tua presenza online 
        e raggiungere i tuoi obiettivi di business.<br/><br/>
        Immaginali come i canali attraverso cui puoi connetterti
         direttamente con il tuo pubblico di riferimento, condividere la tua 
         storia e promuovere i tuoi prodotti e servizi. <br/><br/>
        Ecco come possono aiutarti:`}
        icona1={check}
        icona2={check}
        icona3={check}
        icona4={check}
        titolo1="Aumentare la riconoscibilità e visibilità online"
        titolo2="Espandere la tua base di follower"
        titolo3="Migliorare la visibilità del tuo brand"
        titolo4="Generare leads qualificati"
      />
      <Strategy
        mItems={[
          {
            href: "#Ricerca",
            number: "01.",
            description: "Ricerca di mercato",
          },
          { href: "#Design", number: "02.", description: "Brand Identity" },
          { href: "#Sviluppo", number: "03.", description: "Contenuti" },
          {
            href: "#Lancio",
            number: "04.",
            description: "Analisi",
          },
        ]}
        image1={Smart1}
        image2={Smart2}
        image3={Smart3}
        image4={Smart4}
        descrizione1={`Condurrò un’analisi approfondita dei tuoi competitor nel mondo dei social media. Esaminerò le loro strategie, i contenuti che pubblicano e il coinvolgimento con il pubblico.
                      <br/><br/>Inoltre identificherò le opportunità e le tendenze nel tuo settore. <br/>Questo ci aiuterà a sviluppare una <span style="color: #2176ff">strategia personalizzata</span>.`}
        descrizione2={`Creerò uno <span style="color: #2176ff">stile visivo unico</span> per il tuo brand. Definiremo una palette di colori e una tipografia coerente.
                      <br/><br/>Il tuo brand dovrà emergere rispetto ai competitor. <br>Lavoreremo su elementi distintivi che catturino l’attenzione.
                      `}
        descrizione3={`La scrittura dei testi è un elemento cruciale per coinvolgere il pubblico. Creerò testi e descrizioni che <span style="color: #2176ff">catturino l’attenzione</span>, utilizzando un tono adatto al tuo brand. <br/>Ogni post avrà uno <span style="color: #2176ff">scopo specifico</span>, che potrebbe essere informare, intrattenere o spingere all’azione.
                      <br/><br/>Anche la progettazione di immagini coinvolgenti è altrettanto importante. <br/>Creerò <span style="color: #2176ff">grafiche accattivanti</span> per accompagnare i tuoi contenuti. Queste immagini rifletteranno la tua brand identity e attrarranno l’occhio degli utenti.
                      `}
        descrizione4={`Valuterò regolarmente le metriche. <br/><br/>Analizzerò <span style="color: #2176ff">l’engagement</span> (quante persone interagiscono con i tuoi contenuti), <span style="color: #2176ff">il reach</span> (quante persone vedono i tuoi post) e le <span style="color: #2176ff">conversioni</span> (azioni che gli utenti compiono a seguito dei tuoi contenuti). <br/><br/>Questi dati mi aiuteranno a prendere decisioni informate.
                      L’obiettivo è ottimizzare costantemente la tua presenza sui social per ottenere i <span style="color: #2176ff">migliori risultati possibili</span>.`}
      />

      <Contact />
      <Footer />
    </>
  );
}
