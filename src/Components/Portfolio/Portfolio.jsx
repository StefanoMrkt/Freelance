import style from "./Portfolio.module.css";

import Bolla from "../../assets/Images/Bolla.png";

import Progetto1 from "../../assets/Images/Progetto1.png";
import Progetto2 from "../../assets/Images/Progetto2.png";

export default function Portfolio() {
  return (
    <>
      <div className={style.container} id="Portfolio">
        <h2 className={style.title}>Portfolio</h2>

        <img className={style.bolla1} src={Bolla} alt="Bolla" />

        <div className={style.progetti}>
          <div className={style.progettoSx}>
            <a href="https://astonishing-souffle-7b8e4c.netlify.app/">
              <button className={style.progetto1}>
                <img
                  className={style.imgProgetto1}
                  alt="Progetto"
                  src={Progetto1}
                />
              </button>
            </a>

            <h3 className={style.name}>Pollution in the World</h3>
          </div>

          <div className={style.progettoDx}>
            <a href="">
              <button className={style.progetto2}>
                <img
                  className={style.imgProgetto2}
                  alt="Progetto"
                  src={Progetto2}
                />
              </button>
            </a>

            <h3 className={style.name}>Creazioni Wonderland</h3>
          </div>
        </div>
        <div className={style.color1}></div>
        <div className={style.color2}></div>
      </div>
    </>
  );
}
