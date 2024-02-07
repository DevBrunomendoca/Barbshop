import Button from "../Button"

import {ContainerCardTeam,  ContentCardTeam, SocialMedias, ContentButton } from "./CardTeamStyle"

export default function CardTeam({id, imageId, name, src }) {
  


  return (
    <ContainerCardTeam id={id}>
      <ContentCardTeam>
        <img src={src} alt="" />
        {/* <ImageComponent imageId={imageId} /> */}
        <h3>{name}</h3>
      </ContentCardTeam>
      {/* <ContentButton>
        <Button textButton='Agendar um horário' />
      </ContentButton> */}
    </ContainerCardTeam>
  )
}