import styled from "styled-components"

export const ContainerPricing = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 1rem ;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 1250px) {
    flex-direction: column ;
    text-align: center;
  }
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  align-items: start;
  max-width: 500px;
  @media (max-width: 1250px) {
    max-width: none;
    align-items: center;
  }
`

export const ContentTable = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  @media (max-width:750px) {
    flex-direction: column;
  }
`
export const CardTable = styled.table`

background-color: var(--primary-color);
width: 100%;
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
height: 100%;
box-shadow: rgba(134, 134, 134, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

tr:first-child{
  background-color: var(--third-color);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
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
th {
  color: var(--primary-color);
}
`