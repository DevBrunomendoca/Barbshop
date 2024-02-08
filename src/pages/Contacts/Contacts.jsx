import Button from "../../components/Button";
import Caption from "../../components/Caption";
import Title from "../../components/Title";
import { ContainerContactsPage, ContainerForm, ContentBannerContacts, ContentContact, ContentLocation, ContentText } from "./Contactsstyle";

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Contact() {
  const tl = useRef(null)
    const el = useRef(null)
    useLayoutEffect(() => {

      gsap.registerPlugin(ScrollTrigger)
      gsap.context(() => {
        tl.current = gsap.timeline({
          scrollTrigger: {
            trigger: "#content-contact-page",
            start: "top bottom"
          }
        })
          .fromTo("#content-text-page", {
            opacity: 0,
            y: 100
          }, {
            opacity: 1,
            y: 0,
            duration: 1.3
          })
          .fromTo("#content-form", {
            opacity: 0,
            y: 200
          }, {
            opacity: 1,
            y: 0,
            duration: 1.3
          })
      })
      return () => {
        gsap.killTweensOf("#content-contact-page")
      }
    }, [])

  const handleSubmit = (ev) => {
    ev.preventDefault()
  }
  return (
    <ContainerContactsPage>
      <ContentBannerContacts>
      </ContentBannerContacts>
      <ContentContact ref={el} id="content-contact-page">
        <ContentText id="content-text-page">

          <Title textTitle='ENTRE EM CONTATO' />
          <Caption textCaption='NOS FAÇA UMA OFERTA QUE NÃO POSSAMOS RECUSAR...' />
        </ContentText>
        <ContainerForm id="content-form">
          <form action="" onSubmit={(ev) => handleSubmit(ev)}>
            <Caption textCaption='Preencha o formulário' />

            <input type="text" name="name" placeholder="Nome" />
            <input type="number" name="name" placeholder="Telefone" />
            <input type="email" name="name" placeholder="E-mail" />
            <textarea name="Mensagem" id="" cols="30" rows="10" placeholder="Escreva sua menssagem..."></textarea>
            <Button textButton='Enviar' />
          </form >
        </ContainerForm>
      </ContentContact>
      <ContentLocation>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1911.499898370936!2d-49.341536261113255!3d-16.626779375969548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef539fa42fd5b%3A0xbce122078cc3b7c1!2sR.%20Vb%20Cinco%20-%20Jardim%20Vista%20Bela%2C%20Goi%C3%A2nia%20-%20GO%2C%2074474-204!5e0!3m2!1spt-BR!2sbr!4v1707420631326!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </ContentLocation>
    </ContainerContactsPage>
  )
}