import style from "./Contacts.module.css";
import PuntiniBlu from "../../../assets/Images/PuntiniBlu.png";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contacts() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={style.container} id="Contacts">
      {isSubmitted ? (
        <h2 className={style.title}>Grazie per aver inviato il modulo</h2>
      ) : (
        <h2 className={style.title}>Ottieni la videolezione gratuita</h2>
      )}

      {isSubmitted ? (
        <p className={style.sended}>
          Riceverai la videolezione sulla tua casella email
        </p>
      ) : (
        <form
          className={style.form}
          ref={form}
          action="https://assets.mailerlite.com/jsonp/644337/forms/113099232009783174/subscribe"
          method="POST"
          onSubmit={handleSubmit}
        >
          <label className={style.label} htmlFor="fields[name]">
            Nome*
          </label>
          <input
            className={style.input}
            type="text"
            name="fields[name]"
            required="true"
            placeholder="Inserisci il tuo nome"
          />
          <label className={style.label} htmlFor="fields[last_name]">
            Cognome*
          </label>
          <input
            className={style.input}
            type="text"
            name="fields[last_name]"
            required="true"
            placeholder="Inserisci il tuo cognome"
          />
          <label className={style.label} htmlFor="fields[phone]">
            Telefono*
          </label>
          <input
            className={style.input}
            type="tel"
            name="fields[phone]"
            required="true"
            placeholder="Inserisci il tuo numero di telefono"
          />
          <label className={style.label} htmlFor="fields[email]">
            Email*
          </label>
          <input
            className={style.input}
            type="email"
            name="fields[email]"
            required="true"
            placeholder="Inserisci il tuo indirizzo di posta elettronica"
          />

          <div className={style.btForm}>
            <input
              className={style.invia}
              type="submit"
              value="Ricevi la tua lezione gratuita!"
              id="button"
            />
          </div>
        </form>
      )}

      <img src={PuntiniBlu} alt="PuntiniBlu" className={style.puntiniBlu} />

      <div className={style.color3}></div>
      <div className={style.color4}></div>
      <div className={style.color1}></div>
      <div className={style.color2}></div>
    </div>
  );
}