import { Button, ButtonProps, Fade, Icon, Typography } from "@mui/material"
import { FC, useMemo, useRef, useState } from "react"
// @ts-ignore
import useSound from "use-sound"

import useWindowSize from "../../hooks/useWindowSize"
import randomBetween from "../../utils/randomBetween"
import * as S from "./styles"

import levelUp from "../../assets/mp3/smb_1-up.mp3"
import stageClear from "../../assets/mp3/smb_stage_clear.mp3"

const DateRequest = () => {
  const requestedName = useMemo(
    () => new URLSearchParams(document.location.search).get("requestedName"),
    [],
  )

  return (
    <>
      {requestedName && (
        <Typography color="primary" variant="h4">
          {requestedName}
        </Typography>
      )}
      <Typography variant="h4">Quer namorar comigo?</Typography>
    </>
  )
}

const UntouchableButton = (props: ButtonProps) => {
  const [buttonHovered, setButtonHovered] = useState(false)
  const windowSize = useWindowSize()

  const [buttonX, setButtonX] = useState(0)
  const [buttonY, setButtonY] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const maxX: number = useMemo(() => {
    return windowSize.width - (buttonRef.current?.offsetWidth || 80)
  }, [windowSize])
  const maxY: number = useMemo(() => {
    return windowSize.height - (buttonRef.current?.offsetHeight || 80)
  }, [windowSize])

  const handleIntentButton = () => {
    buttonRef.current?.blur()
    !buttonHovered && setButtonHovered(true)

    const bx = randomBetween(0, maxX || 150)
    const by = randomBetween(0, maxY || 150)
    setButtonX(bx)
    setButtonY(by)
  }

  return (
    <Button
      ref={buttonRef}
      onMouseEnter={handleIntentButton}
      onClick={handleIntentButton}
      onTouchStart={handleIntentButton}
      onTouchEnd={handleIntentButton}
      color="error"
      variant="outlined"
      {...props}
      sx={{
        ...(buttonHovered && {
          position: "absolute",
          top: buttonY,
          left: buttonX,
        }),
        transition: "top ease-in-out .1s, left ease-in-out .1s",
      }}
    >
      {props.children}
    </Button>
  )
}

const Main: FC = () => {
  const [acceptedModalOpen, setAcceptedModalOpen] = useState<boolean>(false)

  const [playLevelUp, { stop: stopPlayLevelUp }] = useSound(levelUp)
  const [playStageClear, { stop: stopStageClear }] = useSound(stageClear)

  const handleOpenModal = () => setAcceptedModalOpen(true)
  const handleCloseModal = () => {
    stopStageClear()
    stopPlayLevelUp()
    setAcceptedModalOpen(false)
  }

  const handleAccept = () => {
    handleOpenModal()
    playLevelUp()
    setTimeout(() => {
      playStageClear()
    }, 800)
  }

  return (
    <S.Container>
      <DateRequest />
      <S.ActionsContainer>
        <Button onClick={handleAccept}>Sim</Button>
        <UntouchableButton>Não</UntouchableButton>
      </S.ActionsContainer>
      <S.Modal open={acceptedModalOpen} onClose={handleCloseModal} sx={{}}>
        <Fade in={acceptedModalOpen}>
          <S.ModalContainer>
            <Icon>celebration</Icon>
            <Typography sx={{ marginLeft: 4 }} variant="h5">
              Estamos namorando!
            </Typography>
          </S.ModalContainer>
        </Fade>
      </S.Modal>
    </S.Container>
  )
}

export default Main

