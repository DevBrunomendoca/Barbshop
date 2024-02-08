import styled from 'styled-components'

export const ContainerContactsPage = styled.section`


`
export const ContentBannerContacts = styled.div`
  background: url('banner-contact2.jpg') no-repeat center;
  background-size: cover;
  width: 100%;
  min-height: 50vh;
`

export const ContentContact = styled.div`
max-width: 1400px;
margin: 0 auto;
padding: 4rem 1rem;
display: flex;
@media (max-width:1050px) {
  flex-direction: column;
  gap: 2rem;
  max-width: 700px;
}

`

export const ContentText = styled.div`
  width:  100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
  
export const ContainerForm = styled.div`
  
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: var(--third-color);


  h3{
    color: var(--second-color);
    font-size: 1.5rem;
  }

  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input, textarea {
    padding: 1.5rem .5rem;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1rem;
    color: var(--primary-color);
    border-radius: 0;
    border: 1px solid rgba(94, 94, 94, 0.5);
  }
  input::placeholder, textarea::placeholder {
    color: rgba(94, 94, 94, 0.5);
  }
  textarea{
    resize: none;
  }
  button {
    border: 2px solid transparent;
    &:hover {
      border: 2px solid var(--primary-color);
    }
  }
`

export const ContentLocation = styled.div`

iframe {
  width: 100%;
  height: 600px;
  border: 0;
}

`


