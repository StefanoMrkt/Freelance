import style from "./ServiceFor.module.css";

import React, { useEffect } from "react";
import parse from "html-react-parser";

import XRed from "../../assets/Images/XEmptyRed.png";
import Bolla from "../../assets/Images/Bolla.png";
import PuntiniBlu from "../../assets/Images/PuntiniBlu.png";

export default function ServiceFor({
  secondaDescrizione,
  titolo1,
  titolo2,
  titolo3,
  titolo4,
  titolo5,
  titolo6,
  icona1,
  icona2,
  icona3,
  icona4,
  icona5,
  image,
}) {
  return (
    <div className={style.container} id="ServiceFor">
      <h2 className={style.title}>Perché è utile</h2>

      <div className={style.content}>
        <div className={style.grid}>
          <img src={image} alt="Laptop" className={style.Laptop} />
        </div>

        <div className={style.Dx}>
          <p className={style.MainDescription}>{parse(secondaDescrizione)}</p>
          <div className={style.point}>
            <img className={style.icona} src={icona1}></img>
            <p className={style.secondDescription}>{titolo1}</p>
          </div>
          <div className={style.point}>
            <img className={style.icona} src={icona1}></img>
            <p className={style.secondDescription}>{titolo2}</p>
          </div>
          <div className={style.point}>
            <img className={style.icona} src={icona1}></img>
            <p className={style.secondDescription}>{titolo3}</p>
          </div>
          <div className={style.point}>
            <img className={style.icona} src={icona1}></img>
            <p className={style.secondDescription}>{titolo4}</p>
          </div>
        </div>
      </div>

      <img src={XRed} alt="X" className={style.XRed} />
      <img src={Bolla} alt="Bolla" className={style.Bolla} />
      <img src={PuntiniBlu} alt="Puntini" className={style.PuntiniBlu} />

      <div className={style.color1}></div>
      <div className={style.color2}></div>
    </div>
  );
}
