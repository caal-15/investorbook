import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { useQuery } from "@apollo/client";

import { GET_COMPANIES } from "./queries";
import Pagination from "../Pagination";
import CompanyRow from "./CompanyRow";

const Companies = () => {
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(0);
  const { loading, error, data } = useQuery(GET_COMPANIES, {
    variables: { limit: pageSize, offset: pageSize * page },
  });

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography align="left" variant="h3" component="h2">
            Companies
          </Typography>
        </Grid>
        <Grid item>
          <Button disabled color="primary" variant="outlined">
            Add Company
          </Button>
        </Grid>
      </Grid>
      {loading ? <CircularProgress /> : null}
      {!loading && !error && data?.company?.length ? (
        <>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell>INVESTORS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.company.map((company) => (
                <CompanyRow company={company} />
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
                total={data.company_aggregate.aggregate.count}
              />
            </Grid>
          </Grid>
        </>
      ) : null}
      {error ? (
        <Typography color="error" variant="h5">
          Ooops, Something went wrong, try reloading.
        </Typography>
      ) : null}
    </>
  );
};

export default Companies;
