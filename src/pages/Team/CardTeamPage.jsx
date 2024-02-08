import { Link } from 'react-router-dom'
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
        <Link to='/services'><Button textButton='Agendar horário'/></Link>
        
      </ContentText>
    </ContainerTeamPage>
  )
}

export default CardTeamPage