import { Box, Modal as MuiModal, Paper, styled } from "@mui/material"

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  // fontSize: "2px",
  // background: "blue",
}))

export const ActionsContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(8),
}))

export const Modal = styled(MuiModal)(({ theme }) => ({
  display: "flex",
  placeItems: "center",
  padding: theme.spacing(2),
}))

export const ModalContainer = styled(Paper)(({ theme }) => ({
  flex: 1,
  display: "flex",
  placeItems: "center",
  textAlign: "center",
  padding: theme.spacing(4),
}))

