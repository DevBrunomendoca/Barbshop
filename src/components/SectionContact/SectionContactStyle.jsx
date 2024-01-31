import styled from 'styled-components'

export const ContainerContact = styled.section`

padding: 4rem 1rem;
background: linear-gradient(90deg, rgba(29,29,29,0.9528186274509804) 0%, rgba(29,29,29,0.5438550420168067) 25%, rgba(29,29,29,0.5046393557422969) 75%, rgba(29,29,29,0.9612219887955182) 100%), url('/banner-contact.jpg') no-repeat center;
`
export const ContentContact = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 2rem;
h2{
  color: var(--third-color);
}


  `

export const ContentContactOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  max-width: 600px;

`


export const ContentContactTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 600px;


`

export const ContentSchedules = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;
span {
  font-family: 'Ubuntu', sans-serif;
  color: var(--third-color);
  font-size: 1.2rem;
  font-weight: 500;
}
`