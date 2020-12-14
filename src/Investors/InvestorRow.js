import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import styles from "./styles.module.sass";

const InvestorRow = ({ investor }) => {
  const investments = investor.investments
    .map((investment) => investment.company.name)
    .join(", ");
  return (
    <TableRow>
      <TableCell>
        <Grid container spacing={2} alignItems="center" wrap="nowrap">
          <Grid item>
            <Avatar
              className={styles.investorAvatar}
              alt={investor.name}
              src={investor.photo_thumbnail}
            />
          </Grid>
          <Grid item>
            <strong className={styles.investorName}>{investor.name}</strong>
          </Grid>
          <Grid item>
            <Box ml={4} />
          </Grid>
        </Grid>
      </TableCell>
      <TableCell>{investments}</TableCell>
    </TableRow>
  );
};

export default InvestorRow;
