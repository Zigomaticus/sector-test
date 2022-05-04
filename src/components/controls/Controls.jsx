import React from "react";
// Css
import './Controls.scss'

const Controls = () => {
  return (
    <div className="controls">
      <div className="controls__back">Назад</div>
      <div className="controls__pagination">1</div>
      <div className="controls__straight">Вперёд</div>
    </div>
  );
};

export default Controls;
