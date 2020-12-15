import React from "react";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardIos";

const Pagination = ({ pageSize, setPageSize, page, setPage, total }) => {
  const firstItem = page * pageSize + 1;
  const lastItem = firstItem + pageSize - 1;
  return (
    <Grid container wrap="nowrap" alignItems="center">
      <Grid item>Rows per page:</Grid>
      <Grid item>
        <Box mx={0.5} />
      </Grid>
      <Grid item>
        <Select
          value={pageSize}
          onChange={(ev) => setPageSize(ev.target.value)}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <Box mx={2} />
      </Grid>
      <Grid item>
        {firstItem} - {lastItem} of {total}
      </Grid>
      <Grid item></Grid>
      <Grid item>
        <Box mx={2} />
      </Grid>
      <Grid item>
        <IconButton disabled={page === 0} onClick={() => setPage(page - 1)}>
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          disabled={lastItem >= total}
          onClick={() => setPage(page + 1)}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Pagination;
