import style from "./Method.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import X from "../../assets/Images/X.png";
import XEmpty from "../../assets/Images/XEmpty.png";
import Puntini from "../../assets/Images/Puntini.png";

import { useSelector } from "react-redux";

export default function Method() {
  const theme = useSelector((state) => state.theme);
  return (
    <>
      <div className={style.container} id="Method">
        <h2 className={style.title}>Il mio metodo</h2>

        <Container className={style.grid}>
          <Row className="flex-column flex-sm-row">
            <Col
              sm={12}
              className={style.name}
              style={{ color: theme.theme.text }}
            >
              Metodo Spark
              <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Il mio metodo per dare energia e vitalità ai tuoi progetti di
                web design e social media.
              </p>
            </Col>
            <Col
              sm={12}
              className={style.name}
              style={{ color: theme.theme.text }}
            >
              Report e statistiche <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Ti invio report dettagliati con le statistiche e le analisi, per
                mostrarti i risultati ottenuti e le possibili azioni da
                intraprendere.
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col
              sm={12}
              className={style.name}
              style={{ color: theme.theme.text }}
            >
              Servizio completo <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Creo il tuo sito web e gestisco i tuoi social media,
                garantendoti coerenza grafica e comunicativa.
              </p>
            </Col>
            <Col
              sm={12}
              className={style.name}
              style={{ color: theme.theme.text }}
            >
              Contenuti unici <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Catturo l’attenzione del tuo pubblico e lo faccio interagire con
                te, con un tocco personale e distintivo
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col
              sm={12}
              className={style.name}
              style={{ color: theme.theme.text }}
            >
              Creatività <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Non mi limito a copiare quello che fanno gli altri, ma
                sperimento nuove idee e soluzioni. Nessun template già pronto,
                ma 100% personalizzato.
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col
              sm={12}
              className={style.name}
              style={{ color: theme.theme.text }}
            >
              Coinvolgimento
              <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Ti ascolto e ti do il mio parere in ogni fase del processo di
                lavoro.
              </p>
            </Col>
            <Col
              sm={12}
              className={style.name}
              style={{ color: theme.theme.text }}
            >
              Professionalità
              <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Rispetto le scadenze imposte e le esigenze dei miei clienti.
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
