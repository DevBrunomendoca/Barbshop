import { Link, Outlet, useLocation } from 'react-router-dom'
import Title from '../../components/Title'
import { ContainerServices, ContentServices, ContentScheduling, ContentTable, NavigationTable, ServicesOptions, ContentBannerServices, BorderBottom } from './ServicesStyle'
import { useEffect } from 'react'

const Services = () => {
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
      <ContentServices>
        <Title textTitle='Conheça nossos serviços' />
        <ContentTable>
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