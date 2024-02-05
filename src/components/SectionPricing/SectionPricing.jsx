import Button from "../Button";
import Paragraph from "../Paragraph";
import SecondCaption from "../SecondCaption";
import { ContainerPricing, ContentText, ContentTable, CardTable } from "./SectionPricingStyle";


import { useRef, useLayoutEffect } from 'react' 
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
export default function Pricing() {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#content-princing",
          start: "-600px"
        }
      })
        .fromTo("#content-text", {
          opacity: 0,
          y: -100
        }, {
          opacity: 1,
          y: 0,
          duration: 1.8
        })
        .fromTo("#content-table-one", {
          opacity: 0,
          x: -140
        }, {
          opacity: 1,
          x: 0,
          duration: 1.5
        })
        .fromTo("#content-table-two", {
          opacity: 0,
          x: -140
        }, {
          opacity: 1,
          x: 0,
          duration: 1.5
        })

    })
    return () => {
      gsap.killTweensOf("#content-princing")
    }
  }, [])

  return (
    <ContainerPricing id="content-princing" ref={el}>
      <ContentText id="content-text">
        <SecondCaption textSecondCaption="Nossa tabela de serviços" />
        <Paragraph textParagraph="Explore a excelência em cuidados masculinos com nossos serviços especializados. Na Barbearia Navalha Pub, garantimos cortes de cabelo modernos e tradicionais para atender ao seu estilo único. Confira todos os nossos preços abaixo:" />
        <Button textButton="Conferir mais" />
      </ContentText>
      <ContentTable id="content-table-one">
        <CardTable>
          <tr><th>Serviço</th><th>Preço (R$)</th></tr>
          <tr><td>Corte Tradicional</td><td>R$ 30</td></tr>
          <tr><td>Corte + Barba</td><td>R$ 60</td></tr>
          <tr><td>Barba</td><td>R$ 20</td></tr>
          <tr><td>Corte Infantil (até 12 anos)</td><td>R$ 25</td></tr>
        </CardTable>
        <CardTable id="content-table-two">
          <tr><th>Serviço</th><th>Preço (R$)</th></tr>
          <tr><td>Coloração de Barba</td><td>R$ 20</td></tr>
          <tr><td>Hidratação Capilar</td><td>R$ 40</td></tr>
          <tr><td>Coloração de Cabelo</td><td>R$  60</td></tr>
          <tr><td>Design de Sobrancelhas</td><td>R$ 20</td></tr>
        </CardTable>
      </ContentTable>
    </ContainerPricing>
  )
}