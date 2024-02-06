import styled from 'styled-components'

export const ContainerAboutPage = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;


  `

export const ContentBanner = styled.div`
background: url('banner-about6.jpg') no-repeat center center;
background-size: cover;
width: 100%;
min-height: 50vh;

`
export const ContentAbout = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  //height: 100vh;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  
`
export const ContentAboutText = styled.div`

display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
   p {
    max-width: 900px;
   }
`
export const ContentAboutUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  
  width: 100%;
@media (max-width:1050px ){
  flex-direction: column;
}
`
export const UnitBanner = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`

export const UnitText = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--third-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2.5rem 1.5rem;
  h2 {
    font-size: 2rem;
  }
  h2, p {
    color: var(--second-color);
    text-align: center;
  }
  a {
    text-decoration: none;
    font-family: 'Poppins';
    margin-top: .5rem;
    font-weight: 600;
    font-size: 1.2rem;
    color: var(--primary-color);
  }

`

