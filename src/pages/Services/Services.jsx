import { Link, Outlet, useLocation } from 'react-router-dom'
import Title from '../../components/Title'
import { ContainerServices, ContentServices, ContentScheduling, ContentTable, NavigationTable, ServicesOptions, ContentBannerServices,  ContainerScheduling } from './ServicesStyle'
import { useEffect, useState } from 'react'

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Header } from '../../components/Header/Header'
import UserContext from '../contexts/UseContext'
import Caption from '../../components/Caption'
import { ParagraphStyled } from '../../components/ParagraphStyle'
import { CaptionStyled } from '../../components/CaptionStyle'

const Services = () => {
  const [titleServices, setTitleServices] = useState(null)
  const [descriptionService, setDescriptionService] = useState(null)
  const [priceService, setPriceService] = useState(null)

  const tl = useRef(null)
  const el = useRef(null)
  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#container-services",
          start: "top bottom"
        }
      })
        .fromTo("#content-table", {
          opacity: 0,
          y: 200
        }, {
          opacity: 1,
          y: 0,
          duration: 1.3
        })
    })
    return () => {
      gsap.killTweensOf("#container-services")
    }
  }, [])

  const { pathname } = useLocation()

  const onTop = () => {
    pathname !== 
      "/services" || 
      "/services/hair" || 
      "/services/bear" || 
      "/services/finishes"
    ? window.scrollTo(400, 400)
    : window.scrollTo(400, 400)
  }
  useEffect(() => {
    onTop()
  }, [pathname]);

  return ( 
    <UserContext.Provider value={{setTitleServices, setDescriptionService, setPriceService}}>
    <ContainerServices >
      <ContentBannerServices>
      </ContentBannerServices>
      <ContentServices id='container-services' ref={el}>
        <Title textTitle='Conheça nossos serviços' />
        <ContentTable id='content-table'>
          <NavigationTable>
            <ul>
              
                <Link to="/services"
                  className={`${pathname === "/services" ? "active-border" : ""}`}>Combos
                </Link>

                <Link to="/services/hair"
                  className={`${pathname === "/services/hair" ? "active-border" : ""}`}>Cabelo
                </Link>

                <Link to="/services/bear"
                  className={`${pathname === "/services/bear" ? "active-border" : ""}`}>Barba
                </Link>

                <Link to="/services/finishes" 
                  className={`${pathname === "/services/finishes" ? "active-border" : ""}`}>Acabamentos
                </Link>  
            </ul>
          </NavigationTable>
          <ServicesOptions >
            <Outlet />
          </ServicesOptions>
        </ContentTable>
      </ContentServices>
      <ContentScheduling>
        <ContainerScheduling>
          <CaptionStyled>{titleServices}</CaptionStyled>
          <ParagraphStyled>{descriptionService}</ParagraphStyled>
        </ContainerScheduling>
      </ContentScheduling>
    </ContainerServices>
    </UserContext.Provider>
  )
}

export default Services