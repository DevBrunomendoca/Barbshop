// import { ParagraphStyled } from "../ParagraphStyle"


// const Schedule = ({ textSchedules, textSpan }) => {
//   return(
//     <ParagraphStyled><span>{textSpan}</span>{ textSchedules }</ParagraphStyled>
//   )
// }

import { ParagraphStyled } from "../ParagraphStyle"

const Time = ({ textSchedules, textSpan }) => {
  return (
    <div style={{display: "flex", alignItems: 'center', gap: '1rem'}}>
      <span>{textSpan}</span>
    <ParagraphStyled>{ textSchedules }</ParagraphStyled>
    </div>
  )
}

export default Time