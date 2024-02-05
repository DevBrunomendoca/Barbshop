import { ContainerContact, ContentContact, ContentContactOne, ContentContactTwo, ContentSchedules } from './SectionContactStyle'

import SecondCaption from '../SecondCaption'
import Paragraph from '../Paragraph'
import Time from './Time'
import Button from '../Button'

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



const SectionContact = () => {
  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#content-contact",
          start: "top bottom"
        }
      })

        .fromTo("#contact-one", {
          opacity: 0,
          y: 80
        }, {
          opacity: 1,
          y: 0,
          duration: 1.2
        })
        .fromTo("#contact-two", {
          opacity: 0,
          y: 80
        }, {
          opacity: 1,
          y: 0,
          duration: 1.2
        })

    })
    return () => {
      gsap.killTweensOf("#content-contact")
    }
  }, [])
  return (
    <ContainerContact>
      <ContentContact ref={el} id='content-contact'>
        <ContentContactOne id='contact-one'>
          <SecondCaption textSecondCaption='EQUIPE DE PROFISSIONAIS ESTÁ ESPERANDO POR VOCÊ' />
          <Paragraph textParagraph='Risus odio lobortis ullamcorper felis vitae bibendum mi. Penatibus fusce consequat donec vitae porttitor elementum volutpat gravida. Tellus hac tristique nisi, id amet cras tempor, amet.' />
          <Button textButton='Agendar horário' />
        </ContentContactOne>
        <ContentContactTwo id='contact-two'>
          <SecondCaption textSecondCaption='HORÁRIO ESPECIAL DE FUNCIONAMENTO' />
          <ContentSchedules>
            <Time textSchedules='9h00 – 19h30' textSpan='SEGUNDA-FEIRA:' />
            <Time textSchedules='9h00 – 19h30' textSpan='TERÇA-FEIRA:' />
            <Time textSchedules='9h00 – 19h30' textSpan='QUARTA-FEIRA:' />
            <Time textSchedules='9h00 – 19h30' textSpan='QUINTA-FEIRA:' />
            <Time textSchedules='9h00 – 19h30' textSpan='SEXTA-FEIRA:' />
            <Time textSchedules='9h00 – 19h30' textSpan='SÁBADO:' />
            <Time textSchedules='FECHADO' textSpan='DOMINGO:' />
          </ContentSchedules>
        </ContentContactTwo>
      </ContentContact>
    </ContainerContact>
  )
}
export default SectionContact