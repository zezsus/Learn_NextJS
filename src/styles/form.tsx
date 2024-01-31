/** @format */

import { Typography, styled } from "@mui/material";

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
};

export const ModalHeader = styled(Typography)({
  padding: "1rem",
  textAlign: "center",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  color: "white",
  fontWeight: "bold",
});

export const ModalBody = styled(Typography)({
  display: "flex",
  gap: "0.5rem",
  flexDirection: "column",
  padding: "1.5rem",
});

export const ModalFooter = styled(Typography)({
  display: "flex",
  justifyContent: "space-evenly",
  paddingBottom: "1rem",
});
