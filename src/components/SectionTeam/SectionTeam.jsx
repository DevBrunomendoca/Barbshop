import Caption from "../Caption"
import SecondCaption from "../SecondCaption"
import CardTeam from "./CardTeam"
import { ContainerTeam, ContainerCardTeam } from "./SectionTeamStyle"


export default function SectionTeam() {
  return(
    <ContainerTeam>
      <Caption textCaption="Nosso time"/>
      <SecondCaption textSecondCaption="Nossa equipe de profissionais" />
      <ContainerCardTeam>
        <CardTeam src='/foto-barbeiro-perfil1.jpg' name="Bruno Mendonça"/>
        <CardTeam src='/foto-barbeiro-perfil2.jpg'  name="Matheus Carvalho"/>
        <CardTeam src='/foto-barbeiro-perfil3.jpg'  name="Pedro Henrique"/>
        <CardTeam src='/foto-barbeiro-perfil4.jpg'  name="Lucas Teodoro"/>
      </ContainerCardTeam>
    </ContainerTeam>
  )
}