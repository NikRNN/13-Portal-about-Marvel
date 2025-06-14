import "./singleComicPage.scss";

import { Link } from "react-router-dom";

const SingleComicPage = ({ data }) => {
  const { thumbnail, title, price, description, pageCount, language } = data;

  return (
    <div className="single-comic">
      <img src={thumbnail} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <Link to="/comics" className="single-comic__back">
        Вернуться к списку комиксов
      </Link>
    </div>
  );
};

export default SingleComicPage;
