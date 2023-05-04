import { createTheme } from "@mui/material"

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
  },
})

export default theme

