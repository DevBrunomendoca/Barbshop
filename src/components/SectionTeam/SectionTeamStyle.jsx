import styled from "styled-components"

export const ContainerTeam = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  h2{ 
    text-align: center;
  }
` 
export const ContainerCardTeam = styled.div`
  margin-top: 3rem;
  gap: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  img {
    width: 100%;
  }
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`