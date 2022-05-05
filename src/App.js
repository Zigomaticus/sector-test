import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
// Components
import Search from "./components/search/Search";
import Table from "./components/table/Table";
import Controls from "./components//controls/Controls";
// Css
import "./App.scss";
import PostService from "./components/API/PostService";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  let pagesArray = [];
  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1);
  }

  const changePage = (page) => {
    setPage(page);
  };

  async function fetchPosts() {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(Math.ceil(totalCount / limit));
  }

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      <Table filteredPosts={filteredPosts} setPosts={setPosts} />
      <Controls pagesArray={pagesArray} page={page} changePage={changePage} />
    </div>
  );
};

export default App;
