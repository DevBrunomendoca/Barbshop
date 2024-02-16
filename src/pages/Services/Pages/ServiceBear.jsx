import { useState } from 'react'
import Button from '../../../components/Button'
import Caption from '../../../components/Caption'
import Paragraph from '../../../components/Paragraph'
import { ContainerAllServices } from '../ServicesComboStyle'
import { useContext } from 'react'
import UserContext from '../../contexts/UseContext'

const ServiceBear = () => {

  const { setTitleServices, setDescriptionService, setPriceService } = useContext(UserContext);

  const data = [
    {id: '12', title:'BARBA EXECUTIVA', description: 'A barba executiva é a marca do homem moderno e confiante..', price:'R$ 30' },
    
    {id: '13', title:'BARBATERAPIA', description: 'O momento de cuidar da sua barba e relaxar como nunca antes.', price:'R$ 50' }
  ]

  const getTitle = (id) => {
    const userId = data.filter(item => item.id === id) 
    setTitleServices(userId[0].title)
    setDescriptionService(userId[0].description)
    setPriceService(userId[0].price)
  }
  return(
    <ContainerAllServices>
      {data.map((item) =>(
        <ul key={item.id}>
        <li>
          <div>
            <Caption textCaption={item.title}/>
            <Paragraph textParagraph={item.description}/>
          </div>
          <div>
            <span>{item.price}</span>
          </div>
          <div>
            <Button onClick={() => getTitle(item.id)} id={data.id} textButton='Agendar'/>
          </div>
        </li>
      </ul>
      ))} 
    </ContainerAllServices>
  )
}

export default ServiceBear