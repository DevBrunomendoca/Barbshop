import { ParagraphStyled } from "./ParagraphStyle"

export default function Paragraph({id, textParagraph }) {
  return(
    <ParagraphStyled id={id}>{textParagraph}</ParagraphStyled>
  )
}