import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  //height: 400px; 
  background-color: var(--primary-color);
  
  position: relative;
  
`

export const ContentFooterContact = styled.div`
max-width: 1400px;
margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 3rem;
  padding: 4rem 0;
  h2 {
    font-size: 2.5rem;
  color: var(--third-color);
}
`
export const Navalha = styled.img`


    position: absolute;
    bottom: 34px;
    left: 10%;
    width: 445px; 
  
`

export const ContenLocation = styled.div`
margin-top: -10px;
display: flex;
flex-direction: column;
align-items: start;
gap: .3rem;
z-index: 10;
div{ 
  display: flex;
  align-items: end; 
  cursor: pointer;
  margin-bottom: 1rem;
}
div>img {
  width: 50px;
}
p {
  font-weight: 500;
}
h3 {
    color: var(--third-color);
    text-decoration:none;
    font-family: 'Ubuntu', sans-serif;
    font-size: 2rem;
    margin-top: 1rem;
    cursor: pointer;
  }
`

export const ContentPages = styled.ul`
    display: flex;
    flex-direction: column;
    gap: .8rem;
  a{
    color: var(--third-color);
    text-decoration:none;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.3rem;
    padding: 0 .6rem;
  }


`

export const ContentEmail = styled.div`
display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Form = styled.div`
display: flex;
gap: .5rem;
  input{
    padding: 1rem ;
    border: none;
    width: 100%;
  }
  button {
    background-color: var(--third-color);
    color: var(--primary-color);
    border: 2px solid transparent;
    &:hover {
      background-color: transparent;
      color: var(--third-color);
      border: 2px solid var(--third-color);
    }
  }

`

export const ContentCopyright = styled.div`

height: 100px;
  background-color: var(--second-color);
  display: flex;
  align-items: center;
  justify-content: center;
`