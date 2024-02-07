import Button from '../../../components/Button'
import Caption from '../../../components/Caption'
import Paragraph from '../../../components/Paragraph'
import { ContainerAllServices } from '../ServicesComboStyle'

const ServiceBear = () => {

  const data = [
    {id: '1', title:'BARBA EXECUTIVA', description: 'A barba executiva é a marca do homem moderno e confiante..', price:'R$ 30' },
    
    {id: '2', title:'BARBATERAPIA', description: 'O momento de cuidar da sua barba e relaxar como nunca antes.', price:'R$ 50' }
  ]
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
            <Button textButton='Agendar'/>
          </div>
        </li>
      </ul>
      ))}
    </ContainerAllServices>
  )
}

export default ServiceBear