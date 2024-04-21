import style from "./Contacts.module.css";

import Cerchio1 from "../../assets/Images/Cerchio1.png";
import Cerchio2 from "../../assets/Images/Cerchio2.png";
import PuntiniBlu from "../../assets/Images/PuntiniBlu.png";
import Freccina from "../../assets/Images/FrecciaArancione.png";

import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7q9bb4m",
        "template_h4eydur",
        form.current,
        "jymmQ542M59Jy69Sb"
      )
      .then(
        (result) => {
          const sended = document.getElementById("button");
          sended.value = "Inviato!";
          sended.disabled = true;
          sended.style.backgroundColor = "#fc3c3c";
          form.current.reset();
        },
        (error) => {
          const sended = document.getElementById("button");
          sended.value = "Ops... Riprova!";
        }
      );
  };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#2176ff" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className={style.container} id="Contacts">
      <h2 className={style.title}>Contattami</h2>

      <form className={style.form} onSubmit={sendEmail} ref={form}>
        <label className={style.label} htmlFor="name">
          Nome e Cognome*
        </label>
        <input
          className={style.input}
          type="text"
          name="name"
          required="true"
          placeholder="Inserisci il tuo nome completo"
        />
        <label className={style.label} htmlFor="email">
          Email*
        </label>
        <input
          className={style.input}
          type="email"
          name="email"
          required="true"
          placeholder="Inserisci il tuo indirizzo di posta elettronica"
        />

        <label className={style.label} htmlFor="message">
          Messaggio*
        </label>
        <textarea
          className={style.inputArea}
          name="message"
          required="true"
          placeholder="Inserisci qui il tuo messaggio"
        />

        <div className={style.btForm}>
          <input
            className={style.invia}
            type="submit"
            value="Invia"
            id="button"
          />
        </div>
      </form>

      {/* <Cal
        calLink="stefanom/call-conoscitiva"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      /> */}

      {/* <img src={Freccina} alt="Freccia" className={style.freccina} /> */}
      <img src={PuntiniBlu} alt="" className={style.puntiniBlu} />
      <img src={Cerchio1} alt="" className={style.cerchio1} />
      <img src={Cerchio2} alt="" className={style.cerchio2} />

      <div className={style.color3}></div>
      <div className={style.color4}></div>
      <div className={style.color1}></div>
      <div className={style.color2}></div>
    </div>
  );
}
