import React, { useState, useEffect } from "react";
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
import { useQuery, useMutation, useApolloClient } from "@apollo/client";

import { GET_ALL_COMPANIES, ADD_INVESTMENT } from "./queries";
import styles from "./styles.module.sass";

const AddInvestmentModal = ({ isOpen, onClose, investor }) => {
  const { error, data, loading } = useQuery(GET_ALL_COMPANIES);
  const [addInvestment, { loading: loadingAdd }] = useMutation(ADD_INVESTMENT);
  const client = useApolloClient();
  const [selectedCompany, setSelectedCompany] = useState("");
  const [amount, setAmount] = useState("");

  const onAmountChange = (ev) => {
    const parsedNumber = Number(ev.target.value);
    if ((!isNaN(parsedNumber) && parsedNumber > 0) || ev.target.value === "") {
      setAmount(ev.target.value);
    }
  };

  const updateCache = () => {
    // TODO: Actually update cache instead of resetting it
    setAmount("");
    setSelectedCompany("");
    client.resetStore();
    onClose();
  };

  const onSubmit = () => {
    const investment = {
      amount,
      company_id: selectedCompany,
      investor_id: Number(investor.id),
    };

    addInvestment({ variables: { investment }, update: updateCache });
  };

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
            <Select
              value={selectedCompany}
              onChange={(ev) => setSelectedCompany(ev.target.value)}
              labelId="company-select"
            >
              {data.company.map((company) => (
                <MenuItem key={company.id} value={company.id}>
                  {company.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box m={2} />
          <TextField
            value={amount}
            onChange={onAmountChange}
            className={styles.modalInput}
            label="Investment Amount"
          />
          <Box m={2} />
          <Grid container spacing={2} justify="flex-end">
            <Grid item>
              <Button disabled={loadingAdd} onClick={onClose} color="primary">
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={loadingAdd || !amount || !selectedCompany}
                variant="contained"
                color="primary"
                onClick={onSubmit}
              >
                {loadingAdd ? "Sending..." : "Add Investment"}
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
