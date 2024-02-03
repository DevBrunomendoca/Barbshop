import styled from "styled-components"

export const ButtonMain = styled.button`

  padding: .8rem 1.5rem;
  background-color: var(--primary-color);
  border: none;
  color: var(--third-color);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: var(--third-color);
  font-size: 1.1rem;
  cursor: pointer;
  transition: all.5s;
  &:hover {
    background-color: var(--third-color);
    color: var(--primary-color);
  }
  `
