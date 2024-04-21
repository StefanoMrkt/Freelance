import style from "./About.module.css";
import Programming from "../../assets/Images/About.png";
import Freccia from "../../assets/Images/FrecciaArancione.png";
import Puntini from "../../assets/Images/Puntini.png";

export default function About() {
  return (
    <div className={style.container} id="About">
      <div className={style.diviso}>
        <div className={style.divSx}>
          <img className={style.mainImage} src={Programming} />

          <div className={style.color1}></div>
          <div className={style.color2}></div>
        </div>

        <div className={style.divDx}>
          <h2 className={style.title}>Chi sono</h2>
          <p className={style.DescriptionDesktop}>
            Ciao, sono Stefano, un esperto in Web Design e Social Media
            Marketing. La mia passione è utilizzare le mie competenze digitali
            per comunicare e creare soluzioni efficaci.
            <br />
            <br />
            Specializzato nella creazione di siti web professionali e
            ottimizzati per i motori di ricerca, gestisco anche strategie di
            social media marketing mirate a far crescere il tuo business online.
            Il mio obiettivo è risparmiarti tempo e fornirti un supporto
            continuo e affidabile.
            <br />
            <br />
            Per saperne di più sulle mie competenze e su come posso aiutarti a
            raggiungere i tuoi obiettivi, visita le pagine dedicate sul mio sito
            web o contattami per una consulenza gratuita. Sono qui per offrirti
            soluzioni personalizzate alle tue esigenze.
          </p>

          <img className={style.freccia} src={Freccia} />
          <img className={style.puntini} src={Puntini} />

          <div className={style.color3}></div>
          <div className={style.color4}></div>
        </div>
      </div>

      <p className={style.Description}>
        Ciao, sono Stefano, un esperto in Web Design e Social Media Marketing.
        La mia passione è utilizzare le mie competenze digitali per comunicare e
        creare soluzioni efficaci.
        <br />
        <br />
        Specializzato nella creazione di siti web professionali e ottimizzati
        per i motori di ricerca, gestisco anche strategie di social media
        marketing mirate a far crescere il tuo business online. Il mio obiettivo
        è risparmiarti tempo e fornirti un supporto continuo e affidabile.
        <br />
        <br />
        Per saperne di più sulle mie competenze e su come posso aiutarti a
        raggiungere i tuoi obiettivi, visita le pagine dedicate sul mio sito web
        o contattami per una consulenza gratuita. Sono qui per offrirti
        soluzioni personalizzate alle tue esigenze.
      </p>
    </div>
  );
}
