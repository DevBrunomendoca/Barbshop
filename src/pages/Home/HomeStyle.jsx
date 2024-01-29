import styled from "styled-components";

export const ContainerHome = styled.section`

  height: 100vh;
  background: linear-gradient(132deg, rgba(90,106,140, .8) 7%, rgba(90,106,140, .8) 99%),  url("banner-principal.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  
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
gap: 1rem;
h1 {
    font-size: 3.5rem;
    color: var(--third-color);
    font-family: 'Diphylleia', serif;
    line-height: 100%;
    font-weight: 400;
  }
//background-color: red;
h3 {
  font-family: 'Ubuntu', sans-serif;
  color: var(--third-color);
  font-size: 1.2rem;
  font-weight: 500;
}
p {
  font-family: 'Roboto', sans-serif;
  color: var(--third-color);
  font-size: 1.2rem;
  line-height: 130%;
}
`
export const ContentHomeImg = styled.div`
//background-color: blue;
display: flex;
position: relative;
img {
  width: 380px;
  border-radius: 10px;
}
img:first-child {
  position: relative;
  top: 80px;
  left: 40px;
}

`
