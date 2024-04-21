import style from "./HeroWeb.module.css";
import Bolla from "../../assets/Images/Bolla.png";
import Laptop1 from "../../assets/Images/PC1.png";
import Laptop2 from "../../assets/Images/PC2.png";

import { useSelector } from "react-redux";

export default function HeroWeb() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={style.heroDiv} id="Home">
      <div className={style.heroSx}>
        <p className={style.myWork}>Web Design</p>
        <h1 className={style.myName} style={{ color: theme.theme.text }}>
          Esperienza Web al tuo servizio
        </h1>
        <div className={style.heroDown}>
          <div
            className={style.line}
            style={{ background: theme.theme.text }}
          ></div>
          <h2 className={style.myDescription}>
            Trasformo idee in siti Web coinvolgenti e strategici, creando
            esperienze digitali su misura.
          </h2>
        </div>
      </div>
      <div className={style.heroDx}>
        <img src={Bolla} alt="" className={style.bolla1} />
        <img src={Bolla} alt="" className={style.bolla2} />
        <img src={Bolla} alt="" className={style.bolla3} />
        <img src={Bolla} alt="" className={style.bolla4} />
        <img src={Bolla} alt="" className={style.bolla5} />
        <img src={Laptop1} alt="Laptop" className={style.serviceImage1} />
        <img src={Laptop2} alt="Laptop" className={style.serviceImage2} />

        <div className={style.color3}></div>
        <div className={style.color4}></div>
        <div className={style.color1}></div>
        <div className={style.color2}></div>
      </div>
    </div>
  );
}
