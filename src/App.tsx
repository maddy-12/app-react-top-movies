import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import { isTemplateExpression } from "typescript";
import "./App.css";
import Movies from "./Components/Movies";
import SearchMovie from "./Components/SearchMovie";
import { Data, Item } from "./data";

function App() {
  useEffect(() => {
    fetchTopMovies();
  }, []);

  const [items, setTopMovies] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTopMovies = async () => {
    try {
      const movie = await axios.get<Data>(
        "https://imdb-api.com/API/Top250Movies/k_363pzhv4"
      );
      console.log("movie", movie);

      setTopMovies(movie.data.items);
      setLoading(true);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Top 250 Movies</h1>
      <SearchMovie items={items} />
      <div className="content">
        <Movies items={items} />
      </div>
    </div>
  );
}

export default App;
