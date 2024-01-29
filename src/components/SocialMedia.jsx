import { ContentSocialMedia } from "./SocialMediaStyle"

export default function SocialMedia({href, img, alt}) {
  return(
    <ContentSocialMedia>
      <a target="_blank" href={href}><img src={img} alt={alt} /></a>
    </ContentSocialMedia>
  )
}