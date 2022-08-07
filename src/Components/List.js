import axios from "axios";
import React, { useEffect, useState } from "react";
import ListItem from "../Common/ListItem";

const List = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const resp = await axios.get("http://localhost:8080/api/movies");
      setMovies(resp.data);
    } catch (err) {
      alert("failed to load movies");
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <ListItem movies={movies} />;
};

export default List;
