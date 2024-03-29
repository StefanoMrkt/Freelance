import { Helmet } from "react-helmet";

import NavBar from "../Components/Navbar/Navbar";
import Contact from "../Components/Contact/Contacts";
import Footer from "../Components/Footer/Footer";
import HeroWeb from "../Components/HeroWeb/HeroWeb";
import Strategy from "../Components/Strategy/Strategy";
import ServiceFor from "../Components/ServiceFor/ServiceFor";

import check from "../assets/Images/check.png";

import Laptop from "../assets/Images/Laptop.png";
import Laptop1 from "../assets/Images/Laptop1.png";
import Laptop2 from "../assets/Images/Laptop2.png";
import Laptop3 from "../assets/Images/Laptop3.png";
import Laptop4 from "../assets/Images/Laptop4.png";

export default function Web() {
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
        <title>Stefano Montemarli - Web Designer</title>
        <meta property="og:title" content="Stefano Montemarli" />
        <meta
          property="og:description"
          content="Migliora la tua presenza online con un sito web professionale e ottimizzato"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://1drv.ms/i/s!AmWaVBl9p_dCgWiemacZx7YdEJm6?e=OpigS2"
        />
        <meta
          property="og:url"
          content="https://www.stefanomontemarli.it/servizi/web"
        />
      </Helmet>
      <NavBar />
      <HeroWeb />
      <ServiceFor
        image={Laptop}
        secondaDescrizione="Oltre a funzionare come biglietto da visita, è uno strumento
            strategico per raggiungere i tuoi obiettivi di business. <br/>Immaginalo
            come una tela bianca, pronta a ospitare la tua storia, i tuoi
            prodotti e i tuoi servizi e a comunicare con il tuo pubblico. <br/><br/>Inoltre ti permette di essere trovato online molto più facilmente. 
            <br/><br/>Ecco come può aiutarti:
            "
        icona1={check}
        icona2={check}
        icona3={check}
        icona4={check}
        icona5={check}
        titolo1="Ampliare l’autorità della tua attività"
        titolo2="Attrarre nuovi clienti interessati"
        titolo3="Migliorare la tua posizione nei risultati di ricerca di Google"
        titolo4="Migliorare la visibilità online"
        titolo5="Valorizzare il tuo prodotto o servizio"
      />
      <Strategy
        currentPage="Web"
        mItems={[
          { href: "#Ricerca", number: "01.", description: "Ricerca e Analisi" },
          { href: "#Design", number: "02.", description: "Design" },
          { href: "#Sviluppo", number: "03.", description: "Sviluppo" },
          { href: "#Lancio", number: "04.", description: "Lancio" },
        ]}
        image1={Laptop1}
        image2={Laptop2}
        image3={Laptop3}
        image4={Laptop4}
        descrizione1={`Nel primo step individuerò le <span <span style="color: #2176ff">strategie</span> per aiutarti a raggiungere i tuoi
                      obiettivi tramite una ricerca di mercato, analizzando anche i tuoi concorrenti.<br/><br/>
                      Creo tramite wireframe la struttura del sito
                      per identificare come l’utente interagirà con essa.`}
        descrizione2={`Definisco gli<span style="color: #2176ff"> stili, la color palette e la tipografia</span> necessari per rendere unico il tuo sito e per farlo emergere rispetto ai competitor.
                      <br/><br/>Ti fornirò un prototipo che ti consentirà di individuare eventuali modifiche da effettuare. 
                      Successivamente svilupperò il testo necessario per dare forma a tutti i contenuti.
                      `}
        descrizione3={`Svilluperò il tuo sito mettendo come priorità la <span style="color: #2176ff">stabilità e prestazioni</span>, rendendolo compatibile con tutti i device. 
                      Sarà arricchito da eleganti animazioni per far colpo sull'utente.<br/><br/>
                      Verrà ottimizzato per i motori di ricerca per garantire un buon posizionamento 
                      nei risultari. <br/></br/>Infine verrà configurato un <span style="color: #2176ff">Sistema di Gestione Contenuti (CMS)</span> 
                      semplice ed intuitivo per permettere a te o ai tuoi collaboratori di aggiungere e modificare alcuni elementi facilmente e in maniera sicura
                      `}
        descrizione4={`Una volta sviluppato il tuo sito sarà <span style="color: #2176ff">pronto per essere lanciato!</span> <br/>
                      Mi occuperò di tutto e ti procurerò un <span style="color: #2176ff">dominio personalizzato</span> e dei nuovi indirizzi 
                       mail professionali. <br/><br/>Inoltre, il sito sarà adeguato tecnicamente alle normative Europee per 
                       la privacy online. <br/><br/>Infine non voglio lasciarti solo! Ti fornirò <span style="color: #2176ff">supporto continuativo</span> nel tempo e ti assisterò per interventi di manutenzione e aggiornamenti e condividerò le analisi periodiche del rendimento del tuo sito sui motori di ricerca.
                      `}
      />

      <Contact />
      <Footer />
    </>
  );
}
