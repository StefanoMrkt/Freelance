import style from "./Blog.module.css";


import { Link } from "react-router-dom";
import data from "../../assets/Articles.json";
import freccia from "../../assets/Images/Freccina1.png";

import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

export default function Blog() {
  const theme = useSelector((state) => state.theme);

  const handleShowMore = () => {};

  return (
    <>
      <div className={style.container} id="Blog">
        <h2 className={style.title}>Blog</h2>

        <div className={style.blogList}>
          <div className={style.left}>
            <button onClick={handleShowMore} className={style.more}>
              Mostra di più
            </button>
            <div key={data[1].id} className={style.article}>
              <img
                className={style.imgBlog}
                src={data[1].image}
                alt={data[1].title}
              />
              <h3
                className={style.titleArticle}
                style={{ color: theme.theme.text }}
              >
                {data[1].title}
              </h3>
              <div
                className={style.textArticle}
                style={{ color: theme.theme.text }}
              >
                <ReactMarkdown>{data[1].content}</ReactMarkdown>
              </div>
              <Link to={`/blog/${data[1].id}`} className={style.link}>
                Leggi tutto <img className={style.freccia} src={freccia} />
              </Link>
            </div>

            <div key={data[3].id} className={style.article}>
              <img
                className={style.imgBlog}
                src={data[3].image}
                alt={data[3].title}
              />
              <h3
                className={style.titleArticle}
                style={{ color: theme.theme.text }}
              >
                {data[3].title}
              </h3>
              <p
                className={style.textArticle}
                style={{ color: theme.theme.text }}
              >
                {data[3].content}
              </p>
              <Link to={`/blog/${data[3].id}`} className={style.link}>
                Leggi tutto <img className={style.freccia} src={freccia} />
              </Link>
            </div>
          </div>
          <div className={style.right}>
            <div key={data[0].id} className={style.article}>
              <img
                className={style.imgBlog}
                src={data[0].image}
                alt={data[0].title}
              />
              <h3
                className={style.titleArticle}
                style={{ color: theme.theme.text }}
              >
                {data[0].title}
              </h3>
              <p
                className={style.textArticle}
                style={{ color: theme.theme.text }}
              >
                {data[0].content}
              </p>
              <Link to={`/blog/${data[0].id}`} className={style.link}>
                Leggi tutto <img className={style.freccia} src={freccia} />
              </Link>
            </div>

            <div key={data[2].id} className={style.article}>
              <img
                className={style.imgBlog}
                src={data[2].image}
                alt={data[2].title}
              />
              <h3
                className={style.titleArticle}
                style={{ color: theme.theme.text }}
              >
                {data[2].title}
              </h3>
              <p
                className={style.textArticle}
                style={{ color: theme.theme.text }}
              >
                {data[2].content}
              </p>
              <Link to={`/blog/${data[2].id}`} className={style.link}>
                Leggi tutto <img className={style.freccia} src={freccia} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
