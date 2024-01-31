import styled from "styled-components"

export const ContainerGallery = styled.section`
  padding: 4rem 1.7rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 99%;
  h2, h3{
    text-align: center;
    margin-bottom: .6rem;
  }
`
export const ContainerCardGallery = styled.div`
margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  justify-content: center;
  place-items: center;
  gap: 4.5rem;
  div{
    padding: 1rem;
    cursor: pointer;
  }
  img {
    transform: scale(1);
    transition: ease-in-out .5s;
    &:hover {
      transform: scale(1.05);
    }
    
  }
  /* div:nth-child(1) {
    transform: rotateZ(-4deg);
  }
  div:nth-child(2) {
    transform: rotateZ(-4deg);  }
  div:nth-child(3) {
    transform: rotateZ(-4deg);
  }
  div:nth-child(4) {
    transform: rotateZ(4deg);
  }
  div:nth-child(5) {
    transform: rotateZ(4deg);
  }
  div:nth-child(6) {
    transform: rotateZ(4deg);
  } */
  div:nth-child(1) {
    transform: rotateZ(-7deg);
  }
  div:nth-child(2) {
    margin-top: -30px;
  }
  div:nth-child(3) {
    transform: rotateZ(7deg);
  }
  div:nth-child(4) {
    transform: rotateZ(7deg);
  }
  div:nth-child(5) {
    margin-top: 30px;
  }
  div:nth-child(6) {
    transform: rotateZ(-7deg);
  }
`

export const CardImgGallery = styled.div`
  //width: 400px;
  //height: 400px;
  width: 100%;
  background-color: var(--primary-color);

`