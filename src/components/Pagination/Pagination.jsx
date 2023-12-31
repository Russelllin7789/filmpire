/* eslint-disable quotes */
import React from "react";
import { Typography, Button } from "@mui/material";

import useStyles from "./styles";

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const classes = useStyles();

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        type="button"
        className={classes.button}
        onClick={handlePrev}
      >
        Prev
      </Button>
      <Typography variant="h4" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        type="button"
        className={classes.button}
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
