import style from "./CTA.module.css";

export default function CTA() {
  return (
    <div className={style.container}>
      <div className={style.cta}>
        <h2 className={style.title}>Vuoi migliorare la tua presenza online?</h2>
        <p className={style.description}>
          Contattami per una consulenza gratuita e scopri come posso aiutarti a
          raggiungere i tuoi obiettivi
        </p>
        <a href="#Contacts" className={style.contatti}>
          Contattami
        </a>
      </div>
    </div>
  );
}
