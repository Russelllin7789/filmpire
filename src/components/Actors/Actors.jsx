/* eslint-disable no-console */
/* eslint-disable quotes */
import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Box, CircularProgress, Grid, Typography, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import {
  useGetMoviesByActorIdQuery,
  useGetActorInfoQuery,
} from "../../services/TMDB";
import { MovieList } from "..";

import useStyles from "./styles";

const Actors = () => {
  const page = 1;
  const { id: personId } = useParams();
  const { data: actor, isFetching, error } = useGetActorInfoQuery(personId);
  const { data: actorMovies } = useGetMoviesByActorIdQuery({
    id: personId,
    page,
  });
  const classes = useStyles();
  const history = useHistory();
  console.log("actor:", actor);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return <Link to="/">Something has gone wrong, go back.</Link>;
  }

  return (
    <Grid container spacing={3}>
      <Grid item lg={5} xl={4}>
        <img
          src={`https://image.tmdb.org/t/p/w780/${actor?.profile_path}`}
          alt={actor.name}
          className={classes.actorImage}
        />
      </Grid>
      <Grid
        item
        container
        direction="column"
        lg={7}
        xl={8}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" align="left" gutterBottom>
          {actor.name}
        </Typography>
        <Typography variant="h5" align="left" gutterBottom>
          Born: {new Date(actor?.birthday).toDateString()}
        </Typography>
        <Typography variant="body1" align="justify" paragraph>
          {actor?.biography || "Sorry, no biography yet..."}
        </Typography>
        <Box marginTop="2rem" display="flex" justifyContent="space-around">
          <Button
            variant="contained"
            color="primary"
            target="_blank"
            href={`https://www.imdb.com/name/${actor?.imdb_id}`}
          >
            IMDB
          </Button>
          <Button
            startIcon={<ArrowBack />}
            color="primary"
            onClick={() => history.goBack()}
          >
            BACK
          </Button>
        </Box>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">
          Movies
        </Typography>
        {actorMovies && <MovieList movies={actorMovies} numberOfMovies={12} />}
      </Box>
    </Grid>
  );
};

export default Actors;
