import React, { useState, useEffect } from "react";
import axios from "axios";
// Components
import Search from "./components/search/Search";
import Table from "./components/table/Table";
import Controls from "./components/controls/Controls";
// Css
import "./App.scss";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      .then(({ data }) => setPosts(data));
  }, []);

  return (
    <div className="App">
      <Search />
      <Table posts={posts} />
      <Controls />
    </div>
  );
};

export default App;
