import Button from "../Button"
import ImageComponent from "../ImageComponent"
import SocialMedia from "../SocialMedia"
import { ContainerCardTeam, ContentCardTeam, SocialMedias, ContentButton } from "./CardTeamStyle"

export default function CardTeam({ imageId, name, src }) {
  return (
    <ContainerCardTeam>
      <ContentCardTeam>

        <img src={src} alt="" />
        {/* <ImageComponent imageId={imageId} /> */}
        <h3>{name}</h3>
        <SocialMedias>
          {/* <SocialMedia img="/icone-wtpp.png" alt="icone whatsapp" href="#" />
          <SocialMedia img="/icone-insta.png" alt="icone whatsapp" href="#" />
          <SocialMedia img="/icone-facebook.png" alt="icone whatsapp" href="#" /> */}
        </SocialMedias>
      </ContentCardTeam>
      <ContentButton>
        <Button textButton='Agendar um horário' />
      </ContentButton>
    </ContainerCardTeam>
  )
}