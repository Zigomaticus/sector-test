import React from "react";
// Css
import "./Search.scss";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Поиск"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
