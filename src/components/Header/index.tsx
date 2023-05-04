import { Icon } from "@mui/material"
import { FC } from "react"

import * as S from "./styles"

const LoveIcon = () => <Icon fontSize="large">favorite</Icon>

const Header: FC = () => {
  return (
    <S.Container>
      <LoveIcon />
    </S.Container>
  )
}

export default Header

