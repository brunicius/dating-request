import { ThemeProvider } from "@mui/material"
import theme from "./styles/theme"
import App from "./App"

function Container() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

export default Container

