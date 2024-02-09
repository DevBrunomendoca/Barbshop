import Paragraph from '../../components/Paragraph'
import SecondCaption from '../../components/SecondCaption'
import Title from '../../components/Title'
import { ContainerAboutPage, ContentBanner, ContentAbout, ContentAboutText, ContentAboutUnit, UnitText, UnitBanner } from './AboutStyle'

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

export function About() {
  const tl = useRef(null)
  const el = useRef(null)
  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#content-unit",
          start: "top bottom"
        }
      })
        .fromTo("#content-text", {
          opacity: 0,
          y: 100
        }, {
          opacity: 1,
          y: 0,
          duration: 1.3
        })
        .fromTo("#content-banner", {
          opacity: 0,
          y: 200
        }, {
          opacity: 1,
          y: 0,
          duration: 1.3
        })
        .fromTo("#content-card", {
          opacity: 0,
          y: 200
        }, {
          opacity: 1,
          y: 0,
          duration: 1.3
        })

    })
    return () => {
      gsap.killTweensOf("#content-unit")
    }
  }, [])
  return (
    <ContainerAboutPage>
      <ContentBanner></ContentBanner>

      <ContentAbout id='content-unit' ref={el}>
        <ContentAboutText id='content-text'>
          <Title textTitle='Sobre Nós' />
          <Paragraph textParagraph='No dia 10 de Novembro de 2015, inaugurou a primeira unidade no Setor Marista em Goiânia.' />
          <Paragraph textParagraph='Inspirados pela tradição e determinados a criar um espaço onde os clientes pudessem experimentar mais do que um simples corte de cabelo, estabelecemos nossa barbearia como um refúgio de estilo e autenticidade. Ao longo dos anos, cultivamos uma reputação sólida, baseada na habilidade técnica, atenção aos detalhes e atendimento ao cliente personalizado.' />
          <Paragraph textParagraph=' A Barbearia Navalha Pub é mais do que um estabelecimento; é um lar para a tradição, o estilo e a conexão genuína com nossos clientes.' />
          <Paragraph textParagraph='Cada corte de cabelo é uma expressão única de habilidade artística, refletindo não apenas a dedicação de nossos barbeiros, mas também a história rica que nos trouxe até aqui. Convidamos você a fazer parte desta jornada, onde a excelência é uma tradição, e cada cliente é uma parte vital da nossa história de sucesso.' />
        </ContentAboutText>
        <SecondCaption textSecondCaption='Conheça a nossa unidade' />
        <ContentAboutUnit >
          <UnitBanner id='content-banner'>
            <img src="/banner-principal.jpg" alt="" />
          </UnitBanner>
          <UnitText id='content-card'>
            <SecondCaption textSecondCaption='Jardim das Hortensias' />
            <Paragraph textParagraph='Localizada em um dos bairros mais tradicionais de Goiânia' />
            <Paragraph textParagraph='Convidamos você a fazer parte desta jornada, onde a excelência é uma tradição, e cada cliente é uma parte vital da nossa história de sucesso.' />
            <Paragraph textParagraph='Av. Contorno - Jardim das Hortensias'/>
            <a href="#">AGENDAMENTO WHATSAPP </a>
            <Link to='/contacts'>NOSSA LOCALIZAÇÃO</Link>
          </UnitText>
        </ContentAboutUnit>
      </ContentAbout>
    </ContainerAboutPage>
  )
}