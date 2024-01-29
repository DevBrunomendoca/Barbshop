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
        <CardTeam imageId="5" name="Bruno Mendonça"/>
        <CardTeam imageId="6" name="Matheus Carvalho"/>
        <CardTeam imageId="7" name="Pedro Henrique"/>
        <CardTeam imageId="8" name="Lucas Teodoro"/>
      </ContainerCardTeam>
    </ContainerTeam>
  )
}