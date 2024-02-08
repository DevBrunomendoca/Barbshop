import { Link } from "react-router-dom"
import { ContentLogo } from "./LogoStyle"

const Logo = () => {
  return (
    <ContentLogo>
      <Link  to='/'>
        <img src="/navalha2.png" alt="Logo da barbearia" style={{ width: "35px" }} />
        <h3>Navalha Pub</h3>
      </Link>
    </ContentLogo>
  )
}

export default Logo