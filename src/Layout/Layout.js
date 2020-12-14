import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";
import { useLocation, useHistory } from "react-router-dom";

import styles from "./styles.module.sass";

const INVESTORS_TAB = "INVESTORS";
const COMPANIES_TAB = "COMPANIES";

const Layout = ({ showNav }) => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  const tabValue = pathname.startsWith("/investors")
    ? INVESTORS_TAB
    : COMPANIES_TAB;

  const onTabChange = (_, value) => {
    value === INVESTORS_TAB ? push("/investors") : push("/companies");
  };

  return (
    <Box p={8}>
      <Typography component="h1" align="left" gutterBottom>
        <Typography
          className={styles.headTitle}
          variant="h5"
          component="span"
          color="primary"
        >
          INVESTOR
        </Typography>
        <Typography className={styles.headTitle} variant="h5" component="span">
          BOOK
        </Typography>
      </Typography>
      <Box m={4} />
      {showNav ? (
        <>
          <Tabs value={tabValue} onChange={onTabChange}>
            <Tab value={INVESTORS_TAB} label="Investors" />
            <Tab value={COMPANIES_TAB} label="Companies" />
          </Tabs>
          <Divider className={styles.tabDivider} />
        </>
      ) : null}
    </Box>
  );
};

export default Layout;
