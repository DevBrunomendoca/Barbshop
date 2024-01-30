import styled from "styled-components"

export const ContainerTeam = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
` 
export const ContainerCardTeam = styled.div`
  margin-top: 3rem;
  /* display: flex;
  justify-content: space-between; */
  gap: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  img {
    width: 100%;
  }

`