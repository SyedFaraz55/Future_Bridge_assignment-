import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import ListItem from "../Common/ListItem";
const Details = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const getMovieById = async (id) => {
    const res = await axios.get(
      `http://localhost:8080/api/movies/details/${id?.name?.toLowerCase()}`
    );
    setData([res.data]);
  };

  useEffect(() => {
    getMovieById(params);
  }, [params]);

  return (
    <>
      <Navbar />
      <ListItem movies={data} />
    </>
  );
};

export default Details;
