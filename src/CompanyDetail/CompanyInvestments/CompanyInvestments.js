import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const CompanyInvestments = ({ investments }) => {
  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography align="left" variant="body1" component="h3">
            Investors
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" disabled>
            + Add Investors
          </Button>
        </Grid>
      </Grid>
      <Box m={2} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell>AMOUNT</TableCell>
            <TableCell align="right">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {investments.map((investment) => (
            <TableRow key={investment.id}>
              <TableCell>{investment.investor.name}</TableCell>
              <TableCell>
                ${Intl.NumberFormat().format(investment.amount)}
              </TableCell>
              <TableCell align="right">
                <IconButton disabled>
                  <EditIcon />
                </IconButton>
                <IconButton disabled>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default CompanyInvestments;
