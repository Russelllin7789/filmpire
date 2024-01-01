/* eslint-disable no-console */
/* eslint-disable quotes */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";

import { useGetActorInfoQuery } from "../../services/TMDB";

import useStyles from "./styles";

const Actors = () => {
  const { id: personId } = useParams();
  const { data: actor, isFetching, error } = useGetActorInfoQuery(personId);
  const classes = useStyles();
  console.log("actor:", actor);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (error) {
    return <Link to="/">Something has gone wrong, go back.</Link>;
  }

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`}
          alt={actor.name}
          className={classes.actorImage}
        />
      </Grid>
      <Grid
        item
        container
        direction="column"
        lg={7}
        style={{ marginLeft: "10px" }}
      >
        <Typography variant="h3" align="left" gutterBottom>
          {actor.name}
        </Typography>
        <Typography variant="h5" align="left" gutterBottom>
          Born: {actor?.birthday}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {actor?.biography}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Actors;
