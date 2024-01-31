import styled from "styled-components"

export const ContainerHeader = styled.header`
  background-color: var(--primary-color);
  padding: 2rem 1rem;
  
  nav {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
  }
  h3 {
    color: var(--third-color);
    text-decoration:none;
    font-family: 'Ubuntu', sans-serif;
    font-size: 2rem;
  }
  ul{
    display: flex;
    gap: .8rem;
  }
  
  a{
    color: var(--third-color);
    text-decoration:none;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.2rem;
    padding: 0 .6rem;
  }
`