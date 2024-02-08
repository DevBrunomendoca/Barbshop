import { Link, Outlet, useLocation } from 'react-router-dom'
import Title from '../../components/Title'
import { ContainerServices, ContentServices, ContentScheduling, ContentTable, NavigationTable, ServicesOptions, ContentBannerServices, BorderBottom } from './ServicesStyle'
import { useEffect } from 'react'

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Services = () => {
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
    pathname !== "/services" || "/services/hair" || "/services/bear" || "/services/finishes"
    ? window.scrollTo(400, 400)
    : window.scrollTo(400, 400)
  }
  useEffect(() => {
    onTop()
  }, [pathname]);

  return (
    <ContainerServices>
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

                {/* <Link to='/services/'>Combos</Link>
                <Link to='/services/hair'>Cabelo</Link> 
                
                <Link to='/services/finishes'>Acabamentos</Link> */}
            
            </ul>
          </NavigationTable>
          <ServicesOptions>
            <Outlet />
          </ServicesOptions>
        </ContentTable>
      </ContentServices>


      <ContentScheduling></ContentScheduling>
    </ContainerServices>
  )
}

export default Services