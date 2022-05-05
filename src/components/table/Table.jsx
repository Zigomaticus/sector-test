import React from "react";
// Assets
import sort from "../../assets/sort.png";
import NoMatches from "../noMatches/NoMatches";
// Css
import "./Table.scss";

const Table = ({ filteredPosts, setPosts }) => {
  const sortNumber = () => {
    setPosts([...filteredPosts].sort((a, b) => b.id - a.id));
  };

  const sortAlphabet = () => {
    setPosts([...filteredPosts].sort((a, b) => a.title.localeCompare(b.title)));
  };

  return (
    <>
      <div className="table">
        <div className="table__footer">
          <div className="table__footer-id">
            ID
            <span onClick={() => sortNumber()}>
              <img src={sort} alt="Sorting" />
            </span>
          </div>
          <div className="table__footer-title">
            Заголовок
            <span onClick={() => sortAlphabet()}>
              <img src={sort} alt="Sorting" />
            </span>
          </div>
          <div className="table__footer-discription">
            Описание
            <span onClick={() => sortAlphabet()}>
              <img src={sort} alt="Sorting" />
            </span>
          </div>
        </div>
        {filteredPosts.length === 0 ? (
          <NoMatches />
        ) : (
          filteredPosts.map(({ id, title, body }) => (
            <div className="table__item" key={id}>
              <div className="table__item-id">{id}</div>
              <div className="table__item-title">{title}</div>
              <div className="table__item-discription">{body}</div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Table;
