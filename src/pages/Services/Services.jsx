import { Link, Outlet, useLocation } from 'react-router-dom'
import Title from '../../components/Title'
import { ContainerServices, ContentServices, ContentScheduling, ContentTable, NavigationTable, ServicesOptions, ContentBannerServices, BorderBottom } from './ServicesStyle'

const Services = () => {
  const { pathname } = useLocation()

  return (
    <ContainerServices>
      <ContentBannerServices>
      </ContentBannerServices>
      <ContentServices>
        <Title textTitle='Conheça nossos serviços' />
        <ContentTable>
          <NavigationTable>
            <ul>
              
                <Link to="/services/"
                  className={`${pathname === "/services/" ? "active-combo" : ""}`}>Combos
                </Link>

                <Link to="/services/hair"
                  className={`${pathname === "/services/hair" ? "active-combo" : ""}`}>Cabelo
                </Link>

                <Link to="/services/bear"
                  className={`${pathname === "/services/bear" ? "active-combo" : ""}`}>Barba
                </Link>

                <Link to="/services/finishes"
                  className={`${pathname === "/services/finishes" ? "active-combo" : ""}`}>Acabamentos
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