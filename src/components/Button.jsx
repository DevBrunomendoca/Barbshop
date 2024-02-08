import { ButtonMain } from "./ButtonStyle"

export default function Button({onClick, id, textButton }) {
  return(
    <ButtonMain onClick={onClick} id={id}>{textButton}</ButtonMain>
  )
} 