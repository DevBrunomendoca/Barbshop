import Caption from "../Caption"
import SecondCaption from "../SecondCaption"
import CardTeam from "./CardTeam"
import { ContainerTeam, ContainerCardTeam } from "./SectionTeamStyle"

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


export default function SectionTeam() {
  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#content-team",
          start: "200px bottom"
        }
      })
        .fromTo("#card-one", {
          opacity: 0,
          y: 100
        }, {
          opacity: 1,
          y: 0,
          duration: 1.3
        })
        .fromTo("#card-two", {
          opacity: 0,
          y: 100
        }, {
          opacity: 1,
          y: 0,
          duration: 1.3
        })
        .fromTo("#card-three", {
          opacity: 0,
          y: 100
        }, {
          opacity: 1,
          y: 0,
          duration: 1.3
        })
        .fromTo("#card-four", {
          opacity: 0,
          y: 100
        }, {
          opacity: 1,
          y: 0,
          duration: 1.3
        })

    })
    return () => {
      gsap.killTweensOf("#content-team")
    }
  }, [])
  return(
    <ContainerTeam id='content-team' ref={el}>
      <Caption id='caption-team' textCaption="Nosso time"/>
      <SecondCaption id='second-caption-team' textSecondCaption="Nossa equipe de profissionais" />
      <ContainerCardTeam>
        <CardTeam id='card-one' src='/foto-barbeiro-perfil1.jpg' name="Lucas Teodoro" alt='Foto de perfil Lucas Teodoro'/>
        <CardTeam id='card-two' src='/foto-barbeiro-perfil2.jpg'  name="Matheus Carvalho" alt='Foto de perfil Matheus Carvalho'/>
        <CardTeam id='card-three' src='/foto-barbeiro-perfil3.jpg'  name="Pedro Henrique" alt='Foto de perfil Pedro Henrique'/>
        <CardTeam id='card-four' src='/foto-barbeiro-perfil4.jpg'  name="Daniel Vieira" alt='Foto de perfil Daniel Vieira'/>
      </ContainerCardTeam>
    </ContainerTeam>
  )
}