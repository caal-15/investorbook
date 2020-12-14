import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useQuery } from "@apollo/client";

import { GET_INVESTORS } from "./queries";
import InvestorRow from "./InvestorRow";

import Pagination from "../Pagination";

const Investors = () => {
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(0);
  const { loading, error, data } = useQuery(GET_INVESTORS, {
    variables: { limit: pageSize, offset: page * pageSize },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data.investor.length === 0) return <p>The database is empty!</p>;

  return (
    <>
      <Typography align="left" variant="h3" component="h2" gutterBottom>
        Investors
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell>INVESTMENTS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.investor.map((investor) => (
            <InvestorRow key={investor.id} investor={investor} />
          ))}
        </TableBody>
      </Table>
      <Box m={1} />
      <Grid container justify="flex-end">
        <Grid item>
          <Pagination
            pageSize={pageSize}
            setPageSize={setPageSize}
            page={page}
            setPage={setPage}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Investors;
