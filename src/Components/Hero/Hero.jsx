import style from "./Hero.module.css";
import Circle from "../../assets/Images/Circle.png";
import Myself from "../../assets/Images/Myself.png";
import PlayButton from "../../assets/Images/Play.png";
import StopButton from "../../assets/Images/Close.png";
import Bolla from "../../assets/Images/Bolla.png";
import Oblique from "../../assets/Images/Oblique.png";
import Email from "../../assets/Images/Social/Email.png";
import Facebook from "../../assets/Images/Social/Facebook.png";
import Instagram from "../../assets/Images/Social/Instagram.png";
import TikTok from "../../assets/Images/Social/TikTok.png";
import LinkedIn from "../../assets/Images/Social/LinkedIn.png";

import { useSelector } from "react-redux";
import { useRef } from "react";

export default function Hero() {
  const theme = useSelector((state) => state.theme);

  const circularIframeRef = useRef(null);

  function PlayVideo() {
    const circularIframe = circularIframeRef.current;
    const iframe = document.createElement("iframe");
    iframe.src = "https://fast.wistia.com/embed/medias/y9yfs8eki0";
    iframe.id = "video";
    iframe.className = style.video;
    circularIframe.appendChild(iframe);

    const mySelf = document.getElementById("mySelf");
    const play = document.getElementById("play");
    const video = document.getElementById("video");
    const stop = document.getElementById("stop");
    mySelf.style.opacity = 0;
    play.style.opacity = 0;
    video.style.visibility = "visible";
    video.style.opacity = 1;
    stop.style.opacity = 1;
  }

  function StopVideo() {
    const mySelf = document.getElementById("mySelf");
    const play = document.getElementById("play");
    const video = document.getElementById("video");
    const stop = document.getElementById("stop");
    mySelf.style.opacity = 1;
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
        <img src={Oblique} alt="Oblique" className={style.oblique} />
        <div className={style.myWork}>
          SOCIAL MEDIA MANAGER,
          <br />
          WEB DESIGNER & FRONT-END DEVELOPER
        </div>
        <div className={style.myName} style={{ color: theme.theme.text }}>
          Stefano <br />
          Montemarli
        </div>
        <div className={style.heroDown}>
          <div
            className={style.line}
            style={{ background: theme.theme.text }}
          ></div>
          <p className={style.myDescription}>
            Gestisco profili social e creo siti web. Sarò il tuo supporto e lo
            faccio con passione e dedizione
          </p>
        </div>
        <button className={style.play} id="play" onClick={PlayVideo}>
          <img src={PlayButton}></img>
        </button>
      </div>
      <div className={style.heroDx}>
        <img src={Bolla} alt="Bolla" className={style.bolla} />
        <img src={Circle} alt="Circle" id="Circle" className={style.circle} />
        <div className={style.circularIframe} ref={circularIframeRef}></div>
        <img
          src={Myself}
          alt="Stefano Montemarli"
          className={style.myself}
          id="mySelf"
        />

        <button className={style.stop} id="stop" onClick={StopVideo}>
          <img src={StopButton}></img>
        </button>

        <div className={style.divSocial}>
          <a className={style.btSocial} href="mailto:stefano-mrkt@outlook.it">
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

        <div className={style.color3}></div>
        <div className={style.color4}></div>
        <div className={style.color1}></div>
        <div className={style.color2}></div>
      </div>
    </div>
  );
}
