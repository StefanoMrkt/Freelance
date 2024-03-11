import style from "./Strategy.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useSelector } from "react-redux";

export default function Strategy() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={style.container} id="Strategy">
      <h2 className={style.title}>Il Metodo</h2>
      <div className={style.mainWrapper}>
        <div className={style.description}></div>
        <div className={style.stack}></div>
      </div>
    </div>
  );
}
