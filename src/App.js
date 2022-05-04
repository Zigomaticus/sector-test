import React from "react";
// Css
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <div className="search">
        <input type="text" className="search__input" placeholder="Поиск" />
      </div>

      <div className="table">
        <div className="table__footer">
          <div className="table__footer-id">ID</div>
          <div className="table__footer-title">Заголовок</div>
          <div className="table__footer-discription">Описание</div>
        </div>
        <div className="table__item">
          <div className="table__item-id">1</div>
          <div className="table__item-title">
            sunt aut facere repellat provident occaecati excepturi optio
            reprehenderit
          </div>
          <div className="table__item-discription">
            quia et suscipit\nsuscipit recusandae consequuntur expedita et
            cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
            autem sunt rem eveniet architecto
          </div>
        </div>
      </div>
      <div className="controls">
        <div className="controls__back">Назад</div>
        <div className="controls__pagination">1</div>
        <div className="controls__straight">Вперёд</div>
      </div>
    </div>
  );
};

export default App;
