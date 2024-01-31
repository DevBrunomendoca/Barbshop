import axios from "axios"
import { ContainerHome, ContentHome, ContentHomeText, ContentHomeImg } from "./HomeStyle"
import { useEffect, useState } from "react"
import ImageComponent from "../../components/ImageComponent"
import Title from "../../components/Title"
import Caption from "../../components/Caption"
import Paragraph from "../../components/Paragraph"
import Button from "../../components/Button"

export function Home() {

  return (
    <ContainerHome>
      <ContentHome>
        <ContentHomeText>
          <Caption textCaption="Bem-vindo à Navalha Pub"/>
          <Title textTitle="Barbearia Exclusiva: Estilo e Elegância em Cada Corte." />
          <Paragraph textParagraph="Oferecemos cortes de alta performance para homens que buscam excelência em sua aparência. Com profissionais habilidosos e experientes, garantimos resultados que superam expectativas. Descubra a arte da barbearia em um ambiente acolhedor, onde a qualidade é a nossa prioridade."/>
          <Button textButton= 'Agendar horário' />
        </ContentHomeText>
        <ContentHomeImg>
        <ImageComponent imageId="1"/>
        <ImageComponent imageId="3"/>
        </ContentHomeImg>
      </ContentHome>
    </ContainerHome>
  )
}