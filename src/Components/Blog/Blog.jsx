import style from "./Blog.module.css";

import { Link } from "react-router-dom";
import freccia from "../../assets/Images/Freccina1.png";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Blog() {
  const theme = useSelector((state) => state.theme);

  const [articoli, setArticoli] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/articles?populate=*")
      .then((response) => {
        setArticoli(response.data.data);
        console.log(response.data.data);
        console.log(articoli[0].attributes.imageCover.data.attributes.url);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
        setIsLoading(false);
      });
  }, []);

  const handleShowMore = () => {};

  return (
    <>
      <div className={style.container} id="Blog">
        <h2 className={style.title}>Blog</h2>

        {isLoading ? (
          <div>Caricamento...</div>
        ) : (
          articoli && (
            <div className={style.blogList}>
              <div className={style.left}>
                <button onClick={handleShowMore} className={style.more}>
                  Mostra di più
                </button>
                <div key={articoli[0].id} className={style.article}>
                  <img
                    className={style.imgBlog}
                    src={
                      "http://localhost:1337" +
                      articoli[0].attributes.imageCover.data.attributes.url
                    }
                    alt={articoli[0].attributes.alt}
                  />
                  <h3
                    className={style.titleArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli[0].attributes.titolo}
                  </h3>
                  <div
                    className={style.textArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli[0].attributes.riassunto}
                  </div>
                  <Link
                    to={`/blog/${articoli[0].attributes.slug}`}
                    className={style.link}
                  >
                    Leggi tutto <img className={style.freccia} src={freccia} />
                  </Link>
                </div>

                <div key={articoli[2].id} className={style.article}>
                  <img
                    className={style.imgBlog}
                    src={
                      "http://localhost:1337" +
                      articoli[2].attributes.imageCover.data.attributes.url
                    }
                    alt={articoli[2].attributes.alt}
                  />
                  <h3
                    className={style.titleArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli[2].attributes.titolo}
                  </h3>
                  <p
                    className={style.textArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli[2].attributes.riassunto}
                  </p>
                  <Link
                    to={`/blog/${articoli[1].attributes.slug}`}
                    className={style.link}
                  >
                    Leggi tutto <img className={style.freccia} src={freccia} />
                  </Link>
                </div>
              </div>
              <div className={style.right}>
                <div key={articoli[1].id} className={style.article}>
                  <img
                    className={style.imgBlog}
                    src={
                      "http://localhost:1337" +
                      articoli[1].attributes.imageCover.data.attributes.url
                    }
                    alt={articoli[1].attributes.alt}
                  />
                  <h3
                    className={style.titleArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli[1].attributes.titolo}
                  </h3>
                  <p
                    className={style.textArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli[1].attributes.riassunto}
                  </p>
                  <Link
                    to={`/blog/${articoli[2].attributes.slug}`}
                    className={style.link}
                  >
                    Leggi tutto <img className={style.freccia} src={freccia} />
                  </Link>
                </div>

                <div key={articoli[3].id} className={style.article}>
                  <img
                    className={style.imgBlog}
                    src={
                      "http://localhost:1337" +
                      articoli[3].attributes.imageCover.data.attributes.url
                    }
                    alt={articoli[3].attributes.alt}
                  />
                  <h3
                    className={style.titleArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli[3].attributes.titolo}
                  </h3>
                  <p
                    className={style.textArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli[3].attributes.riassunto}
                  </p>
                  <Link
                    to={`/blog/${articoli[3].attributes.slug}`}
                    className={style.link}
                  >
                    Leggi tutto <img className={style.freccia} src={freccia} />
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
