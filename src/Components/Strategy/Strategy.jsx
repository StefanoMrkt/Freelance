import style from "./Strategy.module.css";
import Laptop1 from "../../assets/Images/Laptop1.png";
import Laptop2 from "../../assets/Images/Laptop2.png";

import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

export default function Strategy() {
  const theme = useSelector((state) => state.theme);

  // const cardRefs = useRef([]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     cardRefs.current.forEach((card, index) => {
  //       let offsetTop = 0;
  //       let nextCard = cardRefs.current[index + 1];
  //       let element = nextCard;
  //       while (element) {
  //         offsetTop += element.offsetTop;
  //         element = element.offsetParent;
  //       }

  //       if (window.scrollY + window.innerHeight > offsetTop) {
  //         card.classList.add(style.smallCard);
  //       } else {
  //         card.classList.remove(style.smallCard);
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className={style.container} id="Strategy">
      <h2 className={style.title}>Il Metodo</h2>
      <div className={style.mainWrapper}>
        <div className={style.description}></div>
        <div className={style.stack}>
          <div className={style.paddingGlobal}>
            <div className={style.containerLarge}>
              <div className={style.stackWrapper}>
                <div
                  className={`${style.stackCard} ${style.first}`}
                  // ref={(el) => (cardRefs.current[0] = el)}
                >
                  <div className={style.titleCard}>
                    <div className={style.number}>1</div>
                    <div className={style.description}>Ricerca e Analisi</div>
                  </div>
                  <div className={style.low}>
                    <div className={style.strategyDescription}>
                      Individuerò le strategie per aiutarti a raggiungere i tuoi
                      obiettivi tramite una ricerca di mercato.
                      <br />
                      <br />
                      Verrà delineata la struttura del sito tramite wireframe
                      per identificare come l’utente interagirà con essa.
                    </div>
                    <img className={style.imgDx} src={Laptop1}></img>
                  </div>
                </div>

                <div
                  className={`${style.stackCard} ${style.second}`}
                  // ref={(el) => (cardRefs.current[1] = el)}
                >
                  <div className={style.titleCard}>
                    <div className={style.number}>2</div>
                    <div className={style.description}>Design</div>
                  </div>
                  <div className={style.low}>
                    <div className={style.strategyDescription}></div>
                    <img className={style.imgDx2} src={Laptop2}></img>
                  </div>
                </div>

                <div
                  className={`${style.stackCard} ${style.third}`}
                  // ref={(el) => (cardRefs.current[2] = el)}
                >
                  <div className={style.titleCard}>
                    <div className={style.number}>3</div>
                    <div className={style.description}>Sviluppo</div>
                  </div>
                  <div></div>
                </div>

                <div
                  className={`${style.stackCard} ${style.fourth}`}
                  // ref={(el) => (cardRefs.current[3] = el)}
                >
                  <div className={style.titleCard}>
                    <div className={style.number}>4</div>
                    <div className={style.description}>Lancio</div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
