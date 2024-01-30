import { Link, useLocation } from "react-router-dom";
import { ContainerHeader } from "./HeaderStyle"

export function Header() {
  const { pathname } = useLocation()

  return (
    <ContainerHeader>
      <nav>
        <h3>Navalha Pub</h3>
        <ul>
          <Link to="/"
            className={`tab ${pathname === "/" ? "active" : ""}`}>Inicio</Link>
          <Link to="/about"
            className={`tab ${pathname === "/about" ? "active" : ""}`} >Sobre</Link>
          <Link to="/team"
            className={`tab ${pathname === "/team" ? "active" : ""}`} >Time</Link>
          <Link to="/pricing"
            className={`tab ${pathname === "/pricing" ? "active" : ""}`} >Preços</Link>
          {/* <Link to="/gallery">Galeria</Link> */}
          <Link to="/testimonials"
            className={`tab ${pathname === "/testimonials" ? "active" : ""}`} >Comentários</Link>
          <Link to="/contacts"
            className={`tab ${pathname === "/contacts" ? "active" : ""}`} >Contato</Link>
        </ul>
      </nav>
    </ContainerHeader>
  )
}