import Logo from '../Logo'
import Paragraph from '../Paragraph'
import SecondCaption from '../SecondCaption'
import { ContainerFooter, ContentFooterContact, ContenLocation, ContentEmail, Form, Navalha, ContentCopyright } from './FooterStyle'
import Button from '../Button'
import ListItem from '../ListItem'
import { Link } from 'react-router-dom'


const Footer = () => {

  return (
    <ContainerFooter>
      <Navalha src="/image-navalha.png" alt="" />
      <ContentFooterContact  >
        <ContenLocation >
          <div>
            <Link to='/contacts'>
              <img src="/icone-localizacao.png" alt="" />
              <SecondCaption textSecondCaption='Localização' />
            </Link>
          </div>
          <Paragraph textParagraph='Av. Mutirão, 2782 - St. Bueno' />
          <Paragraph textParagraph='Goiânia-GO 74465-011' />
          <Paragraph textParagraph='(62) 98376-6284' />
          <Logo />
        </ContenLocation>
        <ContentEmail>
          <SecondCaption textSecondCaption='Nos envie seu E-mail' />
          <Paragraph textParagraph='Inscreva-se para receber todas as nossas novidades!' />
          <Form>
            <input type="text" placeholder='Digite seu E-mail' />
            <Button textButton="Enviar!" />
          </Form>
        </ContentEmail>
        <ListItem />

      </ContentFooterContact>
      <ContentCopyright>
        <Paragraph textParagraph='© Copyright | Developed By BRUNO MENDONÇA' />
      </ContentCopyright>
    </ContainerFooter>
  )
}

export default Footer