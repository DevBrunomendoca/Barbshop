import Caption from "../Caption"
import ImageComponent from "../ImageComponent"
import SecondCaption from "../SecondCaption"
import { ContainerGallery, CardImgGallery, ContainerCardGallery } from "./SectionGalleryStyle" 

export default function SectionGallery() {
  return(
    <ContainerGallery>
      <Caption textCaption="Galeria" />
      <SecondCaption textSecondCaption="Nossa Galeria Últimos Trabalhos"/>
      <ContainerCardGallery>
      <CardImgGallery>
        <ImageComponent imageId="9"/>
      </CardImgGallery>
      <CardImgGallery>
        <ImageComponent imageId="10"/>
      </CardImgGallery>
      <CardImgGallery>
        <ImageComponent imageId="11"/>
      </CardImgGallery>
      <CardImgGallery>
        <ImageComponent imageId="12"/>
      </CardImgGallery>
      <CardImgGallery>
        <ImageComponent imageId="13"/>
      </CardImgGallery>
      <CardImgGallery>
        <ImageComponent imageId="14"/>
      </CardImgGallery>
      </ContainerCardGallery>
    </ContainerGallery>
  )
}