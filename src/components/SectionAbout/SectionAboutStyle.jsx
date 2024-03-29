import styled from "styled-components"

export const ContainerAbout = styled.section`
  min-height: 90vh;
  max-width: 1650px;
  margin: 0 0 0 auto;
  padding: 4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap : 2rem ;
  @media (max-width: 1050px) {
    flex-direction : column;
    text-align: start;
  }
  @media (max-width:600px) {
    padding: 3.5rem 1rem 1.5rem;
  }
`
export const ContentText = styled.div`

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  max-width: 700px;
  width: 50%;
  p {
    max-width: 600px;
  }
  @media (max-width: 1050px) {
    align-items: start;
    width: 100%;
  }
  p {
    max-width: none;
  } 
`
export const ContentImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;

  img {
    width: 100%;
  }
  @media (max-width: 1050px) {
    align-items: start;
    width: 100%;
    max-width: 600px;
  } 

`

export const ContentCardAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--primary-color);
  border-bottom: 2px solid var(--third-color);
  padding: 1.4rem 1rem ;
  margin: -100px 0 0 -70px;
  
  p:not(:first-child) {
    opacity: .8;
    font-weight: 300;
    font-size: 1rem;
    max-width: 220px;
  }
  @media (max-width: 1050px){
    margin: -100px 0 0 0px;
  }
  @media (max-width: 600px){
    margin: 0px;
    p:not(:first-child) {
    max-width: none;
  }
  }
`