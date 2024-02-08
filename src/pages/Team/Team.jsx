
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import CardTeamPage from './CardTeamPage'
import { ContainerTeam, BannerTeam, ContentTeam, ContentCardTeam } from './TeamStyle'

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Team() {
  const tl = useRef(null)
  const el = useRef(null)
  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#content-team-page",
          start: "top bottom"
        }
      })
        .fromTo("#card1", {
          opacity: 0,
          y: 200,
          x: -100
        }, {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1.3
        })
        .fromTo("#card2", {
          opacity: 0,
          y: 200,
          x: -100
        }, {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1.3,
          delay: .5
        })
        .fromTo("#card3", {
          opacity: 0,
          y: 200,
          x: -100
        }, {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          delay: .5
        })
        .fromTo("#card4", {
          opacity: 0,
          y: 200,
          x: -100
        }, {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          delay: .5
        })

    })
    return () => {
      gsap.killTweensOf("#content-team-page")
    }
  }, [])
  
  return (
    <ContainerTeam>
      <BannerTeam>
      </BannerTeam>
      <ContentTeam id='content-team-page'>
        <Title textTitle='Conheça nossa equipe' />
        <Paragraph textParagraph='Profissionais experientes, cada um com sua abordagem única. Na nossa equipe, cada barbeiro traz consigo uma bagagem rica e a habilidade de transformar seu visual de maneira especial.'/>
        <ContentCardTeam>
          <CardTeamPage id='card1' srcImg='/foto-barbeiro-perfil1.jpg' name='Lucas Teodoro' description='Com uma habilidade inigualável e um compromisso inabalável com a excelência, Lucas é um mestre na arte da barbearia. Com Lucas, você pode confiar na sua expertise para um serviço de qualidade superior.'/>

          <CardTeamPage id='card2' srcImg='/foto-barbeiro-perfil2.jpg' name='Matheus Carvalho' description='Matheus é conhecido pela sua dedicação ao profissionalismo e à satisfação do cliente. Com sua atenção aos detalhes e habilidades técnicas excepcionais, ele cria estilos que refletem a personalidade única de cada cliente.'/>

          <CardTeamPage id='card3' srcImg='/foto-barbeiro-perfil3.jpg' name='Pedro Henrique' description='Pedro combina sua paixão pela arte da barbearia com um profissionalismo exemplar. Seu compromisso com a precisão e a perfeição garante resultados impressionantes em cada serviço. '/>

          <CardTeamPage id='card4' srcImg='/foto-barbeiro-perfil4.jpg' name='Daniel Vieira' description='Daniel é reconhecido por sua ética de trabalho impecável e sua habilidade excepcional na cadeira de barbeiro. Com uma abordagem centrada no cliente e um compromisso inabalável com a qualidade, ele proporciona cortes de cabelo e barba que refletem o estilo e a personalidade de cada cliente.'/>
        </ContentCardTeam>
      </ContentTeam>
    </ContainerTeam>
  )
}