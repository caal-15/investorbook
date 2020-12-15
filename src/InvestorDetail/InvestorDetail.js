import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import styles from "./styles.module.sass";

import { GET_INVESTOR_DETAIL } from "./queries";
import InvestorInvestments from "./InvestorInvestments";

const InvestorDetail = () => {
  const { push } = useHistory();
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_INVESTOR_DETAIL, {
    variables: { id },
  });

  const totalAmountInvested = data?.investor?.investments?.reduce(
    (acc, investment) => acc + investment.amount,
    0
  );

  return (
    <Grid alignItems="center" container spacing={2}>
      <Grid md={1} item>
        <IconButton onClick={() => push("/investors")}>
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      {loading ? (
        <Grid md={1} item>
          <CircularProgress />
        </Grid>
      ) : null}
      {!loading && !error && data?.investor ? (
        <>
          <Grid md={1} item>
            <Avatar
              className={styles.investorAvatar}
              src={data.investor.photo_large}
            />
          </Grid>
          <Grid md={10} item>
            <Grid container justify="space-between">
              <Grid item>
                <Typography
                  align="left"
                  variant="h5"
                  component="h2"
                  gutterBottom
                >
                  {data.investor.name}
                </Typography>
                <Typography variant="body1">
                  Total Amount Invested: $
                  {Intl.NumberFormat().format(totalAmountInvested)}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button startIcon={<EditIcon />}>Edit Name</Button>
                  </Grid>
                  <Grid item>
                    <Button startIcon={<DeleteIcon />}>Remove Investor</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid md={2} item />
          <Grid item md={10}>
            <Box m={4} />
            <InvestorInvestments
              investor={data.investor}
              investments={data.investor.investments}
            />
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

export default InvestorDetail;
