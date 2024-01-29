import { Link } from "react-router-dom";
import { ContainerHeader } from "./HeaderStyle"

export function Header() {
  return (
    <ContainerHeader>
      <nav>
        <h3>Barber Shop</h3>
        <ul>
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/team">Time</Link>
          <Link to="/pricing">Preços</Link>
          {/* <Link to="/gallery">Galeria</Link> */}
          <Link to="/testimonials" >Comentários</Link>
          <Link to="/contacts" >Contato</Link>
        </ul>
      </nav>
    </ContainerHeader>
  )
}