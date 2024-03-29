import style from "./Articles.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import freccia from "../../assets/Images/Freccina1.png";

export default function Articles() {
  const [articoli, setArticoli] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/articles?populate=*")
      .then((response) => {
        setArticoli(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  }, []);

  let leftArticle = [];
  let rightArticles = [];
  let normalArticles = [];

  articoli.forEach((articolo, index) => {
    if (index === 0) {
      leftArticle.push(articolo);
    } else if (index === 1 || index === 2) {
      rightArticles.push(articolo);
    } else {
      normalArticles.push(articolo);
    }
  });

  return (
    <div className={style.container}>
      <h2 className={style.title}>Blog</h2>
      <div className={style.left}>
        {leftArticle.map((articolo) => (
          <div key={articolo.id} className={style.article}>
            <img
              className={style.imgBlog}
              // src={articoli[0].attributes.image}
              alt={articolo.attributes.alt}
            />
            <h3 className={style.titleArticle}>{articolo.attributes.titolo}</h3>
            <div className={style.textArticle}>
              {articolo.attributes.riassunto}
            </div>
          </div>
        ))}
      </div>
      <div className={style.right}>
        {rightArticles.map((articolo) => (
          <div key={articolo.id} className={style.article}>
            <img
              className={style.imgBlog}
              // src={articoli[0].attributes.image}
              alt={articolo.attributes.alt}
            />
            <h3 className={style.titleArticle}>{articolo.attributes.titolo}</h3>
            <div className={style.textArticle}>
              {articolo.attributes.riassunto}
            </div>
          </div>
        ))}
      </div>
      <div className={style.normal}>
        {normalArticles.map((articolo) => (
          <div key={articolo.id} className={style.article}>
            <img
              className={style.imgBlog}
              src={
                "http://localhost:1337" +
                articolo.attributes.imageCover.data.attributes.url
              }
              alt={articolo.attributes.alt}
            />
            <h3 className={style.titleArticle}>{articolo.attributes.titolo}</h3>
            <div className={style.textArticle}>
              {articolo.attributes.riassunto}
            </div>
            <Link
              to={`/blog/${articolo.attributes.slug}`}
              className={style.link}
            >
              Leggi tutto <img className={style.freccia} src={freccia} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
