import styled, { css } from 'styled-components'

export const ContentSideBar = styled.nav`
display: none;
z-index: 999;
${({sideBar}) => sideBar && css`
  background-color: var(--second-color);
  position: absolute;
  height: 350px;
  top: 85px;
  left: 0;
  width: 100%;
  animation: showSideBar .3s;
  display: none ;
  
  @media (max-width: 850px) {
    display: flex ;
  height: 350px;
  }
    
  @keyframes showSideBar {
    from {
      opacity: 0;
      height: 250px;
    }
    to{
      opacity: 1;
      height: 350px;
    }
  } 
  
  ul {
    @media (max-width: 850px) {
    display: flex;

    width: 100%;
    padding: 3rem;
    
  }
  a {
    border-bottom: 1px solid rgba(94, 94, 94, 0.5);
    width: 100%;
    padding-bottom: .5rem;
  }
`}
`