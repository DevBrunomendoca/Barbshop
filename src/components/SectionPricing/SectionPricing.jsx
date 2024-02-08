import Button from "../Button";
import Paragraph from "../Paragraph";
import SecondCaption from "../SecondCaption";
import { ContainerPricing, ContentText, ContentTable, CardTable } from "./SectionPricingStyle";


import { useRef, useLayoutEffect } from 'react' 
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from "react-router-dom";
export default function Pricing() {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#content-princing",
          start: "180px bottom"
        }
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
        <Link to='/services'> <Button textButton="Conferir mais" /></Link>
      </ContentText>
      <ContentTable id="content-table-one">
        <CardTable>
          <tr><th>Serviço</th><th>Preço (R$)</th></tr>
          <tr><td>CORTE CABELO</td><td>R$ 60</td></tr>
          <tr><td>CORTE CABELO + BARBA</td><td>R$ 90</td></tr>
          <tr><td>BARBA EXECUTIVA</td><td>R$ 30</td></tr>
          <tr><td>CORTE INFANTIL (até 12 anos)</td><td>R$ 25</td></tr>
        </CardTable>
        <CardTable id="content-table-two">
          <tr><th>Serviço</th><th>Preço (R$)</th></tr>
          <tr><td>DEFINITIVA</td><td>R$ 90</td></tr>
          <tr><td>HIDRATAÇÃO CAPILAR</td><td>R$ 40</td></tr>
          <tr><td>CORTE + LUZES</td><td>R$  120</td></tr>
          <tr><td>SOBRANCELHA NA NAVALHA</td><td>R$ 20</td></tr>
        </CardTable>
      </ContentTable>
    </ContainerPricing>
  )
}