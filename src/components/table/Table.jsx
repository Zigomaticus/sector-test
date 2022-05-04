import React from "react";
// Css
import "./Table.scss";

const Table = ({ posts }) => {
  return (
    <div className="table">
      <div className="table__footer">
        <div className="table__footer-id">ID</div>
        <div className="table__footer-title">Заголовок</div>
        <div className="table__footer-discription">Описание</div>
      </div>
      {posts.map(({ id, title, body }) => (
        <div className="table__item" key={id}>
          <div className="table__item-id">{id}</div>
          <div className="table__item-title">{title}</div>
          <div className="table__item-discription">{body}</div>
        </div>
      ))}
    </div>
  );
};

export default Table;
