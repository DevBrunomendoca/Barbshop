import Button from '../../../components/Button'
import Caption from '../../../components/Caption'
import Paragraph from '../../../components/Paragraph'
import { ContainerAllServices } from '../ServicesComboStyle'

const ServicesCombo = () => {

  const data = [
    {id: '1', title:'CORTE CABELO + BARBA', description: 'O combo perfeito para o homem moderno: corte de cabelo e barba.', price:'R$ 90' },
    
    {id: '2', title:'CORTE + SELAGEM', description: 'Transforme seu visual com nosso combo exclusivo: corte de cabelo e selagem', price:'R$ 130' },
    
    {id: '3', title:'CORTE + DEFINITIVA', description: 'O combo ideal para quem busca um visual duradouro: corte de cabelo e definitiva', price:'R$ 150' },
    
    {id: '4', title:'CORTE + BARBA + SELAGEM', description: 'Desfrute de um serviço completo com corte de cabelo, barba e selagem progressiva.', price:'R$ 170'},
    
    {id: '5', title:'CORTE + BARBA + DEFINITIVA', description: 'O combo completo para o homem que busca um visual impecável.', price:'R$ 90' }
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

export default ServicesCombo