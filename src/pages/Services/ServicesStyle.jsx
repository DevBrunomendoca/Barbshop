import styled from 'styled-components'

export const ContainerServices = styled.section`
  min-height: 100vh;
  width: 100%;
  
`

export const ContentBannerServices = styled.div`
background: url('banner-services2.jpg') no-repeat center;
background-size: cover !important;
width: 100% ;
min-height: 50vh;

`

export const ContentServices = styled.div`

max-width: 1200px;
margin: 0 auto;
padding: 4rem 1rem;

h1 {
  text-align: center;

}

`

export const ContentTable = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 2rem;

  padding: 3.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NavigationTable = styled.nav`
  width: 100%;
  background-color: var(--primary-color);
  padding: 2rem 2.5rem;
  ul>li:first-child {
    border-bottom: solid 3px var(--third-color);
  }
  
  ul{
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  overflow-x: scroll;
  padding: .7rem .5rem .3rem;
  width: 100%;
  @media (max-width:600px) {
    justify-content: start;
    gap: 1rem;
  }
}
ul::-webkit-scrollbar { 
  display: none;
}
  li {
    //list-style-type: none;
    padding-bottom: .5rem;
    
}
  a {
    color: var(--third-color);
    text-decoration:none;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    font-size: 1.3rem;
    padding: 0 .6rem .3rem;
  }
  
`
export const ServicesOptions = styled.div`

  width: 100%;
  //min-height: 60vh;
`



export const ContentScheduling = styled.div`
max-width: 1400px;
margin: 0 auto;

`

export const ContainerScheduling = styled.div`
  height: 1000px;
  width: 100%;
  background-color: var(--primary-color);
  display:flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem 2rem;

  h3{
    font-size: 2.2rem;
  }
  p{
    width: 100%;
    border-bottom: 1px solid rgba(235, 235, 235, 0.5);
    padding-bottom: 1rem;
  }
`