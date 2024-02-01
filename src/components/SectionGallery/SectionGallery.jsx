import Caption from "../Caption"
import ImageComponent from "../ImageComponent"
import SecondCaption from "../SecondCaption"
import { ContainerGallery, CardImgGallery, ContainerCardGallery } from "./SectionGalleryStyle"

export default function SectionGallery() {
  return (
    <ContainerGallery>
      <Caption textCaption="Galeria" />
      <SecondCaption textSecondCaption="Nossa Galeria Últimos Trabalhos" />
      <ContainerCardGallery>
        <CardImgGallery>
          <img src="/imagem-galeria1.jpg" alt="" />
          {/* <ImageComponent imageId="9"/> */}
        </CardImgGallery>
        <CardImgGallery>
          <img src="/imagem-galeria2.jpg" alt="" />
          {/* <ImageComponent imageId="10"/> */}
        </CardImgGallery>
        <CardImgGallery>
          <img src="/imagem-galeria3.jpg" alt="" />
          {/* <ImageComponent imageId="11"/> */}
        </CardImgGallery>
        <CardImgGallery>
          <img src="/imagem-galeria4.jpg" alt="" />
          {/* <ImageComponent imageId="12"/> */}
        </CardImgGallery>
        <CardImgGallery>
          <img src="/imagem-galeria5.jpg" alt="" />
          {/* <ImageComponent imageId="13"/> */}
        </CardImgGallery>
        <CardImgGallery>
          <img src="/imagem-galeria6.jpg" alt="" />
          {/* <ImageComponent imageId="14"/> */}
        </CardImgGallery>
      </ContainerCardGallery>
    </ContainerGallery>
  )
}