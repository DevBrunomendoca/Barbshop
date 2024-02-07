import styled from "styled-components";

export const ContainerHome = styled.section`

  min-height: 90vh;
  background: linear-gradient(90deg, rgba(29,29,29,0.9528186274509804) 0%, rgba(29,29,29,0.5438550420168067) 25%, rgba(29,29,29,0.5046393557422969) 75%, rgba(29,29,29,0.9612219887955182) 100%), url('/banner-principal2.jpg') no-repeat center;
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
gap: 1.5rem;
width: 70%;
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
  width: 100%;
  p, h1 {
  text-align: center;
  }
}
`

