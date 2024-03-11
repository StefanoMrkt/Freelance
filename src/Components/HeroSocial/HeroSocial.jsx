import style from "./HeroSocial.module.css";
import Bolla from "../../assets/Images/Bolla.png";
import Phone1 from "../../assets/Images/Phone.png";
import Phone2 from "../../assets/Images/Phone1.png";

import { useSelector } from "react-redux";

export default function HeroSocial() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={style.heroDiv} id="Home">
      <div className={style.heroSx}>
        <div className={style.myWork}>Social Media Manager</div>
        <div className={style.myName} style={{ color: theme.theme.text }}>
          Esperienza social al tuo servizio
        </div>
        <div className={style.heroDown}>
          <div
            className={style.line}
            style={{ background: theme.theme.text }}
          ></div>
          <p className={style.myDescription}>
            Gestisco i tuoi canali social con creatività e competenza per
            raggiungere i tuoi obiettivi
          </p>
        </div>
      </div>
      <div className={style.heroDx}>
        <img src={Bolla} alt="Bolla" className={style.bolla1} />
        <img src={Bolla} alt="Bolla" className={style.bolla2} />
        <img src={Bolla} alt="Bolla" className={style.bolla3} />
        <img src={Bolla} alt="Bolla" className={style.bolla4} />
        <img src={Bolla} alt="Bolla" className={style.bolla5} />
        <img src={Phone1} alt="Smartphone" className={style.serviceImage1} />
        <img src={Phone2} alt="Smartphone" className={style.serviceImage2} />

        <div className={style.color3}></div>
        <div className={style.color4}></div>
        <div className={style.color1}></div>
        <div className={style.color2}></div>
      </div>
    </div>
  );
}
