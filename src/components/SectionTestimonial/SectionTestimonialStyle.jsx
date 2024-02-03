import styled from "styled-components"

export const ContainerTestimonial = styled.section`
  max-width:1400px;
  margin: 0 auto;
  display: flex;
  align-items: start;
  gap: 1rem;
  padding: 4rem 1rem;
  @media (max-width:900px) {
    flex-direction: column;
    align-items: center;
    padding: 4rem 1rem;
  }
  @media (max-width:600px) {
    padding: 2.5rem 1rem ;
  } 
`

export const ContentTextTestimonial = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 1rem;
p {
  max-width: 400px;
  margin-top: 1rem;
}
@media (max-width:900px) {
  p {
  max-width: none;
}
}
`

export const ContentCardTestimonial = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
@media (max-width: 900px) {
  width: 100%;
}
`
export const CardTestimonialStyled = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  padding: 2rem;
  p, h3{
    text-align: center;
  }
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  img{
    border-radius: 50%;
  }
}
`