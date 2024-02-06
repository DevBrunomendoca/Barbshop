import Logo from '../Logo'
import Paragraph from '../Paragraph'
import SecondCaption from '../SecondCaption'
import { ContainerFooter, ContentFooterContact, ContenLocation,  ContentEmail, Form, Navalha,ContentCopyright } from './FooterStyle'
import Button from '../Button'
import ListItem from '../ListItem'

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Footer = () => {
  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#content-footer",
          start: "top bottom"
        }
      })

        .fromTo("#content-location", {
          opacity: 0,
          y: 80
        }, {
          opacity: 1,
          y: 0,
          duration: 1.2
        })
        .fromTo("#content-email", {
          opacity: 0,
          y: 80
        }, {
          opacity: 1,
          y: 0,
          duration: 1.2
        })
        .fromTo("#content-list-itens", {
          opacity: 0,
          y: 80
        }, {
          opacity: 1,
          y: 0,
          duration: 1.2
        })

    })
    return () => {
      gsap.killTweensOf("#content-footer")
    }
  }, [])
  return (
    <ContainerFooter>
        <Navalha src="/image-navalha.png" alt="" />
      <ContentFooterContact ref={el} id='content-footer'>
        <ContenLocation id='content-location'>
          <div>
            <img src="/icone-localizacao.png" alt="" />
            <SecondCaption textSecondCaption='Localização' />
          </div>
          <Paragraph textParagraph='Av. São José' />
          <Paragraph textParagraph='Goiânia-GO 74465-011' />
          <Paragraph textParagraph='(62) 98376-6284' />
          <Logo />
        </ContenLocation>
        <ContentEmail id='content-email'>
          <SecondCaption textSecondCaption='Nos envie seu E-mail' />
          <Paragraph textParagraph='Inscreva-se para receber todas as nossas novidades!' />
          <Form>
            <input type="text" placeholder='Digite seu E-mail'/>
            <Button textButton="Enviar!"/>
          </Form>
        </ContentEmail>
        <ListItem id='content-list-itens'/>

      </ContentFooterContact>
      <ContentCopyright>
        <Paragraph textParagraph='© Copyright | Developed By BRUNO MENDONÇA' />
      </ContentCopyright>
    </ContainerFooter>
  )
}

export default Footer