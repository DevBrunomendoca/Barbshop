import Button from "../Button";
import ImageComponent from "../ImageComponent";
import Paragraph from "../Paragraph";
import SecondCaption from "../SecondCaption";
import { ContainerAbout, ContentText, ContentImg, ContentCardAbout } from "./SectionAboutStyle"

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SectionAbout() {
  
  const tl = useRef(null)
    const el = useRef(null)
  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#content-about",
          start: "-650px"
        }
      })

        .fromTo("#content-text-about", {
          opacity: 0,
          x: -100
        }, {
          opacity: 1,
          x: 0,
          duration: 1.5
        })
        .fromTo("#content-img", {
          opacity: 0,
          y: 120
        }, {
          opacity: 1,
          y: 0,
          duration: 1.3
        })

    })
    return () => {
      gsap.killTweensOf("#content-about")
    }
  }, [])
  return (
    <ContainerAbout id="content-about" ref={el}>
      <ContentText id='content-text-about'>
        <SecondCaption  textSecondCaption="Há mais de uma Década de Excelência" />
        <Paragraph  textParagraph="
Há uma década, a Barbearia Navalha Pub surgiu como uma visão concreta de elegância e maestria no mundo dos cortes masculinos. " />
        <Paragraph  textParagraph="Inspirados pela tradição e determinados a criar um espaço onde os clientes pudessem experimentar mais do que um simples corte de cabelo." />
        <Button  textButton="Saiba mais" />
      </ContentText>

      <ContentImg id='content-img'>
        <img src="imagem-sobre2.jpg" alt="" />

        {/*<img src="imagem-cortes4.jpg" alt="" />
         <ImageComponent imageId="4"/> */}
        <ContentCardAbout >
          <Paragraph textParagraph="Bruno Mendonça" />
          <Paragraph textParagraph="Proprietário e fundador da Barbearia Navalha Pub desde 2014." />
        </ContentCardAbout>
      </ContentImg>
    </ContainerAbout>
  )
}