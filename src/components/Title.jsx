import { TitleStyled } from "./TitleStyle"

export default function Title({id, textTitle}) {
  return(
    <TitleStyled id={id}>{textTitle}</TitleStyled>
  )
}