import styled from "styled-components"

export const ContainerPricing = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 0 5rem ;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  align-items: start;
  max-width: 500px;
`

export const ContentTable = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
`
export const CardTable = styled.table`

background-color: var(--primary-color);
width: 100%;
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
height: 100%;
tr {
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
th, td {
  color: var(--third-color);
  font-family: "Poppins";
  font-size: 1.1rem;
  text-align: center;
}
`