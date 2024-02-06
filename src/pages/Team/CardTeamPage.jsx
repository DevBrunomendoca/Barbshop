import Button from '../../components/Button'
import Caption from '../../components/Caption'
import Paragraph from '../../components/Paragraph'
//import { ContainerTeamPage } from './TeamStyle'

import { ContainerTeamPage, ContentImg, ContentText } from './CardTeamPageStyle'

const CardTeamPage = ({id, srcImg, name, description }) => {

  return(
    <ContainerTeamPage id={id}>
      <ContentImg>
        <img src={srcImg} alt={`Foto de perfil ${name}`} />
      </ContentImg>
      <ContentText>
        <Caption textCaption={name}/>
        <Paragraph textParagraph={description}/>
        <Button textButton='Agendar horário'/>
      </ContentText>
    </ContainerTeamPage>
  )
}

export default CardTeamPage