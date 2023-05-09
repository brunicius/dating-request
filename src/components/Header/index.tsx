import { FC } from "react"

import * as S from "./styles"

const LoveIcon = () => <S.RgbIcon>favorite</S.RgbIcon>

const Header: FC = () => {
  return (
    <S.Container>
      <LoveIcon />
    </S.Container>
  )
}

export default Header

