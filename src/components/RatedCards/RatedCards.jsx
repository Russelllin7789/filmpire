/* eslint-disable quotes */
import React from "react";
import { Typography, Box } from "@mui/material";
import { Movie } from "..";

const RatedCards = ({ title, movies }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {movies?.results?.map((movie, i) => (
          <Movie movie={movie} i={i} key={movie.id} />
        ))}
      </Box>
    </Box>
  );
};

export default RatedCards;
