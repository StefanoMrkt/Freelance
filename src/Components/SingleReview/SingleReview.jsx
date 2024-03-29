import style from "./SingleReview.module.css";

export default function SingleReview({
  Video,
  Professionalità,
  Efficienza,
  Creatività,
  Testo,
  Nome,
  Logo,
}) {
  const starsProfessionalita = [];
  for (let i = 0; i < Professionalità; i++) {
    starsProfessionalita.push(<div className={style.star} key={i}></div>);
  }
  if (starsProfessionalita.length < 10) {
    for (let i = starsProfessionalita.length; i < 10; i++) {
      starsProfessionalita.push(
        <div className={style.starEmpty} key={i}></div>
      );
    }
  }

  const starsEfficienza = [];
  for (let i = 0; i < Efficienza; i++) {
    starsEfficienza.push(<div className={style.star} key={i}></div>);
  }
  if (starsEfficienza.length < 10) {
    for (let i = starsEfficienza.length; i < 10; i++) {
      starsEfficienza.push(<div className={style.starEmpty} key={i}></div>);
    }
  }

  const starsCreativita = [];
  for (let i = 0; i < Efficienza; i++) {
    starsCreativita.push(<div className={style.star} key={i}></div>);
  }
  if (starsCreativita.length < 10) {
    for (let i = starsCreativita.length; i < 10; i++) {
      starsCreativita.push(<div className={style.starEmpty} key={i}></div>);
    }
  }

  return (
    <div className={style.review}>
      <div className={style.Sx}>
        <iframe className={style.video} src={Video} />
      </div>
      <div className={style.Dx}>
        <div className={style.author}>
          <img src={Logo} alt="Logo" className={style.logo} />
          <p className={style.name}>{Nome}</p>
        </div>
        <p className={style.text}>{Testo}</p>
        <div className={style.stelline}>
          <div>
            <p className={style.skill}>Professionalità</p>
            <div className={style.stars}>{starsProfessionalita}</div>
          </div>
          <div>
            <p className={style.skill}>Efficienza</p>
            <div className={style.stars}>{starsEfficienza}</div>
          </div>
          <div>
            <p className={style.skill}>Creatività</p>
            <div className={style.stars}>{starsCreativita}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
