import NavBar from "../Components/Navbar/Navbar";
import Contact from "../Components/Contact/Contacts";
import Footer from "../Components/Footer/Footer";
import HeroSocial from "../Components/HeroSocial/HeroSocial";
import Strategy from "../Components/Strategy/Strategy";
import ServiceFor from "../Components/ServiceFor/ServiceFor";

export default function Social() {
  return (
    <>
      <NavBar />
      <HeroSocial />
      <Strategy />
      <ServiceFor
        si1="Vuoi aumentare la tua visibilità online e raggiungere nuovi potenziali clienti"
        si2="Hai una strategia di marketing chiara e coerente con i tuoi obiettivi di business."
        si3="Vuoi creare una community attiva e fedele, che interagisca con il tuo brand."
        si4="Hai bisogno di contenuti di qualità e di un piano editoriale efficace."
        si5="Vuoi analizzare i risultati ottenuti e migliorare le tue performance sui social media."
        no1="Ti aspetti di ottenere risultati immediati e miracolosi senza sforzo."
        no2="Non sei interessato a conoscere e soddisfare le esigenze e le aspettative del tuo pubblico di riferimento."
        no3="Non sei disposto a seguire le buone pratiche e le linee guida dei vari social network."
        no4="Non hai tempo e voglia di interagire con la tua community e di rispondere ai messaggi e ai commenti."
        no5="Non sei disposto a investire risorse economiche e umane per la gestione dei tuoi canali social."
      />
      <Contact />
      <Footer />
    </>
  );
}
