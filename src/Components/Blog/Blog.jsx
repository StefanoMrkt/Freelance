import style from "./Blog.module.css";

import { Link } from "react-router-dom";
import freccia from "../../assets/Images/Freccina1.png";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { request, gql } from "graphql-request";

export default function Blog() {
  const theme = useSelector((state) => state.theme);

  const [articoli, setArticoli] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const endpoint =
      "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clufjd0ci1nn407we3c9m8hko/master";

    const query = gql`
      {
        articles {
          slug
          cover {
            url
          }
          titolo
          riassunto
          articolo {
            html
          }
        }
      }
    `;
    request(endpoint, query).then((data) => {
      setArticoli(data);
      setIsLoading(false);
      console.log(data);
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
                <div key={articoli.articles[0].id} className={style.article}>
                  <img
                    className={style.imgBlog}
                    src={articoli.articles[0].cover.url}
                  />
                  <h3
                    className={style.titleArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli.articles[0].titolo}
                  </h3>
                  <div
                    className={style.textArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli.articles[0].riassunto}
                  </div>
                  <Link
                    to={`/blog/${articoli.articles[0].slug}`}
                    className={style.link}
                  >
                    Leggi tutto <img className={style.freccia} src={freccia} />
                  </Link>
                </div>

                <div key={articoli.articles[2].id} className={style.article}>
                  <img
                    className={style.imgBlog}
                    src={articoli.articles[0].cover.url}
                  />
                  <h3
                    className={style.titleArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli.articles[2].titolo}
                  </h3>
                  <p
                    className={style.textArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli.articles[2].riassunto}
                  </p>
                  <Link
                    to={`/blog/${articoli.articles[1].slug}`}
                    className={style.link}
                  >
                    Leggi tutto <img className={style.freccia} src={freccia} />
                  </Link>
                </div>
              </div>
              <div className={style.right}>
                <div key={articoli.articles[1].id} className={style.article}>
                  <img
                    className={style.imgBlog}
                    src={articoli.articles[1].cover.url}
                  />
                  <h3
                    className={style.titleArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli.articles[1].titolo}
                  </h3>
                  <p
                    className={style.textArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli.articles[1].riassunto}
                  </p>
                  <Link
                    to={`/blog/${articoli.articles[1].slug}`}
                    className={style.link}
                  >
                    Leggi tutto <img className={style.freccia} src={freccia} />
                  </Link>
                </div>

                <div key={articoli.articles[3].id} className={style.article}>
                  <img
                    className={style.imgBlog}
                    src={articoli.articles[3].cover.url}
                  />
                  <h3
                    className={style.titleArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli.articles[3].titolo}
                  </h3>
                  <p
                    className={style.textArticle}
                    style={{ color: theme.theme.text }}
                  >
                    {articoli.articles[3].riassunto}
                  </p>
                  <Link
                    to={`/blog/${articoli.articles[3].slug}`}
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
