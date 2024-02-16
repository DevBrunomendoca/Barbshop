import Button from "../../../components/Button"
import Caption from "../../../components/Caption"
import Paragraph from "../../../components/Paragraph"
import { ContainerAllServices } from "../ServicesComboStyle"

const ServiceHair = () => {
  const data = [
    {id: '6', title:'CORTE CABELO', description: 'A arte de esculpir cabelos com precisão, criando texturas e camadas exelentes.', price:'R$ 40' },
    
    {id: '7', title:'SELAGEM', description: 'Transforme seu visual com selagem em seus cabelos!', price:'R$ 70' },

    {id: '8', title:'DEFINITIVA', description: 'Ideal para quem busca um visual duradouro: definitiva!', price:'R$ 90' },

    {id: '9', title:'CORTE + HIDRATAÇÃO', description: 'Transforme sua aparência com o combo imbatível de corte e hidratação.', price:'R$ 60' },

    {id: '10', title:'CORTE + PLATINADO', description: 'Transforme seu visual com nossa técnica exclusiva de coloração platinação', price:'R$ 120' },

    {id: '11', title:'CORTE + LUZES', description: 'Desfrute de um visual mais moderno e descolado com um toque de luzes.', price:'R$ 120' }  
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

export default ServiceHair