import styled from "styled-components";

export const ContainerHome = styled.section`

  min-height: 90vh;
  background: linear-gradient(132deg, rgba(90,106,140, .8) 7%, rgba(90,106,140, .8) 99%),  url("banner-principal.jpg") center no-repeat;
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
align-items: center;
gap: 1rem;
width: 100%;
`
export const ContentHomeImg = styled.div`
//background-color: blue;
display: flex;
align-items: center;
position: relative;
width: 100%;
img {
  border-radius: 10px;
}
img:first-child {
  position: relative;
  top: 80px;
  left: 40px;
}

`
