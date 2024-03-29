import { Link, useLocation } from "react-router-dom";
import { ContainerHeader,ContentListItemHeader, Navigation } from "./HeaderStyle"
import Logo from "../Logo";
import { useEffect, useState } from "react";
import IconSideBar from "./IconSideBar";
import SideBar from "./SideBar";
import GoToTop from "../GoToTop";


export function Header() {
  const { pathname } = useLocation()

  const [sideBar, setSideBar] = useState(false)

  const [onScrollY, setOnScrollY] = useState(false)
  const toggleSideBar = () =>  setSideBar(!sideBar)

  useEffect(() => {
    function positionScrollY() {
      window.scrollY > 100
    ? setOnScrollY(true)
    :  setOnScrollY(false)
    }
    window.addEventListener('scroll', positionScrollY)
    return () => {
      window.removeEventListener('scroll', positionScrollY)
    }
  }, [])

  return (
    <ContainerHeader sideBar={sideBar} onScrollY={onScrollY} className= {` ${sideBar ? '' : "close"}`}>
      <Navigation>
        <Logo />
        <ContentListItemHeader>
          <Link to="/"
            className={` ${pathname === "/" ? "active" : ""}`}>Inicio</Link>
          <Link to="/about"
            className={` ${pathname === "/about" ? "active" : ""}`} >Sobre</Link>
          <Link to="/team"
            className={` ${pathname === "/team" ? "active" : ""}`} >Equipe</Link>
          <Link to="/services"
            className={` ${pathname ===  
              "/services" 
              
              ? "active" 
              : ""}`
            } 
          >Serviços</Link>
          <Link to="/contacts"
            className={` ${pathname === "/contacts" ? "active" : ""}`} >Contato</Link>
        </ContentListItemHeader>
        <IconSideBar sideBar={sideBar} onclick={() => toggleSideBar()}/>
      </Navigation>
      {SideBar && <SideBar sideBar={sideBar} setSideBar={setSideBar}/>}
      <GoToTop />
    </ContainerHeader>
  )
}