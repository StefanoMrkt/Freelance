import style from "./Hero.module.css";
import Circle from "../../assets/Images/Circle.png";
import PlayButton from "../../assets/Images/Play.png";
import StopButton from "../../assets/Images/Close.png";
import Bolla from "../../assets/Images/Bolla.png";
import Oblique from "../../assets/Images/Oblique.png";
import Email from "../../assets/Images/Social/Email.png";
import Facebook from "../../assets/Images/Social/FacebookC.png";
import Instagram from "../../assets/Images/Social/InstagramC.png";
import TikTok from "../../assets/Images/Social/TikTokC.png";
import LinkedIn from "../../assets/Images/Social/LinkedInC.png";

import { useSelector } from "react-redux";
import { useRef, useState } from "react";

export default function Hero() {
  const theme = useSelector((state) => state.theme);

  const circularIframeRef = useRef(null);

  const [loading, setLoading] = useState(false);

  function PlayVideo() {
    setLoading(true);
    return new Promise((resolve) => {
      const circularIframe = circularIframeRef.current;
      const iframe = document.createElement("iframe");
      iframe.src = "https://fast.wistia.com/embed/medias/y9yfs8eki0";
      iframe.id = "video";
      iframe.className = style.video;
      circularIframe.appendChild(iframe);

      iframe.onload = () => {
        setLoading(false);
        console.log("loaded");
        resolve();
      };
    }).then(() => {
      const circle = document.getElementById("Circle");
      const play = document.getElementById("play");
      const video = document.getElementById("video");
      const stop = document.getElementById("stop");
      circle.style.opacity = 0;
      play.style.opacity = 0;
      video.style.visibility = "visible";
      video.style.opacity = 1;
      stop.style.opacity = 1;
    });
  }

  function StopVideo() {
    const circle = document.getElementById("Circle");
    const play = document.getElementById("play");
    const video = document.getElementById("video");
    const stop = document.getElementById("stop");
    circle.style.opacity = 1;
    play.style.opacity = 1;
    video.style.opacity = 0;
    video.style.visibility = "hidden";
    stop.style.opacity = 0;

    const circularIframe = circularIframeRef.current;
    const iframe = document.getElementById("video");
    if (iframe) {
      circularIframe.removeChild(iframe);
    }
  }

  return (
    <div className={style.heroDiv} id="Home">
      <div className={style.heroSx}>
        <img src={Oblique} alt="" className={style.oblique} />
        <p className={style.myWork}>
          SOCIAL MEDIA MANAGER,
          <br />
          WEB DESIGNER & FRONT-END DEVELOPER
        </p>
        <div className={style.divMe}>
          <h1 className={style.myName} style={{ color: theme.theme.text }}>
            Stefano Montemarli
          </h1>
          <div className={style.heroDown}>
            <div
              className={style.line}
              style={{ background: theme.theme.text }}
            ></div>
            <h2 className={style.myDescription}>
              Realizzo siti web SEO-friendly e gestisco profili social per
              potenziare il tuo brand. Il mio impegno è la tua crescita online.
            </h2>
          </div>
        </div>
      </div>
      <div className={style.heroDx}>
        <img src={Bolla} alt="" className={style.bolla} />
        <img
          src={Circle}
          alt="Stefano Montemarli"
          id="Circle"
          className={style.circle}
        />
        <button className={style.play} id="play" onClick={PlayVideo}>
          <img src={PlayButton} alt="Play"></img>
        </button>
        {loading && (
          <div className={style.loader}>
            <div className={style.loaderSpinner}></div>
          </div>
        )}
        <div className={style.circularIframe} ref={circularIframeRef}></div>
        <button className={style.stop} id="stop" onClick={StopVideo}>
          <img src={StopButton} alt="Stop"></img>
        </button>

        <div className={style.color3}></div>
        <div className={style.color4}></div>
        <div className={style.color1}></div>
        <div className={style.color2}></div>
      </div>
      <div className={style.divSocial}>
        <a className={style.btSocial} href="mailto:stefanom.work@outlook.it">
          <img src={Email} alt="Email" className={style.social} />
        </a>
        <a
          className={style.btSocial}
          href="https://www.facebook.com/profile.php?id=100086771147797"
        >
          <img src={Facebook} alt="Facebook" className={style.social} />
        </a>
        <a
          className={style.btSocial}
          href="https://www.instagram.com/stefano.montemarli/"
        >
          <img src={Instagram} alt="Instagram" className={style.social} />
        </a>
        <a
          className={style.btSocial}
          href="https://www.tiktok.com/@stefanomontemarli?lang=it-IT"
        >
          <img src={TikTok} alt="TikTok" className={style.social} />
        </a>
        <a
          className={style.btSocial}
          href="https://www.linkedin.com/in/stefano-montemarli/"
        >
          <img src={LinkedIn} alt="LinkedIn" className={style.social} />
        </a>
      </div>
    </div>
  );
}
