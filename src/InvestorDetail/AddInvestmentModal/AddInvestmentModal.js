import React from "react";
import Modal from "../../Modal";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useQuery } from "@apollo/client";

import { GET_ALL_COMPANIES } from "./queries";
import styles from "./styles.module.sass";

const AddInvestmentModal = ({ isOpen, onClose }) => {
  const { error, data, loading } = useQuery(GET_ALL_COMPANIES);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {loading ? <CircularProgress /> : null}
      {!loading && !error && data.company ? (
        <>
          <Typography align="left" variant="h6" component="h4">
            Add Investment
          </Typography>
          <Typography align="left" variant="body1">
            Please enter the details of the investment.
          </Typography>
          <Box m={2} />
          <FormControl className={styles.modalInput}>
            <InputLabel id="company-select">Select Company</InputLabel>
            <Select labelId="company-select">
              {data.company.map((company) => (
                <MenuItem key={company.id} value={company.id}>
                  {company.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box m={2} />
          <TextField className={styles.modalInput} label="Investment Amount" />
          <Box m={2} />
          <Grid container spacing={2} justify="flex-end">
            <Grid item>
              <Button onClick={onClose} color="primary">
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Add Investment
              </Button>
            </Grid>
          </Grid>
        </>
      ) : null}
      {error ? (
        <Typography variant="h4" color="error">
          Oops, Something went wrong, try reloading.
        </Typography>
      ) : null}
    </Modal>
  );
};

export default AddInvestmentModal;
