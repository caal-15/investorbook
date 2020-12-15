import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_COMPANY_DETAIL } from "./queries";
import CompanyInvestments from "./CompanyInvestments";

const CompanyDetail = () => {
  const { push } = useHistory();
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_COMPANY_DETAIL, {
    variables: { id },
  });

  return (
    <Grid alignItems="center" container spacing={2}>
      <Grid md={1} item>
        <IconButton onClick={() => push("/companies")}>
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      {loading ? (
        <Grid md={1} item>
          <CircularProgress />
        </Grid>
      ) : null}
      {!loading && !error && data?.company ? (
        <>
          <Grid md={11} item>
            <Grid container justify="space-between">
              <Grid item>
                <Typography
                  align="left"
                  variant="h5"
                  component="h2"
                  gutterBottom
                >
                  {data.company.name}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button disabled startIcon={<EditIcon />}>
                      Edit Name
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button disabled startIcon={<DeleteIcon />}>
                      Remove Company
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid md={1} item />
          <Grid item md={11}>
            <Box m={4} />
            <CompanyInvestments investments={data.company.investments} />
          </Grid>
        </>
      ) : null}
      {error ? (
        <Typography variant="h3" color="error">
          Oops! Something went wrong, try reloading.
        </Typography>
      ) : null}
    </Grid>
  );
};

export default CompanyDetail;
