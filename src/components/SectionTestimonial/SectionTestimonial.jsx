import { useEffect, useState } from "react"
import { ContainerTestimonial, ContentTextTestimonial, ContentCardTestimonial, CardTestimonialStyled } from "./SectionTestimonialStyle"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import Caption from "../Caption";
import SecondCaption from "../SecondCaption"
import Paragraph from '../Paragraph'
//import { CardTestimonialStyled } from "./CardTestimonialStyle";

export default function SectionTestimonial() {
  /*const [sliderPreview, setSliderPreview] = useState(3)

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 950
        ? setSliderPreview(1)
        : window.innerWidth <= 1250
          ? setSliderPreview(2)
          : setSliderPreview(3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])*/
  const data = [
    { id: '1', avatar: '/foto-perfil-cliente1.jpg', name: 'Andre Luiz', comment: "Excelente experiência na barbearia! Atendimento impecável, ambiente agradável e corte perfeito. Recomendo a todos!" },
    { id: '2', avatar: '/foto-perfil-cliente2.jpg', name: 'Michelle Araujo', comment: "Profissionais incríveis, ambiente descontraído. Meu corte ficou exatamente como eu queria. Voltarei com certeza!" },
    { id: '3', avatar: '/foto-perfil-cliente3.jpg', name: 'Anna Beatriz', comment: "Serviço de alta qualidade! Equipe atenciosa, ambiente moderno. Minha barba nunca esteve tão bem cuidada. Cliente fiel!" },
    { id: '4', avatar: '/foto-perfil-cliente4.jpg', name: 'Wesley Silva ', comment: "Barbearia top! Corte estiloso, atendimento nota 10. Apreciei a atenção aos detalhes. Recomendo a amigos e familiares!Barbearia top! Corte estiloso, atendimento nota 10. Apreciei a atenção aos detalhes. Recomendo a amigos e familiares!" }
  ]

  return (
    <ContainerTestimonial>
      <ContentTextTestimonial>
        <Caption textCaption='Depoimentos'/>
        <SecondCaption textSecondCaption='O que nossos clientes dizem'/>
        <Paragraph textParagraph='Confira alguns depoimentos reais que refletem a satisfação e a felicidade de nossos clientes!'/>
      </ContentTextTestimonial>
      <ContentCardTestimonial>
        <Swiper
          slidesPerView={2}
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