import Button from "../../../components/Button"
import Caption from "../../../components/Caption"
import Paragraph from "../../../components/Paragraph"
import { ContainerAllServices } from "../ServicesComboStyle"

const ServiceFinishes = () => {
  const data = [
    {id: '14', title:'SOBRANCELHA NA NAVALHA', description: 'Deixe suas sombrancelhas alinhadas.', price:'R$ 20' },
    
    {id: '15', title:'PEZINHO', description: 'Para dar aquela retocada no seu pezinho!', price:'R$ 15' },
    
    {id: '16', title:'DEPILAÇÃO NARIZ COM CERA', description: 'Depilação especializada e com altissima qualidade!', price:'R$ 20' }
  ]

  return (
    <ContainerAllServices>
      {data.map((item) => (
        <ul key={item.id}>
          <li>
            <div>
              <Caption textCaption={item.title} />
              <Paragraph textParagraph={item.description} />
            </div>
            <div>
              <span>{item.price}</span>
            </div>
            <div>
              <Button textButton='Agendar' />
            </div>
          </li>
        </ul>
      ))}
    </ContainerAllServices>
  )
}

export default ServiceFinishes