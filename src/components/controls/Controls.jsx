import React from "react";
// Css
import "./Controls.scss";

const Controls = ({ pagesArray, page, changePage }) => {
  return (
    <div className="controls">
      <div className="controls__back" onClick={() => changePage(page - 1)}>
        Назад
      </div>
      <div className="wrapper">
        {pagesArray.map((p) => (
          <div
            className={
              page === p
                ? "controls__pagination active__page"
                : "controls__pagination"
            }
            key={p}
          >
            {p}
          </div>
        ))}
      </div>
      <div className="controls__straight" onClick={() => changePage(page + 1)}>
        Вперёд
      </div>
    </div>
  );
};

export default Controls;
