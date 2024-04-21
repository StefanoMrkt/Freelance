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
                Il Metodo Spark è un approccio unico che utilizzo per infondere
                energia e vitalità nei tuoi progetti di web design e social
                media. Questo metodo è stato sviluppato con l'obiettivo di
                ottimizzare la presenza online e aumentare l'engagement del tuo
                brand.
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
                Fornisco report dettagliati e statistiche approfondite,
                permettendoti di visualizzare i risultati ottenuti. Questi dati
                ti aiuteranno a comprendere meglio le performance del tuo sito
                web e dei tuoi canali social, e a identificare le strategie più
                efficaci per il tuo business.
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
                Offro un servizio completo che include la creazione del tuo sito
                web e la gestione dei tuoi social media. Questo approccio
                integrato garantisce coerenza grafica e comunicativa,
                migliorando l'immagine del tuo brand e l'esperienza dell'utente.
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
                Creo contenuti unici e coinvolgenti, studiati per catturare
                l'attenzione del tuo pubblico e stimolare l'interazione. Questo
                approccio personalizzato ti permette di distinguerti dalla
                concorrenza e di creare un legame più forte con i tuoi clienti.
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
                La mia creatività non ha limiti. Non mi limito a copiare quello
                che fanno gli altri, ma sperimento continuamente nuove idee e
                soluzioni. Non utilizzo template predefiniti, ma creo design
                100% personalizzati, in grado di rispecchiare la personalità del
                tuo brand e di catturare l'attenzione dei visitatori.
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
                Il mio approccio al lavoro è basato sul coinvolgimento del
                cliente in ogni fase del processo. Ascolto attentamente le tue
                esigenze e ti fornisco consigli e feedback costanti, per
                garantire che il risultato finale rispecchi le tue aspettative.
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
                La mia professionalità si riflette nel rispetto delle scadenze e
                delle esigenze dei miei clienti. Lavoro con dedizione e
                passione, e mi impegno sempre al massimo per garantire la
                massima soddisfazione del cliente.
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
