import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.line}></div>
      <div className={style.text}>
        <h4 className={style.name}>Stefano Montemarli</h4>
        <div className={style.info}>
          <p className={style.grey}>P. IVA: IT07340940480</p>
        </div>
      </div>
    </footer>
  );
}
