import styled from "styled-components"

export const ContainerGallery = styled.section`
  padding: 4rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  h2, h3{
  text-align: center;
  margin-bottom: .6rem;
}
@media (max-width:600px) {
  padding: 2.5rem .5;
}
`
export const ContainerCardGallery = styled.div`
margin-top: 6rem;
  display: grid;
  position: relative;
  justify-content: center;
place-items: center;
  align-items: start; 
  gap: 1rem;
  width: 100%;
div:nth-child(1) {
    grid-column: 1 / 2;
  grid-row: 1 / 3;
}
div:nth-child(2) {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
div:nth-child(3) {
  grid-column: 2/ 3;
  grid-row: 2 / 3;
  margin-top: -59px;
}
div:nth-child(4) {
  grid-column: 3 / 4;
  grid-row: 1 / 3
}
div:nth-child(5) {
  grid-column: 2 / 3;
  grid-row: 3 / 4; 
  margin-top: -59px;
}
div:nth-child(6) {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}
div:nth-child(7) {
  grid-column: 3 / 4;
  grid-row: 3 / 4; 
}
div:nth-child(8) {
  grid-column: 3/ 4;
  grid-row: 4 / 5; 
  margin-top: -70%;
}


@media (max-width:1120px) {
  gap: .5rem ;
div:nth-child(3) {
  margin: 0;
  position: absolute;
  bottom: 30px;
}
div:nth-child(4) {
  grid-column: 1 / 2;
  grid-row: 3 / 4
}
div:nth-child(5) {
  position: absolute;
  bottom: 29px;
}
div:nth-child(6) {
  grid-row: 4 / 6;
}
div:nth-child(7) {
  grid-column: 2 / 3;
  grid-row: 4 / 5; 
  position: absolute;
  bottom: 16px;
}
div:nth-child(8) {
  grid-column: 2 / 3;
  grid-row: 5 / 6; 
  position: absolute;
  bottom: 5px;

}
}

@media (max-width:600px) {
  margin-top: 3rem;
}
`
export const CardImgGallery = styled.div`
  padding: 0;
  overflow: hidden;
  position: relative;
  cursor: pointer;
&:hover img {
  scale: 1.12;
  filter: brightness(40%);
}
img {
  display: block;
  transition: ease-in-out .7s;
  width: 100%;
}
`



