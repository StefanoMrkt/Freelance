import NavBar from "../Components/Navbar/Navbar";
import Contact from "../Components/Contact/Contacts";
import Footer from "../Components/Footer/Footer";
import HeroWeb from "../Components/HeroWeb/HeroWeb";
import Strategy from "../Components/Strategy/Strategy";
import ServiceFor from "../Components/ServiceFor/ServiceFor";

import check from "../assets/Images/check.png";

export default function Web() {
  return (
    <>
      <NavBar />
      <HeroWeb />

      <ServiceFor
        secondaDescrizione="Oltre a funzionare come biglietto da visita, è uno strumento
            strategico per raggiungere i tuoi obiettivi di business. Immaginalo
            come una tela bianca, pronta a ospitare la tua storia, i tuoi
            prodotti e i tuoi servizi.
            
            Ecco come può aiutarti:"
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
        titolo6="Fidelizzare i clienti esistenti"
      />
      <Strategy />
      <Contact />
      <Footer />
    </>
  );
}
