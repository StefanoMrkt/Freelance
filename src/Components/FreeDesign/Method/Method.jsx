import style from "./Method.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import X from "../../../assets/Images/X.png";
import XEmpty from "../../../assets/Images/XEmpty.png";
import Puntini from "../../../assets/Images/Puntini.png";

import { useSelector } from "react-redux";

export default function Method() {
  const theme = useSelector((state) => state.theme);
  return (
    <>
      <div className={style.container} id="Method">
        <h2 className={style.title}>Cosa ti svelerò</h2>

        <Container className={style.grid}>
          <Row>
            <Col
              className={style.name + " col-12 col-md-6"}
              style={{ color: theme.theme.text }}
            >
              Ottimizzazione
              <div className={style.underline}></div>
            </Col>
            <Col className="col-12 col-md-6">
              <p className={style.description}>
                Come ottimizzare il tuo sito web per essere indicizzato al
                meglio dai motori di ricerca e raggiungere i tuoi clienti
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              className={style.name + " col-12 col-md-6"}
              style={{ color: theme.theme.text }}
            >
              Curiosità <div className={style.underline}></div>
            </Col>
            <Col className="col-12 col-md-6">
              <p className={style.description}>
                Come trasformare il tuo sito web in un posto in cui i tuoi
                clienti si sentano incuriositi da te e dalla tua attività
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              className={style.name + " col-12 col-md-6"}
              style={{ color: theme.theme.text }}
            >
              Grafica <div className={style.underline}></div>
            </Col>
            <Col className="col-12 col-md-6">
              <p className={style.description}>
                Come rendere il tuo sito web graficamente accattivante, in modo
                da catturare l'attenzione dei tuoi clienti
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              className={style.name + " col-12 col-md-6"}
              style={{ color: theme.theme.text }}
            >
              Contenuti <div className={style.underline}></div>
            </Col>
            <Col className="col-12 col-md-6">
              <p className={style.description}>
                Come creare contenuti coinvolgenti e di valore per i tuoi
                clienti e per i motori di ricerca
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              className={style.name + " col-12 col-md-6"}
              style={{ color: theme.theme.text }}
            >
              SEO oriented
              <div className={style.underline}></div>
            </Col>
            <Col className="col-12 col-md-6">
              <p className={style.description}>
                Come creare contenuti che siano ottimizzati per i motori di
                ricerca e come utilizzare le parole chiave per essere trovato
                dai tuoi clienti ideali
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              className={style.name + " col-12 col-md-6"}
              style={{ color: theme.theme.text }}
            >
              Target <div className={style.underline}></div>
            </Col>
            <Col className="col-12 col-md-6">
              <p className={style.description}>
                Trova il tuo target di riferimento e capisci come raggiungerlo e
                fidelizzarlo con il tuo sito web
              </p>
            </Col>
          </Row>
        </Container>

        <img src={X} alt="X" className={style.x} />
        <img src={XEmpty} alt="XEmpty" className={style.xEmpty} />
        <img src={Puntini} alt="Puntini" className={style.puntini} />

        <div className={style.color2}></div>
        <div className={style.color3}></div>
        <div className={style.color4}></div>
      </div>
    </>
  );
}
