import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Link } from "react-router-dom";

import styles from "./styles.module.sass";

const CompanyRow = ({ company }) => {
  const investments = company.investments
    .map((investment) => investment.investor.name)
    .join(", ");
  return (
    <TableRow>
      <TableCell>
        <Link className={styles.companyLink} to={`/companies/${company.id}`}>
          <strong>{company.name}</strong>
        </Link>
      </TableCell>
      <TableCell>{investments}</TableCell>
    </TableRow>
  );
};

export default CompanyRow;
