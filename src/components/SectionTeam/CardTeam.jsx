import Button from "../Button"

import {ContainerCardTeam,  ContentCardTeam} from "./CardTeamStyle"

export default function CardTeam({id, imageId, name, src, alt }) {
  


  return (
    <ContainerCardTeam id={id}>
      <ContentCardTeam>
        <img src={src} alt={alt} />
        <h3>{name}</h3>
      </ContentCardTeam>
    </ContainerCardTeam>
  )
}