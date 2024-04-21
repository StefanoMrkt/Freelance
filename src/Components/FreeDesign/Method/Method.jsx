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
          <Row className="flex-column flex-sm-row">
            <Col
              sm={12}
              className={style.name}
              style={{ color: theme.theme.text }}
            >
              Ottimizzazione
              <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Come ottimizzare il tuo sito web per essere indicizzato al
                meglio dai motori di ricerca e raggiungere i tuoi clienti
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col
              sm={12}
              style={{ color: theme.theme.text }}
              className={style.name}
            >
              Curiosità <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Come trasformare il tuo sito web in un posto in cui i tuoi
                clienti si sentano incuriositi da te e dalla tua attività
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col
              sm={12}
              style={{ color: theme.theme.text }}
              className={style.name}
            >
              Grafica <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Come rendere il tuo sito web graficamente accattivante, in modo
                da catturare l'attenzione dei tuoi clienti
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col
              sm={12}
              style={{ color: theme.theme.text }}
              className={style.name}
            >
              Contenuti <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Come creare contenuti coinvolgenti e di valore per i tuoi
                clienti e per i motori di ricerca
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col
              sm={12}
              style={{ color: theme.theme.text }}
              className={style.name}
            >
              SEO oriented
              <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Come creare contenuti che siano ottimizzati per i motori di
                ricerca e come utilizzare le parole chiave per essere trovato
                dai tuoi clienti ideali
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col
              sm={12}
              style={{ color: theme.theme.text }}
              className={style.name}
            >
              Target <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Trova il tuo target di riferimento e capisci come raggiungerlo e
                fidelizzarlo con il tuo sito web
              </p>
            </Col>
          </Row>
        </Container>

        <img src={X} alt="" className={style.x} />
        <img src={XEmpty} alt="" className={style.xEmpty} />
        <img src={Puntini} alt="" className={style.puntini} />

        <div className={style.color2}></div>
        <div className={style.color3}></div>
        <div className={style.color4}></div>
      </div>
    </>
  );
}
