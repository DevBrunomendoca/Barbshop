import Button from "../Button";
import ImageComponent from "../ImageComponent";
import Paragraph from "../Paragraph";
import SecondCaption from "../SecondCaption";
import { ContainerAbout, ContentText, ContentImg, ContentCardAbout } from "./SectionAboutStyle"

export default function SectionAbout() {
  return (
    <ContainerAbout>
      <ContentText>
        <SecondCaption textSecondCaption="Há mais de uma Década de Excelência" />
        <Paragraph textParagraph="
Há uma década, a Barbearia Navalha Pub surgiu como uma visão concreta de elegância e maestria no mundo dos cortes masculinos. " />
      <Paragraph textParagraph="Inspirados pela tradição e determinados a criar um espaço onde os clientes pudessem experimentar mais do que um simples corte de cabelo."/>
      <Button textButton="Saiba mais"/>
      </ContentText>

      <ContentImg>
        <img src="imagem-sobre2.jpg" alt="" />
        
        {/*<img src="imagem-cortes4.jpg" alt="" />
         <ImageComponent imageId="4"/> */}
        <ContentCardAbout>
          <Paragraph textParagraph="Bruno Mendonça"/>
          <Paragraph textParagraph="Proprietário e fundador da Barbearia Navalha Pub desde 2014."/>
        </ContentCardAbout>
      </ContentImg>
    </ContainerAbout>
  )
}