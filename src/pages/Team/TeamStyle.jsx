import styled from "styled-components";

export const ContainerTeam = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BannerTeam = styled.div`
  background: url('banner-team.jpg') no-repeat center;
  background-size: cover;
  min-height: 50vh;
  width: 100%;

`

export const ContentTeam = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;

  padding: 4rem 1rem;
  display: flex;
  gap: 1rem;
  
  align-items: start;
  justify-content: center;
p {
  max-width: 900px;
}
`
export const ContentCardTeam = styled.div`

display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1rem;
padding-top: 3rem;

@media (max-width:1250px) {
  grid-template-columns: 1fr;
  gap: 2rem;
}
`

