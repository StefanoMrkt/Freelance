import style from "./Call.module.css";
import Bolla from "../../assets/Images/Bolla.png";

export default function Call() {
  return (
    <div className={style.container}>
      <h1 className={style.confirmed}>Call prenotata</h1>
      <h2 className={style.subtitle}>
        Riceverai un'email come conferma all'indirizzo indicato
      </h2>

      <h3 className={style.regalo}>
        Guarda questo video per prepararti alla tua call
      </h3>
      <iframe
        src="https://fast.wistia.com/embed/medias/y9yfs8eki0"
        title="Video"
        className={style.video}
      ></iframe>

      <img src={Bolla} alt="Bolla" className={style.bolla} />
      <img src={Bolla} alt="Bolla" className={style.bolla2} />
      <div className={style.color1}></div>
    </div>
  );
}
