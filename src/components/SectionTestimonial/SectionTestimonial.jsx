import { useEffect, useState } from "react"
import { ContainerTestimonial, ContentTextTestimonial, ContentCardTestimonial, CardTestimonialStyled } from "./SectionTestimonialStyle"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import Caption from "../Caption";
import SecondCaption from "../SecondCaption"
import Paragraph from '../Paragraph'

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



export default function SectionTestimonial() {
  const [sliderPreview, setSliderPreview] = useState(2)

  useEffect(() => {
    function handleResize() {
      window.innerWidth <= 735
      ? setSliderPreview(1)
      : window.innerWidth <= 900
        ? setSliderPreview(2)
        : window.innerWidth <= 1050
        ? setSliderPreview(1)
        : setSliderPreview(2)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#content-testimonial",
          start: "-650px"
        }
      })

        .fromTo("#content-text-testmonial", {
          opacity: 0,
          y: -140
        }, {
          opacity: 1,
          y: 0,
          duration: 1.5
        })
        .fromTo("#content-card-testmonial", {
          opacity: 0,
          y: 80
        }, {
          opacity: 1,
          y: 0,
          duration: 1.5
        })

    })
    return () => {
      gsap.killTweensOf("#content-testimonial")
    }
  }, [])
  const data = [
    { id: '1', avatar: '/foto-perfil-cliente1.jpg', name: 'Andre Luiz', comment: "Excelente experiência na barbearia! Atendimento impecável, ambiente agradável e corte perfeito. Recomendo a todos!" },
    { id: '2', avatar: '/foto-perfil-cliente2.jpg', name: 'Lucas Araujo', comment: "Profissionais incríveis, ambiente descontraído. Meu corte ficou exatamente como eu queria. Voltarei com certeza!" },
    { id: '3', avatar: '/foto-perfil-cliente3.jpg', name: 'Marcos Paulo', comment: "Serviço de alta qualidade! Equipe atenciosa, ambiente moderno. Minha barba nunca esteve tão bem cuidada. Cliente fiel!" },
    { id: '4', avatar: '/foto-perfil-cliente4.jpg', name: 'Wesley Silva ', comment: "Barbearia top! Corte estiloso, atendimento nota 10. Apreciei a atenção aos detalhes. Recomendo a amigos e familiares!Barbearia top! Corte estiloso, atendimento nota 10. Apreciei a atenção aos detalhes. Recomendo a amigos e familiares!" }
  ]

  return (
    <ContainerTestimonial ref={el} id="content-testimonial">
      <ContentTextTestimonial id="content-text-testmonial">
        <Caption textCaption='Depoimentos'/>
        <SecondCaption textSecondCaption='O que nossos clientes dizem'/>
        <Paragraph textParagraph='Confira alguns depoimentos reais que refletem a satisfação e a felicidade de nossos clientes!'/>
      </ContentTextTestimonial>
      <ContentCardTestimonial id="content-card-testmonial">
        <Swiper
          slidesPerView={sliderPreview}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CardTestimonialStyled>
                <div>
                  <img src={item.avatar} alt="" />
                  <Paragraph textParagraph={item.comment} />
                  <Caption textCaption={item.name} />
                </div>
              </CardTestimonialStyled>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContentCardTestimonial>
    </ContainerTestimonial>
  )
}