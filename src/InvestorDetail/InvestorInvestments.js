import React, { useState } from "react";
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

import AddInvestmentModal from "./AddInvestmentModal";

const InvestorInvestments = ({ investments }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const onCloseAddModal = () => setIsAddModalOpen(false);
  const onOpenAddModal = () => setIsAddModalOpen(true);

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography align="left" variant="body1" component="h3">
            Investments
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" onClick={onOpenAddModal}>
            + Add Investment
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
              <TableCell>{investment.company.name}</TableCell>
              <TableCell>
                ${Intl.NumberFormat().format(investment.amount)}
              </TableCell>
              <TableCell align="right">
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddInvestmentModal isOpen={isAddModalOpen} onClose={onCloseAddModal} />
    </>
  );
};

export default InvestorInvestments;
