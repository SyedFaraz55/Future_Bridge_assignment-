import React from "react";
import { Container, Box } from "@chakra-ui/react";
import Row from "./Row";
import { Link } from "react-router-dom";
const ListItem = ({ movies }) => {
  const renderMovies = () => {
    return movies?.map((movie, index) => {
      return (
        <Link key={index} to={`details/${movie?.name}`}>
          <Container maxW="container.xl" mt={5}>
            <Box borderWidth={1} padding={4} borderRadius={5} width={500}>
              <Row label="Name" value={movie?.name} />
              <Row label="Realease Date" value={movie?.release} />
              {movie.rating && <Row label="Rating" value={movie?.rating} />}
            </Box>
          </Container>
        </Link>
      );
    });
  };
  return renderMovies();
};

export default ListItem;
