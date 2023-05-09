import { Box, Icon, Typography, keyframes, styled } from "@mui/material"

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  // fontSize: "2px",
  // background: "blue",
}))

export const RgbIcon = styled(Icon)(() => ({
  animationName: rgbKeyframes,
  animationDuration: `20s`,
  animationIterationCount: "infinite",
  animationTimingFunction: "ease-in-out",
  fontSize: 64,
  // transition: "all ease-in-out 1s",
}))

export const RgbText = styled(Typography)(() => ({
  animationName: rgbKeyframes,
  animationDuration: `20s`,
  animationIterationCount: "infinite",
  animationTimingFunction: "ease-in-out",
}))

const rgbKeyframes = keyframes`
  0% {
    color: #69b7eb;
  }
  25% {
    color: #b3dbd3;
  }
  50% {
    color: #f4d6db;
  }
  75% {
    color: #ddffd9;
  }
  100% {
    color: #69b7eb
  }
`

