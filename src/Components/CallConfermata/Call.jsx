import style from "./Call.module.css";
import Bolla from "../../assets/Images/Bolla.png";
import { useEffect, useRef } from "react";

export default function Call() {
  const div = useRef(null);

  useEffect(() => {
    let lastScrollTop = 0;

    // Make the div visible initially
    if (div.current) {
      div.current.classList.add(style.visible);
    }

    const onScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // downscroll code
        div.current.classList.remove(style.visible);
      } else {
        // upscroll code
        div.current.classList.add(style.visible);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", onScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      <img src={Bolla} alt="" className={style.bolla} />
      <img src={Bolla} alt="" className={style.bolla2} />
      <div className={style.color1}></div>
    </div>
  );
}
