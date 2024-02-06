import { useState } from "react"
import Caption from "../Caption"
import ImageComponent from "../ImageComponent"
import SecondCaption from "../SecondCaption"
import CardImgGallery from "./CardImgGallery"
import ModalImage from "./ModalImage"
import { ContainerGallery, ContainerCardGallery } from "./SectionGalleryStyle"

import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SectionGallery({ }) {
  const [clickImage, setClickImage] = useState(null)
  const [indexImage, setIndexImage] = useState(null)

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#content-gallery",
          start: "-650px"
        }
      })
        .fromTo("#content-card-gallery", {
          opacity: 0,
          y: 140
        }, {
          opacity: 1,
          y: 0,
          duration: 1.5
        })
        

    })
    return () => {
      gsap.killTweensOf("#content-gallery")
    }
  }, [])

  const closeModal = () => {
    setClickImage(null)
    setIndexImage(null)
  }
  const handleClickNext = () => {
    const totalLenght = data.length
    if (indexImage + 1 >= totalLenght) {
      setIndexImage(0)
      const newImg = data[0].urlImage
      setClickImage(newImg)
      return
    }
    const newIndex = indexImage + 1
    const newImg = data.filter((item) => {
      return data.indexOf(item) === newIndex
    })
    const newItem = newImg[0].urlImage
    setClickImage(newItem)
    setIndexImage(newIndex)
  }
  const handleClickPrev = () => {
    const totalLenght = data.length
    if (indexImage === 0) {
      setIndexImage(totalLenght - 1)
      const newImg = data[totalLenght - 1].urlImage
      setClickImage(newImg)
      return
    }
    const newIndex = indexImage - 1
    const newImg = data.filter((item) => {
      return data.indexOf(item) === newIndex
    })
    const newItem = newImg[0].urlImage
    setClickImage(newItem)
    setIndexImage(newIndex)
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
      <ContainerGallery id="content-gallery">
        <Caption id='caption-gallery' textCaption="Galeria" />
        <SecondCaption id='second-caption-gallery' textSecondCaption="Nossa Galeria de fotos" />
        <ContainerCardGallery id='content-card-gallery'>
          <CardImgGallery   indexImage={indexImage} setClickImage={setClickImage} setIndexImage={setIndexImage} />
        </ContainerCardGallery>
      </ContainerGallery>
      {clickImage && <ModalImage onClickNext={handleClickNext} onClickPrev={handleClickPrev} onClick={closeModal} clickImage={clickImage} />}
    </>
  )
}