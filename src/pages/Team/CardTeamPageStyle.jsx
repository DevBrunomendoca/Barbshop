import styled from "styled-components";

export const ContainerTeamPage = styled.div`
display: flex;
@media (max-width:550px) {
  flex-direction: column;
}
`
export const ContentImg = styled.div`
width: 90%;
img { 
  width: 100%;
  height: 100%;
  
}
@media (max-width:550px) {
  width: 100%;
  
  
}
`
export const ContentText = styled.div`
width: 100%;
background-color: var(--third-color);

padding: 1rem 1.5rem;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-evenly;
gap: .5rem;
p, h3 { 
  text-align: start;
  color: var(--second-color);
}
button {
  border: 2px solid transparent;
  &:hover {
    border: 2px solid var(--primary-color);
  }
}

`