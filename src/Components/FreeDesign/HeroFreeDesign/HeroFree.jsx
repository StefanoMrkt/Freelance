import style from "./HeroFree.module.css";
import Bolla from "../../../assets/Images/Bolla.png";
import FreeLesson from "../../../assets/Images/FreeLesson.png";
import Indice from "../../../assets/Images/Indice.png";

import { useSelector } from "react-redux";

export default function HeroFree() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={style.heroDiv} id="Home">
      <div className={style.heroSx}>
        <div className={style.myWork}>Lezione gratuita</div>
        <div className={style.myName} style={{ color: theme.theme.text }}>
          Scarica la <span className={style.bold}>videolezione gratuita</span>{" "}
          per ottimizzare il tuo sito web attira clienti
        </div>
        <div className={style.heroDown}>
          <div
            className={style.line}
            style={{ background: theme.theme.text }}
          ></div>
          <p className={style.myDescription}>
            Impara i segreti del Web Design e scopri come creare un sito Web
            coinvolgente e strategico.
          </p>
        </div>
      </div>
      <div className={style.heroDx}>
        <img src={Bolla} alt="Bolla" className={style.bolla1} />
        <img src={Bolla} alt="Bolla" className={style.bolla2} />
        <img src={Bolla} alt="Bolla" className={style.bolla3} />
        <img src={Bolla} alt="Bolla" className={style.bolla4} />
        <img src={Bolla} alt="Bolla" className={style.bolla5} />
        <img src={FreeLesson} alt="Copertina" className={style.serviceImage1} />
        <img src={Indice} alt="Indice" className={style.serviceImage2} />

        <a href="#Contacts" className={style.download}>
          Scarica ora
        </a>

        <div className={style.color3}></div>
        <div className={style.color4}></div>
        <div className={style.color1}></div>
        <div className={style.color2}></div>
      </div>
    </div>
  );
}
