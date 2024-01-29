import axios from "axios"
import { ContainerHome, ContentHome, ContentHomeText, ContentHomeImg } from "./HomeStyle"
import { useEffect, useState } from "react"
import ImageComponent from "../../components/ImageComponent"

export function Home() {

  const [images, setImages] = useState([])

  useEffect(() => {
    async function getImages() {
      try {
        const response = await axios.get('http://localhost:4000/pictures/')
        const data = response.data
        console.log(data)
        setImages(data)
      } catch (error) {
        console.log("Erro ao obter imagens:", error)
      }
    }

    getImages()
  }, [])

  return (
    <ContainerHome>
      <ContentHome>
        <ContentHomeText>
          <h3>Bem-vindo à Navalha Pub</h3>
          <h1>Barbearia Exclusiva: Estilo e Elegância em Cada Corte.</h1>
          <p>Oferecemos cortes de alta performance para homens que buscam excelência em sua aparência. Com profissionais habilidosos e experientes, garantimos resultados que superam expectativas. Descubra a arte da barbearia em um ambiente acolhedor, onde a qualidade é a nossa prioridade.</p>
        </ContentHomeText>
        <ContentHomeImg>
        <ImageComponent imageId="1"/>
        <ImageComponent imageId="3"/>
        </ContentHomeImg>
      </ContentHome>
    </ContainerHome>
  )
}