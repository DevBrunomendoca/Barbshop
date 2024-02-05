import { useState } from "react"
import { CardContentImgGallery } from "./SectionGalleryStyle"
import ModalImage from "./ModalImage"

const CardImgGallery = ({ setClickImage, setIndexImage, indexImage, id }) => {

  

  const HandleClick = (item, index) => {
    setIndexImage(index)
    setClickImage(item.urlImage)
  }

  const data = [
    { id: '1', urlImage: '/imagem-galeria23.jpg', altImage: 'imagem da galeria 1' },
    { id: '2', urlImage: '/imagem-galeria24.jpg', altImage: 'imagem da galeria 2' },
    { id: '3', urlImage: '/imagem-galeria22.jpg', altImage: 'imagem da galeria 3' },
    { id: '4', urlImage: '/imagem-galeria19.jpg', altImage: 'imagem da galeria 4' },
    { id: '5', urlImage: '/imagem-galeria26.jpg', altImage: 'imagem da galeria 5' },
    { id: '6', urlImage: '/imagem-galeria20.jpg', altImage: 'imagem da galeria 6' },
    { id: '7', urlImage: '/imagem-galeria17.jpg', altImage: 'imagem da galeria 7' },
    { id: '8', urlImage: '/imagem-galeria14.jpg', altImage: 'imagem da galeria 8' }
  ]

  return (
    <>
      {data.map((item, index) => (
        <CardContentImgGallery  key={item.id}>
          <img
            src={item.urlImage}
            alt={item.altImage}
            onClick={() => HandleClick(item, index)}
          />
        </CardContentImgGallery>

      ))}

    </>
  )
}


export default CardImgGallery 