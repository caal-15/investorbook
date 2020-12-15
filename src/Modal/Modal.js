import React from "react";
import MaterialModal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import styles from "./styles.module.sass";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <MaterialModal className={styles.modal} open={isOpen} onClose={onClose}>
      <Paper>
        <Box p={4}>{children}</Box>
      </Paper>
    </MaterialModal>
  );
};

export default Modal;
