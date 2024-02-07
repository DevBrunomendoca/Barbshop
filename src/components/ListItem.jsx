import { Link } from "react-router-dom"
import { ContentListItem } from "./ListItemStyle"

const ListItem = ({ onClick, id }) => {
  return (
    <ContentListItem  id={id}>
      <Link onClick={onClick} to="/">Inicio</Link>
      <Link onClick={onClick} to="/about" >Sobre</Link>
      <Link onClick={onClick} to="/team" >Equipe</Link>
      <Link onClick={onClick} to="/services" >Serviços</Link>
      <Link onClick={onClick} to="/contacts" >Contato</Link>
    </ContentListItem>
  )
}

export default ListItem