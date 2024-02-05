import axios from "axios"
import { ContainerHome, ContentHome, ContentHomeText } from "./HomeStyle"
import { useEffect, useState } from "react"
import ImageComponent from "../../components/ImageComponent"
import Title from "../../components/Title"
import Caption from "../../components/Caption"
import Paragraph from "../../components/Paragraph"
import Button from "../../components/Button"

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function Home() {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#content-home",
          start: "top bottom"
        }
      })

        .fromTo("#caption-home", {
          opacity: 0,
          y: 160
        }, {
          opacity: 1,
          y: 0,
          duration: 1.5
        })
        
    })
    return () => {
      gsap.killTweensOf("#content-home")
    }
  }, [])

  return (
    <ContainerHome>
      <ContentHome  id="content-home">
        <ContentHomeText id='caption-home' ref={el}>
          <Caption  textCaption="Bem-vindo à Navalha Pub"/>
          <Title  textTitle="Barbearia Exclusiva: Estilo e Elegância em Cada Corte." />
          <Paragraph  textParagraph="Descubra a arte da barbearia em um ambiente acolhedor, onde a qualidade é a nossa prioridade."/>
          <Button textButton= 'Agendar horário' />
        </ContentHomeText>
      </ContentHome>
    </ContainerHome>
  )
}