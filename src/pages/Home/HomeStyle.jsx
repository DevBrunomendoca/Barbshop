import styled from "styled-components";

export const ContainerHome = styled.section`

  min-height: 90vh;
  background: linear-gradient(90deg, rgba(29,29,29,0.9528186274509804) 0%, rgba(29,29,29,0.5438550420168067) 25%, rgba(29,29,29,0.5046393557422969) 75%, rgba(29,29,29,0.9612219887955182) 100%), url('/banner-principal.jpg') no-repeat center;

  //background: linear-gradient(132deg, rgba(90,106,140, .8) 7%, rgba(90,106,140, .8) 99%),  url("banner-principal.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 10rem 1rem 4rem;
`

export const ContentHome = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: -200px;
  
`
export const ContentHomeText = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
align-items: start;
gap: 1rem;
width: 100%;
button {
  background-color: var(--third-color);
  color: var(--primary-color);
  border: 2px solid var(--third-color);
  &:hover {
    background-color: transparent;
    color: var(--third-color);
  }
}
@media (max-width:1050px) {
    align-items: center;
    p, h1 {
  text-align: center;
  }
}
`
export const ContentHomeImg = styled.div`
display: flex;
align-items: center;
position: relative;
width: 100%;
img {
  border-radius: 10px;
  //width:100%;
}
img:first-child {
  position: relative;
  top: 80px;
  left: 40px;
}
@media (max-width: 1250px) {
  img {
    width: 50%;
  }
}
@media (max-width: 1050px) {
  display: none;
}
`

