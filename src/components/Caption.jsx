import { CaptionStyled } from "./CaptionStyle"

export default function Caption({id, textCaption }) {
  return(
    <CaptionStyled id={id}>{textCaption}</CaptionStyled>
  )
}