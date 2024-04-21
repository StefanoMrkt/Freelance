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
        <p className={style.myWork}>Social Media Manager</p>
        <h1 className={style.myName} style={{ color: theme.theme.text }}>
          Esperienza social al tuo servizio
        </h1>
        <div className={style.heroDown}>
          <div
            className={style.line}
            style={{ background: theme.theme.text }}
          ></div>
          <h2 className={style.myDescription}>
            Gestisco i tuoi canali social con creatività e competenza per
            raggiungere i tuoi obiettivi
          </h2>
        </div>
      </div>
      <div className={style.heroDx}>
        <img src={Bolla} alt="" className={style.bolla1} />
        <img src={Bolla} alt="" className={style.bolla2} />
        <img src={Bolla} alt="" className={style.bolla3} />
        <img src={Bolla} alt="" className={style.bolla4} />
        <img src={Bolla} alt="" className={style.bolla5} />
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
