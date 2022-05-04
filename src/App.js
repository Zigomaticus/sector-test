import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
// Components
import Search from "./components/search/Search";
import Table from "./components/table/Table";
import Controls from "./components/controls/Controls";
// Css
import "./App.scss";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1`)
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  const filteredPosts = posts.filter((post) => {
    console.log("Render");
    return post.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      <Table filteredPosts={filteredPosts} setPosts={setPosts} />
      <Controls />
    </div>
  );
};

export default App;
