import styled from 'styled-components'

export const ContentModalImg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1100;
  display: flex;
  align-items: center;
  

img {
  display: block;
  max-width: 80%;
  margin: 90px auto;
  transition: all .5s;
}
`
export const IconCloseModal = styled.div`
  position: absolute;
  top: 30px ;
  right: -10px;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background-color: rgba(36, 36, 36, 0.98);
  border-radius: 2px;
  margin-right: 20px;
  cursor: pointer;
  div {
    width: 100% ;
    height: 2px;
    background-color: var(--third-color);
  margin: 5px;
  }
  
  div:first-child {
    transform: rotate(-45deg) translate(8px, 10px);
  }
  div:last-child {
    transform: rotate(45deg) translate(-8px, 10px);
  }
`

export const NextImage = styled.div`
position: absolute;
  top: 45%;
  right: -20px;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  cursor: pointer;
div {
    width: 100% ;
    height: 3px;
    background-color: var(--third-color);
  margin: 5px;
  border-radius: 10px;
  }
  
  div:first-child {
    transform: rotate(30deg) translate(9px, -8px);
}
  div:last-child {
    transform: rotate(-30deg) translate(-25px, -3px);
}
`
export const PrevImage = styled.div`
position: absolute;
  top: 45%;
  left: -20px;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  cursor: pointer;
div {
    width: 100% ;
    height: 3px;
    background-color: var(--third-color);
  margin: 5px;
  border-radius: 10px;
  }
  
  div:first-child {
  transform: rotate(30deg) translate(25px, -3px);
}
  div:last-child {
  transform: rotate(-30deg) translate(-9px, -8px);
}
`
