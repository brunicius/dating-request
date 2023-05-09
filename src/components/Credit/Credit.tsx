import { Typography } from "@mui/material"
import { FC } from "react"

export const Credit: FC = () => {
  return (
    <Typography
      variant="overline"
      sx={{
        position: "fixed",
        width: "100%",
        textAlign: "center",
        bottom: 0,
      }}
    >
      Made by{" "}
      <a href="https://github.com/brunicius" target="_blank">
        brunicius
      </a>{" "}
      for <a href="https://www.instagram.com/alissondsgn/">Alisson</a>
    </Typography>
  )
}

