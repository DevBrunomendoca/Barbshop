import Caption from "../Caption"
import ImageComponent from "../ImageComponent"
import SecondCaption from "../SecondCaption"
import { ContainerGallery, CardImgGallery, ContainerCardGallery } from "./SectionGalleryStyle"

export default function SectionGallery() {
  return (
    <ContainerGallery>
      <Caption textCaption="Galeria" />
      <SecondCaption textSecondCaption="Nossa Galeria de fotos" />
      <ContainerCardGallery>
        <CardImgGallery>
          <img src="/imagem-galeria23.jpg" alt="" />
          {/* <ImageComponent imageId="9"/> */}
        </CardImgGallery>
        <CardImgGallery>
          <img src="/imagem-galeria24.jpg" alt="" />
          {/* <ImageComponent imageId="10"/> */}
        </CardImgGallery>
        <CardImgGallery>
          <img src="/imagem-galeria22.jpg" alt="" />
          {/* <ImageComponent imageId="11"/> */}
        </CardImgGallery>
        <CardImgGallery>
          <img src="/imagem-galeria19.jpg" alt="" />
          {/* <ImageComponent imageId="12"/> */}
        </CardImgGallery>
        <CardImgGallery>
          <img src="/imagem-galeria26.jpg" alt="" />
          {/* <ImageComponent imageId="13"/> */}
        </CardImgGallery>
        <CardImgGallery>
          <img src="/imagem-galeria20.jpg" alt="" />
          {/* <ImageComponent imageId="14"/> */}
        </CardImgGallery>
        <CardImgGallery>
          <img src="/imagem-galeria17.jpg" alt="" />
          {/* <ImageComponent imageId="14"/> */}
        </CardImgGallery>
        <CardImgGallery>
          <img src="/imagem-galeria14.jpg" alt="" />
          {/* <ImageComponent imageId="14"/> */}
        </CardImgGallery>
      </ContainerCardGallery>
    </ContainerGallery>
  )
}