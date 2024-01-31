import styled from "styled-components"

export const ContainerTestimonial = styled.section`
  max-width:1400px;
  margin: 0 auto;
  display: flex;
  align-items: start;
  gap: 1rem;
  padding: 4rem 1rem;
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
`

export const ContentCardTestimonial = styled.div`
  display: flex;
  align-items: center;
  width: 65%;

`
export const CardTestimonialStyled = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  background-color: var(--primary-color);
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