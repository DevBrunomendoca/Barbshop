import styled from 'styled-components'

export const ContainerAllServices = styled.section`
  width: 100%;
  border: 2px solid var(--primary-color);
  ul {
    margin: 0 2.5rem;
  }
  ul:not(:first-child){
    border-top: 1px solid rgba(94, 94, 94, 0.5);
    
  }
  li {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    
    gap: 1.5rem .5rem;
    padding: 1.5rem 0rem;
  }
  
  li>div>p {
    margin-top: .5rem;
    max-width: 600px;
    
  }
span {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: var(--primary-color);
  font-size: 1.5rem;
  line-height: 130%;
}
`