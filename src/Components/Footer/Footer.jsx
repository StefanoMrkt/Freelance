import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.line}></div>
      <div className={style.text}>
        <p className={style.name}>Stefano Montemarli</p>
        <div className={style.info}>
          <p className={style.grey}>P. IVA: IT07340940480</p>
        </div>
      </div>
    </footer>
  );
}
