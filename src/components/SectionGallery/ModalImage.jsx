import IconSideBar from '../Header/IconSideBar'
import { ContentModalImg, IconCloseModal, PrevImage, NextImage } from './ModalImageStyle'

const ModalImage = ({clickImage, onClick, onClickPrev, onClickNext}) => {


  return(
    <>
      <ContentModalImg >
        <img src={clickImage} alt="" />
        <IconCloseModal onClick={onClick}>
          <div></div>
          <div></div>
        </IconCloseModal>
        <PrevImage onClick={onClickPrev}>
          <div></div>
          <div></div>
        </PrevImage>
        <NextImage onClick={onClickNext}>
          <div></div>
          <div></div>
        </NextImage>
        


      </ContentModalImg>
    </>
  )
}

export default ModalImage