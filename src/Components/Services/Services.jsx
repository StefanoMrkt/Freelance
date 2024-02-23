import style from "./Services.module.css";
import Freccia from "../../assets/Images/FrecciaLunga.png";
import Puntini from "../../assets/Images/PuntiniBlu.png";
import Phone from "../../assets/Images/Phone.png";
import Phone1 from "../../assets/Images/Phone1.png";
import PC1 from "../../assets/Images/PC1.png";
import PC2 from "../../assets/Images/PC2.png";

import { useRef, useEffect, useState } from "react";

export default function Services() {
  const titleRef1 = useRef(null);
  const underlineRef1 = useRef(null);
  const titleRef2 = useRef(null);
  const underlineRef2 = useRef(null);

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  useEffect(() => {
    if (titleRef1.current && underlineRef1.current) {
      underlineRef1.current.style.width = `${titleRef1.current.offsetWidth}px`;
    }
    if (titleRef2.current && underlineRef2.current) {
      underlineRef2.current.style.width = `${titleRef2.current.offsetWidth}px`;
    }
  }, []);

  return (
    <div className={style.container} id="Services">
      <h2 className={style.title}>I miei servizi</h2>
      <img src={Freccia} className={style.freccia} />

      <div className={style.divService}>
        <button
          className={style.imgService}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <img className={style.phone1} src={Phone1} />
          <img className={style.phone2} src={Phone} />
        </button>

        <div className={style.textService1}>
          <h3 ref={titleRef1} className={style.serviceTitle1}>
            Social Media
          </h3>
          <div
            ref={underlineRef1}
            className={`${style.underline} ${isHovered1 ? style.show : ""}`}
          ></div>
          <p className={style.description1}>I tuoi social gestiti al meglio</p>
        </div>
      </div>

      <div className={style.divService}>
        <div className={style.textService2}>
          <div className={style.titleContainer}>
            <h3 ref={titleRef2} className={style.serviceTitle2}>
              Web Design
            </h3>
            <div
              ref={underlineRef2}
              className={`${style.underline} ${isHovered2 ? style.show : ""}`}
            ></div>
          </div>
          <p className={style.description2}>
            Siti web professionali e ottimizzati
          </p>
        </div>
        <button
          className={style.imgService}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <img src={PC1} className={style.pc1} />
          <img src={PC2} className={style.pc2} />
        </button>
      </div>

      <img className={style.puntini} src={Puntini} />
      <div className={style.color3}></div>
      <div className={style.color4}></div>
      <div className={style.color1}></div>
      <div className={style.color2}></div>
    </div>
  );
}
