import styled, { css } from "styled-components"

export const ContainerHeader = styled.header`
  background-color:transparent;
  padding: 2rem 1rem;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  transition: all .2s;
  z-index: 1000;
  
  ${({onScrollY}) => onScrollY && css`
  background-color: rgba(29,29,29,0.97);
  `}

  ${({sideBar}) => sideBar && css`
  background-color: var(--second-color);
  padding: 2rem 1rem;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  
  `}
  h3 {
    color: var(--third-color);
    text-decoration:none;
    font-family: 'Ubuntu', sans-serif;
    font-size: 2rem;
  }

`
export const ContentListItemHeader = styled.ul`
  display: flex;
  gap: .8rem;
  @media (max-width: 850px) {
  display: none;
}  
a{
  color: var(--third-color);
  text-decoration:none;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.2rem;
  padding: 0 .6rem;
}
`
export const Navigation = styled.nav`

display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
`