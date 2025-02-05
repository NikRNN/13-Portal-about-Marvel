import "./charList.scss";
import { useState, useEffect } from "react";
import useMarvelService from "../../services/useMarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

const CharList = ({ changeSelectedChar }) => {
  const [charList, setCharList] = useState([]);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charEnded, setCharEnded] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { error, loading, getAllCharacters } = useMarvelService();

  useEffect(() => {
    makeCharList();
  }, []);

  const makeCharList = () => {
    getAllCharacters().then((res) => {
      setCharList(res);
      setOffset(offset + 9);
      setNewItemsLoading(true);
    });
  };

  const onRepeatRequest = (offset) => {
    let ended = false;
    setDisabled(true);
    getAllCharacters(offset).then((res) => {
      if (res.length < 9) {
        ended = true;
      }
      setCharList((charList) => [...charList, ...res]);
      setOffset((offset) => offset + 9);
      setCharEnded(ended);
      setDisabled(false);
    });
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const loadingStatus = loading && !newItemsLoading ? <Spinner /> : null;

  const content = !(errorMessage || loadingStatus) ? (
    <div className="char__list">
      <ul className="char__grid">
        {charList.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => changeSelectedChar(item.id)}
              className="char__item"
            >
              <img
                src={item.thumbnail}
                className={
                  item.thumbnail ==
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                    ? "char__item__notimg"
                    : "char__item__img"
                }
                alt="abyss"
              />
              <div className="char__name">{item.name}</div>
            </li>
          );
        })}
      </ul>

      {charEnded ? (
        <button className="char__notchar inner">
          Извините, больше персонажей нет!
        </button>
      ) : (
        <button
          disabled={disabled}
          className="button button__main button__long"
          onClick={() => {
            onRepeatRequest(offset);
          }}
        >
          <div className="inner">
            {disabled ? "Идет загрузка..." : "Показать больше"}
          </div>
        </button>
      )}
    </div>
  ) : null;

  return (
    <>
      {errorMessage}
      {loadingStatus}
      {content}
    </>
  );
};

export default CharList;
