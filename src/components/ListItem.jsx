import { Link } from "react-router-dom"
import { ContentListItem } from "./ListItemStyle"

const ListItem = ({ onClick }) => {
  return (
    <ContentListItem>
      <Link onClick={onClick} to="/">Inicio</Link>
      <Link onClick={onClick} to="/about" >Sobre</Link>
      <Link onClick={onClick} to="/team" >Time</Link>
      <Link onClick={onClick} to="/pricing" >Preços</Link>
      <Link onClick={onClick} to="/contacts" >Contato</Link>
    </ContentListItem>
  )
}

export default ListItem