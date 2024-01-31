import { ContainerContact, ContentContact, ContentContactOne, ContentContactTwo, ContentSchedules } from './SectionContactStyle'

import SecondCaption from '../SecondCaption'
import Paragraph from '../Paragraph'
import Time from './Time'
import Button from '../Button'



const SectionContact = () => {
  return(
    <ContainerContact>
      <ContentContact>
        <ContentContactOne>
          <SecondCaption textSecondCaption='EQUIPE DE PROFISSIONAIS ESTÁ ESPERANDO POR VOCÊ'/>
        <Paragraph textParagraph='Risus odio lobortis ullamcorper felis vitae bibendum mi. Penatibus fusce consequat donec vitae porttitor elementum volutpat gravida. Tellus hac tristique nisi, id amet cras tempor, amet.'/>
        <Button textButton='Agendar horário'/>
        </ContentContactOne>
        <ContentContactTwo>
          <SecondCaption textSecondCaption='HORÁRIO ESPECIAL DE FUNCIONAMENTO'/>
          <ContentSchedules>
            <Time textSchedules='9h00 – 19h30' textSpan='SEGUNDA-FEIRA:'/>
            <Time textSchedules='9h00 – 19h30' textSpan='TERÇA-FEIRA:'/>
            <Time textSchedules='9h00 – 19h30' textSpan='QUARTA-FEIRA:'/>
            <Time textSchedules='9h00 – 19h30' textSpan='QUINTA-FEIRA:'/>
            <Time textSchedules='9h00 – 19h30' textSpan='SEXTA-FEIRA:'/>
            <Time textSchedules='9h00 – 19h30' textSpan='SÁBADO:'/>
            <Time textSchedules='FECHADO' textSpan='DOMINGO:'/>
          </ContentSchedules>
        </ContentContactTwo>
      </ContentContact>
    </ContainerContact>
  )
}
export default SectionContact