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
  /* /overflow-x: scroll; */
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
    list-style-type: none;
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
export const BorderBottom = styled.div`
position: relative;
width: 110px;
//width: 95px;
//width: 165px;
height: 4px;
background-color: var(--third-color);
left: 0;
//left: 115px;
//left: 230px;
//left: 335px;

`


export const ServicesOptions = styled.div`

  width: 100%;
  min-height: 60vh;
`



export const ContentScheduling = styled.div`

`