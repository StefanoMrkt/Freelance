import style from "./Opinion.module.css";
import SingleReview from "../SingleReview/SingleReview";
import Bolla from "../../assets/Images/Bolla.png";
import Puntini from "../../assets/Images/Puntini.png";

import MatteoMangili from "../../assets/Images/Recensioni/MatteoMangili.png";

export default function Opinion() {
  return (
    <div className={style.container} id="Review">
      <h2 className={style.title}>Recensioni</h2>

      <SingleReview
        Testo="Lavorare con Stefano è stato molto utile perché mi ha permesso di risparmiare molto tempo, utile per la mia attività, oltre che a consentirmi 
          di trovare molti clienti grazie alla sua proattività nella creazione di contenuti per i social."
        Professionalità="8"
        Efficienza="9"
        Creatività="10"
        Video="https://fast.wistia.com/embed/medias/bo105dmf4o"
        Nome="Matteo Mangili"
        Logo={MatteoMangili}
      />

      <img className={style.bolla} src={Bolla} alt="Bolla" />
      <img className={style.puntini} src={Puntini} alt="Puntini" />
      <div className={style.color1}></div>
      <div className={style.color2}></div>
    </div>
  );
}
